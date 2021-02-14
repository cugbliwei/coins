import sys
sys.path.append('../')
from db import db


def user_set(username, password, nickname, token):
    data = [(username, nickname, password, token)]
    sql = "insert into otc_user values(%s,%s,%s,%s)"
    print(sql)
    return db.insertmany(sql, data)


def user_get(username, password):
    sql = "select * from otc_user where user_name='%s' and password='%s'" % (username, password)
    print(sql)
    return db.query(sql)


def user_update(username, password, nickname):
    sql = "update otc_user set password='%s',nick_name='%s' where user_name='%s'" % (password, nickname, username)
    print(sql)
    return db.execute(sql)


def set_profile(refresh_time):
    sql = "update otc_profile set refresh_time=%s" % refresh_time
    print(sql)
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


def otc_rank(coin_name, nickname):
    results = {}
    ts = get_last_ts()
    if not ts:
        return {}

    for trade_type in ['sell', 'buy']:
        sql = "select price,trade_count,rank_cnt from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' and user_name='%s'" % (ts, trade_type, coin_name, nickname)
        print(sql)
        data = db.query(sql)
        ret = []
        for res in data:
            price = res['price']
            trade_count = res['trade_count']
            rank_cnt = res['rank_cnt']
            tuntu = otc_tuntu(coin_name, rank_cnt - 1)
            if tuntu[trade_type] == 0:
                entry_rank_1 = 0
            else:
                entry_rank_1 = tuntu[trade_type + '_origin'] / (0 - tuntu[trade_type])
            ret.append({'price': price, 'trade_count': trade_count, 'rank_cnt': rank_cnt, 'entry_rank_1': entry_rank_1})
        results[trade_type] = ret
    return results


def otc_tuntu_sub(coin_name, number, ts):
    res = {}
    for trade_type in ['sell', 'buy']:
        sql = "select sum(trade_count) as trade_count_sum from (select trade_count from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' order by rank_cnt limit %s) a" % (ts, trade_type, coin_name, number)
        print(sql)
        data = db.query(sql)
        if data and data[0]['trade_count_sum']:
            res[trade_type] = data[0]['trade_count_sum']
        else:
            res[trade_type] = 0

    return res


def otc_tuntu(coin_name, number):
    ts1 = get_last_ts()
    if not ts1:
        return {}

    res1 = otc_tuntu_sub(coin_name, number, ts1)

    ts2 = get_last_ts2()
    if not ts2:
        return {}

    res2 = otc_tuntu_sub(coin_name, number, ts2)

    sub = int(ts1) - int(ts2)
    return {'sell': (res1['sell'] - res2['sell']) * (60 * 1000 / sub), 'buy': (res1['buy'] - res2['buy']) * (60 * 1000 / sub), 'sell_origin': res1['sell'], 'buy_origin': res1['buy']}


def otc_sumary(coin_name):
    results = {}
    ts = get_last_ts()
    if not ts:
        return {}

    for trade_type in ['sell', 'buy']:
        sql = "select price,count(*) as price_cnt,avg(trade_count) as trade_count_avg,sum(trade_count) as trade_count_sum from otc_origin where ts='%s' and trade_type='%s' and coin_name='%s' group by price" % (ts, trade_type, coin_name)
        print(sql)
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
        print(sql)
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
