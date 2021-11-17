import requests
from parsel import Selector


URL_BASE = "http://books.toscrape.com/catalogue/"
next_page = "page-1.html"
while next_page:
    response = requests.get(URL_BASE + next_page)
    selector = Selector(text=response.text)
    for product in selector.css(".product_pod"):
        href_product = product.css("h3 a::attr(href)").get()
        url_product = URL_BASE + "/" + href_product
        response_product = requests.get(url_product)
        selector_product = Selector(text=response_product.text)
        preco = selector_product.css(".product_main .price_color").re(r"\d+\.\d{2}")[0]
        titulo = selector_product.css(".product_main h1::text").get()
        descricao = selector_product.css("#product_description ~p::text").get()
        url_imagem = selector_product.css(".thumbnail img::attr(src)").get()
        estoque = selector_product.css(".product_main .instock").re(r"\d+")[0]
        SUFIXO = "...more"
        if descricao.endswith(SUFIXO):
            descricao = descricao[:-len(SUFIXO)]
        print([titulo, preco, descricao, url_imagem, estoque])
        next_page = selector.css(".next a::attr(href)").get()

