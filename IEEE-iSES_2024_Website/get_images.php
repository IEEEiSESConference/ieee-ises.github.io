<?php
// Specify the folder containing the images
$folderPath = "images/event_photos/";

// Get all image files from the folder
$imageFiles = glob($folderPath . "*.{jpg,png,gif,JPG}", GLOB_BRACE);

// Return the image filenames as a JSON array
echo json_encode(array_map('basename', $imageFiles));
?>
