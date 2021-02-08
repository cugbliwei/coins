import sys
sys.path.append('../')
from db import db


def user_set(username, password, nickname, token):
    sql = "insert into otc_user values('%s', '%s', '%s', '%s')" % (username, nickname, password, token)
    return db.insertmany(sql)


def user_get(username, password):
    sql = "select * from otc_user where user_name='%s' and password='%s'" % (username, password)
    return db.query(sql)


def set_profile(refresh_time):
    sql = "update otc_profile set refresh_time=%s" % refresh_time
    return db.execute(sql)


def otc_rank(coin_name, nickname):
    results = {}
    for trade_type in ['sell', 'buy']:
        sql = "select price,trade_count,rank_cnt from otc_origin where trade_type='%s' and coin_name='%s' and user_name='%s'" % (trade_type, coin_name, nickname)
        data = db.query(sql)
        ret = []
        for res in data:
            price = res[0]
            trade_count = res[1]
            rank_cnt = res[2]
            ret.append({'price': price, 'trade_count': trade_count, 'rank_cnt': rank_cnt})
        results[trade_type] = ret
    return results


def otc_sumary(coin_name):
    results = {}
    for trade_type in ['sell', 'buy']:
        sql = "select price,count(*),avg(trade_count),sum(trade_count) from otc_origin where trade_type='%s' and coin_name='%s' group by price" % (trade_type, coin_name)
        data = db.query(sql)
        ret = []
        for res in data:
            price = res[0]
            price_cnt = res[1]
            trade_count_avg = res[2]
            trade_count_sum = res[3]
            ret.append({'price': price, 'price_cnt': price_cnt, 'trade_count_avg': trade_count_avg, 'trade_count_sum': trade_count_sum})
        results[trade_type] = ret
    return results


def get_origin(coin_name):
    results = {}
    for trade_type in ['sell', 'buy']:
        sql = "select * from otc_origin where trade_type='%s' and coin_name='%s' order by rank_cnt" % (trade_type, coin_name)
        data = db.query(sql)
        ret = []
        for res in data:
            rank_cnt = res[2]
            user_name = res[3]
            trade_month_times = res[4]
            order_complete_rate = res[5]
            trade_count = res[6]
            min_trade_limit = res[7]
            max_trade_limit = res[8]
            pay_type = res[9]
            pay_name = res[10]
            landun = res[11]
            price = res[12]
            ret.append({'coin_name': coin_name, 'rank_cnt': rank_cnt, 'user_name': user_name, 'trade_month_times': trade_month_times, 'order_complete_rate': order_complete_rate, 'trade_count': trade_count, 'min_trade_limit': min_trade_limit, 'max_trade_limit': max_trade_limit, 'pay_type': pay_type, 'pay_name': pay_name, 'landun': landun, 'price': price})
        results[trade_type] = ret
    return results
