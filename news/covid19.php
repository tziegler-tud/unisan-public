<?php
$baseURL = "../";
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>News - Studentischer Sanitätsdienst der TU Dresden</title>
    <link rel="shortcut icon" type="image/x-icon" href="icons/favicon.ico">

<?php include_once($baseURL."common-includes.php"); ?>
<?php include_once("common-includes-news.php"); ?>

       <!--
         ***********************************
         ** specific js libs
         *********************************** -->

       <script src="/src/js/kontakt/kontakt.js"></script>
       <script src="/src/releases/1.01-20may26/js/news/covid19/init.js"></script>


       <!--
         ***********************************
         ** specific css files
         *********************************** -->
</head>

<!--Preloader-->
<?php include_once($baseURL."/preloader.html");?>

<!-- content-->

<?php include_once($baseURL."/nav.html"); ?>


<?php include_once("news.html"); ?>
<?php include_once("covid19.html"); ?>

</div>
</section>
</div>


<?php include_once($baseURL."/footer.html"); ?>

<?php include_once($baseURL."/floating_btn.html"); ?>



</body>
</html>