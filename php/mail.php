<?php

  $name = $_POST['name'];
  $uni = $_POST['uni'];
  $sub = $_POST['sub'];
  $mail = $_POST['mail'];
  $msg = $_POST['msg'];


  $target = 'tom.ziegler1@gmx.de';
  $subject = "Kontaktformularnachricht | $name ";
  $content = 'Folgende Nachricht wurde verfasst:'."\r\n" .'Name: ' .$name ."\r\n" .' Email: ' . $mail ."\r\n" .' Hochschule: '.$uni ."\r\n" .' Studiengang: ' . $sub ."\r\n" .' Nachricht: ' .$msg;

/* send if correct, throw error otherwise */
    if ((!empty($name))&&(!empty($mail))) {

      mail($target, $subject, $content);


echo "<script>
alert('Message sent succesfully.');
</script>";
	}
	else {
	  echo 'Sie müssen alle Felder ausfüllen. <a href="www.unisan-dresden.de">Zurück</a>';
	}
?>