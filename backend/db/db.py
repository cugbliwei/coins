import pymysql
# from DBUtils.PooledDB import PooledDB
from dbutils.pooled_db import PooledDB


POOL = PooledDB(
    creator=pymysql,  # 使用链接数据库的模块
    maxconnections=0,  # 连接池允许的最大连接数，0和None表示不限制连接数
    mincached=5,  # 初始化时，链接池中至少创建的空闲的链接，0表示不创建
    maxcached=0,  # 链接池中最多闲置的链接，0和None不限制
    maxshared=1,  # 链接池中最多共享的链接数量，0和None表示全部共享
    blocking=True,  # 连接池中如果没有可用连接后，是否阻塞等待。True，等待；False，不等待然后报错
    maxusage=None,  # 一个链接最多被重复使用的次数，None表示无限制
    setsession=[],  # 开始会话前执行的命令列表
    ping=0,
    host='localhost',
    port=3306,
    user='root',
    password='02062000',
    database='otc_db',
    charset='utf8'
)


def create_conn():
    conn = POOL.connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    return conn, cursor


def close_conn(conn, cursor):
    conn.close()
    cursor.close()


def insertmany(sql, data):
    try:
        conn, cursor = create_conn()
        cursor.executemany(sql, data)
        conn.commit()
        close_conn(conn, cursor)
        return ''
    except Exception as e:
        conn.rollback()
        close_conn(conn, cursor)
        return e
    return ''


def query(sql):
    try:
        conn, cursor = create_conn()
        cursor.execute(sql)
        results = cursor.fetchall()
        close_conn(conn, cursor)
        return results
    except Exception as e:
        print(e)
    return []


def execute(sql):
    try:
        conn, cursor = create_conn()
        cursor.execute(sql)
        conn.commit()
        close_conn(conn, cursor)
        return ''
    except Exception as e:
        conn.rollback()
        close_conn(conn, cursor)
        return e
    return ''
