<!-- NAVBAR  -->
<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand">
                <a href="#cover">
                    <img src="./images/logo-blue.png" alt="Social Opera House Logo" class="hidden-xs">
                    <img src="./images/logo.png" alt="Social Opera House Logo" class="visible-xs">
                </a>
                <div id="lang">
                    <a href="?lang=it" class="<?php echo $lang == 'it' ? 'active' : ''; ?>">IT</a>|
                    <a href="?lang=en" class="<?php echo $lang == 'en' ? 'active' : ''; ?>">EN</a>
                </div>
                <h1>THE SOCIAL OPERA HOUSE</h1>
            </div>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="#teatro" class="page-scroll menu-teatro" title="Il Teatro" data-color="orange-text"><span>The Theatre</span></a></li>
                <li><a href="#filosofia" class="page-scroll menu-filosofia" title="La Filosofia" data-color="yellow-text"><span>The Philosophy</span></a></li>
                <li><a href="#stagione" class="page-scroll menu-opera" title="La Stagione d'Opera"  data-color="pink-text"><span>The Opera Season</span></a></li>
                <li><a href="#the_banker" class="page-scroll menu-banker" title="The Banker"  data-color="blue-dark-text"><span>The Banker</span></a></li>
                <li><a href="#sostieni" class="page-scroll menu-crowd" title="Sostieni i Progetti, Crowdfunding"  data-color="light-blue-text"><span>Crowdfunding</span></a></li>
                <li><a href="#chi_siamo" class="page-scroll menu-partners" title="Chi Siamo"  data-color="green-text"><span>Who Are We</span></a></li>
                <li><a href="#press" class="page-scroll menu-press" title="Press"  data-color="violet-text"><span>Partners And Press</span></a></li>
                <li><a href="#contatti" class="page-scroll menu-contatti" title="Contatti"  data-color="light-grey-text"><span>Contacts</span></a></li>
            </ul>
        </div>
        <div id="menu-title">
        </div>
    </div>
</nav>