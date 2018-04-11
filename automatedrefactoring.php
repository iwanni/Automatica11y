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
		/*h91 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "Href") {
                    insertAttr("a", "href", i);
                } else if(message == "Content") {
                    insertContent("a", i);
                }
            }
        },*/

        //1.1.1
        h30 : {
            processAutomatedRefactoring: function (message, i) {
                /*var k = 0;
                for (var j = 0; j < innerDoc.getElementsByTagName("img").length; j++) {
                    if (innerDoc.getElementsByTagName("img")[j].parentNode.nodeName.toLowerCase() == "a") {
                        insertAttr("img", "alt", i, j, k);
                    }
                }*/
                insertAttrWhenParent("img", "alt", "a", i);
            }
        },
        h37 : {
            processAutomatedRefactoring: function(message, i){
                //var k = 0;
                //for(var j = 0 ; j < innerDoc.getElementsByTagName("img").length ; j++) {
                    //if(innerDoc.getElementsByTagName("img")[j].parentNode.nodeName.toLowerCase() != "a") {
                        insertAttr("img", "alt", i);
                    //}
                //}
            }
        },
        h67 : {
        	processAutomatedRefactoring: function(message, i){
                deleteAttrwhenAttr("img", "alt", "title", i);
            }
        }, 
        h36 : {
        	processAutomatedRefactoring: function(message, i){
                insertAttrWhenAttr("input", "alt", "type", "image", i);
            }
        },
        h24 : {
        	processAutomatedRefactoring: function(message, i){
                insertAttr("area", "alt", i);
            }
        },
        h53aria6 : {
        	processAutomatedRefactoring: function(message, i){
                insertContent("object", i);
            }
        },
        h35 : {
        	processAutomatedRefactoring: function(message, i){
        		if(message == "alt") {
                	insertAttr("applet", "alt", i);
            	} else if(message == "body") {
            		insertContent("applet", i);
            	}
            }
        }
    };


    function insertAttr(element, attribute, i) {
        var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
	        if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||
	            innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
	        	if(values[i][k] != null) {
	            	innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
	            	k++;
	        	}
	        }
        }
    }

    function insertAttrWhenParent(element, attribute, parent, i) {
        var k = 0;
            for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
    	        if(innerDoc.getElementsByTagName(element)[j].parentNode.nodeName.toLowerCase() == parent) {
        		    if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||	
        		    	innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
                		innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
                	k++;
            	}
        	}
    	}
	}

	function insertAttrWhenAttr(element, attribute, checkAttribute, checkAttributeValue, i) {
        var k = 0;
            for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
    	        if(innerDoc.getElementsByTagName(element)[j].getAttribute(checkAttribute) == checkAttributeValue) {
        		    if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||	
        		    	innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
                		innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
                	k++;
            	}
        	}
    	}
	}

    function insertContent(element, i) {
        var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
            if(innerDoc.getElementsByTagName(element)[j].innerHTML == false) {
                innerDoc.getElementsByTagName(element)[j].innerHTML = values[i][k];
                k++;
            }
        }
    }

    function deleteAttrwhenAttr(element, attribute, delAttribute, i) {
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
	        if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
	            innerDoc.getElementsByTagName(element)[j].removeAttribute(delAttribute);
	        }
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
            var technique = keys[i].split("_")[0];
            var message = keys[i].split("_")[1];

            if(techniques[technique] != null) {
            	techniques[technique].processAutomatedRefactoring(message, i);
        	}
        }



        /*innerDoc.getElementsByTagName("a")[0].setAttribute("href", "yes");
        innerDoc.getElementsByTagName("a")[0].innerHTML = 
        //echo '"'. $_POST['valueLink'][0] .'"' ?>;;*/

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
        number =  //echo '"'. $_POST['source'] .'"' ?>;
		
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
