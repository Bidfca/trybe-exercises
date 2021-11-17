from pymongo import MongoClient


category = input("Escolha a categoria: ")
client = MongoClient()
db = client.library
books = db.books
for book in books.find({"categories": category}):
    print(book["title"])
client.close()