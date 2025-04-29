<?php
session_start();
include 'https://joshualawson.rhody.dev/valid.php';


$values = [
    'name' => '',
    'email' => '',
    'age' => '',
    'contact' => '',
    'reason' => '',
    'message' => ''
];

$errors = [
    'name' => '',
    'email' => '',
    'age' => '',
    'contact' => '',
    'reason' => '',
    'message' => ''
];

$responseMessage = '';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    foreach ($values as $key => $val) {
        $values[$key] = htmlspecialchars(trim($_POST[$key] ?? ''));
    }

    
    if (!validateText($values['name'], 2, 50)) {
        $errors['name'] = 'Name must be between 2 and 50 characters.';
    }

    if (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Please enter a valid email address.';
    }

    if (!validateNumberInRange($values['age'], 13, 120)) {
        $errors['age'] = 'Age must be between 13 and 120.';
    }

    $allowedContacts = ['email', 'phone'];
    if (!validateOption($values['contact'], $allowedContacts)) {
        $errors['contact'] = 'Please select a valid contact method.';
    }

    $allowedReasons = ['support', 'feedback', 'career'];
    if (!validateOption($values['reason'], $allowedReasons)) {
        $errors['reason'] = 'Please select a valid reason for contact.';
    }

    if (!validateText($values['message'], 5, 500)) {
        $errors['message'] = 'Message must be between 5 and 500 characters.';
    }

    
    $allErrors = implode('', $errors);
    if (!empty($allErrors)) {
        $responseMessage = 'Please correct the form errors.';
    } else {
        
        setcookie('user_name', $values['name'], time() + 3600, '/');
        setcookie('user_email', $values['email'], time() + 3600, '/');
        setcookie('user_age', $values['age'], time() + 3600, '/');

        
        $_SESSION['user_name'] = $values['name'];
        $_SESSION['user_email'] = $values['email'];
        $_SESSION['user_age'] = $values['age'];

        $responseMessage = 'Form submitted successfully! Cookies and session data are set.';
    }

    echo $responseMessage;
} else {
    echo "Error: Invalid form submission.";
}
?>
