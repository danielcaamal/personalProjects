<?php
require_once('car.php');
require_once('account.php');

$uberX = new UberX("PHP001",new Account("Jesús López", "JL001", "jesuslopez@email.com", "12345"),"Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberX("PHP002",new Account("Pedro Godínez", "PG001", "pedrogodinez@email.com", "12345"),"Dodge", "Attitude");
echo "\n";
$uberPool->printDataCar();
?>