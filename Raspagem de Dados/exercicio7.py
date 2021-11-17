from pymongo import MongoClient
from bson.son import SON


client = MongoClient()
db = client.library
books = db.books
pipelines = [
    { "$match": { "status": "PUBLISH" } },
    { "$unwind": "$categories"},
    { "$group": { "_id": "$categories", "count": { "$sum": 1 } } },
    { "$sort": SON([("count", -1)]) }
]
for category in books.aggregate(pipelines):
    print(category["_id"], category["count"])
client.close()