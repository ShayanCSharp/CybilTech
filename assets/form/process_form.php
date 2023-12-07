<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $website = $_POST["website"];
    $email = $_POST["email"];
    $company = $_POST["company"];
    $message = $_POST["message"];

    // Validate data (you may want to add more validation)
    if (empty($name) || empty($website) || empty($email) || empty($company) || empty($message)) {
        echo "Please fill in all the fields.";
        exit();
    }

    // Compose email message
    $to = "shayanalam8931@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $messageBody = "Name: $name\nWebsite: $website\nEmail: $email\nCompany: $company\nMessage:\n$message";

    // Send email
    $mailSuccess = mail($to, $subject, $messageBody, $headers);

    if ($mailSuccess) {
        echo "Thank you for your submission. We will contact you as soon as possible.";
    } else {
        echo "Error sending the email. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
