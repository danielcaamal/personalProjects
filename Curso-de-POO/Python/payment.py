class Payment:
    id = int
    
    def __init__(self, id):
        self.id = id


class Card(Payment):
    number = str
    CVV = str
    date = str

    def __init__(self, number, CVV, date):
        super().__init__(id)
        self.number = number
        self.CVV = CVV
        self.date = date


class PayPal(Payment):
    email = str

    def __init__(self, id, email):
        super().__init__(id)
        self.email = email


class Cash(Payment):

    def __init__(self, id):
        super().__init__(id)