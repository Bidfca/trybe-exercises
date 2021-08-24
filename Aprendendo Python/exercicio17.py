import json
import csv
from collections import Counter

with open("livros.json") as arquivo:
    livros = [json.loads(livro) for livro in arquivo]

def acessar_categorias(livro):
    return livro['categories'];

categorias = list(map(acessar_categorias, livros));
flat_categorias = [item for sublist in categorias for item in sublist];
contador = Counter(flat_categorias);
total = sum(contador.values());

def porcentagem(numero):
    return numero/total;

with open("porcentagem.csv", "w") as arquivo:
    writer = csv.writer(arquivo);

    for row in [[k, porcentagem(v)] for (k, v) in contador.items()]:
        writer.writerow(row);