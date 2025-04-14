<?php
session_start();
include 'validation.php';

$values = ['name' => '', 'email' => '', 'age' => '', 'contact' => '', 'reason' => '', 'message' => ''];
$errors = ['name' => '', 'email' => '', 'age' => '', 'contact' => '', 'reason' => '', 'message' => ''];
$message = '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $values = array_map('htmlspecialchars', [
        'name' => $_POST['name'] ?? '',
        'email' => $_POST['email'] ?? '',
        'age' => $_POST['age'] ?? '',
        'contact' => $_POST['contact'] ?? '',
        'reason' => $_POST['reason'] ?? '',
        'message' => $_POST['message'] ?? '',
    ]);

    if (!validateText($values['name'])) $errors['name'] = "Name must be between 2 and 50 characters.";
    if (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) $errors['email'] = "Invalid email.";
    if (!validateNumber($values['age'], 18, 99)) $errors['age'] = "Age must be 18–99.";
    if (!validateOption($values['contact'], ['email', 'phone'])) $errors['contact'] = "Choose a contact method.";
    if (!validateOption($values['reason'], ['support', 'feedback', 'career'])) $errors['reason'] = "Select a reason.";

    $errorList = implode('', $errors);

    if ($errorList === '') {
        $message = "Form submitted successfully!";
        setcookie("username", $values['name'], time() + 3600);
        $_SESSION['contact'] = $values['contact'];
    } else {
        $message = "Please correct the form errors.";
    }
}
?>

<!DOCTYPE html>
<html>
<head><title>Form Result</title></head>
<body>
<h2><?php echo $message; ?></h2>
<?php if ($message === "Form submitted successfully!"): ?>
  <p>Hello, <?php echo htmlspecialchars($_COOKIE['username'] ?? ''); ?>!</p>
  <p>Preferred Contact: <?php echo $_SESSION['contact'] ?? ''; ?></p>
<?php endif; ?>

<?php session_destroy(); ?>
</body>
</html>
