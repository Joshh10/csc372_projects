<?php

header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');  
header('Access-Control-Allow-Headers: Content-Type'); 

class ImageData {
    public string $alt;
    public string $text;
    public string $label;

    public function __construct(string $alt, string $text, string $label){
        $this->alt = $alt;
        $this->text = $text;
        $this->label = $label;
    }
}

$imageOne = new ImageData(
    'Sunset on the beach',
    'Chasing the last light of day.',
    'Sunsets'
);

$imageTwo = new ImageData(
    'Neon night lights',
    'A dance of light through the night.',
    'Night lights'
);

$imageThree = new ImageData(
    'Puppy on the beach',
    'Unconditional joy in every step.',
    'Animals'
);

$imageFour = new ImageData(
    'Close up of pink flowers',
    'Nature’s colorful embrace.',
    'Nature'
);

$imageFive = new ImageData(
    'Beach during sunset',
    'Golden hours and endless horizons.',
    'Beaches'
);


header('Content-Type: application/json');
echo json_encode([
    "night" => $imageOne,
    "light" => $imageTwo,
    "animals" => $imageThree,
    "nature" => $imageFour,
    "beach" => $imageFive
]);
?>
