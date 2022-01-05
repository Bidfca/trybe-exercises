def numero_primo(n):
    if n == 1: return False
    

    def tem_divisor(i):
        if i == 1:
            return True
        elif n % i == 0:
            return False
        else:
            return tem_divisor(i - 1)
    return tem_divisor(n - 1)
