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
                insertAttrWhenParent("img", "alt", "a", i);
            }
        },
        h37 : {
            processAutomatedRefactoring: function(message, i){
                insertAttr("img", "alt", i);
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
                var labels = getElementsTag("label");
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
                                labels[l].setAttribute("for", values[i][k]);
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
                    var inputs = getElementsTag("input");
                    for(var j = 0 ; j < inputs.length ; j++) {
                        if(inputs[j].previousSibling.nodeName == "LABEL") {
                            var label = inputs[j].previousElementSibling;
                            if(label.getAttribute("for") == false || label.getAttribute("for") == null) {
                                label.setAttribute("for", values[i][k]);
                                k++;
                            }
                        } else { //label before form control not found
                            var label = innerDoc.createElement("label");
                            label.setAttribute("for", values[i][k]);
                            k++;

                            //var input = innerDoc.getElementsByTagName("input")[j];
                            inputs[j].parentNode.insertBefore(label, inputs[j]);
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
                    var centerElements = getElementsTag("center");
                    for(var j = 0 ; j < centerElements.length ; j++) {
                        var str = centerElements[j].outerHTML;
                        var regexpResult = str.replace(/<center/g, "<span style='text-align:center;'");
                        var regexpResult = regexpResult.replace(/<\/center>/g, "<\/span>");
                        centerElements[j].outerHTML = regexpResult;
                    }
                } else if(message == "align") {
                    var elements = getElementsAttr('align');
                    for(var j = 0 ; j < elements.length ; j++) {
                        var alignAttribute = elements[j].getAttribute('align');
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
                    changeTag("tt", /<tt/g, /<\/tt>/g, "code",i);
                } else if(message == "big") {
                    var bigElements = getElementsTag("big");
                    for(var j = 0 ; j < bigElements.length ; j++) {
                        var str = bigElements[j].outerHTML;
                        var regexpResult = str.replace(/<big/g, "<span style='font-size: larger;'");
                        var regexpResult = regexpResult.replace(/<\/big>/g, "<\/span>");
                        bigElements[j].outerHTML = regexpResult;
                    }
                }
            }
        },
        h63 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "scopeCol") {
                    var k = 0;
                    var tdElements = getElementsTag("td");
                    for(var j = 0 ; j < tdElements.length ; j++) {
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
                for(var j = 0 ; j < fieldsetElements.length ; j++) {
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



        //1.4.3
        g18 : {
            processAutomatedRefactoring: function(message, i){
                var elements = getElementsAttr('align');
                for(var j = 0 ; j < elements.length ; j++) {
                    var alignAttribute = elements[j].getAttribute('align');
                    elements[j].removeAttribute("align");
                    elements[j].setAttribute("style", "text-align: "+alignAttribute+";");
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
        /*var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
            if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||
                innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
                if(values[i][k] != null) {
                    innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
                    k++;
                }
            }
        }*/
        var k = 0;
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].getAttribute(attribute) == null ||
                elements[j].getAttribute(attribute) == false) {
                if(values[i][k] != null) {
                    elements[j].setAttribute(attribute, values[i][k]);
                    k++;
                }
            }
        }
    }

    function changeTag(element, regexOpenTag, regexCloseTag, newElement, i) {
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            var str = elements[j].outerHTML;
            var regexpResult = str.replace(regexOpenTag, "<"+newElement);
            var regexpResult = regexpResult.replace(regexCloseTag, "<\/"+newElement+">");
            elements[j].outerHTML = regexpResult;
        }
    }

    /*function editAttr(element, attribute, i) {
        var k = 0;
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(values[i][k] != null) {
                elements[j].setAttribute(attribute, values[i][k]);
                k++;
            }
        }
    }*/

    function editAttrWhenBlank(element, attribute, i) {
        var k = 0;
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].getAttribute(attribute) == false) {
                if(values[i][k] != null) {
                    elements[j].setAttribute(attribute, values[i][k]);
                    k++;
                }
            }
        }
    }

    function insertAttrWhenParent(element, attribute, parent, i) {
        /*var k = 0;
        for(var j = 0 ; j < innerDoc.getElementsByTagName(element).length ; j++) {
            if(innerDoc.getElementsByTagName(element)[j].parentNode.nodeName.toLowerCase() == parent) {
                if(innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == null ||
                    innerDoc.getElementsByTagName(element)[j].getAttribute(attribute) == false) {
                    innerDoc.getElementsByTagName(element)[j].setAttribute(attribute, values[i][k]);
                    k++;
                }
            }
        }*/
        var k = 0;
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].parentNode.nodeName.toLowerCase() == parent) {
                if(elements[j].getAttribute(attribute) == null ||
                    elements[j].getAttribute(attribute) == false) {
                    elements[j].setAttribute(attribute, values[i][k]);
                    k++;
                }
            }
        }
    }

    function insertAttrWhenAttr(element, attribute, checkAttribute, checkAttributeValue, i) {
        var k = 0;
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].getAttribute(checkAttribute) == checkAttributeValue) {
                if(elements[j].getAttribute(attribute) == null ||
                    elements[j].getAttribute(attribute) == false) {
                    elements[j].setAttribute(attribute, values[i][k]);
                    k++;
                }
            }
        }
    }

    function insertContent(element, i) {
        var k = 0;
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].innerHTML == false) { // kalau ada tag masih bug
                elements[j].innerHTML = values[i][k];
                k++;
            }
        }
    }

    function deleteAttrwhenAttr(element, attribute, delAttribute, i) {
        var elements = getElementsTag(element);
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].getAttribute(attribute) == false) {
                elements[j].removeAttribute(delAttribute);
            }
        }
    }


    //Define an iframe, place where automated refactoring heppened
    var iframe = document.createElement('iframe');
    iframe.id = "iframeId";

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

        allTagInsideIframe = innerDoc.querySelectorAll('body');

        for (var index = 0; index < allTagInsideIframe.length; index++) {
            result += allTagInsideIframe[index].outerHTML;
            //console.log(result);
            result += "\n";
        }
        document.getElementById("newHTML").innerHTML = result;
    };

    document.body.appendChild(iframe);
    //console.log('iframe.contentWindow =', iframe.contentWindow);

</script>
</body>
</html>
