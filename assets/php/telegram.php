<?php

/* https://api.telegram.org/bot1728852333:AAFhV-nwM6tHJc6eJ1iia1aqT7r_xb58JJM/getUpdates,
где, 1728852333:AAFhV-nwM6tHJc6eJ1iia1aqT7r_xb58JJM - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];
$token = "1728852333:AAFhV-nwM6tHJc6eJ1iia1aqT7r_xb58JJM";
$chat_id = "-592734020";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'message:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header("Location: http://m97062j8.beget.tech/");
} else {
  echo "Error";
}
?>