//var _messagesProcess = [];
var _standard = "";

function runHTMLCS(standard, source, resultsDiv, callback)
{
    if (/resultsWrapperActive/.test(resultsDiv) === false) {
        resultsDiv.className += ' resultsWrapperActive';
    }

    resultsDiv.innerHTML = '<span class="loading"><img src="images/loading.gif" alt="Loading"><br>Sniffing</span>';

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

        // Build a message code without the standard name.
        msgParts.shift();
        msgParts.unshift('[Standard]');
        var noStdMsgParts = msgParts.join('.');

        console.log("msg element : " + msg.element.outerHTML);
        console.log("msg element previous : " + msg.element.previousSibling);
        console.log("i : "+ i);
        var preText = "";
        var preNode = msg.element.previousSibling;
        //console.log("prenode : " + preNode);
        while (preText.length <= 31) {
            //console.log("pretext : " + preText);
            if (preNode === null) {
                /*if(msg.element.parentNode.nodeType ===1) {
                    preText = msg.element.parentNode.outerHTML + preText;
                } else if (msg.element.parentNode.nodeType === 3) {
                    if (msg.element.parentNode.textContent !== undefined) {
                        preText = msg.element.parentNode.textContent + preText;
                    } else {
                        preText = msg.element.parentNode.nodeValue + preText;
                    }
                }*/
                break;
            } else {
                if (preNode.nodeType === 1) {
                    // Element node.
                    preText = preNode.outerHTML + preText;
                } else if (preNode.nodeType === 3) {
                    // Text node.
                    if (preNode.textContent !== undefined) {
                        preText = preNode.textContent + preText;
                    } else {
                        preText = preNode.nodeValue + preText;
                    }
                }
                if (preText.length > 31) {
                    preText = "..." + preText.substr(preText.length - 31);
                }
            }
            preNode = preNode.previousSibling;
        }

        var postText = "";
        var postNode = msg.element.nextSibling;
        while (postText.length <= 31) {
            if (postNode === null) {
                break;
            } else {
                if (postNode.nodeType === 1) {
                    // Element node.
                    postText += postNode.outerHTML;
                } else if (postNode.nodeType === 3) {
                    // Text node.
                    if (postNode.textContent !== undefined) {
                        postText += postNode.textContent;
                    } else {
                        postText += postNode.nodeValue;
                    }
                }
                if (postText.length > 31) {
                    postText = postText.substr(0, 31) + "...";
                }
            }
            postNode = postNode.nextSibling;
        }

        /*if(msg.element.outerHTML.length > 50) {
            snippet = msg.element.outerHTML.substr(0, 50) + "...";
        } else {
            snippet = msg.element.outerHTML;
        }  */ 
        snippet = msg.element.outerHTML;

        //content += '<tr class="' + type.toLowerCase() + '">';

        var teknik = "";
        for (var k = 0; k < techniques.length; k++) {
            teknik += techniques[k].toLowerCase();
        }
            
            //if((type != "Notice" || sc == "1_2_9" || sc == "1_2_1" || sc == "1_2_6") && (notCheckTechnique != "H67" || errorMessage != "2")) {
            if((sc == "1_1_1" && teknik == "h30") || teknik == "h37" || teknik == "h67" || teknik == "h36" || teknik == "h24" || (teknik == "h2" && errorMessage == "4") || teknik == "h53aria6" || teknik == "h35" ||
                teknik == "g158" || teknik == "g159g166" ||
                teknik == "g54g81" ||
                teknik == "h42" || teknik == "h44" || teknik == "f68" || teknik == "h65" || teknik == "h49" || teknik == "h63" || (teknik == "h43" && errorMessage.substring(0,13) == "IncorrectAttr") || teknik == "h39" || teknik == "h73" || teknik == "h39h73" || teknik == "h71" ||
                teknik == "g18" || teknik == "g145" ||
                teknik == "g17" ||
                teknik == "scr20" && (errorMessage == "MouseOver" || errorMessage == "MouseOut" || errorMessage == "MouseDown" || errorMessage == "MouseUp") ||
                teknik == "f40" || teknik == "f41" ||
                teknik == "f4" || teknik == "f47" ||
                (teknik == "h64" && errorMessage == "1") ||
                teknik == "h25" && (errorMessage == "1NoTitleEl" || errorMessage == "1EmptyTitle") ||
                teknik == "h73" ||
                teknik == "h59" ||
                teknik == "h57" ||
                teknik == "h62" ||
                teknik == "h32" ||
                teknik == "h91" && errorMessage == "AEmpty" || errorMessage == "AEmptyWithName" || errorMessage == "AEmptyNoId" || errorMessage == "ANoContent" || errorMessage == "APlaceholder" || errorMessage == "ANoHref") {
                content += '<td><input type="checkbox" name="r[]" value="';
                for (var j = 0; j < techniques.length; j++) {
                    //content += techniques[j] + "_" + source + "_" + sc.replace(new RegExp('_', 'g'), '.');
                    content += techniques[j] + "_" + errorMessage;
                }
                if(errorMessage) {
                    content += "_";
                }
                content += sc.replace(new RegExp('_', 'g'), '.');
                //content += "-" + encodeURIComponent(preText) + encodeURIComponent(window._messagesProcess[i].element.outerHTML) + encodeURIComponent(postText) + '"></td>';
                content += "-" + encodeURIComponent(snippet) + '"></td>';
            } else {
                content += '<td></td>';
            }
        

		var number = i + 1;
        content += '<td>'+ number +'</td>';
        content += '<td><strong>' + type + ':</strong> ' + msg.msg +'</td>';
        content += '<td>';
        content += '<a href="http://www.w3.org/TR/WCAG20/#' + principles[principle].toLowerCase() + '">' + principles[principle] + '</a>';
        content += '</td>';
        content += '<td>';
        content += '<a href="Standards/WCAG2/' + sc + '">' + sc.replace(new RegExp('_', 'g'), '.') + '</a>';
        content += '</td>';
        content += '<td>';
        for (var j = 0; j < techniques.length; j++) {
            content += '<a href="http://www.w3.org/TR/WCAG20-TECHS/' + techniques[j] + '">' + techniques[j] + '</a><br>';
        }
        content += '</td>';
        content += '</tr>';
        //content += errorMessage;
        //content += msg.element.outerHTML;

        refTechnique[a] = techniques;
        a++;
    }

    //object
    /*var str = "";
    for (var key in window._messagesProcess) {
        if (str != "") {
            str += "&";
        }
        if(window._messagesProcess[key].type != 3) {
            str += key + "=" + decodeURIComponent(window._messagesProcess[key].element.outerHTML);
            
        }
    }*/


    var heading = '<div id="service"><div class="container"><div class="row"><div class="col-xs-8 col-xs-offset-2 centered"><h2>Check Result.</h2><br><div class="hline"></div><br></div>';
    heading += '<form action="refactoring.php" method="POST">';
	heading += '<div class="col-xs-2 col-xs-offset-3 text-center"><div class="img-circle check-error center"><span class="check-number">'+errors+'</span></div><h4>Error</h4></div>';
	heading += '<div class="col-xs-2 text-center"><div class="img-circle check-warning center"><span class="check-number">'+warnings+'</span></div><h4>Warning</h4></div>';
	heading += '<div class="col-xs-2 text-center"><div class="img-circle check-notice center"><span class="check-number">'+notices+'</span></div><h4>Notice</h4></div>';

    /*var noticeActive     = '';
    var testResultsClass = 'hide-notice';
    if ((errors === 0) && (warnings === 0)) {
        noticeActive     = ' class="active"';
        testResultsClass = '';
    }

    heading += '<ul id="results-overview">';
    heading += '<li class="active"><a href="#" onclick="return toggleMsgTypes.call(this, \'error\');"><span class="result-count result-count-errors">' + errors + '</span> <span class="result-type">errors</span></a></li>';
    heading += '<li class="active"><a href="#" onclick="return toggleMsgTypes.call(this, \'warning\');"><span class="result-count result-count-warnings">' + warnings + '</span> <span class="result-type">warnings</span></a></li>';
    heading += '<li' + noticeActive + '><a href="#" onclick="return toggleMsgTypes.call(this, \'notice\');"><span class="result-count result-count-notices">' + notices + '</span> <span class="result-type">notices</span></a></li>';
    heading += '</ul>';
    heading += '<div id="test-results" class="' + testResultsClass + '">';*/

    content  = heading + content;
    content += '</table>';
	content += '<textarea type="text" name="source" style="display:none;">'+encodeURIComponent(document.getElementById('source').value)+'</textarea>';
	content += '<input type="hidden" name="level" value="'+_standard+'">';
	content += '<input type="hidden" name="old-error" value="'+errors+'">';
	content += '<input type="hidden" name="old-warning" value="'+warnings+'">';
	content += '<input type="hidden" name="old-notice" value="'+notices+'">';
	
    //content += '<div id="test-results-noMessages"><em>No messages matched the types you selected</em></div>';
    //content += '<span class="footnote"><em>Add the Accessibility Auditor bookmarklet to your browser to run this test on any web page.</em></span></div>';
    //content += '<br><a href="refactoring.html?source='+document.getElementById('source').value + auto()+'">Automated Refactoring</a>';
    //*content += '<br><input type="button" value="Automated Refactoring" onclick="auto('+refTechnique+');">';
    //content += '<textarea type="text" name=message style="display:none;">'+str+'</textarea>';
    content += '<button type="submit" class="btn btn-theme btn-lg btn-block">Finish Select Technique To Fix</button>';
    content += '</form></div></div></div><!--/container --></div><!--/service -->';
    resultsWrapper.innerHTML = content;

    reorderResults();
}

function toggle(source) {
    checkboxes = document.getElementsByName("r[]");
    for(var i=0 ; i<checkboxes.length ; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function updateResults508(resultsWrapper)
{
    resultsWrapper.innerHTML = '';

    var msgs = HTMLCS.getMessages();
    console.info(msgs);
    if (msgs.length === 0) {
        resultsWrapper.innerHTML = '<span class="no-violations">No violations found</span>';
        return;
    }

    var content = '<table id="test-results-table"><tr>';
    content    += '<th>#</th><th>Message</th><th>Rule</th></tr>';

    var errors   = 0;
    var warnings = 0;
    var notices  = 0;

    for (var i = 0; i < msgs.length; i++) {
        var msg = msgs[i];
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
        var msgParts = msg.code.split('.');
        var section  = msgParts[1];

        // Build a message code without the standard name.
        msgParts.shift();
        msgParts.unshift('[Standard]');
        var noStdMsgParts = msgParts.join('.');

        content += '<tr class="' + type.toLowerCase() + '">';
        content += '<td class="number"><span class="flag"></span></td>';
        content += '<td class="messageText"><strong>' + type + ':</strong> ' + msg.msg + '</td>';
        content += '<td class="messagePrinciple">';
        content += '<a href="./Standards/Section508#pr' + section.toUpperCase() + '">1194.22 (' + section.toLowerCase() + ')</a>';
        content += '</td>';
        content += '</tr>';
    }


    var heading = '<h3>Test results</h3>';

    var noticeActive     = '';
    var testResultsClass = 'hide-notice';
    if ((errors === 0) && (warnings === 0)) {
        noticeActive     = ' class="active"';
        testResultsClass = '';
    }

    heading += '<ul id="results-overview">';
    heading += '<li class="active"><a href="#" onclick="return toggleMsgTypes.call(this, \'error\');"><span class="result-count result-count-errors">' + errors + '</span> <span class="result-type">errors</span></a></li>';
    heading += '<li class="active"><a href="#" onclick="return toggleMsgTypes.call(this, \'warning\');"><span class="result-count result-count-warnings">' + warnings + '</span> <span class="result-type">warnings</span></a></li>';
    heading += '<li' + noticeActive + '><a href="#" onclick="return toggleMsgTypes.call(this, \'notice\');"><span class="result-count result-count-notices">' + notices + '</span> <span class="result-type">notices</span></a></li>';
    heading += '</ul>';
    heading += '<div id="test-results" class="' + testResultsClass + '">';

    content  = heading + content;
    content += '</table>';
    content += '<div id="test-results-noMessages"><em>No messages matched the types you selected</em></div>';
    content += '<span class="footnote"><em>Add the Accessibility Auditor bookmarklet to your browser to run this test on any web page.</em></span></div>';
    resultsWrapper.innerHTML = content;

    reorderResults();
}

function runHTMLCSTest() {
    var source = document.getElementById('source').value;
    if (source !== '') {
        var level = '';
        for (var i = 0; i < document.getElementById('runHTMLCS').level.length; i++) {
            var option = document.getElementById('runHTMLCS').level[i];
            if (option.checked === true) {
                level = option.value;
                break;
            }
        }
		
		_standard = level;
		
        runHTMLCS(level, source, document.getElementById('resultsWrapper'), function() {
            scrollToElement(document.getElementById('test-area'));
        });

        var runBtn       = document.getElementById('run-button');
        //runBtn.className = 'test-options-disabled';
    }
}

function activateHTMLCS() {
    var runBtn       = document.getElementById('run-button');
    //runBtn.className = 'test-options-active';
}

function hideDiv() {
    document.getElementById('source').focus();
    var overlayDiv = document.getElementById('code-overlay');

    if (overlayDiv.style.opacity !== undefined) {
        overlayDiv.style.opacity = 0;
        setTimeout(function() {
            overlayDiv.style.visibility = "hidden";
        }, 400);
    } else {
        overlayDiv.style.visibility = "hidden";
    }
}

function scrollToElement(element) {
    var currScrollY   = null;

    var targetScrollY = 0;
    var op = element;
    while (op.offsetParent !== null) {
        targetScrollY += op.offsetTop;
        op = op.offsetParent;
    }

    if (window.pageYOffset !== undefined) {
        currScrollY = window.pageYOffset;
    } else if (document.documentElement.scrollTop !== undefined) {
        currScrollY = document.documentElement.scrollTop;
    } else if (document.body.scrollTop !== undefined) {
        currScrollY = document.body.scrollTop;
    }


    if (currScrollY !== targetScrollY) {
        var maxTick  = 1;
        var interval = setInterval(function() {
            var sign = 1;
            if (currScrollY > targetScrollY) {
                sign = -1;
            }
            var scrollBy = sign * Math.ceil(Math.max(1, Math.min(maxTick, (Math.abs(targetScrollY - currScrollY) * 0.25))));
            currScrollY += scrollBy;
            window.scrollBy(0, scrollBy);

            if (currScrollY === targetScrollY) {
                clearInterval(interval);
            } else {
                maxTick = Math.min(maxTick + 0.5, Math.abs(targetScrollY - currScrollY));
            }
        }, 20);
    }//end if
}

function toggleMsgTypes(type) {
    if (this.parentNode.className === 'active') {
        this.parentNode.className = '';
    } else {
        this.parentNode.className = 'active';
    }

    var testResultsDiv = document.getElementById('test-results');
    var className      = 'hide-' + type;

    if (new RegExp(className).test(testResultsDiv.className) === true) {
        testResultsDiv.className = testResultsDiv.className.replace(className, '');
    } else {
        testResultsDiv.className += ' ' + className;
    }

    reorderResults();
    return false;
}

function reorderResults() {
    var testResultsDiv = document.getElementById('test-results');
    var numberCells    = testResultsDiv.querySelectorAll('tr td.number');
    var currRow        = 0;

    for (var i = 0; i < numberCells.length; i++) {
        if (window.getComputedStyle) {
            var display = window.getComputedStyle(numberCells[i].parentNode).display;
        } else {
            var display = numberCells[i].parentNode.currentStyle.display;
        }

        if (display !== 'none') {
            currRow++;
            numberCells[i].innerHTML = currRow;
        } else {
            numberCells[i].innerHTML = '';
        }
    }

    if (currRow === 0) {
        document.getElementById('test-results-noMessages').style.display = 'block';
    } else {
        document.getElementById('test-results-noMessages').style.display = 'none';
    }
}

// HTMLCSMeter.
function loadHTMLCSStats(callback)
{
    var feed = 'list';
    var key  = '11-b5pnWBTbfMLW7Ykrl00IouWxf-trB3D8WDegrAIWY';
    var worksheet = 'opjrjtk';
    $.getJSON('https://spreadsheets.google.com/feeds/' + feed + '/' + key + '/' + worksheet + '/public/values?alt=json-in-script&single=true&callback=?', null, function(data) {
        var stats = {};
        var entry = data.feed.entry[0];
        var sec   = data.feed.entry[1];

        stats.errors         = parseInt(entry.gsx$errors.$t);
        stats.warnings       = parseInt(entry.gsx$warnings.$t);
        stats.notices        = parseInt(entry.gsx$notices.$t);
        stats.errorSeconds   = parseInt(sec.gsx$errors.$t);
        stats.warningSeconds = parseInt(sec.gsx$warnings.$t);
        stats.noticesSeconds = parseInt(sec.gsx$notices.$t);
        console.info(stats);
        callback.call(this, stats);
    });
}

window.onload = function() {
    var radios = document.querySelectorAll('.radio-gen');
    var source = document.getElementById('source');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onclick = function(event) {
            event.target.previousSibling.click();
        }
    }

    var inputs = document.querySelectorAll('.radio-input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = function(event) {
            var radios = document.querySelectorAll('.radio-gen');
            for (var j = 0; j < radios.length; j++) {
                radios[j].className = radios[j].className.replace(/ radio-on/, '');
            }

            event.target.nextSibling.className += ' radio-on';

            if (source.value !== '') {
                activateHTMLCS();
            }
        }
    }

    source.onkeypress = function() {
        activateHTMLCS();
    };

    source.onpaste = function() {
        activateHTMLCS();
    };

    // Set the back-to-top div to appear only when a certain amount of pixels down.
    var topDiv = document.getElementById('back-to-top');
    window.onscroll = function() {
        var offset = window.pageYOffset || document.documentElement.scrollTop;

        if (offset >= 1200) {
            topDiv.className = 'on';
        } else {
            topDiv.className = 'off';
        }
    }

    window.onscroll();
}



