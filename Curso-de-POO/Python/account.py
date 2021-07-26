class Account:
    id = int
    name = str
    document = str
    email = str
    password = str
    def __init__(self, name, document, email, password):
        self.name = name
        self.document = document
        self.email = email
        self.password = password


class User(Account):
    def __init__(self, name, document, email, password):
        super().__init__(name, document, email, password)


class Driver(Account):
    def __init__(self, name, document, email, password):
        super().__init__(name, document, email, password)