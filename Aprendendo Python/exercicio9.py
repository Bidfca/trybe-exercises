def triangulo(lado1, lado2, lado3):
    valido = (
            lado1 + lado2 > lado3 and
            lado2 + lado3 > lado1 and
            lado1 + lado3 > lado2
    )
    if not valido:
        return "não é triângulo";
    elif lado1 == lado2 == lado3:
        return "equilátero";
    elif lado1 == lado2 or lado1 == lado3 or lado3 == lado2:
        return "isósceles";
    else:
        return "escaleno";
