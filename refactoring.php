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

    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-359178-16']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
</head>
<body>
<div id="test-area">
    <div class="max-width">

        <form action="automatedrefactoring.php" method="POST">
            <div id="demo"></div>
            <div id="mySource"></div>
            <input type="submit" value="Submit">
        </form>
        Ada snippet kode yang tidak ditemukan pada html karena penambahn html yang dilakukan mealui javascript
    </div>

</div>
<pre>
<?php print_r($_POST); ?>

<?php echo '"'. $_POST['source'] .'"' ?>
</pre>


<!--<script type="text/javascript" src="./home.js"></script>-->
<script type="text/javascript" src="file.json"></script>
<script type="text/javascript" src="./jquery-1.8.0.min.js"></script>
<script type="text/javascript">
    //JSON FILE 


    /*function loadJSON(callback) {


    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'file.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            //console.log(xobj.responseText);
            //window.jsonresponse = JSON.parse(xobj.responseText);
            //APP = window.jsonresponse;
            //console.log(window.jsonresponse);
            // Assuming json data is wrapped in square brackets as Drew suggests
            //init(jsonresponse);
            callback(JSON.parse(xobj.responseText));
        }
    }
    xobj.send(null);
}*/


    //}

    // Call to function with anonymous callback


    //include the   'async':false   parameter or the object data won't get captured when loading
    /*var json = $.getJSON({'url': "http://localhost/web_developer/Automatica11ly/file.json", 'async': false});

    //The next line of code will filter out all the unwanted data from the object.
    json = JSON.parse(json.responseText);

    //You can now access the json variable's object data like this json.a and json.c
    //document.write(json.a);
    console.log(json);*/


    var mydata = JSON.parse(JSON.stringify(data));
    console.log(mydata);

    var techniques = {
        h91 : {
            refactorText:"",
            parameter:[],
            counter0 : 0,   //0 = Href
            counter1 : 0,   //1 = Content

            processErrorMessage: function(errorMessage, element) {
                if(errorMessage == "H91_AEmptyNoId_4.1.2" || errorMessage == "H91_AEmptyWithName" || errorMessage == "H91_AEmptyNoId") {
                    //this.refactorText = mydata.h91.refactorText.aNoContentHref;
                    this.refactorText = textRefactor(element, "aNoContentHref");

                    //this.parameter[0] = processInputText(mydata.h91.parameterText.href, "h91_Href["+ this.counter0 + "]");
                    this.parameter[0] = textFormParamater("text", element, "href","Href", this.counter0);

                    this.parameter[1] = textFormParamater("text", element, "content","Content", this.counter1);
                    //console.log(this.parameter[0]);
                    //console.log(this.parameter[1]);
                    this.counter0++;
                    this.counter1++;
                } else if (errorMessage == "H91_ANoContent_4.1.2") {
                    //this.refactorText = mydata.h91.refactorText.aNoContent;
                    this.refactorText = textRefactor(element, "aNoContent");
                    //this.parameter[0] = processInputTextHidden("h91Href["+ this.counter + "]");
                    //"<input type='hidden' id='"+"h91Href["+ this.counter + "]"+"' type='text' name='"+"h91Href["+ this.counter + "]"+"'></input>";
                    //processInputText(mydata.h91.parameterText.content, "h91ValueLink["+ this.counter + "]");
                    this.parameter[0] = textFormParamater("text", element, "content","Content", this.counter1);
                    this.counter1++;
                } else if (errorMessage == "H91_APlaceholder" || errorMessage == "H91_ANoHref") {
                    this.refactorText = mydata.h91.refactorText.aNoHref;
                    this.parameter[0] = processInputText(mydata.h91.parameterText.href, "h91_Href["+ this.counter0 + "]");
                }
                //this.counter++;
            }
        },
        g150g151g157 : {
            refactorText:"",
            parameter:[],
            counter : 0,

            processErrorMessage: function(errorMessage) {
                if(errorMessage == "G150_NaNG151_NaNG157_NaN") {
                    this.refactorText =  mydata.g151.refactorText.NaN;
                    this.parameter[0] = processInputTextArea(mydata.g151.parameterText.content, "content["+ this.counter + "]");
                    this.parameter[1] = processCheckBox(mydata.g150g157.parameterText.content, "checkbox["+ this.counter + "]");
                    console.log(this.parameter[0]);
                }
                this.counter++;
            }
        },
        g158 : {
            refactorText:"",
            parameter:[],
            counter : 0,

            processErrorMessage: function(errorMessage) {
                if(errorMessage == "G158_NaN") {
                    this.refactorText =  mydata.g158.refactorText.NaN;
                    this.parameter[0] = processInputTextArea(mydata.g158.parameterText.content1, "content["+ this.counter + "]");
                    this.parameter[1] = processCheckBox(mydata.g158.parameterText.content2, "checkbox["+ this.counter + "]");
                    console.log(this.parameter[0]);
                }
                this.counter++;
            }
        },
        g159g166 : {
            refactorText:"",
            parameter:[],
            counter : 0,

            processErrorMessage: function(errorMessage) {
                if(errorMessage == "G159_NaNG166_NaN") {
                    this.refactorText =  mydata.g159g166.refactorText.NaN;
                    this.parameter[0] = processInputTextArea(mydata.g159g166.parameterText.content1, "content["+ this.counter + "]");
                    this.parameter[1] = processCheckBox(mydata.g159g166.parameterText.content2, "checkbox["+ this.counter + "]");
                    console.log(this.parameter[0]);
                }
                this.counter++;
            }
        },
        g54g81 : {
            refactorText:"",
            parameter:[],
            counter : 0,

            processErrorMessage: function(errorMessage) {
                if(errorMessage == "G54_NaNG81_NaN") {
                    this.refactorText =  mydata.g54g82.refactorText.NaN;
                    this.parameter[0] = processRadioButton(mydata.g54g82.parameterText.content1, "radiobutton["+ this.counter + "]");
                    this.parameter[1] = processInputTextArea("", "content["+ this.counter + "]");
                    this.parameter[2] = processRadioButton(mydata.g54g82.parameterText.content2, "radiobutton["+ this.counter + "]");
                }
            }
        },
        h57 : {
            parameter:[],
            counter : 0,

            processErrorMessage: function(errorMessage) {
                if (errorMessage == "H57_2_3.1.1") {
                    this.refactorText = mydata.h57.refactorText.content;
                    this.parameter[0] = processInputText(mydata.h57.parameterText.content, "h57["+ this.counter + "]");
                }
                this.counter++;
            }
        },

        //1.1.1
        h30: {
            refactorText:"",
            parameter:[],
            counter : 0,
            processErrorMessage: function(errorMessage, technique) {
                this.refactorText = textRefactor(technique, "content");
                this.parameter[0] = textFormParamater("text", technique, "content","", this.counter);
            }
        },
        h37 : {
            refactorText:"",
            parameter:[],
            counter : 0,

            processErrorMessage: function(errorMessage, technique) {
                //if (errorMessage == "H37_1.1.1") {
                    /*this.refactorText = mydata.h37.refactorText.content;
                    this.parameter[0] = processInputText(mydata.h37.parameterText.content, "h37["+ this.counter + "]");*/
                    this.refactorText = textRefactor(technique, "content");
                    //this.parameter[0] = processInputText(mydata[element].parameterText.content, "h37["+ this.counter + "]");
                    this.parameter[0] = textFormParamater("text", technique, "content","", this.counter);
                //}
                this.counter++;
            }
        },
        h67 : {
            refactorText:"",
            parameter:[],
            counter : 0,
            processErrorMessage: function(errorMessage, technique) {
                //if(errorMessage == "H67_1_1.1.1") {
                    this.refactorText = textRefactor(technique, "content");
                    //this.parameter[0] = processInputHidden(technique+"_"+""+"["+ this.counter + "]");
                    this.parameter[0] = textFormParamater("hidden", technique, "content","", this.counter);
                    this.counter++;
                //}
            }
        },
        h36 : {
            refactorText:"",
            parameter:[],
            counter : 0,
            processErrorMessage: function(errorMessage, technique) {
                this.refactorText = textRefactor(technique, "content");
                this.parameter[0] = textFormParamater("text", technique, "content","", this.counter);
                this.counter++;
            } 
        },
        h24 : {
            refactorText:"",
            parameter:[],
            counter : 0,
            processErrorMessage: function(errorMessage, technique) {
                this.refactorText = textRefactor(technique, "content");
                this.parameter[0] = textFormParamater("text", technique, "content","", this.counter);
                this.counter++;
            } 
        },
        h53aria6 : {
            refactorText:"",
            parameter:[],
            counter : 0,
            processErrorMessage: function(errorMessage, technique) {
                this.refactorText = textRefactor(technique, "content");
                this.parameter[0] = textFormParamater("text", technique, "content","", this.counter);
                this.counter++;
            } 
        },
        h35 : {
            refactorText:"",
            parameter:[],
            counter0 : 0,   //0 = 2 = tag alt
            counter1 : 0,   //1 = 3 = in body

            processErrorMessage: function(errorMessage, technique) {
                if(errorMessage == "H35_2_1.1.1") {
                    this.refactorText = textRefactor(technique, "alt");
                    this.parameter[0] = textFormParamater("text", technique, "alt","alt", this.counter0);
                    this.counter0++;
                } else if (errorMessage == "H35_3_1.1.1") {
                    this.refactorText = textRefactor(technique, "body");
                    this.parameter[0] = textFormParamater("text", technique, "body","body", this.counter1);
                    this.counter1++;
                }
            } 
        }
    };


    var textRefactor = function(technique, objectRefactorText) {
        return mydata[technique].refactorText[objectRefactorText];
    }
    var textFormParamater = function(form, technique, objectRefactorText, messageRefactoring, counter) {
        if(form == "text") {
            return processInputText(mydata[technique].parameterText[objectRefactorText], technique+"_"+messageRefactoring+"["+ counter + "]");
        } else if(form == "hidden") {
            return processInputHidden(mydata[technique].parameterText[objectRefactorText], technique+"_"+messageRefactoring+"["+ counter + "]");
        }
    }

    var processInputText = function(label, name) {
        return "<label for='"+name+"''>"+label+"</label><input id='"+name+"' type='text' name='"+name+"'>";
    }
    var processInputTextArea = function(label, name) {
        return "<label for='"+name+"'>"+label+"</label><textarea id='"+name+"' name='"+name+"' rows='5' cols='21'></textarea>";
    }
    var processCheckBox = function(label, name) {
        return "<br><hr><input id='"+name+"' type='checkbox' name='"+name+"' value='1'><label for='"+name+"'>"+label+"</label>";
    }
    var processRadioButton = function(label, name) {
        return "<input id='"+name+"' type='radio' name='"+name+"' value='1'><label for="+name+"'>"+label+"</label>";
    }
    var processInputHidden = function(label, name) {
        return label+"<input id='"+name+"' type='hidden' name='"+name+"' value='1'>";
    }

    //own
    //options = '//squizlabs.github.io/HTML_CodeSniffer/build/';
    //HTMLCS.build(standard, messages, options);



    //var asd = _messagesProcess2;

    var myParam = [];
    //var countParam = location.search.split("&").length;
    var countParam = <?php echo count($_POST["r"]) + 1 ?>;

    //var source = location.search.split("&")[countParam - 1].replace("?","").split("=")[1];
    var source = <?php echo '"'. $_POST['source'] .'"' ?>;
    //source = '<textarea type="text" name="source">'+decodeURIComponent((source + '').replace(/\+/g, '%20'));+'</textarea>';
    source = '<textarea type="text" name="source">'+source+'</textarea>';
    document.getElementById("mySource").innerHTML = source;

    //test
    //var message = location.search.split("&")[countParam - 1].replace("?","").split("=")[1];

    <?php
    for ($i = 0; $i < count($_POST['r']); $i++)
    {
        $myParam[$i] = $_POST['r'][$i];
    }
    ?>

    myParam = <?php echo json_encode($myParam); ?>;

    var content = '<table id="test-results-table" class="table"><thead><tr><th scope="col">No</th><th scope="col">Success Criteria - Technique</th><th scope="col">Refactoring</th><th scope="col">Parameter</th></tr></thead>';

    for(var i = 0 ; i < countParam -1 ; i++) {
        //processTechniques(myParam[i]);
        //var snippet = myParam[i].split("-")[1];
        indexsnippet = myParam[i].indexOf("-");
        snippet = myParam[i].slice(indexsnippet + 1);
        snippet = decodeURIComponent(snippet.replace(/\+/g, " "));
        snippet = decodeURIComponent(snippet.replace(/\+/g, " "));
        //snippet = decodeURIComponent(snippet);
        var techniqueError = myParam[i].split("-")[0];

        //var technique = techniqueError.split("_")[0].toLowerCase();
        var technique = "";
        var regex = techniqueError.match( /([A-Z]+)(\d+)/g );
        for(var k=0 ; k < regex.length ; k++) {
            technique += regex[k];
        }
        technique = technique.toLowerCase();

        var sucesscrit = techniqueError.split("_").pop();

        if(techniques[technique] != null) {
            techniques[technique].processErrorMessage(techniqueError, technique);

            //content += '<tr><th scope="row">'+(i+1)+'</th><td>'+myParam[i]+'</td><td>'+techniques[technique].refactorText+'<br>'+window._messagesProcess[i].element.outerHTML+'</td><td>';
            content += '<tr><th scope="row">'+(i+1)+'</th><td>'+sucesscrit+ "<br>" +techniqueError+'</td><td>'+techniques[technique].refactorText+'<br><xmp>'+snippet+'</xmp></td><td>';
            for(var j = 0 ; j < techniques[technique].parameter.length ; j++) {
                content += techniques[technique].parameter[j];
                content += '<br>';
            }
            content += '</td></tr>';

            techniques[technique].parameter = [];
        }
    }

    content += '</table>';


    /*function processTechniques(techniqueSubcode) {
       var technique = techniqueSubcode.split("_")[0];

       if(technique == "H91") {
           h91.processErrorMessage(myParam[i]);
       }

   }*/

    document.getElementById("demo").innerHTML = content;


</script>



</body>
</html>
