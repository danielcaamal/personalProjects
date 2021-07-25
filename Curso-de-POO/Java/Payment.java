class Payment {
    Integer id;

    public Payment(Integer id){
        this.id = id;
    }
}

class Card  extends Payment {
    String number;
    String CVV;
    String date;

    public Card(Integer id, String number, String CVV, String date) {
        super(id);
        this.number = number;
        this.CVV = CVV;
        this.date = date;
    }
}

class Paypal extends Payment {
    String email;
    
    public Paypal(Integer id, String email){
        super(id);
        this.email = email;
    }
}

class Cash extends Payment {
    public Cash(Integer id){
        super(id);
    }
}
