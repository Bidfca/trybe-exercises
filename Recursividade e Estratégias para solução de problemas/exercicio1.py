def numeros_pares(n):
    counter = 0
    for number in range(n):
        if number % 2 == 0:
            counter += 1
    return counter

print(numeros_pares(9))
