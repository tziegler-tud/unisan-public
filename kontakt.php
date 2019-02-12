<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Kontakt - Studentischer Sanitätsdienst der TU Dresden</title>
    <link rel="shortcut icon" type="image/x-icon" href="icons/favicon.ico">

<?php include_once("common-includes.php"); ?>

       <!--
         ***********************************
         ** specific js libs
         *********************************** -->

       <script src="src/js/kontakt/kontakt.js"></script>
       <script src="src/js/kontakt/init.js"></script>


       <!--
         ***********************************
         ** specific css files
         *********************************** -->
       <link rel="stylesheet" type="text/css" href="src/css/lssc_loader_kontakt.css" />

</head>

<!--Preloader-->
<body id="body" class="no-js">
<div id="preloader" class="preloader preloader-active">
    <div class="preloader-content">
        <svg width="108px" height="128px" viewBox="0 0 54 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <path class="beat-loader" d="M0.5,38.5 L16,38.5 L19,25.5 L24.5,57.5 L31.5,7.5 L37.5,46.5 L43,38.5 L53.5,38.5" id="Path-2" stroke-width="2" sketch:type="MSShapeGroup"></path>
            </g>
        </svg>
        <span>loading...</span>
    </div>
</div>

<!-- no js dash -->
<div id="no-js-dash">
    <div id="no-js-text">
        <span>Sie haben Javascript in ihrem Browser deaktiviert. Aktivieren Sie Javascript, um alle Funktionen der Website nutzen zu können.</span>
    </div>
</div>

<!-- content-->

<?php include_once("nav.html"); ?>


<?php include_once("kontakt.html"); ?>

<?php include_once("footer.html"); ?>

<div id="btn-jmptop" class="floating-button">
    <a href="#body">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </a>
</div>

<div id="background"></div>

</body>
</html>