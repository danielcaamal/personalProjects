class Payment{
    constructor(id){
        this.id;
    }
}

class Card extends Payment{
    constructor(id, number, CVV, date){
        super(id)
        this.number = number;
        this.CVV = CVV;
        this.date = date;
    }
}

class PayPal extends Payment{
    constructor(id, email){
        super(id)
        this.id = id;
    }
}

class Cash extends Payment{
    constructor(id){
        super(id)
    }
}