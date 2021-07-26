<?php
require_once('account.php');
class Car{
    public $id;
    public $license;
    public $driver;
    protected $passenger;

    public function __construct($license, $driver)
    {
        $this->license = $license;
        $this->driver = $driver;
    }

    public function printDataCar(){
        echo "License: $this->license, Driver: {$this->driver->name}";
    }

    public function getPassenger(){
        return $this->passenger;
    }

    public function setPassenger($passenger){
        if($passenger == 4){
            $this->passenger = $passenger;
        }else{
            echo "Necesitas asignar 4 pasajeros";
        }
    }
}

class UberBlack extends Car{
    public $typeCarAccepted;
    public $seatsMaterial;
    
    public function __construct($license, $driver, $typeCarAccepted, $seatsMaterial){
        parent::__construct($license, $driver);
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
    }
}

class UberPool extends Car{
    public $brand;
    public $model;
    public function __construct($license, $driver, $brand, $model){
        parent::__construct($license, $driver);
        $this->brand = $brand;
        $this->model = $model;
    }
}

class UberVan extends Car {
    public $typeCarAccepted;
    public $seatsMaterial;

    function __construct($license, $driver, $typeCarAccepted, $seatsMaterial){
        parent::__construct($license, $driver);
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
    }
}

class UberX extends Car {
    public $brand;
    public $model;

    function __construct($license, $driver, $brand, $model){
        parent::__construct($license, $driver);
        $this->brand = $brand;
        $this->model = $model;
    }
}
?>