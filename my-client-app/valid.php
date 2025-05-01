<?php


function validateText($input, $min, $max) {
    $len = strlen(trim($input));
    return $len >= $min && $len <= $max;
}

function validateNumberInRange($input, $min, $max) {
    return is_numeric($input) && $input >= $min && $input <= $max;
}

function validateOption($input, $allowed) {
    return in_array($input, $allowed);
}
?>
