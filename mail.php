<?php

$recepient = "ecole@fly-and-film.com";
$sitename = "Fly&Film";

$name = trim($_POST["name"]);
$birth = trim($_POST["date_wrap_birthDay"]);
$mail = trim($_POST["mail"]);
$phone = trim($_POST["phone"]);
$adress = trim($_POST["adress"]);
$date = htmlspecialchars ($_POST["date"]);
$mess = trim($_POST["mess"]);

$message = "Nom et prénom: $name \nDate de naissance: $birth \nAdresse email: $mail \nNumero de telephone: $phone \nAdresse physique: $adress \nOffre week-end: $date \nMessage: $mess";
$pagetitle = "Un nouveau site d'application \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
