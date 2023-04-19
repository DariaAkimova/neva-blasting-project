<?
$reg_ex_phone = '/^[\d\+][\d\(\)\ -]{4,14}\d$/';
$reg_ex_email = '/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i';

// $mysql = new mysqli('localhost', 'u1790818_stflow', 'zR3uR6xE8e', 'u1790818_stitch-flow');

$mail_subject = 'Новая заявка Stitch flow';
$mail_to = 'stitch-flow@mail.ru';

if (isset($_POST['user-name']) && isset($_POST['phone']) && isset($_POST['email'])) {
    $name = trim(htmlspecialchars($_POST['user-name']));
    $phone = trim(htmlspecialchars($_POST['phone']));
    $email = trim(htmlspecialchars($_POST['email']));
    $comment = trim(htmlspecialchars($_POST['comments']));
    $spam = trim(htmlspecialchars($_POST['other-comment']));
    $time = date('Y-m-d H:i:s');

    $mail_message = $time . "\n" . 'Name:' . ' ' . $name . "\n" . 'Phone:' . ' ' . $phone . "\n" . 'email:' . ' ' . $email . "\n" . 'comments:' . ' ' . $comment . "\n";

    // $mysql->query("SET NAMES 'utf8'");
    // $mysql_error = $mysql->connect_error;
    // if ($mysql_error) {
    //     $sqlErrorFile = fopen('sql-error.txt', 'a');
    //     fwrite($sqlErrorFile, $time . ' ' . $mysql_error . "\n");
    //     fclose($sqlerrorFile);
    // } else {

    //     if (empty($spam)) {
    //         $mysql->query("INSERT INTO users (name, email, phone, user_comments) VALUES('$name', '$email', '$phone', '$comment')");
    //         mail($mail_to, $mail_subject, $mail_message);
    //     } else {
    //         $mysql->query("INSERT INTO spam_mails (name, email, phone, user_comments) VALUES('$name', '$email', '$phone', '$comment')");
    //     }
    // }
    // $mysql->close();

    if ((preg_match($reg_ex_phone, $phone)) && (preg_match($reg_ex_email, $email))) {
        echo "Спасибо, ваша заявка принята. Вы можете <a href=\"index.html\"> вернуться на сайт </a>."; /* на случай проблем с js*/
    } else {
        echo " <a href=\"index.html\">Вернитесь на сайт </a> и введите корректные данные! Таже вы можете написать мне по указанным контактам."; /* на случай проблем с js */
    }
} else {
    // $emptyFile = fopen('no-data.txt', 'a');
    // fwrite($emptyFile, $time . ' ' . 'Name:' . ' ' . $name . ' ' . 'Phone:' . ' ' . $phone . ' ' . 'email:' . ' ' . $email . ' ' . $comment . "\n");
    // fclose($emptyFile);
    echo "<a href=\"index.html\">Вернитесь на сайт </a> и введите данные! Таже вы можете написать мне по указанным контактам."; /* на случай проблем с js*/
}
