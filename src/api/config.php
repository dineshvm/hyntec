<?php
$mysql_hostname = "localhost";
$mysql_user = "root";
$mysql_password = "";
$mysql_database = "hyntec";
$prefix = "";
$dsn = "mysql:host=$mysql_hostname;dbname=$mysql_database";
try {
    $conn = new PDO($dsn, $mysql_user, $mysql_password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
}
catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}
/* $bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Could not connect database");
mysql_select_db($mysql_database, $bd) or die("Could not select database"); */
?>