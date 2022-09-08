<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$usrmessage = $_POST['message'];
	$to = 'ken@designedbyken.com';
	$subject = 'Inquiry Made';
	$message = $name . " " . "wrote: " . "\n\n" . $usrmessage;
	$headers = "From:" . $email;
	mail($to,$subject,$message,$headers);
	echo "E-Mail successfully sent!";
?>