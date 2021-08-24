arquivo = open("arquivo.txt", mode="r");
reprovados = [];

for linha in arquivo:
    if int(linha.split(" ")[1]) < 6:
        reprovados.append(linha.split(" ")[0]);

arquivo.close();

arquivo = open("reprovados.txt", mode="w");

for reprovado in reprovados:
    arquivo.write(reprovado + "\n");

arquivo.close();