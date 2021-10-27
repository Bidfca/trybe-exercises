# __ = private attribute

class Tv():
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False
    
    def aumentar_volume(self):
        if self.__volume == 99:
            return
        self.__volume += 1

    def diminuir_volume(self):
        if self.__volume == 0:
            return
        self.__volume -= 1
    
    def modificar_canal(self, canal):
        if __canal > 99 or __canal < 0:
            raise ValueError('Canal indisponível')
        self.__canal = canal

    def ligar_desligar():
        if self.__ligada == False:
            self.__ligada == True
        else:
            self.__ligada == False

    