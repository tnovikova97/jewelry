<?php
    if (isset($_POST["reg-form"])) {
        $user = $_POST["username"];
        echo "Добро пожаловать".$user;
    }
?>