def media_aritmetica(lista):
    total = 0;
    for item in lista:
        total += item;
    return total / len(lista);


print(media_aritmetica([10, 20, 30, 40]));