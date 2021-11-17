import requests
from parsel import Selector


response = requests.get("https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags")
selector = Selector(text=response.text)
gallery = selector.css(".gallery")
for thumb in gallery:
    name = thumb.css(".gallerytext a::attr(title)").get()
    url = thumb.css(".image img::attr(src)").get()
    content = requests.get("http:" + url).content
    with open(name, "wb") as file: #write and binary
        file.write(content)


