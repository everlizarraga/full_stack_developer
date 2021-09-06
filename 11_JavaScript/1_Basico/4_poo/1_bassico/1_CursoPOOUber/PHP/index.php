<?php
require_once('car.php');
require_once('uberX.php');
require_once('account.php');

$uberX = new UberX("VCB332", new Account("Andres Herrera","AN11111"), "Cheverolet", "Spark");
$uberX->printDaraCar();
?>