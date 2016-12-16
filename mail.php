<?php

$recepient = "raman.yasel@yahoo.com";
$sitename = "fly&film";

$log = trim($_POST["login"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$gold = trim($_POST["gold"]);
$mail = trim($_POST["mail"]);
$message = "Логин: $log \nИмя клиента: $name \nТелефон клиента: $phone \nПотратить золотых: $gold \nПочта клиента: $mail";

$pagetitle = "Новая заявка с сайта Лепреконов \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
