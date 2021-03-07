
<!-- // if (file_exists($php_mail_form_library = '../lib/php-mail-form/php-mail-form.php')) {
//   include($php_mail_form_library);
// } else {
//   die('Unable to load the PHP Mail Form Library!');
// }

// $contactform = new PHP_Mail_Form;
// $contactform->ajax = true;

// // Replace with your real receiving email address
// $contactform->to = 'javierlr.dev@gmail.com';
// $contactform->from_name = $_POST['name'];
// $contactform->from_email = $_POST['email'];
// $contactform->subject = $_POST['subject'];

// $contactform->add_message($_POST['name'], 'From');
// $contactform->add_message($_POST['email'], 'Email');
// $contactform->add_message($_POST['message'], 'Message', 10);

// echo $contactform->send(); -->



<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name']; // Get Name value from HTML Form
    $email = $_POST['email']; // Get Email Value
    $subject = $_POST['subject'];
    $message = $_POST['message']; // Get Message Value

    $mailTo = "javierlr.dev4@gmail.com"; // You can change here your Email
    $headers = 'From: '.$email; // Give an email id on which you want get a reply.
    $txt = "You have received an email from " . $name . ".\n\n" . $message;
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}
