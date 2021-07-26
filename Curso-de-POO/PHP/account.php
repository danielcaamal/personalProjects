<?php
class Account{
    public $id;
    public $name;
    public $document;
    public $email;
    public $password;

    public function __construct($name, $document, $email, $password)
    {
        $this->name = $name;
        $this->document = $document;
        $this->email = $email;
        $this->password = $password;
    }
}

class User extends Account{
    public function __construct($name, $document, $email, $password){
        parent::__construct($name, $document, $email, $password);
    }
}

class Driver extends Account{
    public function __construct($name, $document, $email, $password){
        parent::__construct($name, $document, $email, $password);
    }
}
?>