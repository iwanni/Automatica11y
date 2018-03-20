

//<a>Kalau begini error atau tidak</a>
    for(let i = 0 ; i < document.getElementsByTagName("a").length ; i++) {
        if (document.getElementsByTagName("a")[i].getAttribute("href") == false ||
            document.getElementsByTagName("a")[i].getAttribute("href") == null) {
            let hrefText = prompt("Please enter href link "+ (i + 1) +":", "");
            document.getElementsByTagName("a")[i].setAttribute("href", hrefText);
        }
        if (document.getElementsByTagName("a")[i].innerHTML == false) {
            let aText = prompt("Please enter a link text:"+ (i + 1) +":", "");
            document.getElementsByTagName("a")[i].innerHTML = aText;
        }
    }
