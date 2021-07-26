class Account {
    Integer id;
    String name;
    String document;
    String email;
    String password;

    public Account(String name, String document, String email, String password){
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;
    }
}

class User extends Account {
    public User(String name, String document, String email, String password){
        super(name, document, email, password);
    }
}

class Driver extends Account {
    public Driver(String name, String document, String email, String password){
        super(name, document, email, password);
    }
}