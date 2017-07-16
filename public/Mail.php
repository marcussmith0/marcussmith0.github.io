<?php
require_once "Mail.php";

$from = "Marcus Smith <admin@marcus-smith.me>";
$to = "Ramona Recipient <recipient@example.com>";
$subject = "Hi!";
$body = "Hi,

How are you?";

$host = "mail.marcus-smith.me";
$username = "marcus";
$password = "thankheaven4711";

$headers = array ('From' => $from,
'To' => $to,
'Subject' => $subject);
$smtp = Mail::factory('smtp',
array ('host' => $192.185.52.142,
'auth' => true,
'username' => $username,
'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");
} else {
echo("<p>Message successfully sent!</p>");
}
?>