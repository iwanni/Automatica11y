<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!--<link rel="shortcut icon" href="assets/ico/favicon.ico">-->

    <title>SOLID - Bootstrap 3 Theme</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/style.css" rel="stylesheet">
    <!--<link href="assets/css/font-awesome.min.css" rel="stylesheet">-->
    <link href="assets/css/prism.css" rel="stylesheet" />


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
            <a class="navbar-brand" href="index.html">Automatica11y.</a>
        </div>
        <div class="navbar-collapse collapse navbar-right">
            <ul class="nav navbar-nav">
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</div>


<!-- *****************************************************************************************************************
 BLUE WRAP
 ***************************************************************************************************************** -->
<div id="blue">
    <div class="container">
        <div class="row">
            <h3>Automated Refactoring - Result.</h3>
        </div><!-- /row -->
    </div> <!-- /container -->
</div><!-- /blue -->

<!-- *****************************************************************************************************************
 TITLE & CONTENT
 ***************************************************************************************************************** -->

<div class="container mtb">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 centered result-text">
            <h2>Result: <span id="level"></span></h2>
            <br>
            <div class="hline"></div>
        </div>
        <div class="result">
            <div class="col-xs-6 centered">
                <div class="col-xs-4 text-center">
                    <div class="img-circle result-error center">
                        <span id="oldHTML-error" class="check-number">X</span>
                    </div>
                    <h4>Error</h4>
                </div>
                <div class="col-xs-4 text-center">
                    <div class="img-circle result-warning center">
                        <span id="oldHTML-warning" class="check-number">X</span>
                    </div>
                    <h4>Warning</h4>
                </div>
                <div class="col-xs-4 text-center">
                    <div class="img-circle result-notice center">
                        <span id="oldHTML-notice" class="check-number">X</span>
                    </div>
                    <h4>Notice</h4>
                </div>
            </div>
            <div class="col-xs-6 centered">
                <div class="col-xs-4 text-center">
                    <div class="img-circle result-error center">
                        <span id="newHTML-error" class="check-number">X</span>
                    </div>
                    <h4>Error</h4>
                </div>
                <div class="col-xs-4 text-center">
                    <div class="img-circle result-warning center">
                        <span id="newHTML-warning" class="check-number">X</span>
                    </div>
                    <h4>Warning</h4>
                </div>
                <div class="col-xs-4 text-center">
                    <div class="img-circle result-notice center">
                        <span id="newHTML-notice" class="check-number">X</span>
                    </div>
                    <h4>Notice</h4>
                </div>
                <p id="refactor-again" class="col-xs-12 bg-success"></p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h2>Old Source Code</h2>
            <pre class="line-numbers"><code id="oldHTML" class="language-markup">Not found
</code></pre>
        </div>
        <div class="col-md-6">
            <h2>New Source Code</h2>
            <pre class="line-numbers"><code id="newHTML" class="language-markup">Not found
</code></pre>
            <form method="get" action="file.doc">
                <button class="btn btn-theme btn-lg btn-block" onclick="saveTextAsFile()">Download As HTML File</button>
                <!--<a href="file.json" class="btn btn-theme btn-lg btn-block">Download As HTML File</a>-->
        </div>
    </div>
</div><! --/container -->



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

<div id="resultsWrapper"></div>
<button type="submit" id="run-button" class="btn btn-theme pull-right">Check</button>

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

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="./build/HTMLCS.js"></script>
<script src="assets/js/jquery-1.8.0.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/he.js"></script>
<script src="assets/js/prism.js"></script>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="assets/js/retina-1.1.0.js"></script>
<script src="assets/js/jquery.hoverdir.js"></script>
<script src="assets/js/jquery.hoverex.min.js"></script>
<script src="assets/js/jquery.prettyPhoto.js"></script>
<script src="assets/js/jquery.isotope.min.js"></script>
<script src="assets/js/custom.js"></script>-->

<script>
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
    //console.log(keys);
    //console.log(values);


    var paramKey = [];
    var paramValue = [];
    var countParam = <?php echo count($keys) ?>;

    var innerDoc = null;
    var allTagInsideIframe;
    var result = "";

    var source = <?php echo '"'. $_POST['source'] .'"' ?>;
    source = decodeURIComponent((source + '').replace(/\+/g, '%20'));
    //console.log(source);

    document.getElementById("oldHTML").innerHTML = he.encode(source);
    //oldSource = "<textarea type='text' name='source' id='asd' rows='20' cols='100'>"+decodeURIComponent((source + '').replace(/\+/g, '%20'))+"</textarea>";

    //var snippet = <?php //echo '"'. $_POST['snippet'] .'"' ?>;
    //snippet = decodeURIComponent((snippet + '').replace(/\+/g, '%20'));

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
        h2 : {
            processAutomatedRefactoring: function(message, i){
                var k = 0;
                var aElements = getElementsTag("a");
                for(var j = 0 ; j < aElements.length ; j++) {
                    if(aElements[j].nextElementSibling != null){
                        if(aElements[j].nextElementSibling.nodeName.toLowerCase() == "a" && aElements[j].nextElementSibling.getAttribute("href") == aElements[j].getAttribute("href")) {
                            var alt = aElements[j].nextElementSibling.innerHTML;
                            aElements[j].getElementsByTagName("img")[0].setAttribute("alt", alt);
                            aElements[j].nextElementSibling.parentNode.removeChild(aElements[j].nextElementSibling);
                        }
                    }
                }
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



        //1.2.1
        g158 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "transkrip") {
                    var k = 0;
                    var audioElements = getElementsTag("audio, object, embed, applet, bgsound");
                    for(var j = 0 ; j < audioElements.length ; j++) { 
                        if(audioElements[j].nextElementSibling != null && audioElements[j].nextElementSibling.hasAttribute("for") && audioElements[j].nextElementSibling.getAttribute("for").substring(0,18) == "audio-speechtotext") {
                            continue;
                        } else {
                            var label = innerDoc.createElement("label");
                            label.htmlFor = "audio-speechtotext"+j;
                            label.innerHTML = "Transkrip Audio";
                            
                            var textarea = innerDoc.createElement("textarea");
                            textarea.innerHTML = values[i][k];
                            textarea.id = "audio-speechtotext"+j;

                            audioElements[j].parentNode.insertBefore(textarea, audioElements[j].nextSibling);
                            audioElements[j].parentNode.insertBefore(label, audioElements[j].nextSibling);
                            k++;
                        }
                    }
                } else if(message == "api") {
                    /*var speechToText = '<div id="info">';
                    speechToText += '<p id="info_start">Click on the microphone icon and begin speaking.</p>';
                    speechToText += '<p id="info_speak_now">Speak now.</p>';
                    speechToText += '<p id="info_no_speech">No speech was detected. You may need to adjust your';
                    speechToText += '<a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">';
                    speechToText += 'microphone settings</a>.</p>';
                    speechToText += '<p id="info_no_microphone" style="display:none">';
                    speechToText += 'No microphone was found. Ensure that a microphone is installed and that';
                    speechToText += '<a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">';
                    speechToText += 'microphone settings</a> are configured correctly.</p>';
                    speechToText += '<p id="info_allow">Click the "Allow" button above to enable your microphone.</p>';
                    speechToText += '<p id="info_denied">Permission to use microphone was denied.</p>';
                    speechToText += '<p id="info_blocked">Permission to use microphone is blocked. To change,';
                    speechToText += 'go to chrome://settings/contentExceptions#media-stream</p>';
                    speechToText += '<p id="info_upgrade">Web Speech API is not supported by this browser.';
                    speechToText += 'Upgrade to <a href="//www.google.com/chrome">Chrome</a>version 25 or later.</p>';
                    speechToText += '</div>';
                    speechToText += '<div id="results" style="border: 1px solid #ddd; padding: 15px; text-align: left; min-height: 150px;">';
                    speechToText += '<span id="final_span" class="final"></span>';
                    speechToText += '<span id="interim_span" class="interim"></span>';
                    speechToText += '</div>';
                    speechToText += '<div class="center">';
                    speechToText += '<button id="start_button" onclick="startButton(event)">Start</button>&nbsp;&nbsp;';
                    speechToText += '<span id="div_language">';
                    speechToText += '<select id="select_language" onchange="updateCountry()"></select>&nbsp;&nbsp;';
                    speechToText += '<select id="select_dialect"></select>';
                    speechToText += '</span>';
                    speechToText += '</div>';

                    var scriptSpeechToText = innerDoc.createElement("script");
                    scriptSpeechToText.innerHTML = "var langs=[['Afrikaans',['af-ZA']],['Bahasa Indonesia',['id-ID']],['Bahasa Melayu',['ms-MY']],['Català',['ca-ES']],['Čeština',['cs-CZ']],['Deutsch',['de-DE']],['English',['en-AU','Australia'],['en-CA','Canada'],['en-IN','India'],['en-NZ','New Zealand'],['en-ZA','South Africa'],['en-GB','United Kingdom'],['en-US','United States']],['Español',['es-AR','Argentina'],['es-BO','Bolivia'],['es-CL','Chile'],['es-CO','Colombia'],['es-CR','Costa Rica'],['es-EC','Ecuador'],['es-SV','El Salvador'],['es-ES','España'],['es-US','Estados Unidos'],['es-GT','Guatemala'],['es-HN','Honduras'],['es-MX','México'],['es-NI','Nicaragua'],['es-PA','Panamá'],['es-PY','Paraguay'],['es-PE','Perú'],['es-PR','Puerto Rico'],['es-DO','República Dominicana'],['es-UY','Uruguay'],['es-VE','Venezuela']],['Euskara',['eu-ES']],['Français',['fr-FR']],['Galego',['gl-ES']],['Hrvatski',['hr_HR']],['IsiZulu',['zu-ZA']],['Íslenska',['is-IS']],['Italiano',['it-IT','Italia'],['it-CH','Svizzera']],['Magyar',['hu-HU']],['Nederlands',['nl-NL']],['Norsk bokmål',['nb-NO']],['Polski',['pl-PL']],['Português',['pt-BR','Brasil'],['pt-PT','Portugal']],['Română',['ro-RO']],['Slovenčina',['sk-SK']],['Suomi',['fi-FI']],['Svenska',['sv-SE']],['Türkçe',['tr-TR']],['български',['bg-BG']],['Pусский',['ru-RU']],['Српски',['sr-RS']],['한국어',['ko-KR']],['中文',['cmn-Hans-CN','普通话 (中国大陆)'],['cmn-Hans-HK','普通话 (香港)'],['cmn-Hant-TW','中文 (台灣)'],['yue-Hant-HK','粵語 (香港)']],['日本語',['ja-JP']],['Lingua latīna',['la']]];for(var i=0;i<langs.length;i++){select_language.options[i]=new Option(langs[i][0],i)}select_language.selectedIndex=6;updateCountry();select_dialect.selectedIndex=6;showInfo('info_start');function updateCountry(){for(var i=select_dialect.options.length-1;i>=0;i--){select_dialect.remove(i)}var list=langs[select_language.selectedIndex];for(var i=1;i<list.length;i++){select_dialect.options.add(new Option(list[i][1],list[i][0]))}select_dialect.style.visibility=list[1].length==1?'hidden':'visible'}";

                    scriptSpeechToText.innerHTML += "var create_email=!1;var final_transcript='';var recognizing=!1;var ignore_onend;var start_timestamp;if(!('webkitSpeechRecognition' in window)){upgrade();}else{start_button.style.display='inline-block';var recognition=new webkitSpeechRecognition();recognition.continuous=!0;recognition.interimResults=!0;recognition.onstart=function(){recognizing=!0;showInfo('info_speak_now');start_button.innerHTML='Stop'};recognition.onerror=function(event){if(event.error=='no-speech'){start_button.innerHTML='Start';showInfo('info_no_speech');ignore_onend=!0}if(event.error=='audio-capture'){start_button.innerHTML='Start';showInfo('info_no_microphone');ignore_onend=!0}if(event.error=='not-allowed'){if(event.timeStamp-start_timestamp<100){showInfo('info_blocked')}else{showInfo('info_denied')}ignore_onend=!0}};recognition.onend=function(){recognizing=!1;if(ignore_onend){return}start_button.innerHTML='Start';if(!final_transcript){showInfo('info_start');return}showInfo('');if(window.getSelection){window.getSelection().removeAllRanges();var range=document.createRange();range.selectNode(document.getElementById('final_span'));window.getSelection().addRange(range)}if(create_email){create_email=!1;createEmail()}};recognition.onresult=function(event){var interim_transcript='';for(var i=event.resultIndex;i<event.results.length;++i){if(event.results[i].isFinal){final_transcript+=event.results[i][0].transcript}else{interim_transcript+=event.results[i][0].transcript}}final_transcript=capitalize(final_transcript);final_span.innerHTML=linebreak(final_transcript);interim_span.innerHTML=linebreak(interim_transcript);if(final_transcript||interim_transcript){showButtons('inline-block')}}}";

                    scriptSpeechToText.innerHTML += "function upgrade(){start_button.style.visibility='hidden';showInfo('info_upgrade')}";

                    scriptSpeechToText.innerHTML += "var two_line=/\\n\\n/g;var one_line=/\\n/g;function linebreak(s){return s.replace(two_line,'<p></p>').replace(one_line,'<br>')}var first_char=/\\S/;";

                    scriptSpeechToText.innerHTML += "function capitalize(s){return s.replace(first_char,function(m){return m.toUpperCase()})}function startButton(event){if(recognizing){recognition.stop();return}final_transcript='';recognition.lang=select_dialect.value;recognition.start();ignore_onend=!1;final_span.innerHTML='';interim_span.innerHTML='';start_button.innerHTML='Stop';showInfo('info_allow');showButtons('none');start_timestamp=event.timeStamp}function showInfo(s){if(s){for(var child=info.firstChild;child;child=child.nextSibling){if(child.style){child.style.display=child.id==s?'inline':'none'}}info.style.visibility='visible'}else{info.style.visibility='hidden'}}var current_style;function showButtons(style){if(style==current_style){return}current_style=style;copy_button.style.display=style;email_button.style.display=style;copy_info.style.display='none';email_info.style.display='none'}";

                    var audioElements = getElementsTag("audio, object, embed, applet, bgsound");
                    var body = getElementsTag("body");
                    for(var j = 0 ; j < audioElements.length ; j++) {
                        audioElements[j].insertAdjacentHTML('afterend', speechToText);
                        //body[j].insertAdjacentHTML('beforeend', scriptSpeechToText);
                        body[j].insertBefore(scriptSpeechToText, null);
                    }*/
                }
            }
        },
        g159g166 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "transkrip") {
                    var k = 0;
                    var videoElements = getElementsTag("video, object, embed, applet");
                    for(var j = 0 ; j < videoElements.length ; j++) { 
                        //if(videoElements[j].nextElementSibling != null && videoElements[j].nextElementSibling.hasAttribute("for") && videoElements[j].nextElementSibling.getAttribute("for").substring(0,18) == "video-speechtotext") {
                        if(videoElements[j].nextElementSibling != null && videoElements[j].nextElementSibling.querySelector("[for^=video-]") && videoElements[j].nextElementSibling.querySelector("[for^=video-]").getAttribute("for").substring(0,18) == "video-speechtotext") {
                            continue;
                        } else {
                            var label = innerDoc.createElement("label");
                            label.htmlFor = "video-speechtotext"+j;
                            label.innerHTML = "Transkrip Video";
                            
                            var textarea = innerDoc.createElement("textarea");
                            textarea.innerHTML = values[i][k];
                            textarea.id = "video-speechtotext"+j;

                            var div = innerDoc.createElement("div");
                            div.appendChild(label);
                            div.appendChild(textarea);

                            videoElements[j].parentNode.insertBefore(div, videoElements[j].nextSibling);
                            //videoElements[j].parentNode.insertBefore(label, videoElements[j].nextSibling);
                            k++;
                        }
                    }
                }  else if(message == "api") {
                    /*var speechToText = '<div id="info">';
                    speechToText += '<p id="info_start">Click on the microphone icon and begin speaking.</p>';
                    speechToText += '<p id="info_speak_now">Speak now.</p>';
                    speechToText += '<p id="info_no_speech">No speech was detected. You may need to adjust your';
                    speechToText += '<a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">';
                    speechToText += 'microphone settings</a>.</p>';
                    speechToText += '<p id="info_no_microphone" style="display:none">';
                    speechToText += 'No microphone was found. Ensure that a microphone is installed and that';
                    speechToText += '<a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">';
                    speechToText += 'microphone settings</a> are configured correctly.</p>';
                    speechToText += '<p id="info_allow">Click the "Allow" button above to enable your microphone.</p>';
                    speechToText += '<p id="info_denied">Permission to use microphone was denied.</p>';
                    speechToText += '<p id="info_blocked">Permission to use microphone is blocked. To change,';
                    speechToText += 'go to chrome://settings/contentExceptions#media-stream</p>';
                    speechToText += '<p id="info_upgrade">Web Speech API is not supported by this browser.';
                    speechToText += 'Upgrade to <a href="//www.google.com/chrome">Chrome</a>version 25 or later.</p>';
                    speechToText += '</div>';
                    speechToText += '<div id="results" style="border: 1px solid #ddd; padding: 15px; text-align: left; min-height: 150px;">';
                    speechToText += '<span id="final_span" class="final"></span>';
                    speechToText += '<span id="interim_span" class="interim"></span>';
                    speechToText += '</div>';
                    speechToText += '<div class="center">';
                    speechToText += '<button id="start_button" onclick="startButton(event)">Start</button>&nbsp;&nbsp;';
                    speechToText += '<span id="div_language">';
                    speechToText += '<select id="select_language" onchange="updateCountry()"></select>&nbsp;&nbsp;';
                    speechToText += '<select id="select_dialect"></select>';
                    speechToText += '</span>';
                    speechToText += '</div>';

                    var scriptSpeechToText = innerDoc.createElement("script");
                    scriptSpeechToText.innerHTML = "var langs=[['Afrikaans',['af-ZA']],['Bahasa Indonesia',['id-ID']],['Bahasa Melayu',['ms-MY']],['Català',['ca-ES']],['Čeština',['cs-CZ']],['Deutsch',['de-DE']],['English',['en-AU','Australia'],['en-CA','Canada'],['en-IN','India'],['en-NZ','New Zealand'],['en-ZA','South Africa'],['en-GB','United Kingdom'],['en-US','United States']],['Español',['es-AR','Argentina'],['es-BO','Bolivia'],['es-CL','Chile'],['es-CO','Colombia'],['es-CR','Costa Rica'],['es-EC','Ecuador'],['es-SV','El Salvador'],['es-ES','España'],['es-US','Estados Unidos'],['es-GT','Guatemala'],['es-HN','Honduras'],['es-MX','México'],['es-NI','Nicaragua'],['es-PA','Panamá'],['es-PY','Paraguay'],['es-PE','Perú'],['es-PR','Puerto Rico'],['es-DO','República Dominicana'],['es-UY','Uruguay'],['es-VE','Venezuela']],['Euskara',['eu-ES']],['Français',['fr-FR']],['Galego',['gl-ES']],['Hrvatski',['hr_HR']],['IsiZulu',['zu-ZA']],['Íslenska',['is-IS']],['Italiano',['it-IT','Italia'],['it-CH','Svizzera']],['Magyar',['hu-HU']],['Nederlands',['nl-NL']],['Norsk bokmål',['nb-NO']],['Polski',['pl-PL']],['Português',['pt-BR','Brasil'],['pt-PT','Portugal']],['Română',['ro-RO']],['Slovenčina',['sk-SK']],['Suomi',['fi-FI']],['Svenska',['sv-SE']],['Türkçe',['tr-TR']],['български',['bg-BG']],['Pусский',['ru-RU']],['Српски',['sr-RS']],['한국어',['ko-KR']],['中文',['cmn-Hans-CN','普通话 (中国大陆)'],['cmn-Hans-HK','普通话 (香港)'],['cmn-Hant-TW','中文 (台灣)'],['yue-Hant-HK','粵語 (香港)']],['日本語',['ja-JP']],['Lingua latīna',['la']]];for(var i=0;i<langs.length;i++){select_language.options[i]=new Option(langs[i][0],i)}select_language.selectedIndex=6;updateCountry();select_dialect.selectedIndex=6;showInfo('info_start');function updateCountry(){for(var i=select_dialect.options.length-1;i>=0;i--){select_dialect.remove(i)}var list=langs[select_language.selectedIndex];for(var i=1;i<list.length;i++){select_dialect.options.add(new Option(list[i][1],list[i][0]))}select_dialect.style.visibility=list[1].length==1?'hidden':'visible'}";

                    scriptSpeechToText.innerHTML += "var create_email=!1;var final_transcript='';var recognizing=!1;var ignore_onend;var start_timestamp;if(!('webkitSpeechRecognition' in window)){upgrade();}else{start_button.style.display='inline-block';var recognition=new webkitSpeechRecognition();recognition.continuous=!0;recognition.interimResults=!0;recognition.onstart=function(){recognizing=!0;showInfo('info_speak_now');start_button.innerHTML='Stop'};recognition.onerror=function(event){if(event.error=='no-speech'){start_button.innerHTML='Start';showInfo('info_no_speech');ignore_onend=!0}if(event.error=='audio-capture'){start_button.innerHTML='Start';showInfo('info_no_microphone');ignore_onend=!0}if(event.error=='not-allowed'){if(event.timeStamp-start_timestamp<100){showInfo('info_blocked')}else{showInfo('info_denied')}ignore_onend=!0}};recognition.onend=function(){recognizing=!1;if(ignore_onend){return}start_button.innerHTML='Start';if(!final_transcript){showInfo('info_start');return}showInfo('');if(window.getSelection){window.getSelection().removeAllRanges();var range=document.createRange();range.selectNode(document.getElementById('final_span'));window.getSelection().addRange(range)}if(create_email){create_email=!1;createEmail()}};recognition.onresult=function(event){var interim_transcript='';for(var i=event.resultIndex;i<event.results.length;++i){if(event.results[i].isFinal){final_transcript+=event.results[i][0].transcript}else{interim_transcript+=event.results[i][0].transcript}}final_transcript=capitalize(final_transcript);final_span.innerHTML=linebreak(final_transcript);interim_span.innerHTML=linebreak(interim_transcript);if(final_transcript||interim_transcript){showButtons('inline-block')}}}";

                    scriptSpeechToText.innerHTML += "function upgrade(){start_button.style.visibility='hidden';showInfo('info_upgrade')}";

                    scriptSpeechToText.innerHTML += "var two_line=/\\n\\n/g;var one_line=/\\n/g;function linebreak(s){return s.replace(two_line,'<p></p>').replace(one_line,'<br>')}var first_char=/\\S/;";

                    scriptSpeechToText.innerHTML += "function capitalize(s){return s.replace(first_char,function(m){return m.toUpperCase()})}function startButton(event){if(recognizing){recognition.stop();return}final_transcript='';recognition.lang=select_dialect.value;recognition.start();ignore_onend=!1;final_span.innerHTML='';interim_span.innerHTML='';start_button.innerHTML='Stop';showInfo('info_allow');showButtons('none');start_timestamp=event.timeStamp}function showInfo(s){if(s){for(var child=info.firstChild;child;child=child.nextSibling){if(child.style){child.style.display=child.id==s?'inline':'none'}}info.style.visibility='visible'}else{info.style.visibility='hidden'}}var current_style;function showButtons(style){if(style==current_style){return}current_style=style;copy_button.style.display=style;email_button.style.display=style;copy_info.style.display='none';email_info.style.display='none'}";

                    var videoElements = getElementsTag("video, object, embed, applet");
                    var body = getElementsTag("body");
                    for(var j = 0 ; j < videoElements.length ; j++) {
                        videoElements[j].insertAdjacentHTML('afterend', speechToText);
                        //body[j].insertAdjacentHTML('beforeend', scriptSpeechToText);
                        body[j].insertBefore(scriptSpeechToText, null);
                    }*/
                }
            }
        },



        //1.2.6
        g54g81 : {
            processAutomatedRefactoring: function(message, i){ 
                if(message == "transkrip") {
                    /*for(var j = 0 ; j < videoElements.length ; j++) { //hanya sekali karena id?
                        //if(tableElements[j].getElementsByTagName("audio")[0] == null) {
                            //<label for='"+name+"'>"+label+"</label><textarea id='"+name+"' name='"+name+"' rows='5' cols='21'></textarea>
                        var label = innerDoc.createElement("label");
                        label.htmlFor = "texttospeech";
                        label.innerHTML = "Transkrip";
                        videoElements[j].parentNode.insertBefore(label, videoElements[j].nextSibling);
                        var textarea = innerDoc.createElement("textarea");
                        textarea.innerHTML = values[i][k];
                        textarea.id = "texttospeech";
                        videoElements[j].parentNode.insertBefore(textarea, videoElements[j].nextElementSibling[0]);
                        k++;
                    }*/


                    var k = 0;
                    var videoElements = getElementsTag("video, object, embed, applet");
                    for(var j = 0 ; j < videoElements.length ; j++) {
                        if(videoElements[j].nextElementSibling != null && videoElements[j].nextElementSibling.querySelector("[for^=video-]") && videoElements[j].nextElementSibling.querySelector("[for^=video-]").getAttribute("for").substring(0,18) == "video-speechtotext") {
                            k++;
                            continue;
                        } else {
                            var label = innerDoc.createElement("label");
                            label.htmlFor = "video-texttosign"+j;
                            label.innerHTML = "Sign Language Video<br>";
                            
                            var textarea = innerDoc.createElement("textarea");
                            textarea.innerHTML = values[i][k];
                            textarea.className = "sign";
                            textarea.id = "video-texttosign"+j;
                        
                            if(k==0){
                                var fontsign  = innerDoc.createElement("style");
                                fontsign.innerHTML += '@font-face {';
                                fontsign.innerHTML += 'font-family: "Gallaudet";';
                                fontsign.innerHTML += 'src: url("https://automatica11y-web-test.000webhostapp.com/GallaudetRegular.ttf");';
                                //fontsign.innerHTML += 'src: url("http://ff.cdn.1001fonts.net/g/a/gallaudet.regular.ttf");';
                                fontsign.innerHTML += '}';
                                fontsign.innerHTML += '.sign {';
                                fontsign.innerHTML += 'font-family: "Gallaudet";';
                                fontsign.innerHTML += 'font-size:80px;';
                                fontsign.innerHTML += '}';
                                innerDoc.getElementsByTagName("head")[0].appendChild(fontsign);
                            }

                            var div = innerDoc.createElement("div");
                            div.appendChild(label);
                            div.appendChild(textarea);

                            videoElements[j].parentNode.insertBefore(div, videoElements[j].nextSibling);

                            //videoElements[j].parentNode.insertBefore(label, videoElements[j].nextSibling);
                            /*}*/

                            //var speechToText = innerDoc.querySelectorAll("[for^=video-]");
                            //if(videoElements[j].nextElementSibling != null && videoElements[j].nextElementSibling.querySelector("[for^=video-]")hasAttribute("for") && videoElements[j].nextElementSibling.getAttribute("for").substring(0,18) == "video-speechtotext") {
                            /*if(videoElements[j].nextElementSibling != null && videoElements[j].nextElementSibling.querySelector("[for^=video-]") && videoElements[j].nextElementSibling.querySelector("[for^=video-]").getAttribute("for").substring(0,18) == "video-speechtotext") {
                                continue;
                            } else {*/
                            var label = innerDoc.createElement("label");
                            label.htmlFor = "video-speechtotext"+j;
                            label.innerHTML = "Transkrip Video<br>";
                            
                            var textarea = innerDoc.createElement("textarea");
                            /*textarea.setAttribute("rows", "5");
                            textarea.setAttribute("cols", "50");*/
                            textarea.innerHTML = values[i][k];
                            textarea.id = "video-speechtotext"+j;

                            var div = innerDoc.createElement("div");
                            div.appendChild(label);
                            div.appendChild(textarea);

                            videoElements[j].parentNode.insertBefore(div, videoElements[j].nextSibling);
                            //videoElements[j].parentNode.insertBefore(label, videoElements[j].nextSibling);
                            k++;
                        }
                    }
                } else if (message == "api") {
                    /*var textToSign = innerDoc.createElement("div");
                    textToSign.class = "ftembed";
                    var script1 = innerDoc.createElement("script");
                    script1.src = "http://funtranslations.com/extensions/embed/v1/funtranslations.embed.js";
                    var script2 = innerDoc.createElement("script");
                    script2.innerHTML = 'FunTranslations.Embed.render({translator:"signlanguage"});';
                    textToSign.appendChild(script1);
                    textToSign.appendChild(script2);

                    var videoElements = getElementsTag("video, object, embed, applet");
                    for(var j = 0 ; j < videoElements.length ; j++) {
                        videoElements[j].parentNode.insertBefore(textToSign, videoElements[j].nextElementSibling[0]);
                   }*/
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
                        if(inputs[j].previousElementSibling != null && inputs[j].previousElementSibling.nodeName.toLowerCase() == "label") {
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
                if(message == "scopeTd") {
                    var k = 0;
                    var tdElements = getElementsTag("td");
                    for(var j = 0 ; j < tdElements.length ; j++) {
                        if(tdElements[j].getAttribute("scope") != null){
                            str = tdElements[j].outerHTML;
                            var regexpResult = str.replace(/<td/g, "<th");
                            var regexpResult = regexpResult.replace(/<\/td>/g, "<\/th>");
                            tdElements[j].outerHTML = regexpResult;
                        }
                    }
                } else if(message == "scopeInvalid") {
                    var k = 0;
                    var thTdElements = getElementsTag("th, td");
                    for(var j = 0 ; j < thTdElements.length ; j++) {
                        if(thTdElements[j].getAttribute("scope") != null && /^(row|col|rowgroup|colgroup)$/.test(thTdElements[j].getAttribute("scope")) === false){
                            thTdElements[j].setAttribute("scope", values[i][k]);
                            k++;
                        }
                    }
                }
            }
        },
        h43 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "headerInvalid") {
                    var k = 0;
                    var thTdElements = getElementsTag("th, td");
                    for(var j = 0 ; j < thTdElements.length ; j++) {
                        if(values[i][k] != null) {
                            if(thTdElements[j].getAttribute("headers") == values[i][k].split(",")[1]){
                                thTdElements[j].setAttribute("headers", values[i][k].split(",")[0]);
                                k++;
                            }
                        }
                    }
                }
            }
        },
        h39 : {
            processAutomatedRefactoring: function(message, i){
                var k = 0;
                var tableElements = getElementsTag("table");
                for(var j = 0 ; j < tableElements.length ; j++) {
                    if(tableElements[j].getElementsByTagName("caption")[0] == null) {
                        var caption = innerDoc.createElement("caption");
                        caption.innerHTML = values[i][k];
                        tableElements[j].insertBefore(caption, tableElements[j].firstChild);
                        k++;
                    } else {
                        if(tableElements[j].getElementsByTagName("caption")[0].innerHTML == false) {
                            tableElements[j].getElementsByTagName("caption")[0].innerHTML = values[i][k];
                            k++;
                        }
                    }
                }
            }
        },
        h73 : {
            processAutomatedRefactoring: function(message, i){
                /*var k = 0;
                var tableElements = getElementsTag("table");
                for(var j = 0 ; j < tableElements.length ; j++) {
                    if(tableElements[j].getAttribute("caption"))
                    tableElements[j].setAttribute("summary", values[i][k]);
                }*/
                insertAttr("table", "summary", i);
            }
        },
        h39h73 : {
            processAutomatedRefactoring: function(message, i){
                var k = 0;
                var tableElements = getElementsTag("table");
                for(var j = 0 ; j < tableElements.length ; j++) {
                    var summary = tableElements[j].getAttribute("summary");
                    var caption = tableElements[j].getElementsByTagName("caption")[0].innerHTML;
                    if(caption.length > 0 && summary.length > 0) {
                        if(caption == summary) {
                            tableElements[j].setAttribute("summary", values[i][k]);
                            tableElements[j].getElementsByTagName("caption")[0].innerHTML = values[i+1][k];
                            k++;
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
        },



        //1.4.3
        g18 : {
            processAutomatedRefactoring: function(message, i){
                /*var elements = getElementsAttr('align');
                for(var j = 0 ; j < elements.length ; j++) {
                    var alignAttribute = elements[j].getAttribute('align');
                    elements[j].removeAttribute("align");
                    elements[j].setAttribute("style", "text-align: "+alignAttribute+";");
                }*/

                var k = 0;
                for(var j = 0 ; j < values[i].length ; j++) {
                    var elementsString = innerDoc.body.innerHTML;
                    var snippet = values[i][k].split("_")[1];
                    snippet = decodeURIComponent((snippet + '').replace(/\+/g, '%20'));
                    var color = values[i][k].split("_")[0].substring(1,8);

                    //console.log("html" +elementsString);
                    if(elementsString.search(snippet) != -1) {
                        var firstIndex = elementsString.search(snippet);
                        var snippetFromSource = elementsString.substring(firstIndex, firstIndex+snippet.length);
                        //console.log(snippetFromSource);

                        parser = new DOMParser();
                        doc = parser.parseFromString(snippetFromSource, "text/html");
                        if(values[i][k].substring(0,1) == "C") {
                            doc.body.firstChild.style.color = color;
                        } else {
                            doc.body.firstChild.style.backgroundColor = color;
                        }
                        //console.log(doc.body.firstChild.outerHTML);
                        k++;

                        /*for (var index = 0; index < innerDoc.querySelectorAll("body > *").length; index++) {
                            innerDoc.querySelectorAll("body > *")[index].outerHTML = innerDoc.querySelectorAll("body > *")[index].outerHTML.replace(snippetFromSource, doc.body.firstChild.outerHTML);
                        }*/
                        innerDoc.body.innerHTML = elementsString.replace(snippetFromSource, doc.body.firstChild.outerHTML);
                        console.log(doc.body.firstChild.outerHTML);
                    }
                }
            }
        },
        g145 : {
            processAutomatedRefactoring: function(message, i){
                var k = 0;
                for(var j = 0 ; j < values[i].length ; j++) {
                    var elementsString = innerDoc.body.innerHTML;
                    var snippet = values[i][k].split("_")[1];
                    snippet = decodeURIComponent((snippet + '').replace(/\+/g, '%20'));
                    var color = values[i][k].split("_")[0].substring(1,8);

                    console.log("html" +elementsString);
                    if(elementsString.search(snippet) != -1) {
                        var firstIndex = elementsString.search(snippet);
                        var snippetFromSource = elementsString.substring(firstIndex, firstIndex+snippet.length);
                        console.log(snippetFromSource);

                        parser = new DOMParser();
                        doc = parser.parseFromString(snippetFromSource, "text/html");
                        if(values[i][k].substring(0,1) == "C") {
                            doc.body.firstChild.style.color = color;
                        } else {
                            doc.body.firstChild.style.backgroundColor = color;
                        }
                        k++;

                        innerDoc.body.innerHTML = elementsString.replace(snippetFromSource, doc.body.firstChild.outerHTML);
                    }
                }
            }
        },



        //1.4.6
        g17 : {
            processAutomatedRefactoring: function(message, i){
                var k = 0;
                for(var j = 0 ; j < values[i].length ; j++) {
                    var elementsString = innerDoc.body.innerHTML;
                    var snippet = values[i][k].split(/_(.+)/)[1];
                    snippet = decodeURIComponent((snippet + '').replace(/\+/g, '%20'));
                    var color = values[i][k].split("_")[0].substring(1,8);

                    //console.log("html" +elementsString);
                    
                    if(elementsString.search(snippet) != -1) {
                        var firstIndex = elementsString.search(snippet);
                        var snippetFromSource = elementsString.substring(firstIndex, firstIndex+snippet.length);
                        //console.log(snippetFromSource);

                        parser = new DOMParser();
                        doc = parser.parseFromString(snippetFromSource, "text/html");
                        if(doc.body.firstChild != null) {
                            if(values[i][k].substring(0,1) == "C") {
                                doc.body.firstChild.style.color = color;
                            } else {
                                doc.body.firstChild.style.backgroundColor = color;
                            }

                        innerDoc.body.innerHTML = elementsString.replace(snippetFromSource, doc.body.firstChild.outerHTML);
                        console.log(doc.body.firstChild.outerHTML);
                        }
                        
                    }
                    k++;
                }
            console.log(innerDoc.body.innerHTML);
            }
        },



        //2.1.1
        scr20 :{
            processAutomatedRefactoring: function(message, i){
                if(message == "mouseover") {
                    var elements = getElementsAttr('onmouseover');
                    for(var j = 0 ; j < elements.length ; j++) {
                        var onmouseoverValue = elements[j].getAttribute('onmouseover');
                        elements[j].setAttribute("onfocus", onmouseoverValue);
                    }
                } else if (message == "mouseout") {
                    var elements = getElementsAttr('onmouseout');
                    for(var j = 0 ; j < elements.length ; j++) {
                        var onmouseoutValue = elements[j].getAttribute('onmouseout');
                        elements[j].setAttribute("onblur", onmouseoutValue);
                    }
                } else if (message == "mousedown") {
                    var elements = getElementsAttr('onmousedown');
                    for(var j = 0 ; j < elements.length ; j++) {
                        var onmousedownValue = elements[j].getAttribute('onmousedown');
                        elements[j].setAttribute("onkeydown", onmousedownValue);
                    }
                } else if (message == "mouseup") {
                    var elements = getElementsAttr('onmouseup');
                    for(var j = 0 ; j < elements.length ; j++) {
                        var onmouseupValue = elements[j].getAttribute('onmouseup');
                        elements[j].setAttribute("onkeyup", onmouseupValue);
                    }
                }
            }
        },



        //2.2.1
        f40 : {
            processAutomatedRefactoring: function(message, i){
                deleteMetaRefresh();
            }
        },
        f41 : {
            processAutomatedRefactoring: function(message, i){
                deleteMetaRefresh();
            }
        },



        //2.2.2
        f4 : {

        },
        f47 : {
            processAutomatedRefactoring: function(message, i){
                changeTag("blink", /<blink/g, /<\/blink>/g, "span",i);
            }
        },



        //2.4.1
        h64 : {
            processAutomatedRefactoring: function(message, i){
                insertAttr("iframe", "title", i);
            }
        },



        //2.4.2
        h25 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "noTitle") {
                    var k = 0;
                    var headElements = getElementsTag("head");
                    for(var j = 0 ; j < headElements.length ; j++) {
                        var title = innerDoc.createElement("title");
                        title.innerHTML = values[i][k];
                        k++;

                        headElements[j].insertBefore(title, headElements[j].firstChild);
                    }
                } else if(message == "emptyTitle") {
                    insertContent("title", i)
                }
            }
        },



        //2.4.8
        h59 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "head") {
                    var k = 0;
                    var linkElements = getElementsTag("link");
                    for(var j = 0 ; j < linkElements.length ; j++) {
                        innerDoc.getElementsByTagName("head")[0].appendChild(linkElements[j]);
                    }
                } else if(message == "rel") {
                    insertAttr("link", "rel", i);
                } else if(message == "href") {
                    insertAttr("link", "href", i);
                }
            }
        },



        //3.1.1
        h57 : {
            processAutomatedRefactoring: function(message, i){
                if(innerDoc.getElementsByTagName("html")[0].hasAttribute("xmlns")){
                    insertAttr("html", "xml:lang", i);
                } else {
                    insertAttr("html", "lang", i);
                }
            }
        },



        //3.1.6
        h62 : {
            processAutomatedRefactoring: function(message, i) {
                if(message == "rp") {
                    var rubyElements = getElementsTag("ruby");
                    for(var j = 0 ; j < rubyElements.length ; j++) {
                        //if(rubyElements[j].children[0].nodeName.toLowerCase() == "rb") {
                        if(rubyElements[j].getElementsByTagName("rb")[0] != null && rubyElements[j].getElementsByTagName("rp")[0] == null) {
                            var rb = rubyElements[j].getElementsByTagName("rb")[0];

                            var rp1 = innerDoc.createElement("rp");
                            rp1.innerHTML = "(";
                            rb.parentNode.insertBefore(rp1, rb.nextSibling);

                            var rp2 = innerDoc.createElement("rp");
                            rp2.innerHTML = ")";
                            rubyElements[j].insertBefore(rp2, null);
                            //}

                        }
                    }
                } else if(message == "rt") {
                    var k = 0;
                    var rubyElements = getElementsTag("ruby");
                    for(var j = 0 ; j < rubyElements.length ; j++) {
                        if(rubyElements[j].getElementsByTagName("rt")[0] == null) {
                            var rpRb;
                            if(rubyElements[j].getElementsByTagName("rp")[0] != null) {
                                rpRb = rubyElements[j].getElementsByTagName("rp")[0];
                            } else {
                                rpRb = rubyElements[j].getElementsByTagName("rb")[0];
                            }

                            var rt = innerDoc.createElement("rt");
                            rt.innerHTML = values[i][k];
                            k++;
                            rpRb.parentNode.insertBefore(rt, rpRb.nextSibling);
                        }
                    }
                }
            }
        },



        //3.2.2
        h32 : {
            processAutomatedRefactoring: function(message, i){
                var formElements = getElementsTag("form");
                for(var j = 0 ; j < formElements.length ; j++) {
                    var submit = formElements[j].querySelectorAll("input[type=submit], input[type=image]");
                    if(submit.length == 0) {
                        var input = innerDoc.createElement("input");
                        input.setAttribute("type", "submit");
                        input.setAttribute("value", 1);

                        formElements[j].insertBefore(input, null);
                    }
                }
            }
        },



        //4.1.2
        h91 : {
            processAutomatedRefactoring: function(message, i){
                if(message == "href") {
                    insertAttr("a", "href", i);
                } else if(message == "content") {
                    insertContent("a", i);
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

    function deleteMetaRefresh() {
        var elements = getElementsTag("meta");
        for(var j = 0 ; j < elements.length ; j++) {
            if(elements[j].hasAttribute("http-equiv")) {
                if(elements[j].getAttribute("http-equiv").toLowerCase() === "refresh") {
                    if(/^(\d+)*/.test(elements[j].getAttribute("content").toLowerCase()) === true) {
                        //if(/url=/.test(elements[j].getAttribute("content").toLowerCase()) === true) {
                        elements[j].parentNode.removeChild(elements[j]);
                        //}
                    }
                }
            }
        }
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
    /*var iframe = document.createElement('iframe');
    iframe.id = "iframeId";

    iframe.onload = function(){
        if (iframe.contentDocument) {
            innerDoc = iframe.contentDocument;
        } else if (iframe.contentWindow) {
            innerDoc = iframe.contentWindow.document;
        }

        source = "<body>"+source+"</body>";
        console.log(source);
        innerDoc.body.outerHTML = source;

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

        document.getElementById("newHTML").innerHTML = innerDoc.body.innerHTML;
    };

    document.body.appendChild(iframe);*/
    //console.log('iframe.contentWindow =', iframe.contentWindow);








    parser = new DOMParser();
    innerDoc = parser.parseFromString(source, "text/html");

    for(var i = 0 ; i < keys.length ; i++) {
        var technique = keys[i].split("_")[0];
        var message = keys[i].split("_")[1];

        if(techniques[technique] != null) {
            techniques[technique].processAutomatedRefactoring(message, i);
            //console.log(innerDoc.body.innerHTML);
        }
    }

    /*allTagInsideIframe = innerDoc.querySelectorAll('body');

    for (var index = 0; index < allTagInsideIframe.length; index++) {
        result += allTagInsideIframe[index].outerHTML;
        //console.log(result);
        result += "\n";
    }*/
    //console.log(innerDoc);


    //1
    //document.getElementById("newHTML").innerHTML = innerDoc.body.outerHTML;

    //2
    /*var newHTML = "";
    document.getElementById("newHTML").innerHTML = innerDoc.querySelectorAll("*");
    for (var index = 0; index < innerDoc.querySelectorAll("*").length; index++) {
        newHTML += innerDoc.querySelectorAll("*")[index].outerHTML;
    }
    document.getElementById("newHTML").innerHTML = newHTML;*/

    //3
    document.getElementById("newHTML").innerHTML = he.encode(innerDoc.getElementsByTagName("html")[0].outerHTML);




    function saveTextAsFile()
    {
        var textToSave = innerDoc.getElementsByTagName("html")[0].outerHTML;
        var textToSaveAsBlob = new Blob([textToSave], {type:"text/html"});
        var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        var fileNameToSaveAs = "Automatica11y";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null)
        {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = textToSaveAsURL;
        }
        else
        {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = textToSaveAsURL;
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
    }
    function destroyClickedElement(event)
    {
        document.body.removeChild(event.target);
    }



    //var _messagesProcess = [];
    var _messagesProcess2 = [];

    //function runHTMLCSTest() {
    //var source = document.getElementById('source').value;
    if (source !== '') {
        /*var level = '';
        for (var i = 0; i < document.getElementById('runHTMLCS').level.length; i++) {
            var option = document.getElementById('runHTMLCS').level[i];
            if (option.checked === true) {
                level = option.value;
                break;
            }
        }*/

        var level = "";
        level = "<?php echo $_POST['level'] ?>";
        document.getElementById("level").innerHTML = level;

        runHTMLCS(level, innerDoc.getElementsByTagName("html")[0].outerHTML, document.getElementById('resultsWrapper'), function() {
            //scrollToElement(document.getElementById('test-area'));
        });

        var runBtn       = document.getElementById('run-button');
        //runBtn.className = 'test-options-disabled';
    }
    //}

    function runHTMLCS(standard, source, resultsDiv, callback)
    {
        /*if (/resultsWrapperActive/.test(resultsDiv) === false) {
            resultsDiv.className += ' resultsWrapperActive';
        }

        resultsDiv.innerHTML = '<span class="loading"><img src="images/loading.gif" alt="Loading"><br>Sniffing</span>';*/

        HTMLCS.process(standard, source, function() {
            if (standard === 'Section508') {
                updateResults508(resultsDiv);
            } else {
                updateResults(resultsDiv);
            }

            if (callback instanceof Function === true) {
                callback.call();
            }
        });
    }

    function updateResults(resultsWrapper)
    {
        resultsWrapper.innerHTML = '';

        var principles = {
            'Principle1': 'Perceivable',
            'Principle2': 'Operable',
            'Principle3': 'Understandable',
            'Principle4': 'Robust'
        };

        window._messagesProcess = HTMLCS.getMessages();
        _messagesProcess2 = window._messagesProcess;
        //HTMLCSAuditor._options = '//squizlabs.github.io/HTML_CodeSniffer/build/';
        //var snippet = HTMLCSAuditor.build('WCAG2AAA', msgs, '//squizlabs.github.io/HTML_CodeSniffer/build/');

        if (window._messagesProcess.length === 0) {
            resultsWrapper.innerHTML = '<span class="no-violations">No violations found</span>';
            return;
        }

        var content = '<div class="col-xs-10 col-xs-offset-1"><table class="table table-condensed table-bordered table-hover check-table">';
        content    += '<thead><tr><th><input type="checkbox" onClick="toggle(this)" /></th><th>No</th><th>Message</th><th>Principle</th><th><acronym title="Success Criterion">SC</acronym></th><th>Techniques</th></tr></thead>';

        var errors   = 0;
        var warnings = 0;
        var notices  = 0;
        var refTechnique = [];
        var a = 0;
        var refactorAgain = false;

        for (var i = 0; i < window._messagesProcess.length; i++) {
            var msg = window._messagesProcess[i];
            var type = '';
            switch (msg.type) {
                case HTMLCS.ERROR:
                    type = 'Error';
                    errors++;
                    break;

                case HTMLCS.WARNING:
                    type = 'Warning';
                    warnings++;
                    break;

                case HTMLCS.NOTICE:
                    type = 'Notice';
                    notices++;
                    break;

                default:
                    type = 'Unknown';
                    break;
            }

            // Get the success criterion so we can provide a link.
            var msgParts   = msg.code.split('.');
            var principle  = msgParts[1];
            var sc         = msgParts[3].split('_').slice(0, 3).join('_');
            var techniques = msgParts[4];
            //own
            var errorMessage =  "";
            if(msgParts[5]) {
                errorMessage     += msgParts[5];
            }
            if(msgParts[6]) {
                errorMessage     += msgParts[6];
            }
            /*if(source === NaN) {
                source = "";
            }*/
            techniques     = techniques.split(',');

            var teknik = "";
            for (var k = 0; k < techniques.length; k++) {
                teknik += techniques[k].toLowerCase();
            }
                
            //if((type != "Notice" || sc == "1_2_9" || sc == "1_2_1" || sc == "1_2_6") && (notCheckTechnique != "H67" || errorMessage != "2")) {
            if((sc == "1_1_1" && teknik == "h30") || teknik == "h37" || teknik == "h67" || teknik == "h36" || teknik == "h24" || teknik == "h2" || teknik == "h53aria6" || teknik == "h35" ||
                teknik == "g158" || teknik == "g159g166" ||
                teknik == "g54g81" ||
                teknik == "h42" || teknik == "h44" || teknik == "f68" || teknik == "h65" || teknik == "h49" || teknik == "h63" || teknik == "h43" || teknik == "h39" || teknik == "h73" || teknik == "h39h73" || teknik == "h71" ||
                teknik == "g18" || teknik == "g145" ||
                teknik == "g17" ||
                teknik == "scr20" ||
                teknik == "f40" || teknik == "f41" ||
                teknik == "f4" || teknik == "f47" ||
                teknik == "h64" ||
                teknik == "h25" ||
                teknik == "h73" ||
                teknik == "h59" ||
                teknik == "h57" ||
                teknik == "h62" ||
                teknik == "h32" ||
                teknik == "h91") {
               
                refactorAgain = true;
            } 
        }

        if(refactorAgain) {
            document.getElementById("refactor-again").innerHTML = 
            "<form action='index.php' method='POST'><input type='hidden' name='source' value='"+he.encode(innerDoc.getElementsByTagName("html")[0].outerHTML)+"'><br>Beberapa teknik masih dapat dilakukan perbaikan lagi dengan Automatica11y ini<br><button type='submit' class='btn btn-theme btn-lg btn-block'>Refactor kembali</button><br></form>";
        }

        document.getElementById("newHTML-error").innerHTML = errors;
        document.getElementById("newHTML-warning").innerHTML = warnings;
        document.getElementById("newHTML-notice").innerHTML = notices;
    }

    document.getElementById("oldHTML-error").innerHTML = <?php echo $_POST['old-error'] ?>;
    document.getElementById("oldHTML-warning").innerHTML = <?php echo $_POST['old-warning'] ?>;
    document.getElementById("oldHTML-notice").innerHTML = <?php echo $_POST['old-notice'] ?>;

</script>
</body>
</html>
