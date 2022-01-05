def numeros_pares(n):
    if n == 0:
        return 0
    else:
        if n % 2 == 0:
            return 1 + numeros_pares(n - 1)
        return numeros_pares(n - 1)
