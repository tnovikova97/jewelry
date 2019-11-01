<?php


if (isset($_POST["index"])) {
    $user = $_POST["login_auth"];
    echo "Добро пожаловать".$user;
}

?>