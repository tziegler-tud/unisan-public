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

       <!--
         ***********************************
         ** specific js libs
         *********************************** -->

       <script src="/src/js/news/init.js"></script>


       <!--
         ***********************************
         ** specific css files
         *********************************** -->
       <link rel="stylesheet" type="text/css" href="/src/css/lssc_loader_news.css" />
</head>

<!--Preloader-->
<?php include_once($baseURL."preloader.html");?>

<!-- content-->

<?php include_once($baseURL."nav.html"); ?>


<?php include_once("news.html"); ?>
//include news body here
</div>


<?php include_once($baseURL."footer.html"); ?>

<?php include_once($baseURL."floating_btn.html"); ?>



</body>
</html>