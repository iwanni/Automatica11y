<!DOCTYPE html>
<html lang="en">
  <head>
	<title>Automatica11y</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="assets/ico/favicon.ico">

    <title>SOLID - Bootstrap 3 Theme</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">


    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">AUTOMATICA11Y.</a>
        </div>
        <div class="navbar-collapse collapse navbar-right">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">GITHUB</a></li>
            <li><a href="about.html">ABOUT</a></li>
            <li><a href="contact.html">CONTACT</a></li>
            <!-- <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">PAGES <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="blog.html">BLOG</a></li>
                <li><a href="single-post.html">SINGLE POST</a></li>
                <li><a href="portfolio.html">PORTFOLIO</a></li>
                <li><a href="single-project.html">SINGLE PROJECT</a></li>
              </ul>
            </li> -->
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

	<!-- *****************************************************************************************************************
	 HEADERWRAP
	 ***************************************************************************************************************** -->
	 <?php 
	 /*if (!empty($_GET['page'])) {
		$page = $_GET['page']); 
		//$page = basename($action); 
		include("$page.php");
	}*/?>

	<div id="headerwrap">
	    <div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<h1>Enhance your web accessibility.</h1>
					<h3>Check --> Select --> Fix</h3>
					<h5>This tool made based on standard Web Content Accessibility Guideliness 2.0</h5>
					<h5>and HTML Code Sniffer.</h5><br>			
				</div>
				<div class="col-lg-8 col-lg-offset-2 himg">
					<form id="runHTMLCS" action="" onsubmit="javascript:runHTMLCSTest(false); return false;">
						<div class="form-group textarea-wrapper">
							<!-- <label for="comment">Comment:</label> -->
							<textarea class="form-control" rows="10" id="source" placeholder="Put your code here, EX: <p>Code</p>"><?php if(isset($_POST['source'])) { echo htmlentities($_POST['source']); } ?></textarea>
						</div>
						<div class="row">
							<div class="col-sm-8">
								<div class="pull-left">
									<label class="radio-inline">
										<input type="radio" value="WCAG2A" name="level" id="WCAG2A"> Level A
									</label>
									<label class="radio-inline">
										<input type="radio" value="WCAG2AA" name="level" id="WCAG2AA"> Level AA
									</label>
									<label class="radio-inline">
										<input type="radio" value="WCAG2AAA" name="level" id="WCAG2AAA" checked> Level AAA
									</label>
								</div>
							</div>
							<div class="col-sm-4">
								<button type="submit" id="run-button" class="btn btn-theme pull-right">Check</button>
							</div>
						</div>
					<form>
					<!-- <img src="assets/img/browser.png" class="img-responsive"> -->
				</div>
			</div><!-- /row -->
	    </div> <!-- /container -->
	</div><!-- /headerwrap -->

	<!-- *****************************************************************************************************************
	 SERVICE LOGOS
	 ***************************************************************************************************************** -->
	 <!--<div id="service">
	 	<div class="container">
 			<div class="row">				
 				<div class="col-xs-8 col-xs-offset-2 centered">
			 		<h2>Check Result.</h2>
			 		<br>
	 				<div class="hline"></div>
	 				<br>
 				</div>
 				<div class="col-xs-2 col-xs-offset-3 text-center">
 					<div class="img-circle check-error center">
 						<span class="check-number">12</span>
 					</div>
 					<h4>Error</h4>
 				</div>
 				<div class="col-xs-2 text-center">
 					<div class="img-circle check-warning center">
 						<span class="check-number">12</span>
 					</div>
 					<h4>Warning</h4>
 				</div>
 				<div class="col-xs-2 text-center">
 					<div class="img-circle check-notice center">
 						<span class="check-number">12</span>
 					</div>
 					<h4>Notice</h4>
 				</div>
				
 				<div class="col-xs-10 col-xs-offset-1">
					<table class="table table-condensed table-bordered table-hover check-table">
						<thead>
						<tr>
						<th><input type="checkbox" onClick="toggle(this)" /></th>
						<th>No</th>
						<th>Message</th>
						<th>Principle</th>
						<th><acronym title="Success Criterion">SC</acronym></th>
						<th>Techniques</th>
						</tr>
						</thead>
						<tbody>
						<tr><td></td><td>1</td><td>Message</td><td>Principle</td><td>SC</td><td>Technique</td></tr></tbody>
					</table>
					<a href="#" class="btn btn-theme btn-lg btn-block">Finish Select Technique To Fix</a>
				</div>
				
				
	 		</div>
	 	</div>container
	 </div>service -->
	 
	<div id="resultsWrapper"></div>

	<!-- *****************************************************************************************************************
	 FOOTER
	 ***************************************************************************************************************** -->
	 <div id="footerwrap">
	 	<div class="container">
		 	<div class="row">
		 		<div class="col-lg-4">
		 			<h4>About</h4>
		 			<div class="hline-w"></div>
		 			<p>Tesis.</p>
		 		</div>
		 		<div class="col-lg-4">
		 			<h4>Social Links</h4>
		 			<div class="hline-w"></div>
		 			<p class="text-center">
		 				<a href="#"><i class="fa fa-facebook"></i></a>
		 				<a href="#"><i class="fa fa-instagram"></i></a>
		 				<a href="#"><i class="fa fa-tumblr"></i></a>
		 			</p>
		 		</div>
		 		<div class="col-lg-4">
		 			<h4>Our Bunker</h4>
		 			<div class="hline-w"></div>
		 			<p>
		 				ITB.<br/>
		 			</p>
		 		</div>
		 	
		 	</div><! --/row -->
	 	</div><! --/container -->
	 </div><! --/footerwrap -->

	<pre>
		<?php //print_r(htmlentities($_POST['source'])); ?>
	</pre>
	 
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<script src="./build/HTMLCS.js"></script>
    <script src="./home.js"></script>
	<script src="assets/js/jquery-1.8.0.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/he.js"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="assets/js/retina-1.1.0.js"></script>
	<script src="assets/js/jquery.hoverdir.js"></script>
	<script src="assets/js/jquery.hoverex.min.js"></script>
	<script src="assets/js/jquery.prettyPhoto.js"></script>
  	<script src="assets/js/jquery.isotope.min.js"></script>
  	<script src="assets/js/custom.js"></script>-->

  	<script>
  	
  	</script>
  </body>
</html>
