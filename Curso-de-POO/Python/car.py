from account import Account

class Car:
    id = int
    license = str
    driver = Account
    passenger = str
    def __init__(self, license, driver):
        self.license = license
        self.driver = driver
    
    def printDataCar(self):
        print(f"License: {self.license}, Driver: {self.driver.name}")


class UberBlack(Car):
    typeCarAccepted = []
    seatMaterial = []

    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAccepted = typeCarAccepted
        self.seatMaterial = seatsMaterial


class UberPool(Car):
    brand = str
    model = str

    def __init__(self, license, driver, brand, model):
        super().__init__(license, driver)
        self.brand = brand
        self.model = model


class UberVan(Car):
    typeCarAccepted = []
    seatMaterial = []

    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAccepted = typeCarAccepted
        self.seatMaterial = seatsMaterial


class UberX(Car):
    brand = str
    model = str

    def __init__(self, license, driver, brand, model):
        super().__init__(license, driver)
        self.brand = brand
        self.model = model