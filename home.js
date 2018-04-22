//var _messagesProcess = [];
var _messagesProcess2 = [];

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

    var content = '<table id="test-results-table"><tr>';
    content    += '<th><input type="checkbox" onClick="toggle(this)" /></th><th>No</th><th>Message</th><th>Principle</th><th><acronym title="Success Criterion">SC</acronym></th><th>Techniques</th></tr>';

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
        console.log("prenode : " + preNode);
        while (preText.length <= 31) {
            console.log("pretext : " + preText);
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


        content += '<tr class="' + type.toLowerCase() + '">';

        for (var j = 0; j < techniques.length; j++) {
            var notCheckTechnique = techniques[j];
        }
        if((type != "Notice" || sc == "1_2_9" || sc == "1_2_1" || sc == "1_2_6") && (notCheckTechnique != "H67" || errorMessage != "2")) {
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
            content += "-" + encodeURIComponent(window._messagesProcess[i].element.outerHTML) + '"></td>';
        } else {
            content += '<td></td>';
        }
        content += '<td class="number"><span class="flag"></span></td>';
        content += '<td class="messageText"><strong>' + type + ':</strong> ' + msg.msg +'</td>';
        content += '<td class="messagePrinciple">';
        content += '<a href="http://www.w3.org/TR/WCAG20/#' + principles[principle].toLowerCase() + '">' + principles[principle] + '</a>';
        content += '</td>';
        content += '<td class="messageSC">';
        content += '<a href="Standards/WCAG2/' + sc + '">' + sc.replace(new RegExp('_', 'g'), '.') + '</a>';
        content += '</td>';
        content += '<td class="messageTechniques"><ul>';
        for (var j = 0; j < techniques.length; j++) {
            content += '<li><a href="http://www.w3.org/TR/WCAG20-TECHS/' + techniques[j] + '">' + techniques[j] + '</a></li>';
        }
        content += '</ul></td>';
        content += '</tr>';
        content += errorMessage;
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


    var heading = '<h3>Test results</h3>';
    heading += '<form action="refactoring.php" method="POST">';

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
    //content += '<span class="footnote"><em>Add the Accessibility Auditor bookmarklet to your browser to run this test on any web page.</em></span></div>';
    //content += '<br><a href="refactoring.html?source='+document.getElementById('source').value + auto()+'">Automated Refactoring</a>';
    //*content += '<br><input type="button" value="Automated Refactoring" onclick="auto('+refTechnique+');">';
    content += '<textarea type="text" name="source" style="display:none;">'+encodeURIComponent(document.getElementById('source').value)+'</textarea>';
    //content += '<textarea type="text" name=message style="display:none;">'+str+'</textarea>';
    content += '<br><input type="submit" value="Submit">';
    content += '</form>';
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

        runHTMLCS(level, source, document.getElementById('resultsWrapper'), function() {
            scrollToElement(document.getElementById('test-area'));
        });

        var runBtn       = document.getElementById('run-button');
        runBtn.className = 'test-options-disabled';
    }
}

function activateHTMLCS() {
    var runBtn       = document.getElementById('run-button');
    runBtn.className = 'test-options-active';
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



