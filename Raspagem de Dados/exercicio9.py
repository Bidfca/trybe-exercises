import requests


page = 1
has_next = True
while has_next:
    response = requests.get(f"http://quotes.toscrape.com/api/quotes?page={page}")
    response_json = response.json()
    has_next = response_json["has_next"]
    for quote in response_json["quotes"]:
        counter = counter + 1
        text = quote["text"]
        print(text)
    page = page + 1