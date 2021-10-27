class Estatistica():
    @classmethod
    def media(cls, numeros):
        total = 0
        for numero in numeros:
            total += numero
        return total / len(numeros)


    @classmethod
    def moda(cls, numeros):
        set_numeros = set(numeros)
        maior_numero = numeros[0]
        vezes = 0
        vezes_maior = 0
        for set_numero in set_numeros:
            for numero in numeros:
                if set_numero == numero:
                    vezes += 1
            if vezes > vezes_maior:
                vezes_maior = vezes
                maior_numero = set_numero
                vezes = 0
        return maior_numero


    @classmethod
    def mediana(cls, numeros):
        numeros.sort()
        if len(numeros) % 2 == 1:
            return numeros[int((len(numeros) + 1) / 2)]
        else:
            return (numeros[int(len(numeros) / 2)]+ numeros[int((len(numeros) / 2) - 1)]) / 2


# print(Estatistica.media([4, 4, 4]))
# print(Estatistica.moda([1, 4, 4, 4, 6, 7, 7, 7]))
# print(Estatistica.mediana([1, 4, 2, 3, 6, 7]))
    