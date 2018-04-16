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
        },



        //1.3.1
        h42 : {
            processAutomatedRefactoring: function(message, i){
                insertContent(message, i);
            }
        },
        h44 : {
            processAutomatedRefactoring: function(message, i){
                //if(message == "NonExistent" || message == "NonExistentFragment"){
                //this._labelNames = {};
                var k = 0;
                var labels = innerDoc.getElementsByTagName("label");

                for (var l = 0; l < labels.length; l++) {
                    if (labels[l].getAttribute("for") !== null && labels[l].getAttribute("for") !== "") {
                        var labelFor = labels[l].getAttribute("for");
                        /*if (this._labelNames[labelFor] && this._labelNames[labelFor] !== null) {
                            this._labelNames[labelFor] = null;
                        } else {*/
                        //this._labelNames[labelFor] = labels[l];
                        var refNode = innerDoc.getElementById(labelFor);
                        if (refNode === null) {
                            /* var level = HTMLCS.ERROR;
                             var msg = 'This label\'s "for" attribute contains an ID that does not exist in the document.';
                             var code = "H44.NonExistent";*/
                            /*if (HTMLCS.isFullDoc(innerDoc) === true || innerDoc.nodeName.toLowerCase() === "body") {
                                level = HTMLCS.WARNING;
                                msg = 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.';
                                var code = "H44.NonExistentFragment";
                            }*/
                            //editAttr("label", "for", l);

                            //for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
                            /*if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||
                                innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {*/
                            if(values[i][k] != null) {
                                innerDoc.getElementsByTagName("label")[l].setAttribute("for", values[i][k]);
                                k++;
                            }
                            //}
                        } /*else {
		                        var nodeName = refNode.nodeName.toLowerCase();
		                        if ("input|select|textarea|button|keygen|meter|output|progress".indexOf(nodeName) === -1) {
		                            HTMLCS.addMessage(HTMLCS.WARNING, labels[i], 'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.', "H44.NotFormControl");
		                        }
		                    }
		                }*/
                    }
                    //}
                }
            }
        },
        f68 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "for") {
                    var k = 0;
                    for(var j = 0 ; j < innerDoc.getElementsByTagName("input").length ; j++) {
                        if(innerDoc.getElementsByTagName("input")[j].previousElementSibling.nodeName == "LABEL") {
                            var label = innerDoc.getElementsByTagName("input")[j].previousElementSibling;
                            if(label.getAttribute("for") == false || label.getAttribute("for") == null)
                                label.setAttribute("for", values[i][k]);
                                k++;
                        } else {
                            var label = innerDoc.createElement("label");
                            label.setAttribute("for", values[i][k]);
                            k++;

                            var input = innerDoc.getElementsByTagName("input")[j];
                            input.parentNode.insertBefore(label, input);
                        }
                    }
                } else if(message == "hidden") {
                    //delete tag label atau ganti niali for
                }
            }
        },
        h65 : {
            processAutomatedRefactoring: function(message, i){
                editAttrWhenBlank("input", "title", i);
            }
        },
        h49 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "center") {
                    var k = 0;
                    for(var j = 0 ; j < innerDoc.getElementsByTagName("center").length ; j++) {
                        var str = innerDoc.getElementsByTagName("center")[j].outerHTML; 
                        var regexpResult = str.replace(/<center/g, "<span style='text-align:center;'");
                        var regexpResult = regexpResult.replace(/<\/center>/g, "<\/span>");
                        innerDoc.getElementsByTagName("center")[j].outerHTML = regexpResult;

                        /*changeTag("center", /<center/g, /<\/center>/g, "span",i);*/
                    }
                } else if(message == "align") {
                    var k = 0;
                    var elements = getElementsAttr('align');
                    
                    for(var j = 0 ; j < elements.length ; j++) {
                        var alignAttribute = elements[j].getAttribute('align');

                        /*var str = elements[j].outerHTML; 
                        var regexpResult = str.replace(/align=/g, "style='text-align:"+alignAttribute+"';");
                        elements[j].outerHTML = regexpResult;*/

                        elements[j].removeAttribute("align");
                        elements[j].setAttribute("style", "text-align: "+alignAttribute+";");
                    }
                } else if(message == "b") {
                    changeTag("b", /<b/g, /<\/b>/g, "strong",i);
                } else if(message == "i") {
                    changeTag("i", /<i/g, /<\/i>/g, "em",i);
                } else if(message == "strike") {
                    changeTag("strike", /<strike/g, /<\/strike>/g, "del",i);
                } else if(message == "tt") {
                    changeTag("tt", /<tt/g, /<\/tt>/g, "code",i);s
                } else if(message == "big") {
                    var k = 0;
                    for(var j = 0 ; j < innerDoc.getElementsByTagName("big").length ; j++) {
                        var str = innerDoc.getElementsByTagName("big")[j].outerHTML; 
                        var regexpResult = str.replace(/<big/g, "<span style='font-size: larger;'");
                        var regexpResult = regexpResult.replace(/<\/big>/g, "<\/span>");
                        innerDoc.getElementsByTagName("big")[j].outerHTML = regexpResult;
                    }
                }
            }
        },
        h63 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "scopeCol") {
                    var k = 0;
                    var tdElements = getElementsTag("td");
                    var tdLength = getElementsTag("td").length;
                    for(var j = 0 ; j < tdLength ; j++) {
                        if(tdElements[j].getAttribute("scope") == "col"){
                            str = tdElements[j].outerHTML; 
                            var regexpResult = str.replace(/<td/g, "<th");
                            var regexpResult = regexpResult.replace(/<\/td>/g, "<\/th>");
                            tdElements[j].outerHTML = regexpResult;
                        }
                    }
                }
            }
        },
        h71 : {
            processAutomatedRefactoring: function(message, i){
                var k = 0;
                var fieldsetElements = getElementsTag("fieldset");
                var fieldsetLength = getElementsTag("fieldset").length;
                for(var j = 0 ; j < fieldsetLength ; j++) {
                    if(fieldsetElements[j].querySelector("legend") == null ||
                        fieldsetElements[j].querySelector("legend").parentNode.nodeName.toLowerCase() != "fieldset") {
                        var legend = innerDoc.createElement("legend");
                        legend.innerHTML = values[i][k];
                        k++;

                        fieldsetElements[j].insertBefore(legend, fieldsetElements[j].firstChild);
                    }
                }
            }
        }
    };



    function getElementsAttr(attribute) {
        return innerDoc.querySelectorAll('[' + attribute + ']');
    }

    function getElementsTag(element) {
        return innerDoc.querySelectorAll(element);
    }

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

    function changeTag(element, regexOpenTag, regexCloseTag, newElement, i) {
        var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
            var str = innerDoc.getElementsByTagName(element)[j].outerHTML; 
            var regexpResult = str.replace(regexOpenTag, "<"+newElement);
            var regexpResult = regexpResult.replace(regexCloseTag, "<\/"+newElement+">");
            innerDoc.getElementsByTagName(element)[j].outerHTML = regexpResult;
        }
    }

    function editAttr(element, attribute, i) {
        var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
            /*if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||
                innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {*/
            if(values[i][k] != null) {
                innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
                k++;
            }
            /*}*/
        }
    }

    function editAttrWhenBlank(element, attribute, i) {
        var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
            if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
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
            if(innerDoc.getElementsByTagName(element)[j].innerHTML == false) { // kalau ada tag masih bug
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
