numeros = input("Digite os numeros separados por espaco: ").split(' ');

total = 0;

for numero in numeros:
    if not numero.isdigit():
        print(f"Erro ao somar valores, {numero} é um valor inválido");
        break;
    else:
        total += int(numero);

print(f"A soma dos valores válidos é: {total}");