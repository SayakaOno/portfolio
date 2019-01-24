<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// for the test
die(json_encode(array(
  "sent" => true
)));
// die(json_encode(["sent" => false, "message" => "Please try again"]));

if(empty($_POST['name']) && empty($_POST['email']) && empty($_POST['message'])) {
  die();
}

if($_POST) {
  http_response_code(200);
  $subject = $_POST['name'];
  $to = "sayaka.ono.81@gmail.com";
  $from = $_POST['email'];

  $msg = $_POST['message'];

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";
  $headers .= "From: <" . $from . ">";
  $result = mail($to, $subject, $msg, $headers);

  if($result) {
    die(json_encode(array(
      "sent" => true
    )));
  } else {
    die(json_encode(["sent" => false, "message" => "Please try again"]));
  }
} else {
  die(json_encode(["sent" => false, "message" => "Something went wrong"]));
}