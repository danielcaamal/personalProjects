class Account{    
    constructor(name, document, email, password){
        this.id;
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;
    }
}

class User extends Account{
    constructor(name, document, email, password){
        super(name, document, email, password)
    }
}

class Driver extends Account{
    constructor(name, document, email, password){
        super(name, document, email, password)
    }
}