<?php
class Payment {
    public $id;

    public function __construct($id){
        $this->id = $id;
    }
}

class Card extends Payment {
    public $number;
    public $CVV;
    public $date;

    public function __construct($id, $number, $CVV, $date){
        parent::__construct($id);
        $this->number = $number;
        $this->CVV = $CVV;
        $this->date = $date;
    }
}

class PayPal extends Payment {
    public $email;

    public function __construct($id, $email){
        parent::__construct($id);
        $this->email = $email;
    }
}

class Cash extends Payment {
    public function __construct($id){
        parent::__construct($id);
    }
}
?>