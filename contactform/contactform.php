<?php
// if (file_exists($php_mail_form_library = '../lib/php-mail-form/php-mail-form.php')) {
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

// echo $contactform->send();
?>


<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name']; // Get Name value from HTML Form
  $email_id = $_POST['email']; // Get Email Value
  $subject = $_POST['subject'];
  $msg = $_POST['message']; // Get Message Value


  $to = "xavier.loos04@gmail.com"; // You can change here your Email
  $subject = "'$name' has been sent a mail"; // This is your subject

  // HTML Message Starts here
  $message = "
        <html>
            <body>
                <table style='width:600px;'>
                    <tbody>
                        <tr>
                            <td style='width:150px'><strong>Name: </strong></td>
                            <td style='width:400px'>$name</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Email ID: </strong></td>
                            <td style='width:400px'>$email_id</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Email ID: </strong></td>
                            <td style='width:400px'>$subject</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Message: </strong></td>
                            <td style='width:400px'>$msg</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
        ";
  // HTML Message Ends here

  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // More headers
  $headers .= 'From: Javier Lopez Ramos <javierlr.dev@gmail.com>' . "\r\n"; // Give an email id on which you want get a reply. User will get a mail from this email id
  if (mail($to, $subject, $msg, $headers)) {
    // Message if mail has been sent
    echo "<script>
                alert('Mail has been sent Successfully.');
            </script>";
  } else {
    // Message if mail has been not sent
    echo "<script>
                alert('EMAIL FAILED');
            </script>";
  }
}
header("Location: ../index.js");
?>