<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the email address from the POST request
    $email = $_POST["email"];

    // Your custom message
    $message = "Hello, This is a custom message.";
    
    // Send the email
    $to = $email;
    $subject = "all messages here is the link to the program";
    $headers = "From: info@greatadventureintl.com"; // Replace with your email address

    // Use the mail() function to send the email
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        // Email sent successfully
        echo json_encode(array('success' => true, 'message' => 'Email sent successfully'));
    } else {
        // Email sending failed
        echo json_encode(array('success' => false, 'message' => 'Email sending failed'));
    }
}
?>
