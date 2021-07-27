class CasillaDeVotacion:
    def __init__(self, identificador, pais):
        self._identificador = identificador
        self._pais = pais
        self._region = None
    
    @property
    def region(self):
        return self._region
    
    @region.setter
    def region(self, region):
        if region in self._pais:
            self._region = region
        else:
            raise ValueError(f'La region {region} no es válida en {self.__pais}')


def run():
    casilla = CasillaDeVotacion(123, ['Mexico', "Morelos"])
    print(casilla.region)
    casilla.region = "Mexico"
    print(casilla.region)


if __name__ == "__main__":
    run()