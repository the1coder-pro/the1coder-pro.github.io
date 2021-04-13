<?php
$app_name = $_POST[“app”];
$sender   = $_POST[“sender”];
$message  = $_POST[“message”];

if ($app_name == “WhatsAuto”) {
  if ($sender == “WhatsAuto app”) {
     if ($message == “Test message”) {
       $dice = rand(1,6);
         $reply = array(“reply” => “what i got is $dice”);
        echo json_encode($reply);
     }
  }
}
?>
