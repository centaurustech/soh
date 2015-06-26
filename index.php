<?php
session_start();
header('Cache-control: private');
if (isset($_GET['lang'])) {
    $lang               = $_GET['lang'];
    $_SESSION['lang']   = $lang;
    setcookie('lang', $lang, time() + (3600 * 24 * 30));
} else if (isset($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
} else if (isset($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
} else {
    $lang = 'en';
}
if(!in_array($lang, array('it', 'en'))){
    $lang = 'en';
}
?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="./favicon.ico">
        <title>Social Opera House</title>
        <!-- Bootstrap core CSS -->
        <link href="./components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="./css/style.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body id="page-top">
        <?php include_once "./templates/cover.$lang.php"; ?>
        <?php include_once "./templates/navbar.$lang.php"; ?>
        <?php include_once "./templates/teatro.$lang.php"; ?>
        <?php include_once "./templates/filosofia.$lang.php"; ?>
        <?php include_once "./templates/stagione.$lang.php"; ?>
        <?php include_once "./templates/thebanker.$lang.php"; ?>
        <?php include_once "./templates/sostieni.$lang.php"; ?>
        <?php include_once "./templates/chisiamo.$lang.php"; ?>
        <?php include_once "./templates/partners.$lang.php"; ?>
        <?php include_once "./templates/contatti.$lang.php"; ?>

        <div class="modal fade bs-example-modal-lg" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <figure>
                            <img src="" alt="" title=""/>
                        </figure>
                        <div class="modal_bio">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="./components/jquery/dist/jquery.min.js"></script>
        <script src="./components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="./components/jquery-easing-original/jquery.easing.min.js"></script>
        <script src="./script/scrolling-nav.js"></script>
        <script src="./script/chisiamo.js"></script>
        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-64062957-1', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>