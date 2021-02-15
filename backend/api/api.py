import sys
import json
import time
sys.path.append('../')
from db import db


def user_set(username, password, nickname, token):
    data = [(username, nickname, password, token)]
    sql = "insert into otc_user values(%s,%s,%s,%s)"
    # print(sql)
    return db.insertmany(sql, data)


def user_get(username, password):
    sql = "select * from otc_user where user_name='%s' and password='%s'" % (username, password)
    # print(sql)
    return db.query(sql)


def user_list():
    sql = "select user_name as username,nick_name as nickname from otc_user"
    # print(sql)
    return db.query(sql)


def user_update(username, password, nickname):
    if not username:
        return 'error'

    if password and nickname:
        sql = "update otc_user set password='%s',nick_name='%s' where user_name='%s'" % (password, nickname, username)
    elif password and not nickname:
        sql = "update otc_user set password='%s' where user_name='%s'" % (password, username)
    elif not password and nickname:
        sql = "update otc_user set nick_name='%s' where user_name='%s'" % (nickname, username)
    else:
        return 'error'
    # print(sql)
    return db.execute(sql)


def user_delete(username):
    sql = "delete from otc_user where user_name='%s'" % username
    # print(sql)
    return db.execute(sql)


def set_profile(refresh_time):
    sql = "update otc_profile set refresh_time=%s" % refresh_time
    # print(sql)
    return db.execute(sql)


def get_last_ts():
    sql = "select max(ts) as ts from otc_ts"
    res = db.query(sql)
    if res:
        return res[0]['ts']
    return ''


def get_last_ts2():
    sql = "select ts from otc_ts order by ts desc limit 2"
    res = db.query(sql)
    if len(res) > 1:
        return res[1]['ts']
    return ''


def get_last_min_ts():
    ts = str(int(time.time() * 1000 - (60 * 1000)))
    sql = "select ts from otc_ts where ts>='%s' order by ts" % ts
    return db.query(sql)


def otc_rank(coin_name, nickname):
    results = {}
    ts = get_last_ts()
    if not ts:
        return {}

    for trade_type in ['sell', 'buy']:
        sql = "select price,trade_count,rank_cnt from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' and user_name='%s'" % (ts, trade_type, coin_name, nickname)
        # print(sql)
        data = db.query(sql)
        ret = []
        for res in data:
            price = res['price']
            trade_count = res['trade_count']
            rank_cnt = res['rank_cnt']
            tuntu = otc_tuntu(coin_name, rank_cnt - 1)
            if tuntu[trade_type] == 0:
                entry_rank_1 = -1
            else:
                entry_rank_1 = tuntu[trade_type + '_origin'] / tuntu[trade_type]
            ret.append({'price': price, 'trade_count': trade_count, 'rank_cnt': rank_cnt, 'entry_rank_1': entry_rank_1})
        results[trade_type] = ret
    return results


def otc_tuntu_sum(coin_name, number, ts):
    res = {}
    for trade_type in ['sell', 'buy']:
        sql = "select sum(trade_count) as trade_count_sum from (select trade_count from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' order by rank_cnt limit %s) a" % (ts, trade_type, coin_name, number)
        # print(sql)
        data = db.query(sql)
        if data and data[0]['trade_count_sum']:
            res[trade_type] = data[0]['trade_count_sum']
        else:
            res[trade_type] = 0

    return res


def otc_tuntu_sub(coin_name, number, ts1, ts2):
    res = {}
    for trade_type in ['sell', 'buy']:
        sql1 = "select user_name,trade_count from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' order by rank_cnt limit %s" % (ts1, trade_type, coin_name, number)
        # print(sql1)
        data1 = db.query(sql1)

        sql2 = "select user_name,trade_count from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' order by rank_cnt limit %d" % (ts2, trade_type, coin_name, int(number) + 5)
        # print(sql2)
        data2 = db.query(sql2)

        exists1 = {}
        sumMap = {}
        for data11 in data1:
            user_name1 = data11['user_name']
            print(user_name1, data11['trade_count'])
            if user_name1 in exists1:
                exists1[user_name1] += 1
                sumMap[user_name1] += float(data11['trade_count'])
            else:
                exists1[user_name1] = 1
                sumMap[user_name1] = float(data11['trade_count'])
        print('\n')

        exists2, exists3, records = {}, {}, {}
        xsum1, xsum2 = 0, 0
        for data22 in data2:
            user_name2 = data22['user_name']
            print(user_name2, data22['trade_count'])
            if user_name2 in exists2:
                exists2[user_name2] += 1
            else:
                exists2[user_name2] = 1

            if user_name2 in exists1 and user_name2 not in exists3:
                xsum1 += sumMap[user_name2]
                exists3[user_name2] = True
            if user_name2 in exists1 and exists1[user_name2] == 1 and exists2[user_name2] == 2:
                records[user_name2] = False
        print('\n')

        for data22 in data2:
            user_name2 = data22['user_name']
            trade_count2 = float(data22['trade_count'])
            if user_name2 in exists1:
                if user_name2 in records and records[user_name2]:
                    continue

                xsum2 += trade_count2
                if user_name2 in records and not records[user_name2]:
                    records[user_name2] = True

        print(xsum1, xsum2, xsum1 - xsum2)
        print('\n')
        res[trade_type] = xsum1 - xsum2
    return res


def otc_tuntu(coin_name, number):
    tss = get_last_min_ts()
    if not tss or len(tss) == 1:
        return {'sell': 0, 'buy': 0, 'sell_origin': 0, 'buy_origin': 0}

    sell, buy = 0, 0
    for i in range(0, len(tss) - 1):
        res = otc_tuntu_sub(coin_name, number, tss[i]['ts'], tss[i+1]['ts'])
        sell += res['sell']
        buy += res['buy']

    # 统计总和
    ts1 = get_last_ts()
    if not ts1:
        return {}

    res1 = otc_tuntu_sum(coin_name, number, ts1)
    return {'sell': sell, 'buy': buy, 'sell_origin': res1['sell'], 'buy_origin': res1['buy']}


def otc_sumary(coin_name):
    results = {}
    ts = get_last_ts()
    if not ts:
        return {}

    for trade_type in ['sell', 'buy']:
        sql = "select price,count(*) as price_cnt,avg(trade_count) as trade_count_avg,sum(trade_count) as trade_count_sum from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' group by price" % (ts, trade_type, coin_name)
        # print(sql)
        data = db.query(sql)
        ret = []
        for res in data:
            price = res['price']
            price_cnt = res['price_cnt']
            trade_count_avg = res['trade_count_avg']
            trade_count_sum = res['trade_count_sum']
            ret.append({'price': price, 'price_cnt': price_cnt, 'trade_count_avg': trade_count_avg, 'trade_count_sum': trade_count_sum})
        results[trade_type] = ret
    return results


def get_origin(coin_name, landun):
    results = {}
    ts = get_last_ts()
    if not ts:
        return {}

    for trade_type in ['sell', 'buy']:
        sql = "select * from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' and landun=%s order by rank_cnt" % (ts, trade_type, coin_name, landun)
        # print(sql)
        data = db.query(sql)
        ret = []
        for res in data:
            rank_cnt = res['rank_cnt']
            user_name = res['user_name']
            trade_month_times = res['trade_month_times']
            order_complete_rate = res['order_complete_rate']
            trade_count = res['trade_count']
            min_trade_limit = res['min_trade_limit']
            max_trade_limit = res['max_trade_limit']
            pay_type = res['pay_type']
            pay_name = res['pay_name']
            landun = res['landun']
            price = res['price']
            ret.append({'coin_name': coin_name, 'rank_cnt': rank_cnt, 'user_name': user_name, 'trade_month_times': trade_month_times, 'order_complete_rate': order_complete_rate, 'trade_count': trade_count, 'min_trade_limit': min_trade_limit, 'max_trade_limit': max_trade_limit, 'pay_type': pay_type, 'pay_name': pay_name, 'landun': landun, 'price': price})
        results[trade_type] = ret
    return results

def otc_tuntu_sub_copy(trade_type, coin_name, number, ts1):
    sql1 = "select user_name,trade_count from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' order by rank_cnt limit %s" % (ts1, trade_type, coin_name, number)
    # print(sql1)
    data1 = db.query(sql1)
    f = open('test.txt', 'a')
    for d in data1:
        f.write(d['user_name'] + '\t' + d['trade_count'] + '\n')
    f.write('\n')
    f.close()


def otc_tuntu_copy(coin_name, number):
    tss = get_last_min_ts()
    for i in range(0, len(tss)):
        otc_tuntu_sub_copy('sell', coin_name, number, tss[i]['ts'])


if __name__ == '__main':
    otc_tuntu_copy('USDT', '10')
