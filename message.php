<?php
$app_name = $_POST[“app”];
$sender   = $_POST[“sender”];
$message  = $_POST[“message”];

if ($app_name == “WhatsApp”) {
  if ($sender == “Bob”) {
     if ($message == “order status”) {
       $dice = rand(1,6);
         $reply = array(“reply” => “what i got is $dice”);
        echo json_encode($reply);
     }
  }
}
?>
