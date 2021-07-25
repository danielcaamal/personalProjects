from account import Account
from car import Car
from car import UberX

def run():
    car = Car(license="PY001", driver=Account("David Gómez", "DG001"))
    car.printDataCar()

    uberX = UberX(license="PY002", driver=Account("Daniel Caamal", "DC001"), brand="Chevrolet", model="Cavalier")
    uberX.printDataCar()


if __name__ == "__main__":
    run()