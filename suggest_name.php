<?php
$server="localhost";
$user="root";
$password="admin";
$database="test";
$mysqli= new MySQLi($server,$user,$password,$database);

if(mysqli->connect_error){
	
	echo "my sql connection failed"."error". $mysqli->connect_errno.''.$mysqli->connect_error;
	exit;
}
else{
	
	$mysqli->set_charset('utf8');
}
$term=(trim(strip_tags($_GET['term']));
$a_json= array();
$a_json_row=array();

if($data=$mysqli->query(SELECT * FROM customer WHERE firstname LIKE '%$term%' or latName LIKE "%$term" ORDER BY firstName,lastName)){
	
while($row=mysqli_fetch_array($data)){
	$firstname= htmlentities(stripeslashes($row ['firstName']));
	$lastname= htmlentities(stripeslashes($row ['lastName']));
	$code= htmlentities(stripslahes($row['customerCode']));
	$a_json_row["id"]=$code;
	$a_json_row["value"]=$firstname.''.$lastname;
	array_push($a_json,$a_json_row);
}
}
?>