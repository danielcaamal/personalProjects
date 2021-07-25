<?php
require_once('car.php');
require_once('account.php');

$uberX = new UberX("PHP001",new Account("Jesús López", "JL001"),"Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberX("PHP002",new Account("Pedro Godínez", "PG001"),"Dodge", "Attitude");
echo "\n";
$uberPool->printDataCar();
?>