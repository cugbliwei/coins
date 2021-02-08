import pymysql


mysql = pymysql.connect(host="localhost", user="root", password="123456", database="otc_db")


def close():
    mysql.close()


def insertmany(sql, data):
    try:
        mysql.ping(reconnect=True)
        cursor = mysql.cursor()
        cursor.executemany(sql, data)
        mysql.commit()
        cursor.close()
        return ''
    except Exception as e:
        mysql.rollback()
        return e
    return ''


def query(sql):
    try:
        mysql.ping(reconnect=True)
        cursor = mysql.cursor()
        cursor.execute(sql)
        results = cursor.fetchall()
        cursor.close()
        return results
    except Exception as e:
        print(e)
    return []


def execute(sql):
    try:
        mysql.ping(reconnect=True)
        cursor = mysql.cursor()
        cursor.execute(sql)
        mysql.commit()
        cursor.close()
        return ''
    except Exception as e:
        mysql.rollback()
        return e
    return ''
