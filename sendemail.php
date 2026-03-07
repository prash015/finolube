<?php

// Define some constants
define( "RECIPIENT_NAME", "Finolube" );
define( "RECIPIENT_EMAIL", "finolube@gmail.com" );

// Read the form values
$success = false;
$userName = isset( $_POST['username'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$senderPhone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
$userSubject = isset( $_POST['subject'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $senderPhone && $userSubject && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $mailSubject = "New Distributor Enquiry: " . $userSubject;
  $headers = "From: Finolube Website <no-reply@finolube.in>\r\n";
  $headers .= "Reply-To: " . $senderEmail . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $msgBody = "New distributor enquiry from Finolube website\n\n";
  $msgBody .= "Name: " . $userName . "\n";
  $msgBody .= "Email: " . $senderEmail . "\n";
  $msgBody .= "Phone: " . $senderPhone . "\n";
  $msgBody .= "Subject: " . $userSubject . "\n";
  $msgBody .= "Message:\n" . $message . "\n";

  $success = mail( $recipient, $mailSubject, $msgBody, $headers );

  // Set location after successful submission
  if ( $success ) {
    header('Location: contact.html?message=Successfull');
  } else {
    header('Location: contact.html?message=Failed');
  }
}

else{
	// Set location after unsuccessful submission
  	header('Location: contact.html?message=Failed');	
}

?>
