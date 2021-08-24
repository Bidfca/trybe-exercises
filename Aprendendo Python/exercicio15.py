nome = input("Digite um nome: ");
nome = list(nome);

for row in range(len(nome)): 
    for index, letra in enumerate(nome):
        if (len(nome) - row) == index:
            break;
        print(letra, end="");
    print("");




