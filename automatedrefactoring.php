<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">

<head>
    <title>Automatica11y</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="Shortcut Icon" href="images/favicon.png">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="stylesheet" type="text/css" media="print" href="css/home-print.css">
    <link rel="stylesheet" media="screen" type="text/css" href="./build/HTMLCS.css">

    <script type="text/javascript" src="./build/HTMLCS.js"></script>
    <script type="text/javascript" src="./home.js"></script>
    <script type="text/javascript" src="./jquery-1.8.0.min.js"></script>
</head>
<body>
<!--<div id="test-area">
    <div class="max-width">
        <div id=""></div>
		Old HTML: <div id="oldHTML"></div>
		<br><br>
		New HTML: <div id="newHTML"></div>
    </div>
</div>-->


Old HTML: <br><textarea type='text' id='oldHTML' rows='20' cols='100'></textarea><br>
New HTML: <br><textarea type='text' id='newHTML' rows='20' cols='100'></textarea>

<pre>
	<?php print_r($_POST); ?>
</pre>

<?php
/*$i=0;
foreach($_POST as $key=>$value){
    echo $key.' '.$value."\n";
    $i++;
}*/
$keys = array_keys($_POST);
$values = array_values($_POST);
?>


<script type="text/javascript">
	//POST all keys and values from php, then give to javascript variable
	var keys = [];
	var values = [];
	var dummy = [];
	<?php
	for($i = 0 ; $i < count($keys) - 1 ; $i++){ ?>
    	keys.push(<?php echo "'". $keys[$i] ."'" ?>);
    	<?php 
	}
	?>
	<?php
	//var_dump(count($values[0]));
	for($i = 0 ; $i < count($values) - 1 ; $i++){ 
		for($j = 0 ; $j < count($values[$i]) ; $j++){ 
		?>
		dummy.push(<?php echo "'". $values[$i][$j] ."'" ?>);
		<?php
			if(count($values[$i]) - 1 == $j){?>
    		values.push(dummy);
    		dummy = [];
    	<?php 
    		}
		}
	}
	?>
	console.log(keys);
	console.log(values);
    

    var paramKey = [];
    var paramValue = [];
    var countParam = <?php echo count($keys) ?>;

    var innerDoc = null;
    var allTagInsideIframe;
    var result = "";

    var source = <?php echo '"'. $_POST['source'] .'"' ?>;
    source = decodeURIComponent((source + '').replace(/\+/g, '%20'));
    document.getElementById("oldHTML").innerHTML = source;
    //oldSource = "<textarea type='text' name='source' id='asd' rows='20' cols='100'>"+decodeURIComponent((source + '').replace(/\+/g, '%20'))+"</textarea>";

    var techniques = {
        h91 : {
            refactorText:"",
            parameter:[],
            counter : 0
        },
        h30 : {

        }
    }

    //Define an iframe, place where automated refactoring heppened
    var iframe = document.createElement('iframe');
    iframe.id = "iframeId";
    //document.body.appendChild(iframe);

    //var html = source;
    //html = html.split("body")[1];
    //console.log(html);


    //iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
    //iframe.src = 'http://localhost/web_developer/Automatica11ly/automatedrefactoring.php';
    //iframe = document.body.insertBefore(iframe, null);
    /*if (iframe.contentDocument) {
        innerDoc = iframe.contentDocument;
    } else if (iframe.contentWindow) {
        innerDoc = iframe.contentWindow.document;
    }*/
    iframe.onload = function(){
        if (iframe.contentDocument) {
            innerDoc = iframe.contentDocument;
        } else if (iframe.contentWindow) {
            innerDoc = iframe.contentWindow.document;
        }

        innerDoc.body.innerHTML = source;

        for(var i = 0 ; i < keys.length ; i++) {
	        if(keys[i] == "h37") {
	        	/*var k = 0;
		        for(var j = 0 ; j < innerDoc.getElementsByTagName("img").length ; j++) {
		        	if(innerDoc.getElementsByTagName("img")[j].getAttribute("alt") == null) {
			            innerDoc.getElementsByTagName("img")[j].setAttribute("alt", values[i][k]);
			            k++;
		    	    }
		    	}*/
		    	insertTag("img", "alt", i);
	    	} else if(keys[i] == "h91Href") {
	    		/*var k = 0;
		        for(var j = 0 ; j < innerDoc.getElementsByTagName("a").length ; j++) {
		        	if(innerDoc.getElementsByTagName("a")[j].getAttribute("href") == null) {
		            	innerDoc.getElementsByTagName("a")[j].setAttribute("href", values[i][k]);
		            	k++;
		    	    }
		    	}*/
		    	insertTag("a", "href", i);
	    	} else if(keys[i] == "h91ValueLink") {
	    		var k = 0;
		        for(var j = 0 ; j < innerDoc.getElementsByTagName("a").length ; j++) {
		        	if(innerDoc.getElementsByTagName("a")[j].innerHTML == false) {
		            	innerDoc.getElementsByTagName("a")[j].innerHTML = values[i][k];
		            	k++;
		    	    }
		    	}
	    	}
    	}

    	function insertTag(element, attribute, i) {
    		var k = 0;
    		for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
	        	if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null) {
		            innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
		            k++;
	    	    }
		    }
    	}

        /*innerDoc.getElementsByTagName("a")[0].setAttribute("href", "yes");
        innerDoc.getElementsByTagName("a")[0].innerHTML = 
        <?php //echo '"'. $_POST['valueLink'][0] .'"' ?>;;*/
        
        allTagInsideIframe = innerDoc.querySelectorAll('body');

        for (var index = 0; index < allTagInsideIframe.length; index++) {
            result += allTagInsideIframe[index].outerHTML;
            //console.log(result);
            result += "\n";
        }
        document.getElementById("newHTML").innerHTML = result;
    };

    //innerDoc.getElementsByTagName("html")[0].setAttribute("lang", "en");
    document.body.appendChild(iframe);
    //console.log('iframe.contentWindow =', iframe.contentWindow);








    //document.getElementsByTagName("html")[0].innerHTML = "";
    /*var asdasd = decodeURIComponent((source + '').replace(/\+/g, '%20'));
    document.body.innerHTML = decodeURIComponent((source + '').replace(/\+/g, '%20'));*/
    //document.write(decodeURIComponent((source + '').replace(/\+/g, '%20')));




    /*for(var k = 0; k < countParam -1 ; k++){
        number = <?php //echo '"'. $_POST['source'] .'"' ?>;
		
		paramKey[number] = location.search.split("&")[k].replace("?","").split("=")[0];
		paramKey[number] = decodeURIComponent((paramKey[number] + '').replace(/\+/g, '%20'));
		
		paramValue[number] = location.search.split("&")[k].replace("?","").split("=")[1];
		paramValue[number] = decodeURIComponent((paramValue[number] + '').replace(/\+/g, '%20'));
		
		
		for(let i = 0 ; i < document.getElementsByTagName("a").length ; i++) {
			if (document.getElementsByTagName("a")[i].getAttribute("href") == false ||
				document.getElementsByTagName("a")[i].getAttribute("href") == null ||
				document.getElementsByTagName("a")[i].innerHTML == false) {
				
				for(let j = 0 ; j < document.getElementsByTagName("a").length ; j++) {
					if(paramKey[j] == "href["+i+"]") {
						document.getElementsByTagName("a")[i].setAttribute("href", paramValue[i]);
					}
					if(paramKey[j] == "valueLink["+i+"]") {
						document.getElementsByTagName("a")[i].innerHTML = paramValue[i];
					}
				}
			}
		}

		if (document.title == false) {
			document.title = "Please enter title text ";
		}
		if (document.getElementsByTagName("html")[0] == false) {
			document.getElementsByTagName("html")[0].setAttribute("lang", "en");
		}
	}*/



    //Old HTML
    /*var source = location.search.split("&")[countParam - 1].replace("?","").split("=")[1];
    oldSource = '<textarea type="text" name="source" id="asd" rows="20" cols="100">'+decodeURIComponent((source + '').replace(/\+/g, '%20'));+'</textarea>';

    document.body.innerHTML = decodeURIComponent((source + '').replace(/\+/g, '%20'));*/
    //var x = document.body.getElementsByTagName("*");
    //var x = document.querySelector('*');
    //var x = document.documentElement.getElementsByTagName("*");
    //var x = document.querySelectorAll('body > *');
    //console.log(x);
    //var x = '<textarea type="text" name="source" id="asd" rows="20" cols="100">'+x+'</textarea>';


    //document.body.parentNode.removeChild(document.body);
    //document.write();
    //document.getElementsByTagName("html")[0].innerHTML = "";

    //document.body = document.createElement("body");
    //document.body.innerHTML = document.createElement("div")setAttribute("id", "oldHTML");
    //document.body.innerHTML = "Old HTML: <div id='oldHTML'></div>New HTML: <br><textarea type='text' id='newHTML' rows='20' cols='100'></textarea>";
    //<div id='newHTML'></div> <textarea type='text' id='newHTML' rows='20' cols='100'></textarea>

    //document.getElementById("oldHTML").innerHTML = oldSource;
    //console.log(x);


    //newsource = document.getElementById("asd").value;


    //var result = "";
    //newsource = '<textarea type="text" name=source rows="20" cols="100">'+x+'</textarea>';
    /*x.forEach (query => {
        result += query;
    });*/
    //console.log(x);
    /*for (var index = 0; index < x.length; index++) {
    	result += x[index].outerHTML;
    	console.log(result);
    	result += "\n";

    	/*var z = x[index].cloneNode();
    	z.innerHTML = "";
    	result += z.outerHTML;
    	console.log(result);
    	result += "\n";*/
    //}
    //result += x[2].outerHTML;

    //result += x[x.length - 1].outerHTML;
    //console.log(x);
    /*result = [];
    for (var i = 0; i < x.length; i++) {
        result.push(x[i].outerHTML);
    }*/
    //document.getElementById("newHTML").innerHTML = result;
    //document.getElementById("newHTML").innerHTML = x;


    //var content = '<table id="test-results-table" class="table"><thead><tr><th scope="col">No</th><th scope="col">Success Criteria - Technique</th><th scope="col">Refactoring</th><th scope="col">Parameter</th></tr></thead>';


    //document.getElementById("demo").innerHTML = content;

</script>



</body>
</html>
