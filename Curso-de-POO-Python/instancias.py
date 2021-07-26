class Coordenada:

    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def distancia(self, otra_coordenada):
        diff_x = (self.x - otra_coordenada.x)**2
        diff_y = (self.y - otra_coordenada.y)**2
        return (diff_x + diff_y)**0.5


def run():
    coord_1 = Coordenada(2, 5)
    coord_2 = Coordenada(1, 8)
    print(coord_1.distancia(coord_2))
    print(isinstance(coord_2, Coordenada))


if __name__ == "__main__":
    run()