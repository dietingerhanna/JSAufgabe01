<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BS2-Layout</title>
    <link rel="shortcut icon" type="image/jpeg" href='favicon.jpeg'>
    <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="node_modules/w3-css/w3.css">
    <link rel="stylesheet" href="node_modules/w3-css/w3-theme-indigo.css">
    <link rel="stylesheet" href="src/css/app.css">
</head>
<body>
    <nav class="w3-sidebar w3-bar-block w3-card w3-theme w3-border-bottom w3-border-gray"
         id="sidebar" sidebar-width="10000:15 650:100 1024:30">
        <button id="btnCloseSidebar" class="w3-bar-item w3-button w3-large">Schließen <i class="far fa-window-close"></i></button>
        <a href="javascript:void(0)" class="w3-bar-item w3-button bs2-menu" menu-target="area04">Schüler*Innen</a>
    </nav>
    <div id="sidebarContent">
        <header class="w3-theme">
            <div class="w3-bar w3-border">
                <a class="w3-bar-item w3-button" id="btnOpenSidebar"><i class="fa fa-bars"></i></a>
                <a class="w3-bar-item w3-button">BS Linz 2</a>
            </div>
        </header>
        <main class="w3-border w3-border-gray">
            <div id="area04" class="w3-border w3-border-theme w3-margin">
                <?php require "page01.html"; ?>
            </div>
       </main>
      <footer class="w3-theme">
        <div class="w3-row">
          <div class="w3-col s6 w3-center"><a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope fa-2x"></i></a></div>
          <div class="w3-col s6 w3-center"><a href="#" class="w3-bar-item w3-button"><i class="fa fa-globe fa-2x"></i></a></div>
        </div>
      </footer>
   </div>

   <script src="node_modules/@fortawesome/fontawesome-free/js/all.min.js"></script>
   <script  src="src/js/app.js"></script>
    <script  src="src/js/ajax.js"></script>
    <script  src="src/js/table.js"></script>
</body>

</html>