<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <!--CONFIRMATION MESSAGE AFTER USER SUBMITS FORM-->
    <title>Message Sent!</title>
    <!--CSS-->
    <link rel="stylesheet" href="./Scripts/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./Scripts/lib/bootstrap/dist/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="./Scripts/lib/font-awesome/css/font-awesome.min.css" />
</head>
<body>

<?php

$name = $_POST['fname'];

echo('<h1>Thank You, ' . $name . '. I will get back to you as soon as possible.</h1>');

?>

<!--JAVASCRIPT-->
    <script src="./Scripts/lib/jquery/dist/jquery.min.js"></script>
    <script src="./Scripts/lib/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>