import math

def preco_pintura(area):
    litros = area / 3;
    latas = math.ceil(litros / 18);
    preco = latas * 80;

    return latas, preco * latas;

print(preco_pintura(108));