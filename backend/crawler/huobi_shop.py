import requests
import threading
import random
import time
import sys
sys.path.append('../')
from db import db


headers = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36'}
pays = {
    "1": "银行卡",
    "2": "支付宝",
    "3": "微信",
    "4": "Pal",
    "5": "西联汇款",
    "6": "SWIFT",
    "7": "Now",
    "8": "tm",
    "9": "QIWI",
    "10": "Interac e-Transfer",
    "11": "IMPS",
    "12": "UPI",
    "13": "NETELLER",
    "17": "转数快",
    "19": "Yandex",
    "20": "ADVCash",
    "21": "现金存款",
    "22": "DuitNow",
    "23": "Me",
    "24": "EER",
    "25": "阿尔法银行",
    "26": "俄罗斯标准银行",
    "27": "俄罗斯外贸银行",
    "28": "俄罗斯商业银行",
    "29": "俄罗斯联邦储蓄银行"
}
proxies = []


def get_proxy():
    global proxies
    rd = random.randint(0, len(proxies) - 1)
    proxy = proxies[rd]
    ps = {'http': 'http://' + proxy, 'https': 'http://' + proxy}
    return ps


class myThread(threading.Thread):
    def __init__(self, trade_type, coin_id, coin_name, currPage):
        threading.Thread.__init__(self)
        self.trade_type = trade_type
        self.coin_id = coin_id
        self.coin_name = coin_name
        self.currPage = currPage

    def run(self):
        fetch_coin(self.trade_type, self.coin_id, self.coin_name, self.currPage)


def fetch_coin(trade_type, coin_id, coin_name, currPage):
    link = 'https://otc-api-hk.eiijo.cn/v1/data/trade-market?coinId=%s&currency=1&tradeType=%s&currPage=%d&payMethod=0&acceptOrder=-1&country=&blockType=general&online=1&range=0&amount=' % (coin_id, trade_type, currPage)
    print(link)
    # rj = requests.get(link, headers=headers, proxies=get_proxy()).json()
    rj = requests.get(link, headers=headers).json()
    data = rj.get('data', [])
    values = []
    rank = (currPage - 1) * 10 + 1
    for d in data:
        userName = d.get('userName', '')
        tradeMonthTimes = d.get('tradeMonthTimes', '')
        orderCompleteRate = d.get('orderCompleteRate', '')
        tradeCount = d.get('tradeCount', '')
        minTradeLimit = d.get('minTradeLimit', '')
        maxTradeLimit = d.get('maxTradeLimit', '')
        payMethod = d.get('payMethod', '')
        pay_name = ''
        for pay_type in payMethod.split(','):
            pay_name += pays[pay_type] + ','
        if pay_name:
            pay_name = pay_name[0:len(pay_name) - 1]

        merchantTags = d.get('merchantTags', [])
        landun = 0
        if merchantTags and merchantTags[0] == 1:
            landun = 1
        price = d.get('price', '')
        values.append((trade_type, coin_name, rank, userName, tradeMonthTimes, orderCompleteRate, tradeCount, minTradeLimit, maxTradeLimit, payMethod, pay_name, landun, price))
        # print(trade_type, coin_name, rank, userName, tradeMonthTimes, orderCompleteRate, tradeCount, minTradeLimit, maxTradeLimit, price)
        rank += 1

    sql = 'insert into otc_origin(trade_type,coin_name,rank_cnt,user_name,trade_month_times,order_complete_rate,trade_count,min_trade_limit,max_trade_limit,pay_type,pay_name,landun,price) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) on duplicate key update user_name=values(user_name),trade_month_times=values(trade_month_times),order_complete_rate=values(order_complete_rate),trade_count=values(trade_count),min_trade_limit=values(min_trade_limit),max_trade_limit=values(max_trade_limit),pay_type=values(pay_type),pay_name=values(pay_name),landun=values(landun),price=values(price)'
    resp = db.insertmany(sql, values)
    if resp:
        print(resp)
        return

    totalPage = rj.get('totalPage', 1)
    if currPage < totalPage:
        fetch_coin(trade_type, coin_id, coin_name, currPage + 1)

    '''
    if currPage == 1 and currPage < totalPage:
        threads = []
        for page_index in range(2, totalPage + 1):
            t = myThread(trade_type, coin_id, coin_name, page_index)
            threads.append(t)
        for t in threads:
            t.start()
        for t in threads:
            t.join()
    '''


def fetch_proxy():
    global proxies
    link = 'http://napi.zhuzhaiip.com:9999/iplist?passageId=1358420123979214850&num=200&protocol=2&province=&city=&minute=1&format=2&split=&splitChar=&dedupe=1&secret=0ejgaW'
    rj = requests.get(link, headers=headers).json()
    proxies = []
    for res in rj.get('data', []):
        proxy = res.get('ip', '') + ':' + res.get('port', '')
        if proxy:
            proxies.append(proxy)


def fetch_coins():
    now = int(time.time())
    sql = 'delete from otc_origin'
    db.execute(sql)

    coins = {'BTC': '1', 'ETH': '3', 'USDT': '2', 'LTC': '8', 'HT': '4', 'HUSD': '6', 'EOS': '5', 'XRP': '7'}
    trade_types = ['sell', 'buy']
    # threads = []
    for trade_type in trade_types:
        for coin_name, coin_id in coins.items():
            fetch_coin(trade_type, coin_id, coin_name, 1)
            '''
            t = myThread(trade_type, coin_id, coin_name, 1)
            threads.append(t)
            '''

    '''
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    '''

    end = int(time.time())
    print('花费耗时:', end - now)


def get_profile():
    sql = "select refresh_time from otc_profile"
    return db.query(sql)


if __name__ == '__main__':
    last_update_time = time.time() - 3600
    while True:
        res = get_profile()
        if not res or not res[0]:
            break

        # 更新代理
        fetch_proxy()

        refresh_time = res[0][0]
        # print(refresh_time)
        now_time = time.time()
        if now_time - last_update_time < refresh_time:
            continue

        print('%s start to refresh data...' % (time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())))
        fetch_coins()
