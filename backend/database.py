import mysql.connector

dataBase = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = 'mySQL123'
)

cursorObject = dataBase.cursor()

cursorObject.execute("CREATE DATABASE shopping")

print("All Done!")