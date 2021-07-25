class Car{
    constructor(license, driver){
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }

    printDataCar = () => {
        console.log(`License: ${this.license}`);
        console.table(this.driver);
    }
}

class UberBlack extends Car {
    constructor(license, driver, typeCarAccepted, seatsMaterial){
        super(license, driver)
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}

class UberPool extends Car {
    constructor(license, driver, model, brand){
        super(license, driver)
        this.brand = brand;
        this.model = model;
    }
}

class UberVan extends Car {
    constructor(license, driver, typeCarAccepted, seatsMaterial){
        super(license, driver)
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}

class UberX extends Car {
    constructor(license, driver, model, brand){
        super(license, driver)
        this.brand = brand;
        this.model = model;
    }
}