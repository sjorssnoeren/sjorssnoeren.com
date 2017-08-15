<?php

header('Content-Type: application/json');

function validate($json) {
  if (isset($json['name']) !== true || strlen($json['name']) < 1) {
    return false;
  }

  if (isset($json['email']) !== true || strlen($json['email']) < 1) {
    return false;
  }

  if (filter_var($json['email'], FILTER_VALIDATE_EMAIL) === false) {
    return false;
  }

  if (isset($json['message']) !== true || strlen($json['message']) < 1) {
    return false;
  }
  return true;
}

function sendMail($json) {
  // TODO: Include SMTP Mailer function
}

function action($json) {
  if (validate($json) !== true) {
    sendMail($json);
    return ['success' => false, 'message' => 'Please fill all required fields correctly.'];
  }
  return ['success' => true, 'message' => 'Succesfully sent your message. I\'ll get back to you shortly'];
}

$requestBody = file_get_contents('php://input');
$requestJSON = json_decode($requestBody, true);
echo json_encode(action($requestJSON));
