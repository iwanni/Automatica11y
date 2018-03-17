/*! HTML_CodeSniffer - v2.1.1 - 2018-01-17 */
/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['htmlcs'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var exports = factory();
        for (var prop in exports) {
            root[prop] = exports[prop];
        }
    }
}(this, function() {
    var _global = {}

    _global.HTMLCS_Section508 = {
        name: "Section508",
        description: "U.S. Section 508 Standard",
        sniffs: ["A", "B", "C", "D", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"],
        getMsgInfo: function(a) {
            return [
                ["Section", "1194.22 (" + a.split(".", 3)[1].toLowerCase() + ")"]
            ]
        }
    }, _global.HTMLCS_Section508_Sniffs_A = {
        register: function() {
            return ["_top", "img", "object", "bgsound", "audio"]
        },
        process: function(a, b) {
            if (a === b) this.addNullAltTextResults(b), this.addMediaAlternativesResults(b);
            else {
                var c = a.nodeName.toLowerCase();
                "object" !== c && "bgsound" !== c && "audio" !== c || HTMLCS.addMessage(HTMLCS.NOTICE, a, "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.", "Audio")
            }
        },
        testNullAltText: function(a) {
            var b = {
                img: {
                    generalAlt: [],
                    missingAlt: [],
                    ignored: [],
                    nullAltWithTitle: [],
                    emptyAltInLink: []
                },
                inputImage: {
                    generalAlt: [],
                    missingAlt: []
                },
                area: {
                    generalAlt: [],
                    missingAlt: []
                }
            };
            elements = HTMLCS.util.getAllElements(a, 'img, area, input[type="image"]');
            for (var c = 0; c < elements.length; c++) {
                var d = elements[c],
                    e = d.nodeName.toLowerCase(),
                    f = !1,
                    g = !1,
                    h = !1;
                if ("a" === d.parentNode.nodeName.toLowerCase()) {
                    var i = HTMLCS.util.getPreviousSiblingElement(d, null),
                        j = HTMLCS.util.getNextSiblingElement(d, null);
                    if (null === i && null === j) {
                        var k = d.parentNode.textContent;
                        if (void 0 !== d.parentNode.textContent) var k = d.parentNode.textContent;
                        else var k = d.parentNode.innerText;
                        !0 === HTMLCS.util.isStringEmpty(k) && (f = !0)
                    }
                }
                switch (!1 === d.hasAttribute("alt") ? g = !0 : d.getAttribute("alt") && !0 !== HTMLCS.util.isStringEmpty(d.getAttribute("alt")) || (h = !0), e) {
                    case "img":
                        !0 !== f || !0 !== g && !0 !== h ? !0 === g ? b.img.missingAlt.push(d) : !0 === h ? !0 === d.hasAttribute("title") && !1 === HTMLCS.util.isStringEmpty(d.getAttribute("title")) ? b.img.nullAltWithTitle.push(d) : b.img.ignored.push(d) : b.img.generalAlt.push(d) : b.img.emptyAltInLink.push(d.parentNode);
                        break;
                    case "input":
                        !0 === g || !0 === h ? b.inputImage.missingAlt.push(d) : b.inputImage.generalAlt.push(d);
                        break;
                    case "area":
                        !0 === g || !0 === h ? b.area.missingAlt.push(d) : b.inputImage.generalAlt.push(d)
                }
            }
            return b
        },
        addNullAltTextResults: function(a) {
            for (var b = this.testNullAltText(a), c = 0; c < b.img.emptyAltInLink.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.img.emptyAltInLink[c], "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.", "Img.EmptyAltInLink");
            for (var c = 0; c < b.img.nullAltWithTitle.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.img.nullAltWithTitle[c], "Img element with empty alt text must have absent or empty title attribute.", "Img.NullAltWithTitle");
            for (var c = 0; c < b.img.ignored.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.img.ignored[c], "Img element is marked so that it is ignored by Assistive Technology.", "Img.Ignored");
            for (var c = 0; c < b.img.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.img.missingAlt[c], "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.", "Img.MissingAlt");
            for (var c = 0; c < b.img.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.img.generalAlt[c], "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.", "Img.GeneralAlt");
            for (var c = 0; c < b.inputImage.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.inputImage.missingAlt[c], "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.", "InputImage.MissingAlt");
            for (var c = 0; c < b.inputImage.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.inputImage.generalAlt[c], "Ensure that the image submit button's alt text identifies the purpose of the button.", "InputImage.GeneralAlt");
            for (var c = 0; c < b.area.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.area.missingAlt[c], "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.", "Area.MissingAlt");
            for (var c = 0; c < b.area.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.area.generalAlt[c], "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.", "Area.GeneralAlt")
        },
        testMediaTextAlternatives: function(a) {
            for (var b = {
                    object: {
                        missingBody: [],
                        generalAlt: []
                    },
                    applet: {
                        missingBody: [],
                        missingAlt: [],
                        generalAlt: []
                    }
                }, c = HTMLCS.util.getAllElements(a, "object"), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = (e.nodeName.toLowerCase(), e.querySelector("object"));
                if (null === f) {
                    var g = HTMLCS.util.getElementTextContent(e, !0);
                    "" === g ? b.object.missingBody.push(e) : b.object.generalAlt.push(e)
                }
            }
            for (var c = HTMLCS.util.getAllElements(a, "applet"), d = 0; d < c.length; d++) {
                var f = e.querySelector("object"),
                    h = !1;
                if (null === f) {
                    var g = HTMLCS.util.getElementTextContent(e, !0);
                    !0 === HTMLCS.util.isStringEmpty(g) && (b.applet.missingBody.push(e), h = !0)
                }
                var i = e.getAttribute("alt") || "";
                !0 === HTMLCS.util.isStringEmpty(i) && (b.applet.missingAlt.push(e), h = !0), !1 === h && b.applet.generalAlt.push(e)
            }
            return b
        },
        addMediaAlternativesResults: function(a) {
            for (var b = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1.testMediaTextAlternatives(a), c = 0; c < b.object.missingBody.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.object.missingBody[c], "Object elements must contain a text alternative after all other alternatives are exhausted.", "Object.MissingBody");
            for (var c = 0; c < b.object.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.object.generalAlt[c], "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.", "Object.GeneralAlt");
            for (var c = 0; c < b.applet.missingBody.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.applet.missingBody[c], "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.", "Applet.MissingBody");
            for (var c = 0; c < b.applet.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.applet.missingAlt[c], "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.", "Applet.MissingAlt");
            for (var c = 0; c < b.applet.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.applet.generalAlt[c], "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.", "Applet.GeneralAlt")
        }
    }, _global.HTMLCS_Section508_Sniffs_B = {
        register: function() {
            return ["object", "applet", "embed", "video"]
        },
        process: function(a, b) {
            a.nodeName.toLowerCase();
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.", "Video"), HTMLCS.addMessage(HTMLCS.NOTICE, a, "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.", "Captions")
        }
    }, _global.HTMLCS_Section508_Sniffs_C = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.", "Colour")
        }
    }, _global.HTMLCS_Section508_Sniffs_D = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b) {
                HTMLCS.addMessage(HTMLCS.NOTICE, b, "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.", "Linearised"), this.testPresentationMarkup(b), this.testHeadingOrder(b);
                HTMLCS.util.getAllElements(b, 'script, link[rel="stylesheet"]').length > 0 && HTMLCS.addMessage(HTMLCS.NOTICE, b, 'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.', "HiddenText")
            }
        },
        testPresentationMarkup: function(a) {
            _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testPresentationMarkup(a)
        },
        testHeadingOrder: function(a) {
            for (var b = 0, c = HTMLCS.util.getAllElements(a, "h1, h2, h3, h4, h5, h6"), d = 0; d < c.length; d++) {
                var e = parseInt(c[d].nodeName.substr(1, 1));
                if (e - b > 1) {
                    var f = "should be an h" + (b + 1) + " to be properly nested";
                    0 === b && (f = "appears to be the primary document heading, so should be an h1 element"), HTMLCS.addMessage(HTMLCS.ERROR, c[d], "The heading structure is not logically nested. This h" + e + " element " + f + ".", "HeadingOrder")
                }
                b = e
            }
        }
    }, _global.HTMLCS_Section508_Sniffs_G = {
        register: function() {
            return ["table"]
        },
        process: function(a, b) {
            !0 === HTMLCS.util.isLayoutTable(a) && HTMLCS.addMessage(HTMLCS.NOTICE, a, "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.", "TableHeaders")
        }
    }, _global.HTMLCS_Section508_Sniffs_H = {
        register: function() {
            return ["table"]
        },
        process: function(a, b) {
            for (var c = HTMLCS.util.testTableHeaders(a), d = 0; d < c.wrongHeaders.length; d++) HTMLCS.addMessage(HTMLCS.ERROR, c.wrongHeaders[d].element, 'Incorrect headers attribute on this td element. Expected "' + c.wrongHeaders[d].expected + '" but found "' + c.wrongHeaders[d].actual + '"', "IncorrectHeadersAttr");
            !0 === c.required && !1 === c.allowScope && (!1 === c.used ? HTMLCS.addMessage(HTMLCS.ERROR, a, "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.", "MissingHeadersAttrs") : (c.missingThId.length > 0 && HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.", "MissingHeaderIds"), c.missingTd.length > 0 && HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.", "IncompleteHeadersAttrs")))
        }
    }, _global.HTMLCS_Section508_Sniffs_I = {
        register: function() {
            return ["frame", "iframe", "object"]
        },
        process: function(a, b) {
            var c = a.nodeName.toLowerCase(),
                d = a.hasAttribute("title"),
                e = !0;
            !0 === d && (e = HTMLCS.util.isStringEmpty(a.getAttribute("title"))), !0 === e && HTMLCS.addMessage(HTMLCS.ERROR, b, "This " + c + " element is missing title text. Frames should be titled with text that facilitates frame identification and navigation.", "Frames")
        }
    }, _global.HTMLCS_Section508_Sniffs_J = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.", "Flicker")
        }
    }, _global.HTMLCS_Section508_Sniffs_K = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.", "AltVersion")
        }
    }, _global.HTMLCS_Section508_Sniffs_L = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            a === b && (this.addProcessLinksMessages(b), this.testKeyboard(b))
        },
        addProcessLinksMessages: function(a) {
            for (var b = this.processLinks(a), c = 0; c < b.emptyNoId.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.emptyNoId[c], "Anchor element found with no link content and no name and/or ID attribute.", "EmptyAnchorNoId");
            for (var c = 0; c < b.placeholder.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.placeholder[c], "Anchor element found with link content, but no href, ID, or name attribute has been supplied.", "PlaceholderAnchor");
            for (var c = 0; c < b.noContent.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.noContent[c], "Anchor element found with a valid href attribute, but no link content has been supplied.", "NoContentAnchor")
        },
        processLinks: function(a) {
            for (var b = {
                    empty: [],
                    emptyWithName: [],
                    emptyNoId: [],
                    noHref: [],
                    placeholder: [],
                    noContent: []
                }, c = HTMLCS.util.getAllElements(a, "a"), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = !1,
                    g = HTMLCS.util.getElementTextContent(e);
                !0 === e.hasAttribute("title") && !1 === /^\s*$/.test(e.getAttribute("title")) ? !0 : !1 === /^\s*$/.test(g) && !0, !0 === e.hasAttribute("href") && !1 === /^\s*$/.test(e.getAttribute("href")) && (f = !0), !1 === f ? !0 === /^\s*$/.test(g) ? !0 === e.hasAttribute("id") ? b.empty.push(e) : !0 === e.hasAttribute("name") ? b.emptyWithName.push(e) : b.emptyNoId.push(e) : !0 === e.hasAttribute("id") || !0 === e.hasAttribute("name") ? b.noHref.push(e) : b.placeholder.push(e) : !0 === /^\s*$/.test(g) && 0 === e.querySelectorAll("img").length && b.noContent.push(e)
            }
            return b
        },
        testKeyboard: function(a) {
            for (var b = HTMLCS.util.getAllElements(a, "*[ondblclick]"), c = 0; c < b.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b[c], "Ensure the functionality provided by double-clicking on this element is available through the keyboard.", "DblClick");
            for (var d = HTMLCS.util.getAllElements(a, "*[onmouseover]"), c = 0; c < d.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, d[c], "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.", "MouseOver");
            for (var e = HTMLCS.util.getAllElements(a, "*[onmouseout]"), c = 0; c < e.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, e[c], "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.", "MouseOut");
            for (var f = HTMLCS.util.getAllElements(a, "*[onmousemove]"), c = 0; c < f.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, f[c], "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.", "MouseMove");
            for (var g = HTMLCS.util.getAllElements(a, "*[onmousedown]"), c = 0; c < g.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, g[c], "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.", "MouseDown");
            for (var h = HTMLCS.util.getAllElements(a, "*[onmouseup]"), c = 0; c < h.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, h[c], "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.", "MouseUp")
        }
    }, _global.HTMLCS_Section508_Sniffs_M = {
        register: function() {
            return ["object", "applet", "bgsound", "embed", "audio", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.", "PluginLink")
        }
    }, _global.HTMLCS_Section508_Sniffs_N = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            "form" === a.nodeName.toLowerCase() && (HTMLCS.addMessage(HTMLCS.NOTICE, a, "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.", "Errors"), HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.", "Labels"), HTMLCS.addMessage(HTMLCS.NOTICE, a, "Ensure that this form can be navigated using the keyboard and other accessibility tools.", "KeyboardNav"))
        }
    }, _global.HTMLCS_Section508_Sniffs_O = {
        register: function() {
            return ["_top", "a", "area"]
        },
        process: function(a, b) {
            if (a === b) HTMLCS.addMessage(HTMLCS.NOTICE, b, "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.", "SkipLinks");
            else if (!0 === a.hasAttribute("href")) {
                var c = a.getAttribute("href");
                if (c = HTMLCS.util.trim(c), c.length > 1 && "#" === c.charAt(0)) {
                    var d = c.substr(1);
                    try {
                        var e = b;
                        e.ownerDocument && (e = e.ownerDocument);
                        var f = e.getElementById(d);
                        null === f && (f = e.querySelector('a[name="' + d + '"]')), null !== f && !1 !== HTMLCS.util.contains(b, f) || (!0 === HTMLCS.isFullDoc(b) || "body" === b.nodeName.toLowerCase() ? HTMLCS.addMessage(HTMLCS.ERROR, a, 'This link points to a named anchor "' + d + '" within the document, but no anchor exists with that name.', "NoSuchID") : HTMLCS.addMessage(HTMLCS.WARNING, a, 'This link points to a named anchor "' + d + '" within the document, but no anchor exists with that name in the fragment tested.', "NoSuchIDFragment"))
                    } catch (a) {}
                }
            }
        }
    }, _global.HTMLCS_Section508_Sniffs_P = {
        register: function() {
            return ["_top", "meta"]
        },
        process: function(a, b) {
            a === b ? HTMLCS.addMessage(HTMLCS.NOTICE, b, "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.", "TimeLimit") : !0 === a.hasAttribute("http-equiv") && "refresh" === String(a.getAttribute("http-equiv")).toLowerCase() && !0 === /^[1-9]\d*/.test(a.getAttribute("content").toLowerCase()) && (!0 === /url=/.test(a.getAttribute("content").toLowerCase()) ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.", "MetaRedirect") : HTMLCS.addMessage(HTMLCS.ERROR, a, "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.", "MetaRefresh"))
        }
    }, _global.HTMLCS_WCAG2A = {
        name: "WCAG2A",
        description: "Web Content Accessibility Guidelines (WCAG) 2.0 A",
        sniffs: [{
            standard: "WCAG2AAA",
            include: ["Principle1.Guideline1_1.1_1_1", "Principle1.Guideline1_2.1_2_1", "Principle1.Guideline1_2.1_2_2", "Principle1.Guideline1_2.1_2_3", "Principle1.Guideline1_3.1_3_1", "Principle1.Guideline1_3.1_3_1_A", "Principle1.Guideline1_3.1_3_2", "Principle1.Guideline1_3.1_3_3", "Principle1.Guideline1_4.1_4_1", "Principle1.Guideline1_4.1_4_2", "Principle2.Guideline2_1.2_1_1", "Principle2.Guideline2_1.2_1_2", "Principle2.Guideline2_2.2_2_1", "Principle2.Guideline2_2.2_2_2", "Principle2.Guideline2_3.2_3_1", "Principle2.Guideline2_4.2_4_1", "Principle2.Guideline2_4.2_4_2", "Principle2.Guideline2_4.2_4_3", "Principle2.Guideline2_4.2_4_4", "Principle3.Guideline3_1.3_1_1", "Principle3.Guideline3_2.3_2_1", "Principle3.Guideline3_2.3_2_2", "Principle3.Guideline3_3.3_3_1", "Principle3.Guideline3_3.3_3_2", "Principle4.Guideline4_1.4_1_1", "Principle4.Guideline4_1.4_1_2"]
        }],
        getMsgInfo: function(a) {
            return HTMLCS_WCAG2AAA.getMsgInfo(a)
        }
    }, _global.HTMLCS_WCAG2AA = {
        name: "WCAG2AA",
        description: "Web Content Accessibility Guidelines (WCAG) 2.0 AA",
        sniffs: [{
            standard: "WCAG2AAA",
            include: ["Principle1.Guideline1_1.1_1_1", "Principle1.Guideline1_2.1_2_1", "Principle1.Guideline1_2.1_2_2", "Principle1.Guideline1_2.1_2_4", "Principle1.Guideline1_2.1_2_5", "Principle1.Guideline1_3.1_3_1", "Principle1.Guideline1_3.1_3_1_A", "Principle1.Guideline1_3.1_3_2", "Principle1.Guideline1_3.1_3_3", "Principle1.Guideline1_4.1_4_1", "Principle1.Guideline1_4.1_4_2", "Principle1.Guideline1_4.1_4_3", "Principle1.Guideline1_4.1_4_3_F24", "Principle1.Guideline1_4.1_4_3_Contrast", "Principle1.Guideline1_4.1_4_4", "Principle1.Guideline1_4.1_4_5", "Principle2.Guideline2_1.2_1_1", "Principle2.Guideline2_1.2_1_2", "Principle2.Guideline2_2.2_2_1", "Principle2.Guideline2_2.2_2_2", "Principle2.Guideline2_3.2_3_1", "Principle2.Guideline2_4.2_4_1", "Principle2.Guideline2_4.2_4_2", "Principle2.Guideline2_4.2_4_3", "Principle2.Guideline2_4.2_4_4", "Principle2.Guideline2_4.2_4_5", "Principle2.Guideline2_4.2_4_6", "Principle2.Guideline2_4.2_4_7", "Principle3.Guideline3_1.3_1_1", "Principle3.Guideline3_1.3_1_2", "Principle3.Guideline3_2.3_2_1", "Principle3.Guideline3_2.3_2_2", "Principle3.Guideline3_2.3_2_3", "Principle3.Guideline3_2.3_2_4", "Principle3.Guideline3_3.3_3_1", "Principle3.Guideline3_3.3_3_2", "Principle3.Guideline3_3.3_3_3", "Principle3.Guideline3_3.3_3_4", "Principle4.Guideline4_1.4_1_1", "Principle4.Guideline4_1.4_1_2"]
        }],
        getMsgInfo: function(a) {
            return HTMLCS_WCAG2AAA.getMsgInfo(a)
        }
    }, _global.HTMLCS_WCAG2AAA = {
        name: "WCAG2AAA",
        description: "Web Content Accessibility Guidelines (WCAG) 2.0 AAA",
        sniffs: ["Principle1.Guideline1_1.1_1_1", "Principle1.Guideline1_2.1_2_1", "Principle1.Guideline1_2.1_2_2", "Principle1.Guideline1_2.1_2_4", "Principle1.Guideline1_2.1_2_5", "Principle1.Guideline1_2.1_2_6", "Principle1.Guideline1_2.1_2_7", "Principle1.Guideline1_2.1_2_8", "Principle1.Guideline1_2.1_2_9", "Principle1.Guideline1_3.1_3_1", "Principle1.Guideline1_3.1_3_1_AAA", "Principle1.Guideline1_3.1_3_2", "Principle1.Guideline1_3.1_3_3", "Principle1.Guideline1_4.1_4_1", "Principle1.Guideline1_4.1_4_2", "Principle1.Guideline1_4.1_4_3_F24", "Principle1.Guideline1_4.1_4_3_Contrast", "Principle1.Guideline1_4.1_4_6", "Principle1.Guideline1_4.1_4_7", "Principle1.Guideline1_4.1_4_8", "Principle1.Guideline1_4.1_4_9", "Principle2.Guideline2_1.2_1_1", "Principle2.Guideline2_1.2_1_2", "Principle2.Guideline2_2.2_2_2", "Principle2.Guideline2_2.2_2_3", "Principle2.Guideline2_2.2_2_4", "Principle2.Guideline2_2.2_2_5", "Principle2.Guideline2_3.2_3_2", "Principle2.Guideline2_4.2_4_1", "Principle2.Guideline2_4.2_4_2", "Principle2.Guideline2_4.2_4_3", "Principle2.Guideline2_4.2_4_5", "Principle2.Guideline2_4.2_4_6", "Principle2.Guideline2_4.2_4_7", "Principle2.Guideline2_4.2_4_8", "Principle2.Guideline2_4.2_4_9", "Principle3.Guideline3_1.3_1_1", "Principle3.Guideline3_1.3_1_2", "Principle3.Guideline3_1.3_1_3", "Principle3.Guideline3_1.3_1_4", "Principle3.Guideline3_1.3_1_5", "Principle3.Guideline3_1.3_1_6", "Principle3.Guideline3_2.3_2_1", "Principle3.Guideline3_2.3_2_2", "Principle3.Guideline3_2.3_2_3", "Principle3.Guideline3_2.3_2_4", "Principle3.Guideline3_2.3_2_5", "Principle3.Guideline3_3.3_3_1", "Principle3.Guideline3_3.3_3_2", "Principle3.Guideline3_3.3_3_3", "Principle3.Guideline3_3.3_3_5", "Principle3.Guideline3_3.3_3_6", "Principle4.Guideline4_1.4_1_1", "Principle4.Guideline4_1.4_1_2"],
        getMsgInfo: function(a) {
            for (var b = {
                    Principle1: {
                        name: "Perceivable",
                        link: "http://www.w3.org/TR/WCAG20/#perceivable"
                    },
                    Principle2: {
                        name: "Operable",
                        link: "http://www.w3.org/TR/WCAG20/#operable"
                    },
                    Principle3: {
                        name: "Understandable",
                        link: "http://www.w3.org/TR/WCAG20/#understandable"
                    },
                    Principle4: {
                        name: "Robust",
                        link: "http://www.w3.org/TR/WCAG20/#robust"
                    }
                }, c = {
                    CR2: {
                        name: "Full pages",
                        landmark: "cc2",
                        priority: 0
                    },
                    CR3: {
                        name: "Complete processes",
                        landmark: "cc3",
                        priority: 0
                    },
                    CR4: {
                        name: "Only Accessibility-Supported Ways of Using Technologies",
                        landmark: "cc4",
                        priority: 0
                    },
                    CR5: {
                        name: "Non-Interference",
                        landmark: "cc5",
                        priority: 0
                    },
                    "1.1.1": {
                        name: "Non-Text Content",
                        landmark: "text-equiv-all",
                        priority: 1
                    },
                    "1.2.1": {
                        name: "Audio-only and Video-only (Prerecorded)",
                        landmark: "media-equiv-av-only-alt",
                        priority: 1
                    },
                    "1.2.2": {
                        name: "Captions (Prerecorded)",
                        landmark: "media-equiv-captions",
                        priority: 1
                    },
                    "1.2.3": {
                        name: "Audio Description or Media Alternative (Prerecorded)",
                        landmark: "media-equiv-audio-desc",
                        priority: 1
                    },
                    "1.2.4": {
                        name: "Captions (Live)",
                        landmark: "media-equiv-captions",
                        priority: 2
                    },
                    "1.2.5": {
                        name: "Audio Description (Prerecorded)",
                        landmark: "media-equiv-audio-desc",
                        priority: 2
                    },
                    "1.2.6": {
                        name: "Sign Language (Prerecorded)",
                        landmark: "media-equiv-sign",
                        priority: 3
                    },
                    "1.2.7": {
                        name: "Extended Audio Description (Prerecorded)",
                        landmark: "media-equiv-extended-ad",
                        priority: 3
                    },
                    "1.2.8": {
                        name: "Media Alternative (Prerecorded)",
                        landmark: "media-equiv-text-doc",
                        priority: 3
                    },
                    "1.2.9": {
                        name: "Audio-only (Live)",
                        landmark: "media-equiv-live-audio-only",
                        priority: 3
                    },
                    "1.3.1": {
                        name: "Info and Relationships",
                        landmark: "content-structure-separation-programmatic",
                        priority: 1
                    },
                    "1.3.2": {
                        name: "Meaningful Sequence",
                        landmark: "content-structure-separation-sequence",
                        priority: 1
                    },
                    "1.3.3": {
                        name: "Sensory Characteristics",
                        landmark: "content-structure-separation-understanding",
                        priority: 1
                    },
                    "1.4.1": {
                        name: "Use of Colour",
                        landmark: "visual-audio-contrast-without-color",
                        priority: 1
                    },
                    "1.4.2": {
                        name: "Audio Control",
                        landmark: "visual-audio-contrast-dis-audio",
                        priority: 1
                    },
                    "1.4.3": {
                        name: "Contrast (Minimum)",
                        landmark: "visual-audio-contrast-contrast",
                        priority: 1
                    },
                    "1.4.4": {
                        name: "Resize Text",
                        landmark: "visual-audio-contrast-scale",
                        priority: 1
                    },
                    "1.4.5": {
                        name: "Images of Text",
                        landmark: "visual-audio-contrast-text-presentation",
                        priority: 1
                    },
                    "1.4.6": {
                        name: "Contrast (Enhanced)",
                        landmark: "visual-audio-contrast7",
                        priority: 3
                    },
                    "1.4.7": {
                        name: "Low or No Background Audio",
                        landmark: "visual-audio-contrast-noaudio",
                        priority: 3
                    },
                    "1.4.8": {
                        name: "Visual Presentation",
                        landmark: "visual-audio-contrast-visual-presentation",
                        priority: 3
                    },
                    "1.4.9": {
                        name: "Images of Text (No Exception)",
                        landmark: "visual-audio-contrast-text-images",
                        priority: 3
                    },
                    "2.1.1": {
                        name: "Keyboard",
                        landmark: "keyboard-operation-keyboard-operable",
                        priority: 1
                    },
                    "2.1.2": {
                        name: "No Keyboard Trap",
                        landmark: "keyboard-operation-trapping",
                        priority: 1
                    },
                    "2.1.3": {
                        name: "Keyboard (No Exception)",
                        landmark: "keyboard-operation-all-funcs",
                        priority: 3
                    },
                    "2.2.1": {
                        name: "Timing Adjustable",
                        landmark: "time-limits-required-behaviors",
                        priority: 1
                    },
                    "2.2.2": {
                        name: "Pause, Stop, Hide",
                        landmark: "time-limits-pause",
                        priority: 1
                    },
                    "2.2.3": {
                        name: "No Timing",
                        landmark: "time-limits-no-exceptions",
                        priority: 3
                    },
                    "2.2.4": {
                        name: "Interruptions",
                        landmark: "time-limits-postponed",
                        priority: 3
                    },
                    "2.2.5": {
                        name: "Re-authenticating",
                        landmark: "time-limits-server-timeout",
                        priority: 3
                    },
                    "2.3.1": {
                        name: "Three Flashes or Below Threshold",
                        landmark: "seizure-does-not-violate",
                        priority: 1
                    },
                    "2.3.2": {
                        name: "Three Flashes",
                        landmark: "seizure-three-times",
                        priority: 3
                    },
                    "2.4.1": {
                        name: "Bypass Blocks",
                        landmark: "navigation-mechanisms-skip",
                        priority: 1
                    },
                    "2.4.2": {
                        name: "Page Titled",
                        landmark: "navigation-mechanisms-title",
                        priority: 1
                    },
                    "2.4.3": {
                        name: "Focus Order",
                        landmark: "navigation-mechanisms-focus-order",
                        priority: 1
                    },
                    "2.4.4": {
                        name: "Link Purpose (In Context)",
                        landmark: "navigation-mechanisms-refs",
                        priority: 1
                    },
                    "2.4.5": {
                        name: "Multiple Ways",
                        landmark: "navigation-mechanisms-mult-loc",
                        priority: 2
                    },
                    "2.4.6": {
                        name: "Headings and Labels",
                        landmark: "navigation-mechanisms-descriptive",
                        priority: 2
                    },
                    "2.4.7": {
                        name: "Focus Visible",
                        landmark: "navigation-mechanisms-focus-visible",
                        priority: 2
                    },
                    "2.4.8": {
                        name: "Location",
                        landmark: "navigation-mechanisms-location",
                        priority: 3
                    },
                    "2.4.9": {
                        name: "Link Purpose (Link Only)",
                        landmark: "navigation-mechanisms-link",
                        priority: 3
                    },
                    "2.4.10": {
                        name: "Section Headings",
                        landmark: "navigation-mechanisms-headings",
                        priority: 3
                    },
                    "3.1.1": {
                        name: "Language of Page",
                        landmark: "meaning-doc-lang-id",
                        priority: 1
                    },
                    "3.1.2": {
                        name: "Language of Parts",
                        landmark: "meaning-other-lang-id",
                        priority: 2
                    },
                    "3.1.3": {
                        name: "Unusual Words",
                        landmark: "meaning-idioms",
                        priority: 3
                    },
                    "3.1.4": {
                        name: "Abbreviations",
                        landmark: "meaning-located",
                        priority: 3
                    },
                    "3.1.5": {
                        name: "Reading Level",
                        landmark: "meaning-supplements",
                        priority: 3
                    },
                    "3.1.6": {
                        name: "Pronunciation",
                        landmark: "meaning-pronunciation",
                        priority: 3
                    },
                    "3.2.1": {
                        name: "On Focus",
                        landmark: "consistent-behavior-receive-focus",
                        priority: 1
                    },
                    "3.2.2": {
                        name: "On Input",
                        landmark: "consistent-behavior-unpredictable-change",
                        priority: 1
                    },
                    "3.2.3": {
                        name: "Consistent Navigation",
                        landmark: "consistent-behavior-consistent-locations",
                        priority: 2
                    },
                    "3.2.4": {
                        name: "Consistent Navigation",
                        landmark: "consistent-behavior-consistent-functionality",
                        priority: 2
                    },
                    "3.2.5": {
                        name: "Change on Request",
                        landmark: "consistent-behavior-no-extreme-changes-context",
                        priority: 3
                    },
                    "3.3.1": {
                        name: "Error Identification",
                        landmark: "minimize-error-identified",
                        priority: 1
                    },
                    "3.3.2": {
                        name: "Labels or Instructions",
                        landmark: "minimize-error-cues",
                        priority: 1
                    },
                    "3.3.3": {
                        name: "Error Suggestion",
                        landmark: "minimize-error-suggestions",
                        priority: 2
                    },
                    "3.3.4": {
                        name: "Error Prevention (Legal, Financial, Data)",
                        landmark: "minimize-error-reversible",
                        priority: 2
                    },
                    "3.3.5": {
                        name: "Help",
                        landmark: "minimize-error-context-help",
                        priority: 3
                    },
                    "3.3.6": {
                        name: "Error Prevention (All)",
                        landmark: "minimize-error-reversible-all",
                        priority: 3
                    },
                    "4.1.1": {
                        name: "Parsing",
                        landmark: "ensure-compat-parses",
                        priority: 1
                    },
                    "4.1.2": {
                        name: "Name, Role, Value",
                        landmark: "ensure-compat-rsv",
                        priority: 1
                    }
                }, d = a.split(".", 5), e = d[1], f = d[3].split("_").slice(0, 3).join("."), g = d[4].split(","), h = [], i = 0; i < g.length; i++) g[i] = g[i].split("."), h.push('<a href="http://www.w3.org/TR/WCAG20-TECHS/' + g[i][0] + '" target="_blank">' + g[i][0] + "</a>");
            var j = ['<a href="http://www.w3.org/TR/WCAG20/#' + c[f].landmark, '" target="_blank">', f, ": ", c[f].name, "</a>"].join("");
            ['<a href="', b[e].link, '" target="_blank">', b[e].name, "</a>"].join("");
            return [
                ["Success Criterion", j],
                ["Suggested Techniques", h.join(" ")]
            ]
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1 = {
        register: function() {
            return ["_top", "img"]
        },
        process: function(a, b) {
            if (a === b) this.addNullAltTextResults(b), this.addMediaAlternativesResults(b);
            else {
                switch (a.nodeName.toLowerCase()) {
                    case "img":
                        this.testLinkStutter(a), this.testLongdesc(a)
                }
            }
        },
        addNullAltTextResults: function(a) {
            for (var b = this.testNullAltText(a), c = 0; c < b.img.emptyAltInLink.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.img.emptyAltInLink[c], "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.", "H30.2");
            for (var c = 0; c < b.img.nullAltWithTitle.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.img.nullAltWithTitle[c], "Img element with empty alt text must have absent or empty title attribute.", "H67.1");
            for (var c = 0; c < b.img.ignored.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.img.ignored[c], "Img element is marked so that it is ignored by Assistive Technology.", "H67.2");
            for (var c = 0; c < b.img.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.img.missingAlt[c], "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.", "H37");
            for (var c = 0; c < b.img.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.img.generalAlt[c], "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.", "G94.Image");
            for (var c = 0; c < b.inputImage.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.inputImage.missingAlt[c], "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.", "H36");
            for (var c = 0; c < b.inputImage.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.inputImage.generalAlt[c], "Ensure that the image submit button's alt text identifies the purpose of the button.", "G94.Button");
            for (var c = 0; c < b.area.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.area.missingAlt[c], "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.", "H24");
            for (var c = 0; c < b.area.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.area.generalAlt[c], "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.", "H24.2")
        },
        testNullAltText: function(a) {
            var b = {
                img: {
                    generalAlt: [],
                    missingAlt: [],
                    ignored: [],
                    nullAltWithTitle: [],
                    emptyAltInLink: []
                },
                inputImage: {
                    generalAlt: [],
                    missingAlt: []
                },
                area: {
                    generalAlt: [],
                    missingAlt: []
                }
            };
            elements = HTMLCS.util.getAllElements(a, 'img, area, input[type="image"]');
            for (var c = 0; c < elements.length; c++) {
                var d = elements[c],
                    e = d.nodeName.toLowerCase(),
                    f = !1,
                    g = !1,
                    h = !1;
                if ("a" === d.parentNode.nodeName.toLowerCase()) {
                    var i = HTMLCS.util.getPreviousSiblingElement(d, null),
                        j = HTMLCS.util.getNextSiblingElement(d, null);
                    if (null === i && null === j) {
                        var k = d.parentNode.textContent;
                        if (void 0 !== d.parentNode.textContent) var k = d.parentNode.textContent;
                        else var k = d.parentNode.innerText;
                        !0 === HTMLCS.util.isStringEmpty(k) && (f = !0)
                    }
                }
                switch (!1 === d.hasAttribute("alt") ? g = !0 : d.getAttribute("alt") && !0 !== HTMLCS.util.isStringEmpty(d.getAttribute("alt")) || (h = !0), e) {
                    case "img":
                        !0 !== f || !0 !== g && !0 !== h ? !0 === g ? b.img.missingAlt.push(d) : !0 === h ? !0 === d.hasAttribute("title") && !1 === HTMLCS.util.isStringEmpty(d.getAttribute("title")) ? b.img.nullAltWithTitle.push(d) : b.img.ignored.push(d) : b.img.generalAlt.push(d) : b.img.emptyAltInLink.push(d.parentNode);
                        break;
                    case "input":
                        !0 === g || !0 === h ? b.inputImage.missingAlt.push(d) : b.inputImage.generalAlt.push(d);
                        break;
                    case "area":
                        !0 === g || !0 === h ? b.area.missingAlt.push(d) : b.inputImage.generalAlt.push(d)
                }
            }
            return b
        },
        testLongdesc: function(a) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.", "G73,G74")
        },
        testLinkStutter: function(a) {
            if ("a" === a.parentNode.nodeName.toLowerCase()) {
                var b = a.parentNode,
                    c = {
                        anchor: {
                            href: b.getAttribute("href"),
                            text: HTMLCS.util.getElementTextContent(b, !1),
                            alt: this._getLinkAltText(b)
                        }
                    };
                if (null === c.anchor.alt && (c.anchor.alt = ""), null !== c.anchor.alt && "" !== c.anchor.alt && HTMLCS.util.trim(c.anchor.alt).toLowerCase() === HTMLCS.util.trim(c.anchor.text).toLowerCase() && HTMLCS.addMessage(HTMLCS.ERROR, a, "Img element inside a link must not use alt text that duplicates the text content of the link.", "H2.EG5"), "" === c.anchor.text) {
                    var d = HTMLCS.util.getPreviousSiblingElement(b, "a", !0),
                        e = HTMLCS.util.getNextSiblingElement(b, "a", !0);
                    null !== d && (c.previous = {
                        href: d.getAttribute("href"),
                        text: HTMLCS.util.getElementTextContent(d, !1),
                        alt: this._getLinkAltText(d)
                    }, null === c.previous.alt && (c.previous.alt = "")), null !== e && (c.next = {
                        href: e.getAttribute("href"),
                        text: HTMLCS.util.getElementTextContent(e, !1),
                        alt: this._getLinkAltText(e)
                    }, null === c.next.alt && (c.next.alt = "")), c.next && "" !== c.next.href && null !== c.next.href && c.anchor.href === c.next.href && ("" !== c.next.text && "" === c.anchor.alt ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.", "H2.EG4") : c.next.text.toLowerCase() === c.anchor.alt.toLowerCase() && HTMLCS.addMessage(HTMLCS.ERROR, a, "Img element inside a link must not use alt text that duplicates the content of a text link beside it.", "H2.EG3")), c.previous && "" !== c.previous.href && null !== c.previous.href && c.anchor.href === c.previous.href && ("" !== c.previous.text && "" === c.anchor.alt ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.", "H2.EG4") : c.previous.text.toLowerCase() === c.anchor.alt.toLowerCase() && HTMLCS.addMessage(HTMLCS.ERROR, a, "Img element inside a link must not use alt text that duplicates the content of a text link beside it.", "H2.EG3"))
                }
            }
        },
        addMediaAlternativesResults: function(a) {
            for (var b = this.testMediaTextAlternatives(a), c = 0; c < b.object.missingBody.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.object.missingBody[c], "Object elements must contain a text alternative after all other alternatives are exhausted.", "H53,ARIA6");
            for (var c = 0; c < b.object.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.object.generalAlt[c], "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.", "G94,G92.Object,ARIA6");
            for (var c = 0; c < b.applet.missingBody.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.applet.missingBody[c], "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.", "H35.3");
            for (var c = 0; c < b.applet.missingAlt.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.applet.missingAlt[c], "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.", "H35.2");
            for (var c = 0; c < b.applet.generalAlt.length; c++) HTMLCS.addMessage(HTMLCS.NOTICE, b.applet.generalAlt[c], "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.", "G94,G92.Applet")
        },
        testMediaTextAlternatives: function(a) {
            for (var b = {
                    object: {
                        missingBody: [],
                        generalAlt: []
                    },
                    applet: {
                        missingBody: [],
                        missingAlt: [],
                        generalAlt: []
                    }
                }, c = HTMLCS.util.getAllElements(a, "object"), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = (e.nodeName.toLowerCase(), e.querySelector("object"));
                null === f && (!0 === HTMLCS.util.isStringEmpty(HTMLCS.util.getElementTextContent(e, !0)) ? !1 === HTMLCS.util.hasValidAriaLabel(e) && b.object.missingBody.push(e) : !1 === HTMLCS.util.hasValidAriaLabel(e) && b.object.generalAlt.push(e))
            }
            for (var c = HTMLCS.util.getAllElements(a, "applet"), d = 0; d < c.length; d++) {
                var f = e.querySelector("object"),
                    g = !1;
                if (null === f) {
                    var h = HTMLCS.util.getElementTextContent(e, !0);
                    !0 === HTMLCS.util.isStringEmpty(h) && (b.applet.missingBody.push(e), g = !0)
                }
                var i = e.getAttribute("alt") || "";
                !0 === HTMLCS.util.isStringEmpty(i) && (b.applet.missingAlt.push(e), g = !0), !0 === HTMLCS.util.hasValidAriaLabel(e) && (g = !1), !1 === g && b.applet.generalAlt.push(e)
            }
            return b
        },
        _getLinkAltText: function(a) {
            for (var a = a.cloneNode(!0), b = [], c = 0; c < a.childNodes.length; c++) b.push(a.childNodes[c]);
            for (var d = null; b.length > 0;) {
                var e = b.shift();
                if (1 === e.nodeType && "img" === e.nodeName.toLowerCase() && !0 === e.hasAttribute("alt")) {
                    d = e.getAttribute("alt"), d = d ? d.replace(/^\s+|\s+$/g, "") : "";
                    break
                }
            }
            return d
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = {
        register: function() {
            return ["object", "embed", "applet", "bgsound", "audio", "video"]
        },
        process: function(a, b) {
            var c = a.nodeName.toLowerCase();
            "video" !== c && HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.", "G158"), "bgsound" !== c && "audio" !== c && HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.", "G159,G166")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.", "G87,G93")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.", "G69,G78,G173,G8")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains synchronised media, check that captions are provided for live audio content.", "G9,G87,G93")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.", "G78,G173,G8")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.", "G54,G81")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.", "G8")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8 = {
        register: function() {
            return ["object", "embed", "applet", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.", "G69,G159")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9 = {
        register: function() {
            return ["object", "embed", "applet", "bgsound", "audio"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.", "G150,G151,G157")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = {
        _labelNames: null,
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
            a === b && c.testHeadingOrder(b, HTMLCS.WARNING)
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA = {
        _labelNames: null,
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
            a === b && c.testHeadingOrder(b, HTMLCS.ERROR)
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = {
        _labelNames: null,
        register: function() {
            return ["_top", "p", "div", "input", "select", "textarea", "button", "table", "fieldset", "form", "h1", "h2", "h3", "h4", "h5", "h6"]
        },
        process: function(a, b) {
            var c = a.nodeName.toLowerCase();
            if (a === b) this.testPresentationMarkup(b), this.testEmptyDupeLabelForAttrs(b);
            else switch (c) {
                case "input":
                case "textarea":
                case "button":
                    this.testLabelsOnInputs(a, b);
                    break;
                case "form":
                    this.testRequiredFieldsets(a);
                    break;
                case "select":
                    this.testLabelsOnInputs(a, b), this.testOptgroup(a);
                    break;
                case "p":
                case "div":
                    this.testNonSemanticHeading(a), this.testListsWithBreaks(a), this.testUnstructuredNavLinks(a);
                    break;
                case "table":
                    this.testGeneralTable(a), this.testTableHeaders(a), this.testTableCaptionSummary(a);
                    break;
                case "fieldset":
                    this.testFieldsetLegend(a);
                    break;
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                    this.testEmptyHeading(a)
            }
        },
        testSemanticPresentationRole: function(a) {
            if (a.hasAttribute("role") && "presentation" === a.getAttribute("role")) {
                var b = ["div", "span", "b", "i"],
                    c = a.querySelectorAll("*:not(" + b.join("):not(") + ")");
                c = [].filter.call(c, function(a) {
                    return !1 === a.hasAttribute("role")
                }), c.length && HTMLCS.addMessage(HTMLCS.ERROR, a, 'This element\'s role is "presentation" but contains child elements with semantic meaning.', "F92,ARIA4")
            }
        },
        testEmptyDupeLabelForAttrs: function(a) {
            this._labelNames = {};
            for (var b = a.getElementsByTagName("label"), c = 0; c < b.length; c++)
                if (null !== b[c].getAttribute("for") && "" !== b[c].getAttribute("for")) {
                    var d = b[c].getAttribute("for");
                    if (this._labelNames[d] && null !== this._labelNames[d]) this._labelNames[d] = null;
                    else {
                        if (this._labelNames[d] = b[c], a.ownerDocument) var e = a.ownerDocument.getElementById(d);
                        else var e = a.getElementById(d);
                        if (null === e) {
                            var f = HTMLCS.ERROR,
                                g = 'This label\'s "for" attribute contains an ID that does not exist in the document.',
                                h = "H44.NonExistent";
                            if (!0 === HTMLCS.isFullDoc(a) || "body" === a.nodeName.toLowerCase()) {
                                f = HTMLCS.WARNING, g = 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.';
                                var h = "H44.NonExistentFragment"
                            }
                            HTMLCS.addMessage(f, b[c], g, h)
                        } else {
                            var i = e.nodeName.toLowerCase(); - 1 === "input|select|textarea|button|keygen|meter|output|progress".indexOf(i) && HTMLCS.addMessage(HTMLCS.WARNING, b[c], 'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.', "H44.NotFormControl")
                        }
                    }
                }
        },
        testLabelsOnInputs: function(a, b, c) {
            var d = a.nodeName.toLowerCase(),
                e = d;
            "input" === e && (e = !0 === a.hasAttribute("type") ? a.getAttribute("type") : "text");
            var f = !1,
                g = function(a) {
                    f || (f = {}), f[a] = !0
                },
                h = !1,
                e = e.toLowerCase();
            "select" === e || "textarea" === e ? h = !0 : !0 === /^(radio|checkbox|text|file|password)$/.test(e) && (h = !0), null !== a.getAttribute("hidden") && (h = !1), a.ownerDocument.querySelector('label[for="' + a.id + '"]') && g("explicit");
            var i = a.parentNode;
            i && "label" === i.nodeName.toLowerCase() && g("implicit");
            var j = a.getAttribute("title");
            return null !== j && (!0 === /^\s*$/.test(j) && !0 === h ? HTMLCS.addMessage(HTMLCS.WARNING, a, 'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.', "H65") : g("title")), !0 === a.hasAttribute("aria-label") && (!1 === HTMLCS.util.hasValidAriaLabel(a) ? HTMLCS.addMessage(HTMLCS.WARNING, a, 'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.', "ARIA6") : g("aria-label")), !0 === a.hasAttribute("aria-labelledby") && (!1 === HTMLCS.util.hasValidAriaLabel(a) ? HTMLCS.addMessage(HTMLCS.WARNING, a, 'This form control contains an aria-labelledby attribute, however it includes an ID "' + a.getAttribute("aria-labelledby") + '" that does not exist on an element. The aria-labelledby attribute will be ignored for labelling test purposes.', "ARIA16,ARIA9") : g("aria-labelledby")), !0 !== c && (!1 !== f && !1 === h ? "hidden" === e ? HTMLCS.addMessage(HTMLCS.WARNING, a, "This hidden form field is labelled in some way. There should be no need to label a hidden form field.", "F68.Hidden") : null !== a.getAttribute("hidden") && HTMLCS.addMessage(HTMLCS.WARNING, a, 'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.', "F68.HiddenAttr") : !1 === f && !0 === h && HTMLCS.addMessage(HTMLCS.ERROR, a, 'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.', "F68")), f
        },
        testPresentationMarkup: function(a) {
            var b = HTMLCS.util.getElementWindow(a).document,
                c = HTMLCS.util.getDocumentType(b);
            if (!c || "html5" !== c && "xhtml5" !== c) {
                for (var d = HTMLCS.util.getAllElements(a, "b, i, u, s, strike, tt, big, small, center, font"), e = 0; e < d.length; e++) {
                    var f = "H49." + d[e].nodeName.substr(0, 1).toUpperCase() + d[e].nodeName.substr(1).toLowerCase();
                    HTMLCS.addMessage(HTMLCS.WARNING, d[e], "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.", f)
                }
                for (var d = HTMLCS.util.getAllElements(a, "*[align]"), e = 0; e < d.length; e++) {
                    var f = "H49.AlignAttr";
                    HTMLCS.addMessage(HTMLCS.WARNING, d[e], "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.", f)
                }
            } else {
                for (var d = HTMLCS.util.getAllElements(a, "strike, tt, big, center, font"), e = 0; e < d.length; e++) {
                    var f = "H49." + d[e].nodeName.substr(0, 1).toUpperCase() + d[e].nodeName.substr(1).toLowerCase();
                    HTMLCS.addMessage(HTMLCS.ERROR, d[e], "Presentational markup used that has become obsolete in HTML5.", f)
                }
                for (var d = HTMLCS.util.getAllElements(a, "*[align]"), e = 0; e < d.length; e++) {
                    var f = "H49.AlignAttr";
                    HTMLCS.addMessage(HTMLCS.ERROR, d[e], "Align attributes .", f)
                }
            }
        },
        testNonSemanticHeading: function(a) {
            var b = a.nodeName.toLowerCase();
            if ("p" === b || "div" === b) {
                var c = a.childNodes;
                if (1 === c.length && 1 === c[0].nodeType) {
                    !0 === /^(strong|em|b|i|u)$/.test(c[0].nodeName.toLowerCase()) && HTMLCS.addMessage(HTMLCS.WARNING, a, "Heading markup should be used if this content is intended as a heading.", "H42")
                }
            }
        },
        testTableHeaders: function(a) {
            for (var b = HTMLCS.util.testTableHeaders(a), c = this._testTableScopeAttrs(a), d = 0; d < c.invalid.length; d++) HTMLCS.addMessage(HTMLCS.ERROR, c.invalid[d], "Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.", "H63.3");
            for (var d = 0; d < c.obsoleteTd.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, c.obsoleteTd[d], "Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.", "H63.2");
            !0 === b.allowScope ? 0 === c.missing.length && b.required : !0 === c.used && (HTMLCS.addMessage(HTMLCS.WARNING, a, "Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.", "H43.ScopeAmbiguous"), c = null);
            for (var d = 0; d < b.wrongHeaders.length; d++) HTMLCS.addMessage(HTMLCS.ERROR, b.wrongHeaders[d].element, 'Incorrect headers attribute on this td element. Expected "' + b.wrongHeaders[d].expected + '" but found "' + b.wrongHeaders[d].actual + '"', "H43.IncorrectAttr");
            !0 === b.required && !1 === b.allowScope && (!1 === b.used ? HTMLCS.addMessage(HTMLCS.ERROR, a, "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.", "H43.HeadersRequired") : (b.missingThId.length > 0 && HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.", "H43.MissingHeaderIds"), b.missingTd.length > 0 && HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.", "H43.MissingHeadersAttrs"))), !0 === b.required && !0 === b.allowScope && !1 === b.correct && !1 === c.correct && (!1 === c.used && !1 === b.used ? HTMLCS.addMessage(HTMLCS.ERROR, a, "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.", "H43,H63") : !1 === c.used && (b.missingThId.length > 0 || b.missingTd.length > 0) ? (b.missingThId.length > 0 && HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.", "H43.MissingHeaderIds"), b.missingTd.length > 0 && HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.", "H43.MissingHeadersAttrs")) : c.missing.length > 0 && !1 === b.used ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.", "H63.1") : c.missing.length > 0 && (b.missingThId.length > 0 || b.missingTd.length > 0) && HTMLCS.addMessage(HTMLCS.ERROR, a, "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.", "H43,H63"))
        },
        _testTableScopeAttrs: function(a) {
            var b = {
                    th: a.getElementsByTagName("th"),
                    td: a.getElementsByTagName("td")
                },
                c = {
                    used: !1,
                    correct: !0,
                    missing: [],
                    invalid: [],
                    obsoleteTd: []
                };
            for (var d in b)
                for (var e = 0; e < b[d].length; e++) {
                    var f = b[d][e],
                        g = "";
                    !0 === f.hasAttribute("scope") && (c.used = !0, f.getAttribute("scope") && (g = f.getAttribute("scope"))), "th" === f.nodeName.toLowerCase() ? !0 === /^\s*$/.test(g) ? (c.correct = !1, c.missing.push(f)) : !1 === /^(row|col|rowgroup|colgroup)$/.test(g) && (c.correct = !1, c.invalid.push(f)) : "" !== g && (c.obsoleteTd.push(f), !1 === /^(row|col|rowgroup|colgroup)$/.test(g) && (c.correct = !1, c.invalid.push(f)))
                }
            return c
        },
        testTableCaptionSummary: function(a) {
            var b = a.getAttribute("summary") || "",
                c = a.getElementsByTagName("caption"),
                d = "";
            c.length > 0 && (d = c[0].innerHTML.replace(/^\s*(.*?)\s*$/g, "$1"));
            var e = HTMLCS.util.getDocumentType(a.ownerDocument);
            e && -1 === e.indexOf("html5") && (b = b.replace(/^\s*(.*?)\s*$/g, "$1"), "" !== b ? !0 === HTMLCS.util.isLayoutTable(a) ? HTMLCS.addMessage(HTMLCS.ERROR, a, "This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.", "H73.3.LayoutTable") : (d === b && HTMLCS.addMessage(HTMLCS.ERROR, a, "If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.", "H39,H73.4"), HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.", "H73.3.Check")) : !1 === HTMLCS.util.isLayoutTable(a) && HTMLCS.addMessage(HTMLCS.WARNING, a, "If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.", "H73.3.NoSummary")), "" !== d ? !0 === HTMLCS.util.isLayoutTable(a) ? HTMLCS.addMessage(HTMLCS.ERROR, a, "This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.", "H39.3.LayoutTable") : HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this table is a data table, check that the caption element accurately describes this table.", "H39.3.Check") : !1 === HTMLCS.util.isLayoutTable(a) && HTMLCS.addMessage(HTMLCS.WARNING, a, "If this table is a data table, consider using a caption element to the table element to identify this table.", "H39.3.NoCaption")
        },
        testFieldsetLegend: function(a) {
            var b = a.querySelector("legend");
            null !== b && b.parentNode === a || HTMLCS.addMessage(HTMLCS.ERROR, a, "Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.", "H71.NoLegend")
        },
        testOptgroup: function(a) {
            null === a.querySelector("optgroup") && HTMLCS.addMessage(HTMLCS.WARNING, a, "If this selection list contains groups of related options, they should be grouped with optgroup.", "H85.2")
        },
        testRequiredFieldsets: function(a) {
            for (var b = a.querySelectorAll("input[type=radio], input[type=checkbox]"), c = {}, d = 0; d < b.length; d++) {
                var e = b[d];
                if (!0 === e.hasAttribute("name")) {
                    for (var f = e.getAttribute("name"), g = e.parentNode;
                        "fieldset" !== g.nodeName.toLowerCase() && null !== g && g !== a;) g = g.parentNode;
                    "fieldset" !== g.nodeName.toLowerCase() && (g = null)
                }
                if (void 0 === c[f]) c[f] = g;
                else if (null === g || g !== c[f]) {
                    HTMLCS.addMessage(HTMLCS.WARNING, a, "If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.", "H71.SameName");
                    break
                }
            }
        },
        testListsWithBreaks: function(a) {
            var b = a.querySelector("br"),
                c = [];
            if (null !== b) {
                for (var d = [], e = 0; e < a.childNodes.length; e++) d.push(a.childNodes[e]);
                for (var f = []; d.length > 0;) {
                    var g = d.shift();
                    if (1 === g.nodeType)
                        if ("br" === g.nodeName.toLowerCase()) c.push(f.join(" ").replace(/^\s*(.*?)\s*$/g, "$1")), f = [];
                        else
                            for (var e = g.childNodes.length - 1; e >= 0; --e) d.unshift(g.childNodes[e]);
                    else 3 === g.nodeType && f.push(g.nodeValue)
                }
                f.length > 0 && c.push(f.join(" ").replace(/^\s*(.*?)\s*$/g, "$1"));
                for (var e = 0; e < c.length; e++) {
                    if (!0 === /^[\-*]\s+/.test(c[0])) {
                        HTMLCS.addMessage(HTMLCS.WARNING, a, "This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.", "H48.1");
                        break
                    }
                    if (!0 === /^\d+[:\/\-.]?\s+/.test(c[0])) {
                        HTMLCS.addMessage(HTMLCS.WARNING, a, "This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.", "H48.2");
                        break
                    }
                }
            }
        },
        testHeadingOrder: function(a, b) {
            for (var c = 0, d = HTMLCS.util.getAllElements(a, "h1, h2, h3, h4, h5, h6"), e = 0; e < d.length; e++) {
                var f = parseInt(d[e].nodeName.substr(1, 1));
                if (f - c > 1) {
                    var g = "should be an h" + (c + 1) + " to be properly nested";
                    0 === c && (g = "appears to be the primary document heading, so should be an h1 element"), HTMLCS.addMessage(b, d[e], "The heading structure is not logically nested. This h" + f + " element " + g + ".", "G141")
                }
                c = f
            }
        },
        testEmptyHeading: function(a) {
            !0 === /^\s*$/.test(HTMLCS.util.getElementTextContent(a, !0)) && HTMLCS.addMessage(HTMLCS.ERROR, a, "Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.", "H42.2")
        },
        testUnstructuredNavLinks: function(a) {
            for (var b = (a.nodeName.toLowerCase(), 0), c = a.childNodes, d = 0; d < c.length && !(1 === c[d].nodeType && "a" === c[d].nodeName.toLowerCase() && ++b > 1); d++);
            if (b > 1) {
                for (var e = a.parentNode; null !== e && "ul" !== e.nodeName.toLowerCase() && "ol" !== e.nodeName.toLowerCase();) e = e.parentNode;
                null === e && HTMLCS.addMessage(HTMLCS.WARNING, a, "If this element contains a navigation section, it is recommended that it be marked up as a list.", "H48")
            }
        },
        testGeneralTable: function(a) {
            !0 === HTMLCS.util.isLayoutTable(a) ? HTMLCS.addMessage(HTMLCS.NOTICE, a, "This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.", "LayoutTable") : HTMLCS.addMessage(HTMLCS.NOTICE, a, "This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.", "DataTable")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.", "G57")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.", "G96")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that any information conveyed using colour alone is also available in text, or through other visual cues.", "G14,G182")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = {
        register: function() {
            return ["object", "embed", "applet", "bgsound", "audio", "video"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.", "F23")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = {
        testContrastRatio: function(a, b, c) {
            var d = (new Date, []);
            if (a.ownerDocument) var e = [a];
            else var e = [a.getElementsByTagName("body")[0]];
            for (; e.length > 0;) {
                var f = e.shift();
                if (f && 1 === f.nodeType && !1 === HTMLCS.util.isVisuallyHidden(f) && !1 === HTMLCS.util.isDisabled(f)) {
                    for (var g = !1, h = 0; h < f.childNodes.length; h++) 1 === f.childNodes[h].nodeType ? e.push(f.childNodes[h]) : 3 === f.childNodes[h].nodeType && "" !== HTMLCS.util.trim(f.childNodes[h].nodeValue) && (g = !0);
                    if (!0 === g) {
                        var i = HTMLCS.util.style(f);
                        if (i) {
                            var j = i.backgroundColor,
                                k = i.color,
                                l = !1,
                                m = !1;
                            "none" !== i.backgroundImage && (l = !0), "absolute" == i.position && (m = !0);
                            var n = f.parentNode,
                                o = .75 * parseFloat(i.fontSize, 10),
                                p = 18;
                            if ("bold" === i.fontWeight || parseInt(i.fontWeight, 10) >= 600) var p = 14;
                            var q = b;
                            for (o >= p && (q = c);
                                ("transparent" === j || "rgba(0, 0, 0, 0)" === j) && n && n.ownerDocument;) {
                                var r = HTMLCS.util.style(n),
                                    j = r.backgroundColor;
                                "none" !== r.backgroundImage && (l = !0), "absolute" == r.position && (m = !0), n = n.parentNode
                            }
                            if (!0 === l) {
                                d.push({
                                    element: f,
                                    colour: i.color,
                                    bgColour: void 0,
                                    value: void 0,
                                    required: q,
                                    hasBgImage: !0
                                });
                                continue
                            }
                            if (!0 === m) {
                                d.push({
                                    element: f,
                                    colour: k,
                                    bgColour: void 0,
                                    value: void 0,
                                    required: q,
                                    isAbsolute: !0
                                });
                                continue
                            }
                            if ("transparent" === j || "rgba(0, 0, 0, 0)" === j) continue;
                            var s = HTMLCS.util.contrastRatio(j, i.color);
                            if (s < q) {
                                var t = this.recommendColour(j, i.color, q);
                                d.push({
                                    element: f,
                                    colour: i.color,
                                    bgColour: j,
                                    value: s,
                                    required: q,
                                    recommendation: t
                                })
                            }
                        }
                    }
                }
            }
            return d
        },
        recommendColour: function(a, b, c) {
            var b = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(b)),
                a = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(a)),
                d = HTMLCS.util.contrastRatio(b, a),
                e = Math.abs(HTMLCS.util.relativeLum(b) - .5),
                f = Math.abs(HTMLCS.util.relativeLum(a) - .5),
                g = null;
            if (d < c) {
                var h = 1.0025;
                if (e <= f) {
                    var i = "back",
                        j = a;
                    if (HTMLCS.util.relativeLum(a) < .5) var h = 1 / h
                } else {
                    var i = "fore",
                        j = b;
                    if (HTMLCS.util.relativeLum(b) < .5) var h = 1 / h
                }
                for (var k = HTMLCS.util.sRGBtoHSV(j), l = (k.saturation, k.value, b), m = a, n = !1, o = 0; d < c;) {
                    if ("#fff" === j || "#000" === j)
                        if (!0 === n)
                            if ("fore" === i)
                                for (var p = m, q = 1; m === p;) {
                                    var m = this.multiplyColour(m, Math.pow(1 / h, q));
                                    q++
                                } else
                                    for (var r = l, q = 1; l === r;) {
                                        var l = this.multiplyColour(l, Math.pow(1 / h, q));
                                        q++
                                    } else {
                                        if (l = b, m = a, h = 1 / h, "fore" === i) {
                                            i = "back";
                                            var k = a
                                        } else {
                                            i = "fore";
                                            var k = b
                                        }
                                        k = HTMLCS.util.sRGBtoHSV(k), k.saturation * k.value, n = !0
                                    }
                    o++;
                    var j = HTMLCS.util.HSVtosRGB(k),
                        j = this.multiplyColour(j, Math.pow(h, o));
                    if ("fore" === i) var l = j;
                    else var m = j;
                    var d = HTMLCS.util.contrastRatio(l, m)
                }
                g = {
                    fore: {
                        from: b,
                        to: l
                    },
                    back: {
                        from: a,
                        to: m
                    }
                }
            }
            return g
        },
        multiplyColour: function(a, b) {
            var c = HTMLCS.util.sRGBtoHSV(a),
                d = c.saturation * c.value;
            return 0 === c.value && (c.value = 1 / 255), c.value = c.value * b, 0 === c.value ? c.saturation = 0 : c.saturation = d / c.value, c.value = Math.min(1, c.value), c.saturation = Math.min(1, c.saturation), HTMLCS.util.RGBtoColourStr(HTMLCS.util.HSVtosRGB(c))
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            for (var c = HTMLCS.util.getAllElements(b, "*"), d = 0; d < c.length; d++) this.testColourComboFail(c[d])
        },
        testColourComboFail: function(a) {
            var b = a.hasAttribute("color");
            b = b || a.hasAttribute("link"), b = b || a.hasAttribute("vlink"), b = b || a.hasAttribute("alink");
            var c = a.hasAttribute("bgcolor");
            if (a.style) {
                var d = a.style.color,
                    e = a.style.background;
                "" !== d && "auto" !== d && (b = !0), "" !== e && "auto" !== e && (c = !0)
            }
            c !== b && (!0 === c ? HTMLCS.addMessage(HTMLCS.WARNING, a, "Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.", "F24.BGColour") : HTMLCS.addMessage(HTMLCS.WARNING, a, "Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.", "F24.FGColour"))
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b)
                for (var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(b, 4.5, 3), d = 0; d < c.length; d++) {
                    for (var a = c[d].element, e = 2, f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e), g = c[d].required, h = c[d].recommendation, i = c[d].hasBgImage || !1, j = (c[d].bgColour, c[d].isAbsolute || !1); g === f;) e++, f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e);
                    if (4.5 === g) var k = "G18";
                    else if (3 === g) var k = "G145";
                    var l = [];
                    h && (h.fore.from !== h.fore.to && l.push("text colour to " + h.fore.to), h.back.from !== h.back.to && l.push("background to " + h.back.to)), l.length > 0 && (l = " Recommendation: change " + l.join(", ") + "."), !0 === j ? (k += ".Abs", HTMLCS.addMessage(HTMLCS.WARNING, a, "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least " + g + ":1.", k)) : !0 === i ? (k += ".BgImage", HTMLCS.addMessage(HTMLCS.WARNING, a, "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least " + g + ":1.", k)) : (k += ".Fail", HTMLCS.addMessage(HTMLCS.ERROR, a, "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least " + g + ":1, but text in this element has a contrast ratio of " + f + ":1." + l, k))
                }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.", "G142")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            null !== b.querySelector("img") && HTMLCS.addMessage(HTMLCS.NOTICE, b, "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.", "G140,C22,C30.AALevel")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b)
                for (var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(b, 7, 4.5), d = 0; d < c.length; d++) {
                    for (var a = c[d].element, e = 2, f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e), g = c[d].required, h = c[d].recommendation, i = c[d].hasBgImage || !1, j = c[d].isAbsolute || !1; g === f;) e++, f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e);
                    if (4.5 === g) var k = "G18";
                    else if (7 === g) var k = "G17";
                    var l = [];
                    h && (h.fore.from !== h.fore.to && l.push("text colour to " + h.fore.to), h.back.from !== h.back.to && l.push("background to " + h.back.to)), l.length > 0 && (l = " Recommendation: change " + l.join(", ") + "."), !0 === j ? (k += ".Abs", HTMLCS.addMessage(HTMLCS.WARNING, a, "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least " + g + ":1.", k)) : !0 === i ? (k += ".BgImage", HTMLCS.addMessage(HTMLCS.WARNING, a, "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least " + g + ":1.", k)) : (k += ".Fail", HTMLCS.addMessage(HTMLCS.ERROR, a, "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least " + g + ":1, but text in this element has a contrast ratio of " + f + ":1." + l, k))
                }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7 = {
        register: function() {
            return ["object", "embed", "applet", "bgsound", "audio"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.", "G56")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.", "G148,G156,G175"), HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).", "H87,C20"), HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.", "C19,G172,G169"), HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.", "G188,C21"), HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.", "H87,G146,C26")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            null !== b.querySelector("img") && HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.", "G140,C22,C30.NoException")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b) {
                HTMLCS.util.getAllElements(b, "*[onclick], *[onkeyup], *[onkeydown], *[onkeypress], *[onfocus], *[onblur]").forEach(function(a) {
                    !1 === HTMLCS.util.isKeyboardNavigable(a) && HTMLCS.addMessage(HTMLCS.WARNING, a, "Ensure the functionality provided by an event handler for this element is available through the keyboard", "G90")
                });
                for (var c = HTMLCS.util.getAllElements(b, "*[ondblclick]"), d = 0; d < c.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, c[d], "Ensure the functionality provided by double-clicking on this element is available through the keyboard.", "SCR20.DblClick");
                for (var e = HTMLCS.util.getAllElements(b, "*[onmouseover]"), d = 0; d < e.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, e[d], "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.", "SCR20.MouseOver");
                for (var f = HTMLCS.util.getAllElements(b, "*[onmouseout]"), d = 0; d < f.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, f[d], "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.", "SCR20.MouseOut");
                for (var g = HTMLCS.util.getAllElements(b, "*[onmousemove]"), d = 0; d < g.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, g[d], "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.", "SCR20.MouseMove");
                for (var h = HTMLCS.util.getAllElements(b, "*[onmousedown]"), d = 0; d < h.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, h[d], "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.", "SCR20.MouseDown");
                for (var i = HTMLCS.util.getAllElements(b, "*[onmouseup]"), d = 0; d < i.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, i[d], "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.", "SCR20.MouseUp")
            }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = {
        register: function() {
            return ["object", "applet", "embed"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.WARNING, a, "Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.", "F10")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = {
        register: function() {
            return ["meta"]
        },
        process: function(a, b) {
            !0 === a.hasAttribute("http-equiv") && "refresh" === String(a.getAttribute("http-equiv")).toLowerCase() && !0 === /^[1-9]\d*/.test(a.getAttribute("content").toLowerCase()) && (!0 === /url=/.test(a.getAttribute("content").toLowerCase()) ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.", "F40.2") : HTMLCS.addMessage(HTMLCS.ERROR, a, "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.", "F41.2"))
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = {
        register: function() {
            return ["_top", "blink"]
        },
        process: function(a, b) {
            if (a === b) {
                HTMLCS.addMessage(HTMLCS.NOTICE, a, "If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.", "SCR33,SCR22,G187,G152,G186,G191");
                for (var c = HTMLCS.util.getAllElements(b, "*"), d = 0; d < c.length; d++) {
                    var e = HTMLCS.util.style(c[d]);
                    e && !0 === /blink/.test(e["text-decoration"]) && HTMLCS.addMessage(HTMLCS.WARNING, c[d], "Ensure there is a mechanism available to stop this blinking element in less than five seconds.", "F4")
                }
            } else "blink" === a.nodeName.toLowerCase() && HTMLCS.addMessage(HTMLCS.ERROR, a, "Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.", "F47")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.", "G5")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.", "SCR14")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.", "G105,G181")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.", "G19,G176")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that no component of the content flashes more than three times in any 1-second period.", "G19")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = {
        register: function() {
            return ["iframe", "a", "area", "_top"]
        },
        process: function(a, b) {
            if (a === b) this.testGenericBypassMsg(b);
            else {
                switch (a.nodeName.toLowerCase()) {
                    case "iframe":
                        this.testIframeTitle(a);
                        break;
                    case "a":
                    case "area":
                        this.testSameDocFragmentLinks(a, b)
                }
            }
        },
        testIframeTitle: function(a) {
            if ("iframe" === a.nodeName.toLowerCase()) {
                var b = !1;
                !0 === a.hasAttribute("title") && a.getAttribute("title") && !1 === /^\s+$/.test(a.getAttribute("title")) && (b = !0), !1 === b ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Iframe element requires a non-empty title attribute that identifies the frame.", "H64.1") : HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that the title attribute of this element contains text that identifies the frame.", "H64.2")
            }
        },
        testGenericBypassMsg: function(a) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.", "G1,G123,G124,H69")
        },
        testSameDocFragmentLinks: function(a, b) {
            if (!0 === a.hasAttribute("href")) {
                var c = a.getAttribute("href");
                if (c = HTMLCS.util.trim(c), c.length > 1 && "#" === c.charAt(0)) {
                    var d = c.substr(1);
                    try {
                        var e = b;
                        e.ownerDocument && (e = e.ownerDocument);
                        var f = e.getElementById(d);
                        if (null === f) {
                            var g = HTMLCS.util.getElementWindow(b).document,
                                h = HTMLCS.util.getDocumentType(g),
                                i = "a";
                            h && -1 === h.indexOf("html5") && (i = "*"), f = e.querySelector(i + '[name="' + d + '"]')
                        }
                        null !== f && !1 !== HTMLCS.util.contains(b, f) || (!0 === HTMLCS.isFullDoc(b) || "body" === b.nodeName.toLowerCase() ? HTMLCS.addMessage(HTMLCS.ERROR, a, 'This link points to a named anchor "' + d + '" within the document, but no anchor exists with that name.', "G1,G123,G124.NoSuchID") : HTMLCS.addMessage(HTMLCS.WARNING, a, 'This link points to a named anchor "' + d + '" within the document, but no anchor exists with that name in the fragment tested.', "G1,G123,G124.NoSuchIDFragment"))
                    } catch (a) {}
                }
            }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = {
        register: function() {
            return ["html"]
        },
        process: function(a, b) {
            for (var c = a.childNodes, d = null, e = 0; e < c.length; e++)
                if ("head" === c[e].nodeName.toLowerCase()) {
                    d = c[e];
                    break
                }
            if (null === d) HTMLCS.addMessage(HTMLCS.ERROR, a, "There is no head section in which to place a descriptive title element.", "H25.1.NoHeadEl");
            else {
                for (var c = d.childNodes, f = null, e = 0; e < c.length; e++)
                    if ("title" === c[e].nodeName.toLowerCase()) {
                        f = c[e];
                        break
                    }
                null === f ? HTMLCS.addMessage(HTMLCS.ERROR, d, "A title should be provided for the document, using a non-empty title element in the head section.", "H25.1.NoTitleEl") : !0 === /^\s*$/.test(f.innerHTML) ? HTMLCS.addMessage(HTMLCS.ERROR, f, "The title element in the head section should be non-empty.", "H25.1.EmptyTitle") : HTMLCS.addMessage(HTMLCS.NOTICE, f, "Check that the title element describes the document.", "H25.2")
            }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b) {
                b.querySelector("*[tabindex]") && HTMLCS.addMessage(HTMLCS.NOTICE, a, "If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.", "H4.2")
            }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = {
        register: function() {
            return ["a"]
        },
        process: function(a, b) {
            !0 === a.hasAttribute("title") ? HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.", "H77,H78,H79,H80,H81,H33") : HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that the link text combined with programmatically determined link context identifies the purpose of the link.", "H77,H78,H79,H80,H81")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.", "G125,G64,G63,G161,G126,G185")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that headings and labels describe topic or purpose.", "G130,G131")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            null !== b.querySelector("input, textarea, button, select, a") && HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.", "G149,G165,G195,C15,SCR31")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
        register: function() {
            return ["link"]
        },
        process: function(a, b) {
            "head" !== a.parentNode.nodeName.toLowerCase() && HTMLCS.addMessage(HTMLCS.ERROR, a, "Link elements can only be located in the head section of the document.", "H59.1"), !1 !== a.hasAttribute("rel") && a.getAttribute("rel") && !0 !== /^\s*$/.test(a.getAttribute("rel")) || HTMLCS.addMessage(HTMLCS.ERROR, a, "Link element is missing a non-empty rel attribute identifying the link type.", "H59.2a"), !1 !== a.hasAttribute("href") && a.getAttribute("href") && !0 !== /^\s*$/.test(a.getAttribute("href")) || HTMLCS.addMessage(HTMLCS.ERROR, a, "Link element is missing a non-empty href attribute pointing to the resource being linked.", "H59.2b")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9 = {
        register: function() {
            return ["a"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that text of the link describes the purpose of the link.", "H30")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1 = {
        register: function() {
            return ["html"]
        },
        process: function(a, b) {
            if (!1 === a.hasAttribute("lang") && !1 === a.hasAttribute("xml:lang")) HTMLCS.addMessage(HTMLCS.ERROR, a, "The html element should have a lang or xml:lang attribute which describes the language of the document.", "H57.2");
            else {
                if (!0 === a.hasAttribute("lang")) {
                    var c = a.getAttribute("lang");
                    !1 === this.isValidLanguageTag(c) && HTMLCS.addMessage(HTMLCS.ERROR, b, "The language specified in the lang attribute of the document element does not appear to be well-formed.", "H57.3.Lang")
                }
                if (!0 === a.hasAttribute("xml:lang")) {
                    var c = a.getAttribute("xml:lang");
                    !1 === this.isValidLanguageTag(c) && HTMLCS.addMessage(HTMLCS.ERROR, b, "The language specified in the xml:lang attribute of the document element does not appear to be well-formed.", "H57.3.XmlLang")
                }
            }
        },
        isValidLanguageTag: function(a) {
            var b = "^([ix](-[a-z0-9]{1,8})+)$|";
            b += "^[a-z]{2,8}", b += "(-[a-z]{3}){0,3}", b += "(-[a-z]{4})?", b += "(-[a-z]{2}|-[0-9]{3})?", b += "(-[0-9][a-z0-9]{3}|-[a-z0-9]{5,8})*", b += "(-[a-wy-z0-9](-[a-z0-9]{2,8})+)*", b += "(-x(-[a-z0-9]{1,8})+)?$";
            var c = new RegExp(b, "i"),
                d = !0;
            return !1 === c.test(a) && (d = !1), d
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.", "H58");
            for (var c = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1, d = HTMLCS.util.getAllElements(b, "*[lang]"), e = 0; e <= d.length; e++) {
                if (e === d.length) var f = b;
                else var f = d[e];
                if (!f.documentElement && "html" !== f.nodeName.toLowerCase()) {
                    if (!0 === f.hasAttribute("lang")) {
                        var g = f.getAttribute("lang");
                        !1 === c.isValidLanguageTag(g) && HTMLCS.addMessage(HTMLCS.ERROR, f, "The language specified in the lang attribute of this element does not appear to be well-formed.", "H58.1.Lang")
                    }
                    if (!0 === f.hasAttribute("xml:lang")) {
                        var g = f.getAttribute("xml:lang");
                        !1 === c.isValidLanguageTag(g) && HTMLCS.addMessage(HTMLCS.ERROR, f, "The language specified in the xml:lang attribute of this element does not appear to be well-formed.", "H58.1.XmlLang")
                    }
                }
            }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.", "H40,H54,H60,G62,G70")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.", "G102,G55,G62,H28,G97")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.", "G86,G103,G79,G153,G160")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
        register: function() {
            return ["ruby"]
        },
        process: function(a, b) {
            var c = a.querySelectorAll("rb");
            0 === a.querySelectorAll("rt").length && (0 === c.length ? HTMLCS.addMessage(HTMLCS.ERROR, a, "Ruby element does not contain an rt element containing pronunciation information for its body text.", "H62.1.HTML5") : HTMLCS.addMessage(HTMLCS.ERROR, a, "Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.", "H62.1.XHTML11")), 0 === a.querySelectorAll("rp").length && HTMLCS.addMessage(HTMLCS.ERROR, a, "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.", "H62.2")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1 = {
        register: function() {
            return ["input", "textarea", "button", "select"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that a change of context does not occur when this input field receives focus.", "G107")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            "form" === a.nodeName.toLowerCase() && this.checkFormSubmitButton(a)
        },
        checkFormSubmitButton: function(a) {
            var b = !1;
            if (a.querySelectorAll("input[type=submit], input[type=image]").length > 0) b = !0;
            else {
                var c = a.querySelectorAll("button"),
                    d = a.querySelectorAll("button[type=reset], button[type=button]");
                c.length > d.length && (b = !0)
            }!1 === b && HTMLCS.addMessage(HTMLCS.ERROR, a, 'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.', "H32.2")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.", "G61")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, b, "Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.", "G197")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = {
        register: function() {
            return ["a"]
        },
        process: function(a, b) {
            "a" === a.nodeName.toLowerCase() && this.checkNewWindowTarget(a)
        },
        checkNewWindowTarget: function(a) {
            !0 === a.hasAttribute("target") && ("_blank" === (a.getAttribute("target") || "") && !1 === /new window/i.test(a.innerHTML) && HTMLCS.addMessage(HTMLCS.WARNING, a, "Check that this link's link text contains information indicating that the link will open in a new window.", "H83.3"))
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.", "G83,G84,G85")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.", "G131,G89,G184,H90")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.", "G177")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.", "G98,G99,G155,G164,G168.LegalForms")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that context-sensitive help is available for this form, at a Web-page and/or control level.", "G71,G184,G193")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6 = {
        register: function() {
            return ["form"]
        },
        process: function(a, b) {
            HTMLCS.addMessage(HTMLCS.NOTICE, a, "Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.", "G98,G99,G155,G164,G168.AllForms")
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b)
                for (var c = HTMLCS.util.getAllElements(b, "*[id]"), d = {}, e = 0; e < c.length; e++) {
                    var f = c[e].getAttribute("id");
                    !0 !== /^\s*$/.test(f) && (void 0 !== d[f] ? HTMLCS.addMessage(HTMLCS.ERROR, c[e], 'Duplicate id attribute value "' + f + '" found on the web page.', "F77") : d[f] = !0)
                }
        }
    }, _global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2 = {
        register: function() {
            return ["_top"]
        },
        process: function(a, b) {
            if (a === b) {
                for (var c = this.processFormControls(b), d = 0; d < c.errors.length; d++) HTMLCS.addMessage(HTMLCS.ERROR, c.errors[d].element, c.errors[d].msg, "H91." + c.errors[d].subcode);
                for (var d = 0; d < c.warnings.length; d++) HTMLCS.addMessage(HTMLCS.WARNING, c.warnings[d].element, c.warnings[d].msg, "H91." + c.warnings[d].subcode);
                this.addProcessLinksMessages(b)
            }
        },
        addProcessLinksMessages: function(a) {
            for (var b = this.processLinks(a), c = 0; c < b.empty.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.empty[c], "Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.", "H91.A.Empty");
            for (var c = 0; c < b.emptyWithName.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.emptyWithName[c], "Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.", "H91.A.EmptyWithName");
            for (var c = 0; c < b.emptyNoId.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.emptyNoId[c], "Anchor element found with no link content and no name and/or ID attribute.", "H91.A.EmptyNoId");
            for (var c = 0; c < b.noHref.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.noHref[c], "Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.", "H91.A.NoHref");
            for (var c = 0; c < b.placeholder.length; c++) HTMLCS.addMessage(HTMLCS.WARNING, b.placeholder[c], "Anchor element found with link content, but no href, ID or name attribute has been supplied.", "H91.A.Placeholder");
            for (var c = 0; c < b.noContent.length; c++) HTMLCS.addMessage(HTMLCS.ERROR, b.noContent[c], "Anchor element found with a valid href attribute, but no link content has been supplied.", "H91.A.NoContent")
        },
        processLinks: function(a) {
            for (var b = {
                    empty: [],
                    emptyWithName: [],
                    emptyNoId: [],
                    noHref: [],
                    placeholder: [],
                    noContent: []
                }, c = HTMLCS.util.getAllElements(a, 'a:not([role="button"])'), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = !1,
                    g = !1,
                    h = HTMLCS.util.getElementTextContent(e);
                !0 === e.hasAttribute("title") && !1 === /^\s*$/.test(e.getAttribute("title")) ? f = !0 : !1 === /^\s*$/.test(h) && (f = !0), !0 === e.hasAttribute("href") && !1 === /^\s*$/.test(e.getAttribute("href")) && (g = !0), !1 === g ? !0 === /^\s*$/.test(h) ? !0 === e.hasAttribute("id") ? b.empty.push(e) : !0 === e.hasAttribute("name") ? b.emptyWithName.push(e) : b.emptyNoId.push(e) : !0 === e.hasAttribute("id") || !0 === e.hasAttribute("name") ? b.noHref.push(e) : b.placeholder.push(e) : !1 === f && 0 === e.querySelectorAll("img").length && !1 === HTMLCS.util.hasValidAriaLabel(e) && b.noContent.push(e)
            }
            return b
        },
        processFormControls: function(a) {
            for (var b = HTMLCS.util.getAllElements(a, 'button, fieldset, input, select, textarea, [role="button"]'), c = [], d = [], e = {
                    button: ["@title", "_content", "@aria-label", "@aria-labelledby"],
                    fieldset: ["legend", "@aria-label", "@aria-labelledby"],
                    input_button: ["@value", "@aria-label", "@aria-labelledby"],
                    input_text: ["label", "@title", "@aria-label", "@aria-labelledby"],
                    input_file: ["label", "@title", "@aria-label", "@aria-labelledby"],
                    input_password: ["label", "@title", "@aria-label", "@aria-labelledby"],
                    input_checkbox: ["label", "@title", "@aria-label", "@aria-labelledby"],
                    input_radio: ["label", "@title", "@aria-label", "@aria-labelledby"],
                    input_image: ["@alt", "@title", "@aria-label", "@aria-labelledby"],
                    select: ["label", "@title", "@aria-label", "@aria-labelledby"],
                    textarea: ["label", "@title", "@aria-label", "@aria-labelledby"]
                }, f = ["email", "search", "date", "datetime-local", "month", "number", "tel", "time", "url", "week"], g = 0, h = f.length; g < h; g++) e["input_" + f[g]] = ["label", "@title", "@aria-label", "@aria-labelledby"];
            for (var i = {
                    select: "option_selected"
                }, j = 0, k = b.length; j < k; j++) {
                var l = b[j],
                    m = l.nodeName.toLowerCase(),
                    n = l.nodeName.substr(0, 1).toUpperCase() + l.nodeName.substr(1).toLowerCase();
                if ("input" === m) {
                    !1 === l.hasAttribute("type") ? m += "_text" : m += "_" + l.getAttribute("type").toLowerCase(), "input_submit" !== m && "input_reset" !== m || (m = "input_button");
                    var n = "Input" + m.substr(6, 1).toUpperCase() + m.substr(7).toLowerCase()
                }
                var o = e[m],
                    p = i[m];
                if (o || "input_hidden" === m || (o = ["_content"]), o) {
                    for (var g = 0; g < o.length; g++) {
                        var q = o[g];
                        if ("_content" === q) {
                            var r = HTMLCS.util.getElementTextContent(l);
                            if (!1 === /^\s*$/.test(r)) break
                        } else if ("label" === q) {
                            var s = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testLabelsOnInputs(l, a, !0);
                            if (!1 !== s) break
                        } else if ("@" === q.charAt(0)) {
                            if (("aria-label" === (q = q.substr(1, q.length)) || "aria-labelledby" === q) && HTMLCS.util.hasValidAriaLabel(l)) break;
                            if (!0 === l.hasAttribute(q) && !1 === /^\s*$/.test(l.getAttribute(q))) break
                        } else {
                            var t = l.querySelector(q);
                            if (null !== t) {
                                var r = HTMLCS.util.getElementTextContent(t);
                                if (!1 === /^\s*$/.test(r)) break
                            }
                        }
                    }
                    if (g === o.length) {
                        var u = m + " element";
                        "input_" === m.substr(0, 6) && (u = m.substr(6) + " input element"), l.hasAttribute("role") && "button" === l.getAttribute("role") && (u = 'element has a role of "button" but');
                        for (var v = o.slice(0, o.length), w = 0; w < v.length; w++) "_content" === v[w] ? v[w] = "element content" : "@" === v[w].charAt(0) ? v[w] = v[w].substr(1) + " attribute" : v[w] = v[w] + " element";
                        var x = "This " + u + " does not have a name available to an accessibility API. Valid names are: " + v.join(", ") + ".";
                        c.push({
                            element: l,
                            msg: x,
                            subcode: n + ".Name"
                        })
                    }
                }
                var y = !1;
                if (void 0 === p) y = !0;
                else if ("_content" === p) {
                    var r = HTMLCS.util.getElementTextContent(l);
                    !1 === /^\s*$/.test(r) && (y = !0)
                } else if ("option_selected" === p)
                    if (!1 === l.hasAttribute("multiple")) {
                        var z = l.querySelector("option[selected]");
                        null !== z && (y = !0)
                    } else y = !0;
                else "@" === p.charAt(0) && (p = p.substr(1, p.length), !0 === l.hasAttribute(p) && (y = !0));
                if (!1 === y && (valuFound = HTMLCS.util.hasValidAriaLabel(l)), !1 === y) {
                    var u = m + " element";
                    "input_" === m.substr(0, 6) && (u = m.substr(6) + " input element");
                    var x = "This " + u + " does not have a value available to an accessibility API.",
                        A = "",
                        B = !1;
                    "_content" === p ? A = " Add one by adding content to the element." : "option_selected" === p ? (B = !0, x = "This " + u + " does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.") : A = "@" === p.charAt(0) ? ' A value is exposed using the "' + p + '" attribute.' : ' A value is exposed using the "' + p + '" element.', x += A, !1 === B ? c.push({
                        element: l,
                        msg: x,
                        subcode: n + ".Value"
                    }) : d.push({
                        element: l,
                        msg: x,
                        subcode: n + ".Value"
                    })
                }
            }
            return {
                errors: c,
                warnings: d
            }
        }
    }, _global.HTMLCS = new function() {
        var a = {},
            b = [],
            c = {},
            d = null,
            e = null,
            f = [],
            g = {};
        this.ERROR = 1, this.WARNING = 2, this.NOTICE = 3, this.process = function(e, f, g, h) {
            if (a = {}, b = [], c = {}, d = null, !f) return !1;
            a[p(e)] ? HTMLCS.run(g, f) : this.loadStandard(e, function() {
                HTMLCS.run(g, f)
            }, h)
        }, this.loadStandard = function(a, b, c) {
            if (!a) return !1;
            j(a, function() {
                d = a, b.call(this)
            }, c)
        }, this.run = function(a, b) {
            var c = null,
                d = !1;
            if ("string" == typeof b) {
                d = !0;
                var e = document.createElement("iframe");
                e.style.display = "none", e = document.body.insertBefore(e, null), e.contentDocument ? c = e.contentDocument : c.contentWindow && (c = e.contentWindow.document), e.load = function() {
                    if (this.onreadystatechange = null, this.onload = null, !1 === HTMLCS.isFullDoc(b)) {
                        c = c.getElementsByTagName("body")[0];
                        var d = c.getElementsByTagName("div")[0];
                        d && "__HTMLCS-source-wrap" === d.id && (d.id = "", c = d)
                    }
                    var e = HTMLCS.util.getAllElements(c);
                    e.unshift(c), h(e, c, a)
                }, e.onreadystatechange = function() {
                    !0 === /^(complete|loaded)$/.test(this.readyState) && (this.onreadystatechange = null, this.load())
                }, e.onload = e.load, !1 === HTMLCS.isFullDoc(b) && -1 === b.indexOf("<body") ? c.write('<div id="__HTMLCS-source-wrap">' + b + "</div>") : c.write(b), c.close()
            } else c = b;
            if (!c) return void a.call(this);
            a = a || function() {}, f = [];
            var g = HTMLCS.util.getAllElements(c);
            g.unshift(c), !1 === d && h(g, c, a)
        }, this.isFullDoc = function(a) {
            var b = !1;
            return "string" == typeof a ? -1 !== a.toLowerCase().indexOf("<html") ? b = !0 : -1 !== a.toLowerCase().indexOf("<head") && -1 !== a.toLowerCase().indexOf("<body") && (b = !0) : ("html" === a.nodeName.toLowerCase() || a.documentElement) && (b = !0), b
        }, this.addMessage = function(a, b, c, d, e) {
            d = r(d), f.push({
                type: a,
                element: b,
                msg: g[d] || c,
                code: d,
                data: e
            })
        }, this.getMessages = function() {
            return f.concat([])
        };
        var h = function(a, b, d) {
                for (var g = []; a.length > 0;) {
                    var h = a.shift();
                    if (h === b) var j = "_top";
                    else var j = h.tagName.toLowerCase();
                    for (var k = 0; k < g.length;) h === g[k].element ? (f.push(g[k]), g.splice(k, 1)) : k++;
                    c[j] && c[j].length > 0 && (i(h, c[j].concat([]), b), "_top" === j && (g = f, f = []))
                }
                var l = b.querySelectorAll('[role="presentation"]');
                e = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1, [].forEach.call(l, function(a) {
                    e.testSemanticPresentationRole(a)
                }), d instanceof Function == !0 && d.call(this)
            },
            i = function(a, b, c, d) {
                for (; b.length > 0;) {
                    var f = b.shift();
                    e = f, !0 === f.useCallback ? f.process(a, c, function() {
                        i(a, b, c), b = []
                    }) : f.process(a, c)
                }
                d instanceof Function == !0 && d.call(this)
            },
            j = function(a, b, c, d) {
                0 !== a.indexOf("http") && (a = p(a));
                var e = a.split("/");
                _global["HTMLCS_" + e[e.length - 2]] ? k(a, b, c, d) : s(a, function() {
                    k(a, b, c, d)
                }, c)
            },
            k = function(b, c, d, e) {
                var f = b.split("/"),
                    g = _global["HTMLCS_" + f[f.length - 2]],
                    h = {};
                for (var i in g) !0 === g.hasOwnProperty(i) && (h[i] = g[i]);
                if (!h) return !1;
                if (a[b] = h, e)
                    if (e.include && e.include.length > 0) h.sniffs = e.include;
                    else if (e.exclude)
                    for (var j = 0; j < e.exclude.length; j++) {
                        var k = h.sniffs.find(e.exclude[j]);
                        k >= 0 && h.sniffs.splice(k, 1)
                    }
                var m = h.sniffs.slice(0, h.sniffs.length);
                l(b, m, c, d)
            },
            l = function(a, b, c, d) {
                if (0 === b.length) return void c.call(this);
                var e = b.shift();
                m(a, e, function() {
                    l(a, b, c, d)
                }, d)
            },
            m = function(a, b, c, d) {
                if ("string" == typeof b) {
                    var e = q(a, b),
                        f = function() {
                            n(a, b), c.call(this)
                        };
                    e ? f() : s(o(a, b), f, d)
                } else j(b.standard, function() {
                    if (b.messages)
                        for (var a in b.messages) g[a] = b.messages[a];
                    c.call(this)
                }, d, {
                    exclude: b.exclude,
                    include: b.include
                })
            },
            n = function(a, d) {
                var e = q(a, d);
                if (!e) return !1;
                if (e.register)
                    for (var f = e.register(), g = 0; g < f.length; g++) c[f[g]] || (c[f[g]] = []), c[f[g]].push(e);
                b.push(e)
            },
            o = function(a, b) {
                var c = a.split("/");
                return c.pop(), c.join("/") + "/Sniffs/" + b.replace(/\./g, "/") + ".js"
            },
            p = function(a) {
                for (var b = document.getElementsByTagName("script"), c = null, d = 0; d < b.length; d++)
                    if (b[d].src && b[d].src.match(/HTMLCS\.js/)) {
                        c = b[d].src.replace(/HTMLCS\.js/, ""), c = c.substring(0, c.indexOf("?"));
                        break
                    }
                return c + "Standards/" + a + "/ruleset.js"
            },
            q = function(b, c) {
                var d = "HTMLCS_";
                return d += a[b].name + "_Sniffs_", d += c.split(".").join("_"), _global[d] ? (_global[d]._name = c, _global[d]) : null
            },
            r = function(a) {
                return a = d + "." + e._name + "." + a
            },
            s = function(a, b, c) {
                var d = document.createElement("script");
                d.onload = function() {
                    d.onload = null, d.onreadystatechange = null, b.call(this)
                }, d.onerror = function() {
                    d.onload = null, d.onreadystatechange = null, c && c.call(this)
                }, d.onreadystatechange = function() {
                    !0 === /^(complete|loaded)$/.test(this.readyState) && (d.onreadystatechange = null, d.onload())
                }, d.src = a, document.head ? document.head.appendChild(d) : document.getElementsByTagName("head")[0].appendChild(d)
            }
    }, _global.HTMLCS.util = function() {
        var a = {};
        return a.trim = function(a) {
            return a.replace(/^\s*(.*)\s*$/g, "$1")
        }, a.isStringEmpty = function(a) {
            if ("string" != typeof a) return !0;
            var b = !0;
            return -1 !== a.indexOf(String.fromCharCode(160)) ? b = !1 : !1 === /^\s*$/.test(a) && (b = !1), b
        }, a.getDocumentType = function(a) {
            var b = null,
                c = a.doctype;
            if (c) {
                var d = c.name,
                    e = c.publicId,
                    f = c.systemId;
                if (null === d && (d = ""), null === f && (f = ""), null === e && (e = ""), "html" === d.toLowerCase() && ("" === e && "" === f ? b = "html5" : -1 !== e.indexOf("//DTD HTML 4.01") || -1 !== f.indexOf("w3.org/TR/html4/strict.dtd") ? b = "html401" : -1 !== e.indexOf("//DTD HTML 4.0") || -1 !== f.indexOf("w3.org/TR/REC-html40/strict.dtd") ? b = "html40" : -1 !== e.indexOf("//DTD XHTML 1.0 Strict") && -1 !== f.indexOf("w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd") ? b = "xhtml10" : -1 !== e.indexOf("//DTD XHTML 1.1") && -1 !== f.indexOf("w3.org/TR/xhtml11/DTD/xhtml11.dtd") && (b = "xhtml11"), -1 !== f.indexOf("about:legacy-compat") && "application/xhtml+xml" === a.contentType)) {
                    var g = a.querySelector("html");
                    "http://www.w3.org/1999/xhtml" === g.getAttribute("xmlns") && (b = "xhtml5")
                }
            } else if ("application/xhtml+xml" === a.contentType) {
                var g = a.querySelector("html");
                "http://www.w3.org/1999/xhtml" === g.getAttribute("xmlns") && (b = "xhtml5")
            }
            return b
        }, a.getElementWindow = function(a) {
            if (a.ownerDocument) var b = a.ownerDocument;
            else var b = a;
            return b.defaultView ? b.defaultView : b.parentWindow
        }, a.hasValidAriaLabel = function(b) {
            var c = !1;
            if (!0 === b.hasAttribute("aria-labelledby")) {
                b.getAttribute("aria-labelledby").split(/\s+/).forEach(function(b) {
                    var d = document.getElementById(b);
                    if (d) {
                        !1 === /^\s*$/.test(a.getElementTextContent(d)) && (c = !0)
                    }
                })
            } else if (!0 === b.hasAttribute("aria-label")) {
                var d = b.getAttribute("aria-label");
                !1 === /^\s*$/.test(d) && (c = !0)
            }
            return c
        }, a.style = function(b) {
            var c = null,
                d = a.getElementWindow(b);
            return b.currentStyle ? c = b.currentStyle : d.getComputedStyle && (c = d.getComputedStyle(b, null)), c
        }, a.isVisuallyHidden = function(b) {
            var c = !1,
                d = a.style(b);
            return null !== d && ("hidden" !== d.visibility && "none" !== d.display || (c = !0), parseInt(d.left, 10) + parseInt(d.width, 10) < 0 && (c = !0), parseInt(d.top, 10) + parseInt(d.height, 10) < 0 && (c = !0)), c
        }, a.isAccessibilityHidden = function(a) {
            do {
                if (a.hasAttribute("role") && "presentation" === a.getAttribute("role")) return !0;
                if (a.hasAttribute("aria-hidden") && "true" === a.getAttribute("aria-hidden")) return !0
            } while (a = a.parentElement);
            return !1
        }, a.isFocusable = function(b) {
            var c = b.nodeName.toLowerCase();
            return !0 !== a.isDisabled(b) && (!0 !== a.isVisuallyHidden(b) && (!!/^(input|select|textarea|button|object)$/.test(c) || !("a" !== c || !b.hasAttribute("href") || !1 !== /^\s*$/.test(b.getAttribute("href")))))
        }, a.isKeyboardTabbable = function(b) {
            if (!0 === b.hasAttribute("tabindex")) {
                return "-1" !== b.getAttribute("tabindex")
            }
            return a.isFocusable(b)
        }, a.isKeyboardNavigable = function(b) {
            return !(!b.hasAttribute("accesskey") || !1 !== /^\s*$/.test(b.getAttribute("accesskey"))) || a.isKeyboardTabbable(b)
        }, a.isDisabled = function(a) {
            var b = !1;
            return !0 !== a.disabled && "true" !== a.getAttribute("aria-disabled") || (b = !0), b
        }, a.isInDocument = function(a) {
            for (var b = a.parentNode; b && b.ownerDocument;) b = b.parentNode;
            return null !== b
        }, a.getAllElements = function(a, b) {
            a = a || document, b = b || "*";
            var c = Array.prototype.slice.call(a.querySelectorAll(b)),
                d = c.filter(function(a) {
                    return !1 === HTMLCS.util.isAccessibilityHidden(a)
                }),
                e = document.getElementById("HTMLCS-wrapper");
            return e && (d = d.filter(function(a) {
                return !1 === e.contains(a)
            })), d
        }, a.contains = function(a, b) {
            var c = !1;
            return a !== b && (a.ownerDocument ? a.contains && !0 === a.contains(b) ? c = !0 : a.compareDocumentPosition && (16 & a.compareDocumentPosition(b)) > 0 && (c = !0) : b.ownerDocument && b.ownerDocument === a && (c = !0)), c
        }, a.isLayoutTable = function(a) {
            return null === a.querySelector("th")
        }, a.contrastRatio = function(b, c) {
            var d = (.05 + a.relativeLum(b)) / (.05 + a.relativeLum(c));
            return d < 1 && (d = 1 / d), d
        }, a.relativeLum = function(b) {
            if (b.charAt) var b = a.colourStrToRGB(b);
            var c = {};
            for (var d in b) b[d] <= .03928 ? c[d] = b[d] / 12.92 : c[d] = Math.pow((b[d] + .055) / 1.055, 2.4);
            return .2126 * c.red + .7152 * c.green + .0722 * c.blue
        }, a.colourStrToRGB = function(a) {
            if (a = a.toLowerCase(), "rgb" === a.substring(0, 3)) {
                var b = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(a);
                a = {
                    red: b[1] / 255,
                    green: b[2] / 255,
                    blue: b[3] / 255
                }
            } else "#" === a.charAt(0) && (a = a.substr(1)), 3 === a.length && (a = a.replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3")), a = {
                red: parseInt(a.substr(0, 2), 16) / 255,
                green: parseInt(a.substr(2, 2), 16) / 255,
                blue: parseInt(a.substr(4, 2), 16) / 255
            };
            return a
        }, a.RGBtoColourStr = function(a) {
            return colourStr = "#", a.red = Math.round(255 * a.red), a.green = Math.round(255 * a.green), a.blue = Math.round(255 * a.blue), a.red % 17 == 0 && a.green % 17 == 0 && a.blue % 17 == 0 ? (colourStr += (a.red / 17).toString(16), colourStr += (a.green / 17).toString(16), colourStr += (a.blue / 17).toString(16)) : (a.red < 16 && (colourStr += "0"), colourStr += a.red.toString(16), a.green < 16 && (colourStr += "0"), colourStr += a.green.toString(16), a.blue < 16 && (colourStr += "0"), colourStr += a.blue.toString(16)), colourStr
        }, a.sRGBtoHSV = function(b) {
            b.charAt && (b = a.colourStrToRGB(b));
            var c = {
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                d = Math.max(b.red, b.green, b.blue),
                e = Math.min(b.red, b.green, b.blue),
                f = d - e;
            return 0 === f ? c.value = b.red : (c.value = d, d === b.red ? c.hue = (b.green - b.blue) / f : d === b.green ? c.hue = 2 + (b.blue - b.red) / f : c.hue = 4 + (b.red - b.green) / f, c.hue = 60 * c.hue, c.hue >= 360 && (c.hue -= 360), c.saturation = f / c.value), c
        }, a.HSVtosRGB = function(a) {
            var b = {
                red: 0,
                green: 0,
                blue: 0
            };
            if (0 === a.saturation) b.red = a.value, b.green = a.value, b.blue = a.value;
            else {
                var c = a.value * a.saturation,
                    d = a.value - c,
                    e = a.hue / 60,
                    f = e - 2 * Math.floor(e / 2),
                    g = c * (1 - Math.abs(f - 1));
                switch (Math.floor(e)) {
                    case 0:
                        b.red = c, b.green = g;
                        break;
                    case 1:
                        b.green = c, b.red = g;
                        break;
                    case 2:
                        b.green = c, b.blue = g;
                        break;
                    case 3:
                        b.blue = c, b.green = g;
                        break;
                    case 4:
                        b.blue = c, b.red = g;
                        break;
                    case 5:
                        b.red = c, b.blue = g
                }
                b.red = b.red + d, b.green = b.green + d, b.blue = b.blue + d
            }
            return b
        }, a.getElementTextContent = function(a, b) {
            void 0 === b && (b = !0);
            for (var a = a.cloneNode(!0), c = [], d = 0; d < a.childNodes.length; d++) c.push(a.childNodes[d]);
            for (var e = [a.textContent]; c.length > 0;) {
                var f = c.shift();
                if (1 === f.nodeType)
                    if ("img" === f.nodeName.toLowerCase()) !0 === b && !0 === f.hasAttribute("alt") && e.push(f.getAttribute("alt"));
                    else
                        for (var d = 0; d < f.childNodes.length; d++) c.push(f.childNodes[d]);
                else 3 === f.nodeType && e.push(f.nodeValue)
            }
            return e = e.join("").replace(/^\s+|\s+$/g, "")
        }, a.findParentNode = function(a, b) {
            if (a && a.matches && a.matches(b)) return a;
            for (; a && a.parentNode;)
                if ((a = a.parentNode) && a.matches && a.matches(b)) return a;
            return null
        }, a.getChildrenForTable = function(b, c) {
            if ("table" !== b.nodeName.toLowerCase()) return null;
            for (var d = [], e = b.getElementsByTagName(c), f = 0, g = e.length; f < g; f++) a.findParentNode(e[f], "table") === b && d.push(e[f]);
            return d
        }, a.testTableHeaders = function(b) {
            for (var c = {
                    required: !0,
                    used: !1,
                    correct: !0,
                    allowScope: !0,
                    missingThId: [],
                    missingTd: [],
                    wrongHeaders: []
                }, d = a.getChildrenForTable(b, "tr"), e = [], f = {
                    rows: [],
                    cols: []
                }, g = {
                    rows: 0,
                    cols: 0
                }, h = 0; h < d.length; h++)
                for (var i = d[h], j = 0, k = 0; k < i.childNodes.length; k++) {
                    var l = i.childNodes[k];
                    if (1 === l.nodeType) {
                        if (e[h])
                            for (; e[h][0] === j;) e[h].shift(), j++;
                        var m = l.nodeName.toLowerCase(),
                            n = Number(l.getAttribute("rowspan")) || 1,
                            o = Number(l.getAttribute("colspan")) || 1;
                        if (n > 1)
                            for (var p = h + 1; p < h + n; p++) {
                                e[p] || (e[p] = []);
                                for (var q = j; q < j + o; q++) e[p].push(q)
                            }
                        if ("th" === m) {
                            var r = l.getAttribute("id") || "";
                            "" === r && (c.correct = !1, c.missingThId.push(l)), n > 1 && o > 1 ? c.allowScope = !1 : !0 === c.allowScope && (void 0 === f.cols[j] && (f.cols[j] = 0), void 0 === f.rows[h] && (f.rows[h] = 0), f.rows[h] += o, f.cols[j] += n)
                        } else "td" === m && !0 === l.hasAttribute("headers") && !1 === /^\s*$/.test(l.getAttribute("headers")) && (c.used = !0);
                        j += o
                    }
                }
            for (var p = 0; p < f.rows.length; p++) f.rows[p] > 1 && g.rows++;
            for (var p = 0; p < f.cols.length; p++) f.cols[p] > 1 && g.cols++;
            g.rows > 1 || g.cols > 1 ? c.allowScope = !1 : !0 !== c.allowScope || 0 !== g.rows && 0 !== g.cols || (c.required = !1);
            for (var s = HTMLCS.util.getCellHeaders(b), p = 0; p < s.length; p++) {
                var l = s[p].cell,
                    t = s[p].headers;
                if (!1 === l.hasAttribute("headers")) c.correct = !1, c.missingTd.push(l);
                else {
                    var u = (l.getAttribute("headers") || "").split(/\s+/);
                    if (0 === u.length) c.correct = !1, c.missingTd.push(l);
                    else if (u = " " + u.sort().join(" ") + " ", u = u.replace(/\s+/g, " ").replace(/(\w+\s)\1+/g, "$1").replace(/^\s*(.*?)\s*$/g, "$1"), t !== u) {
                        c.correct = !1;
                        var v = {
                            element: l,
                            expected: t,
                            actual: l.getAttribute("headers") || ""
                        };
                        c.wrongHeaders.push(v)
                    }
                }
            }
            return c
        }, a.getCellHeaders = function(b) {
            if ("object" != typeof b) return null;
            if ("table" !== b.nodeName.toLowerCase()) return null;
            for (var c = a.getChildrenForTable(b, "tr"), d = [], e = {
                    rows: {},
                    cols: {}
                }, f = [], g = ["th", "td"], h = 0; h < g.length; h++)
                for (var i = g[h], j = 0; j < c.length; j++)
                    for (var k = c[j], l = 0, m = 0; m < k.childNodes.length; m++) {
                        var n = k.childNodes[m];
                        if (1 === n.nodeType) {
                            if (d[j])
                                for (; d[j][0] === l;) d[j].shift(), l++;
                            var o = n.nodeName.toLowerCase(),
                                p = Number(n.getAttribute("rowspan")) || 1,
                                q = Number(n.getAttribute("colspan")) || 1;
                            if (p > 1)
                                for (var r = j + 1; r < j + p; r++) {
                                    d[r] || (d[r] = []);
                                    for (var s = l; s < l + q; s++) d[r].push(s)
                                }
                            if (o === i)
                                if ("th" === o) {
                                    for (var t = n.getAttribute("id") || "", r = j; r < j + p; r++) e.rows[r] = e.rows[r] || {
                                        first: l,
                                        ids: []
                                    }, e.rows[r].ids.push(t);
                                    for (var r = l; r < l + q; r++) e.cols[r] = e.cols[r] || {
                                        first: j,
                                        ids: []
                                    }, e.cols[r].ids.push(t)
                                } else if ("td" === o) {
                                for (var u = [], r = j; r < j + p; r++)
                                    for (var s = l; s < l + q; s++) e.rows[r] && s >= e.rows[r].first && (u = u.concat(e.rows[r].ids)), e.cols[s] && r >= e.cols[s].first && (u = u.concat(e.cols[s].ids));
                                u.length > 0 && (u = " " + u.sort().join(" ") + " ", u = u.replace(/\s+/g, " ").replace(/(\w+\s)\1+/g, "$1").replace(/^\s*(.*?)\s*$/g, "$1"), f.push({
                                    cell: n,
                                    headers: u
                                }))
                            }
                            l += q
                        }
                    }
            return f
        }, a.getPreviousSiblingElement = function(a, b, c) {
            void 0 === b && (b = null), void 0 === c && (c = !1);
            for (var d = a.previousSibling; null !== d;) {
                if (3 === d.nodeType) {
                    if (!1 === HTMLCS.util.isStringEmpty(d.nodeValue) && !0 === c) {
                        d = null;
                        break
                    }
                } else if (1 === d.nodeType) {
                    if (null === b || d.nodeName.toLowerCase() === b) break;
                    if (!0 === c) {
                        d = null;
                        break
                    }
                    break
                }
                d = d.previousSibling
            }
            return d
        }, a.getNextSiblingElement = function(a, b, c) {
            void 0 === b && (b = null), void 0 === c && (c = !1);
            for (var d = a.nextSibling; null !== d;) {
                if (3 === d.nodeType) {
                    if (!1 === HTMLCS.util.isStringEmpty(d.nodeValue) && !0 === c) {
                        d = null;
                        break
                    }
                } else if (1 === d.nodeType) {
                    if (null === b || d.nodeName.toLowerCase() === b) break;
                    if (!0 === c) {
                        d = null;
                        break
                    }
                    break
                }
                d = d.nextSibling
            }
            return d
        }, a
    }();
    var HTMLCS_RUNNER = _global.HTMLCS_RUNNER = new function() {
        this.run = function(a, b) {
            var c = this;
            HTMLCS.process(a, document, function() {
                var a = HTMLCS.getMessages(),
                    b = a.length,
                    d = {};
                d[HTMLCS.ERROR] = 0, d[HTMLCS.WARNING] = 0, d[HTMLCS.NOTICE] = 0;
                for (var e = 0; e < b; e++) c.output(a[e]), d[a[e].type]++;
                console.log("done")
            }, function() {
                console.log("Something in HTML_CodeSniffer failed to parse. Cannot run."), console.log("done")
            })
        }, this.output = function(a) {
            var b = "UNKNOWN";
            switch (a.type) {
                case HTMLCS.ERROR:
                    b = "ERROR";
                    break;
                case HTMLCS.WARNING:
                    b = "WARNING";
                    break;
                case HTMLCS.NOTICE:
                    b = "NOTICE"
            }
            var c = "";
            a.element && (c = a.element.nodeName.toLowerCase());
            var d = "";
            a.element.id && "" !== a.element.id && (d = "#" + a.element.id);
            var e = "";
            if (a.element.outerHTML) {
                var f = a.element.cloneNode(!0);
                f.innerHTML = "...", e = f.outerHTML
            }
            console.log("[HTMLCS] " + b + "|" + a.code + "|" + c + "|" + d + "|" + a.msg + "|" + e)
        }
    };
    _global.HTMLCSAuditor = new function() {
        var a = "HTMLCS-",
            b = "",
            c = "",
            d = [],
            e = {},
            f = null,
            g = null,
            h = [],
            j = 1,
            k = null,
            l = this;
        this.pointerContainer = null;
        var m = function(a, b, c, d) {
                var e = f.createElement("div");
                e.id = a, e.className = "HTMLCS-button", e.setAttribute("title", c);
                var g = f.createElement("span");
                g.className = "HTMLCS-button-icon HTMLCS-button-" + b, e.appendChild(g);
                var h = f.createTextNode(String.fromCharCode(160));
                return e.appendChild(h), d instanceof Function == !0 && (e.onclick = function() {
                    !1 === /disabled/.test(e.className) && d(e)
                }), e
            },
            n = function(a, b, c, d, e) {
                void 0 === c && (c = !1);
                var g = f.createElement("label"),
                    h = "";
                g.className = "HTMLCS-checkbox", h += '<span class="HTMLCS-checkbox-switch">', h += '<span class="HTMLCS-checkbox-slider"></span>', h += '<input id="' + a + '" type="checkbox"', !0 === c && (h += ' checked="checked"', g.className += " active"), !0 === d && (h += ' disabled="disabled"', g.className += " disabled"), h += ' title="' + b + '" /></span>', g.innerHTML = h;
                var i = g.getElementsByTagName("input")[0];
                return g.onclick = function(a) {
                    return !1 === d && (i.checked = !i.checked, !0 === i.checked ? g.className += " active" : g.className = g.className.replace("active", ""), e instanceof Function == !0 && e(i)), !1
                }, g
            },
            o = function(a, b) {
                var c = f.createElement("div");
                c.className = "HTMLCS-header", c.innerHTML = "HTML_CodeSniffer by Squiz", c.setAttribute("title", "Using standard " + a);
                var d = !1,
                    e = 0,
                    g = 0;
                c.onmousedown = function(a) {
                    return a = a || window.event, d = !0, e = a.clientX, g = a.clientY, !1
                }, f.onmousemove = function(a) {
                    if (a = a || window.event, !0 === d) {
                        var c = b.offsetTop,
                            f = b.offsetLeft;
                        g < a.clientY ? (c += a.clientY - g, b.style.top = c + "px") : g > a.clientY && (c -= g - a.clientY, b.style.top = c + "px"), e < a.clientX ? (f += a.clientX - e, b.style.left = f + "px") : e > a.clientX && (f -= e - a.clientX, b.style.left = f + "px"), e = a.clientX, g = a.clientY
                    }
                }, f.onmouseup = function(a) {
                    d = !1
                };
                var h = f.createElement("div");
                return h.className = "HTMLCS-close", h.setAttribute("title", "Close"), h.onmousedown = function() {
                    l.close.call(l)
                }, c.appendChild(h), c
            },
            p = function(a, b, g) {
                var h = f.createElement("div");
                h.className = "HTMLCS-summary";
                var i = f.createElement("div");
                i.className = "HTMLCS-summary-left", h.appendChild(i);
                var j = f.createElement("div");
                j.className = "HTMLCS-summary-right", h.appendChild(j);
                var k = [];
                if (a > 0) {
                    var m = "Errors";
                    1 === a && (m = "Error"), k.push("<strong>" + a + "</strong> " + m)
                }
                if (b > 0) {
                    var m = "Warnings";
                    1 === b && (m = "Warning"), k.push("<strong>" + b + "</strong> " + m)
                }
                if (g > 0) {
                    var m = "Notices";
                    1 === g && (m = "Notice"), k.push("<strong>" + g + "</strong> " + m)
                }
                var n = f.createElement("ol");
                n.className = "HTMLCS-lineage";
                var o = f.createElement("li");
                o.className = "HTMLCS-lineage-item";
                var p = f.createElement("a");
                p.className = "HTMLCS-lineage-link", p.href = "javascript:";
                var q = f.createElement("span");
                q.innerHTML = "Home", p.appendChild(q), p.onmousedown = function() {
                    l.run(c, d, e)
                };
                var r = f.createElement("li");
                return r.className = "HTMLCS-lineage-item", r.innerHTML = k.join(', &#160;<span class="HTMLCS-divider"></span>'), o.appendChild(p), n.appendChild(o), n.appendChild(r), i.appendChild(n), j.appendChild(f.createTextNode(String.fromCharCode(160))), h
            },
            q = function(a, b) {
                var g = f.createElement("div");
                g.className = "HTMLCS-summary-detail";
                var i = f.createElement("div");
                i.className = "HTMLCS-summary-left";
                var j = f.createElement("div");
                j.className = "HTMLCS-summary-right";
                var k = f.createElement("ol");
                k.className = "HTMLCS-lineage";
                var n = f.createElement("li");
                n.className = "HTMLCS-lineage-item";
                var o = f.createElement("a");
                o.className = "HTMLCS-lineage-link", o.href = "javascript:";
                var p = f.createElement("span");
                p.innerHTML = "Home", o.appendChild(p), o.onmousedown = function() {
                    l.run(c, d, e)
                };
                var r = f.createElement("li");
                r.className = "HTMLCS-lineage-item";
                var s = f.createElement("a");
                s.className = "HTMLCS-lineage-link", s.href = "javascript:", s.innerHTML = "Report", s.setAttribute("title", "Back to Report"), s.onmousedown = function() {
                    var a = f.querySelectorAll(".HTMLCS-inner-wrapper")[0];
                    a.style.marginLeft = "0px", a.style.maxHeight = null, g.style.display = "none", f.querySelectorAll(".HTMLCS-summary")[0].style.display = "block"
                };
                var t = f.createElement("li");
                t.className = "HTMLCS-lineage-item", t.innerHTML = "Issue " + a + " of " + b, n.appendChild(o), r.appendChild(s), k.appendChild(n), k.appendChild(r), k.appendChild(t), i.appendChild(k);
                var u = f.createElement("div");
                u.className = "HTMLCS-button-group";
                var w = m("HTMLCS-button-previous-issue", "previous", "Previous Issue", function(c) {
                        var d = Number(a) - 1;
                        if (d >= 1) {
                            v(d - 1), wrapper = g.parentNode;
                            var e = q(d, b);
                            wrapper.replaceChild(e, g), e.style.display = "block";
                            var h = f.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                            h.firstChild.style.marginLeft = parseInt(h.firstChild.style.marginLeft, 10) + 300 + "px", y(d - 1)
                        }
                    }),
                    x = m("HTMLCS-button-next-issue", "next", "Next Issue", function(c) {
                        var d = Number(a) + 1;
                        if (d <= h.length) {
                            v(d - 1), wrapper = g.parentNode;
                            var e = q(d, b);
                            wrapper.replaceChild(e, g), e.style.display = "block";
                            var i = f.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                            i.firstChild.style.marginLeft = parseInt(i.firstChild.style.marginLeft, 10) - 300 + "px", y(d - 1)
                        }
                    });
                return 1 === a && (w.className += " disabled"), a === b && (x.className += " disabled"), u.appendChild(w), u.appendChild(x), j.appendChild(u), g.appendChild(i), g.appendChild(j), g
            },
            r = function(a) {
                var b = 300 * Math.ceil(a.length / 5),
                    c = f.createElement("div");
                c.id = "HTMLCS-issues", c.className = "HTMLCS-details", c.setAttribute("style", "width: " + b + "px");
                var d = f.createElement("ol");
                d.className = "HTMLCS-issue-list", d.setAttribute("style", "margin-left: 0");
                for (var e = 0; e < a.length; e++) {
                    if (e > 0 && e % 5 == 0) {
                        c.appendChild(d);
                        var d = f.createElement("ol");
                        d.className = "HTMLCS-issue-list"
                    }
                    var g = u(e, a[e]);
                    d.appendChild(g)
                }
                return c.appendChild(d), c
            },
            s = function(a) {
                var b = 300 * a.length,
                    c = f.createElement("div");
                c.id = "HTMLCS-issues-detail", c.className = "HTMLCS-details", c.setAttribute("style", "width: " + b + "px");
                var d = f.createElement("ol");
                d.className = "HTMLCS-issue-detail-list", d.setAttribute("style", "margin-left: 0");
                for (var e = 0; e < a.length; e++) {
                    var g = w(e, a[e]);
                    d.appendChild(g)
                }
                return c.appendChild(d), c
            },
            t = function() {
                var a = f.createElement("div");
                a.className = "HTMLCS-settings";
                var b = f.createElement("div");
                b.id = "HTMLCS-settings-use-standard";
                var g = f.createElement("label");
                g.innerHTML = "Standards:", g.setAttribute("for", "HTMLCS-settings-use-standard-select");
                var i = f.createElement("select");
                i.id = "HTMLCS-settings-use-standard-select", i.innerHTML = "";
                for (var j = HTMLCSAuditor.getStandardList(), k = 0; k < j.length; k++) {
                    var m = j[k],
                        o = f.createElement("option");
                    o.value = m, o.innerHTML = _global["HTMLCS_" + m].name, m === c && (o.selected = !0), i.appendChild(o), i.onchange = function() {
                        c = this.options[this.selectedIndex].value, l.run(c, d, e)
                    }
                }
                var p = f.createElement("div");
                p.id = "HTMLCS-settings-issue-count";
                var q = f.createElement("div");
                q.id = "HTMLCS-settings-issue-count-help", q.innerHTML = "Select the types of issues to include in the report";
                var r = f.createElement("div");
                r.id = "HTMLCS-settings-view-report", r.innerHTML = "View Report", r.onclick = function() {
                    if (!1 === /disabled/.test(this.className)) {
                        e.show = {
                            error: f.getElementById("HTMLCS-include-error").checked,
                            warning: f.getElementById("HTMLCS-include-warning").checked,
                            notice: f.getElementById("HTMLCS-include-notice").checked
                        };
                        var a = f.getElementById("HTMLCS-wrapper"),
                            b = l.build(c, h, e);
                        e.parentElement ? e.parentElement.replaceChild(b, a) : (b.style.left = a.style.left, b.style.top = a.style.top, f.body.replaceChild(b, a)), e.listUpdateCallback && e.listUpdateCallback.call(this, h)
                    }
                };
                var s = (f.getElementById("HTMLCS-wrapper"), l.countIssues(h));
                void 0 === e.show && h.length > 0 && (e.show = {
                    error: !0,
                    warning: !0,
                    notice: !1
                }, 0 === s.error && 0 === s.warning && (e.show.notice = !0));
                for (var t in s) {
                    var u = s[t],
                        v = f.createElement("div");
                    v.className = "HTMLCS-issue-tile HTMLCS-" + t.toLowerCase();
                    var w = f.createElement("div");
                    w.className = "HTMLCS-tile-text";
                    var x = "<strong>" + u + "</strong> " + t.substr(0, 1).toUpperCase() + t.substr(1);
                    if (1 !== u && (x += "s"), w.innerHTML = x, void 0 === e.show) var y = !1,
                        z = !0;
                    else {
                        var y = e.show[t],
                            z = !1;
                        0 === u && (y = !1, z = !0)
                    }
                    var A = n("HTMLCS-include-" + t, "Toggle display of " + t + " messages", y, z, function(a) {
                        var b = !1;
                        !1 === f.getElementById("HTMLCS-include-error").disabled && (e.show.error = f.getElementById("HTMLCS-include-error").checked, b = b || e.show.error), !1 === f.getElementById("HTMLCS-include-warning").disabled && (e.show.warning = f.getElementById("HTMLCS-include-warning").checked, b = b || e.show.warning), !1 === f.getElementById("HTMLCS-include-notice").disabled && (e.show.notice = f.getElementById("HTMLCS-include-notice").checked, b = b || e.show.notice), !0 === b ? r.className = r.className.replace(/ disabled/g, "") : r.className += " disabled"
                    });
                    v.appendChild(w), v.appendChild(A), p.appendChild(v)
                }
                if (void 0 !== e.show) {
                    !1 === (e.show.error || e.show.warning || e.show.notice) && (r.className += " disabled")
                } else r.className += " disabled";
                return b.appendChild(g), b.appendChild(i), a.appendChild(b), a.appendChild(p), a.appendChild(q), a.appendChild(r), a
            },
            u = function(a, b) {
                var c = "",
                    d = "",
                    e = "";
                switch (b.type) {
                    case HTMLCS.ERROR:
                        d = "Error";
                        break;
                    case HTMLCS.WARNING:
                        d = "Warning";
                        break;
                    case HTMLCS.NOTICE:
                        d = "Notice"
                }
                var e = d.toLowerCase(),
                    g = b.msg;
                g.length > 115 && (g = g.substr(0, 115) + "...");
                var c = f.createElement("li");
                c.id = "HTMLCS-msg-" + a;
                var i = f.createElement("span");
                i.className = "HTMLCS-issue-type HTMLCS-" + e, i.setAttribute("title", d), c.appendChild(i);
                var j = f.createElement("span");
                return j.className = "HTMLCS-issue-title", j.innerHTML = g, c.appendChild(j), c.onclick = function() {
                    var a = this.id.replace(new RegExp("HTMLCS-msg-"), "");
                    v(a);
                    var b = f.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                    b.className += " HTMLCS-transition-disabled", b.firstChild.style.marginLeft = -300 * a + "px", y(a), setTimeout(function() {
                        b.className = b.className.replace(new RegExp(" HTMLCS-transition-disabled"), "")
                    }, 500);
                    var c = f.querySelectorAll(".HTMLCS-inner-wrapper")[0];
                    c.style.marginLeft = "-300px", c.style.maxHeight = "15em", summary = f.querySelectorAll(".HTMLCS-summary-detail")[0];
                    var d = q(parseInt(a) + 1, h.length);
                    summary.parentNode.replaceChild(d, summary), d.style.display = "block", f.querySelectorAll(".HTMLCS-summary")[0].style.display = "none"
                }, c
            },
            v = function(a) {
                for (var b = f.querySelectorAll(".HTMLCS-issue-detail-list")[0], c = b.getElementsByTagName("li"), d = 0; d < c.length; d++) c[d].className = c[d].className.replace(new RegExp(" HTMLCS-current"), "");
                f.getElementById("HTMLCS-msg-detail-" + a).className += " HTMLCS-current", e.showIssueCallback && e.showIssueCallback.call(this, a)
            },
            w = function(b, d, h) {
                void 0 === h && (h = c);
                var i = "";
                switch (d.type) {
                    case HTMLCS.ERROR:
                        i = "Error";
                        break;
                    case HTMLCS.WARNING:
                        i = "Warning";
                        break;
                    case HTMLCS.NOTICE:
                        i = "Notice"
                }
                var j = a + i.toLowerCase(),
                    k = HTMLCS.util.getElementWindow(f)["HTMLCS_" + h],
                    k = g["HTMLCS_" + h],
                    n = [];
                k.getMsgInfo && (n = k.getMsgInfo(d.code));
                var o = f.createElement("li");
                o.id = "HTMLCS-msg-detail-" + b;
                var p = f.createElement("div");
                p.className = "HTMLCS-issue-details";
                var q = f.createElement("span");
                q.className = "HTMLCS-issue-type " + j, q.setAttribute("title", i);
                var r = f.createElement("div");
                r.className = "HTMLCS-issue-title", r.innerHTML = d.msg;
                var s = f.createElement("div");
                s.className = "HTMLCS-issue-wcag-ref";
                for (var t = "", u = 0; u < n.length; u++) t += "<em>" + n[u][0] + ":</em> " + n[u][1] + "<br/>";
                if (s.innerHTML = t, p.appendChild(q), p.appendChild(r), p.appendChild(s), o.appendChild(p), !1 === A.isPointable(d.element)) {
                    var v = f.createElement("div");
                    v.className = "HTMLCS-issue-source", o.appendChild(v);
                    var w = f.createElement("div");
                    w.className = "HTMLCS-issue-source-inner-u2p";
                    var x = "Unable to point to the element associated with this issue.";
                    if (null === d.element.ownerDocument) x = "Unable to point to this issue, as it relates to the entire document.";
                    else {
                        var y = d.element.ownerDocument.getElementsByTagName("body")[0];
                        !1 === HTMLCS.util.isInDocument(d.element) ? x += "Unable to point to this element as it has been removed from the document since the report was generated." : !1 === HTMLCS.util.contains(y, d.element) ? x = "Unable to point to this element because it is located outside the document's body element." : x += "Unable to point to this element because it is hidden from view, or does not have a visual representation."
                    }
                    void 0 !== w.textContent ? w.textContent = x : w.innerText = x, v.appendChild(w)
                }
                if (e.customIssueSource) {
                    var v = f.createElement("div");
                    v.className = "HTMLCS-issue-source", o.appendChild(v), e.customIssueSource.call(this, b, d, h, v, p)
                } else {
                    var v = f.createElement("div");
                    v.className = "HTMLCS-issue-source";
                    var z = f.createElement("div");
                    z.className = "HTMLCS-issue-source-header";
                    var B = f.createElement("strong");
                    B.innerHTML = "Code Snippet";
                    var C = m("HTMLCS-button-point-to-element-" + b, "pointer", "Point to Element", function() {
                        l.pointToElement(d.element)
                    });
                    if (z.appendChild(B), z.appendChild(C), v.appendChild(z), d.element.outerHTML) {
                        var D = "",
                            E = "";
                        if (d.element.innerHTML.length > 31) var F = d.element.outerHTML.replace(d.element.innerHTML, d.element.innerHTML.substr(0, 31) + "...");
                        else var F = d.element.outerHTML;
                        for (var G = d.element.previousSibling; D.length <= 31 && null !== G;) 1 === G.nodeType ? D = G.outerHTML : 3 === G.nodeType && (D = void 0 !== G.textContent ? G.textContent + D : G.nodeValue + D), D.length > 31 && (D = "..." + D.substr(D.length - 31)), G = G.previousSibling;
                        for (var H = d.element.nextSibling; E.length <= 31 && null !== H;) 1 === H.nodeType ? E += H.outerHTML : 3 === H.nodeType && (void 0 !== H.textContent ? E += H.textContent : E += H.nodeValue), E.length > 31 && (E = E.substr(0, 31) + "..."), H = H.nextSibling;
                        var w = f.createElement("div");
                        w.className = "HTMLCS-issue-source-inner";
                        var I = f.createElement("strong");
                        void 0 !== I.textContent ? I.textContent = F : I.innerText = F, w.appendChild(f.createTextNode(D)), w.appendChild(I), w.appendChild(f.createTextNode(E)), v.appendChild(w)
                    } else {
                        var w = f.createElement("div");
                        w.className = "HTMLCS-issue-source-not-supported";
                        w.appendChild(f.createTextNode("The code snippet functionality is not supported in this browser.")), v.appendChild(w)
                    }
                    o.appendChild(v)
                }
                return o
            },
            x = function(a, b) {
                var c = f.createElement("div");
                c.className = "HTMLCS-navigation";
                var d = f.createElement("span");
                d.className = "HTMLCS-nav-button HTMLCS-previous", d.innerHTML = String.fromCharCode(160), 1 === a && (d.className += " HTMLCS-disabled"), c.appendChild(d);
                var e = f.createElement("span");
                e.className = "HTMLCS-page-number", e.innerHTML = "Page " + a + " of " + b, c.appendChild(e);
                var g = f.createElement("span");
                return g.className = "HTMLCS-nav-button HTMLCS-next", g.innerHTML = String.fromCharCode(160), a === b && (g.className += " HTMLCS-disabled"), c.appendChild(g), d.onclick = function() {
                    j > 1 && 1 === --j && (d.className += " HTMLCS-disabled"), b > 1 && (g.className = g.className.replace(new RegExp(" HTMLCS-disabled"), "")), e.innerHTML = "", e.appendChild(document.createTextNode("Page " + j + " of " + b)), f.querySelectorAll(".HTMLCS-issue-list")[0].style.marginLeft = -300 * (j - 1) + "px"
                }, g.onclick = function() {
                    j < b && ++j === b && (g.className += " HTMLCS-disabled"), b > 1 && (d.className = d.className.replace(new RegExp(" HTMLCS-disabled"), "")), e.innerHTML = "", e.appendChild(document.createTextNode("Page " + j + " of " + b)), f.querySelectorAll(".HTMLCS-issue-list")[0].style.marginLeft = -300 * (j - 1) + "px"
                }, c
            },
            y = function(a) {
                var b = h[Number(a)];
                if (b.element) {
                    var c = f.getElementById("HTMLCS-button-point-to-element-" + a);
                    if (A.container = l.pointerContainer || f.getElementById("HTMLCS-wrapper"), !1 === A.isPointable(b.element)) {
                        var d = A.getPointer(b.element);
                        A.pointer && (d.className += " HTMLCS-pointer-hidden"), c && (c.className += " disabled")
                    } else c && (c.className = c.className.replace(" disabled", "")), A.pointTo(b.element)
                }
            },
            z = function(a, b) {
                if (0 === a.length) return void b.call(this);
                var c = a.shift();
                HTMLCS.loadStandard(c, function() {
                    z(a, b)
                })
            };
        this.setOption = function(a, b) {
            e[a] = b
        }, this.getIssue = function(a) {
            return h[a]
        }, this.countIssues = function(a) {
            for (var b = {
                    error: 0,
                    warning: 0,
                    notice: 0
                }, c = 0; c < a.length; c++) switch (a[c].type) {
                case HTMLCS.ERROR:
                    b.error++;
                    break;
                case HTMLCS.WARNING:
                    b.warning++;
                    break;
                case HTMLCS.NOTICE:
                    b.notice++
            }
            return b
        }, this.build = function(a, b, c) {
            var d = null;
            if (f) var d = f.getElementById("HTMLCS-wrapper");
            for (var g = 0, i = 0, j = 0, k = 0; k < b.length; k++) {
                var l = !1;
                switch (b[k].type) {
                    case HTMLCS.ERROR:
                        !1 === e.show.error ? l = !0 : g++;
                        break;
                    case HTMLCS.WARNING:
                        !1 === e.show.warning ? l = !0 : i++;
                        break;
                    case HTMLCS.NOTICE:
                        !1 === e.show.notice ? l = !0 : j++
                }!0 === l && (b.splice(k, 1), k--)
            }
            h = b;
            for (var m = "", n = "", k = 0; k < b.length; k++) k % 5 == 0 && (m += '<ol class="HTMLCS-issue-list"', 0 === k && (m += 'style="margin-left: 0em"'), m += ">"), m += u(k, b[k]), k % 5 != 4 && k !== b.length - 1 || (m += "</ol>"), n += w(k, b[k], a);
            var d = f.createElement("div");
            if (d.id = "HTMLCS-wrapper", d.className = "showing-issue-list", !0 !== e.noHeader) {
                var t = o(a, d);
                d.appendChild(t)
            }
            var v = p(g, i, j),
                y = q(1, b.length),
                z = f.createElement("div");
            z.id = "HTMLCS-issues-wrapper", z.className = "HTMLCS-inner-wrapper";
            var A = r(b);
            z.appendChild(A);
            var B = Math.ceil(b.length / 5),
                C = x(1, B);
            z.appendChild(C);
            var D = f.createElement("div");
            D.className = "HTMLCS-outer-wrapper", D.appendChild(z);
            var z = f.createElement("div");
            z.id = "HTMLCS-issues-detail-wrapper", z.className = "HTMLCS-inner-wrapper";
            var E = s(b);
            return z.appendChild(E), D.appendChild(z), d.appendChild(v), d.appendChild(y), d.appendChild(D), d
        }, this.buildSummaryPage = function() {
            var a = f.createElement("div");
            if (a.id = "HTMLCS-wrapper", a.className = "showing-settings", !0 !== e.noHeader) {
                var b = o(c, a);
                a.appendChild(b)
            }
            var d = t();
            return a.appendChild(d), a
        }, this.changeScreen = function(a) {
            var c = f.getElementById("HTMLCS-wrapper");
            c.className = c.className.replace(new RegExp("showing-" + b), ""), c.className += " showing-" + a, c.className = c.className.replace(/\s+/, " "), b = a
        }, this.includeCss = function(a, b) {
            if (!1 !== e.includeCss) {
                void 0 === b && (b = f);
                for (var c = b.querySelector("head"), d = c.getElementsByTagName("link"), g = !1, h = 0; h < d.length; h++)
                    if (!0 === new RegExp(a + ".css").test(d[h].getAttribute("href"))) {
                        g = !0;
                        break
                    }
                if (!1 === g) {
                    var i = b.createElement("link");
                    i.rel = "stylesheet", i.type = "text/css", i.href = e.path + a + ".css", c.appendChild(i)
                }
            }
        }, this.getStandardList = function() {
            var a = /^HTMLCS_[^_]+$/,
                b = [];
            for (i in window)
                if (!0 === a.test(i)) {
                    var c = window[i];
                    c.sniffs && c.name && b.push(i.substr(7))
                }
            return b
        }, this.getParentElement = function() {
            var a = null;
            if (e.parentElement) a = e.parentElement;
            else if (g.frames.length > 0) {
                for (var b = -1, c = null, d = 0; d < g.frames.length; d++) try {
                    if ("frame" === window.frames[d].frameElement.nodeName.toLowerCase() && window.frames[d].document) {
                        var f = window.frames[d].innerWidth * window.frames[d].innerHeight;
                        f > b && (b = f, c = window.frames[d].document.body)
                    }
                } catch (a) {}
                a = null === c ? document.body : c
            } else a = document.body;
            return a
        }, this.getOwnerDocument = function() {
            var a = this.getParentElement();
            return a.ownerDocument && (a = a.ownerDocument), a
        }, this.run = function(a, i, k) {
            g = window;
            for (var m = this.getStandardList(), n = [], o = 0; o < m.length; o++) _global["HTMLCS_" + m[o]] || n.push(m[o]);
            if (n.length > 0) return void z(n, function() {
                l.run(a, i, k)
            });
            if (null === i || void 0 === i) {
                if (i = [], 0 === document.querySelectorAll("frameset").length && i.push(document), g.frames.length > 0)
                    for (var o = 0; o < g.frames.length; o++) try {
                        i.push(g.frames[o].document)
                    } catch (a) {}
            } else if (i.nodeName)
                if ("input" === i.nodeName.toLowerCase())
                    if (!1 === i.hasAttribute("type")) i = i.value;
                    else {
                        var p = i.getAttribute("type").toLowerCase();
                        "text" === p && (i = i.value)
                    }
            else "textarea" === i.nodeName.toLowerCase() && (i = i.value);
            i instanceof Array == !1 && (i = [i]), void 0 === k && (k = {}), c = a, d = i, e = k, j = 1, b = "", h = [];
            var q = this.getParentElement();
            f = this.getOwnerDocument(), e.path || (e.path = "./"), void 0 === e.includeCss && (e.includeCss = !0), void 0 === e.ignoreMsgCodes && (e.ignoreMsgCodes = []), this.includeCss("HTMLCS");
            var r = f.getElementById("HTMLCS-wrapper"),
                s = !1,
                t = l.buildSummaryPage();
            t.className += " HTMLCS-processing", r ? (t.style.left = r.style.left, t.style.top = r.style.top, q.replaceChild(t, r)) : (e.openCallback && e.openCallback.call(this), s = !0, q.appendChild(t));
            var u = function() {
                    for (var a = 0; a < h.length; a++) {
                        var b = !1;
                        t && (t === h[a].element ? b = !0 : h[a].element.documentElement ? b = !1 : t.contains && !0 === t.contains(h[a].element) ? b = !0 : t.compareDocumentPosition && (16 & t.compareDocumentPosition(h[a].element)) > 0 && (b = !0));
                        for (var c = 0; c < k.ignoreMsgCodes.length; c++)
                            if (!0 === new RegExp(k.ignoreMsgCodes[c]).test(h[a].code)) {
                                b = !0;
                                break
                            }!0 === b && (h.splice(a, 1), a--)
                    }
                    if (e.runCallback) {
                        var d = e.runCallback.call(this, h, s);
                        d instanceof Array == !0 && (h = d)
                    }
                    setTimeout(function() {
                        var a = f.getElementById("HTMLCS-wrapper"),
                            b = l.buildSummaryPage();
                        b.style.left = a.style.left, b.style.top = a.style.top, q.replaceChild(b, a)
                    }, 400)
                },
                v = function(a, b) {
                    for (var c = b.shift(); !c;) {
                        if (0 === b.length) return void u();
                        c = b.shift()
                    }
                    HTMLCS.process(a, c, function() {
                        h = h.concat(HTMLCS.getMessages()), 0 === b.length ? u() : v(a, b)
                    })
                };
            v(a, d.concat([]))
        }, this.versionCheck = function(a) {
            if (a && null !== a.currentVersion && a.newVersion > a.currentVersion) {
                var b = f.createElement("div");
                b.id = "HTMLCS-settings-updated-notification", f.documentElement.querySelector(".HTMLCS-settings").appendChild(b);
                var c = "HTML_CodeSniffer has been updated to version " + a.newVersion + ".";
                c += ' <a href="http://squizlabs.github.io/HTML_CodeSniffer/patches/' + a.newVersion + '">View the changelog</a>', b.innerHTML = c
            }
        }, this.close = function() {
            if (f) {
                var a = f.getElementById("HTMLCS-wrapper");
                if (a) {
                    var b = A.getPointer(a);
                    b && b.parentNode && b.parentNode.removeChild(b), a.parentNode.removeChild(a), e.closeCallback && (h = e.closeCallback.call(this))
                }
            }
        }, this.pointToElement = function(a) {
            A.container = l.pointerContainer || f.getElementById("HTMLCS-wrapper"), A.pointTo(a)
        }, this.getCurrentStandard = function() {
            return c
        };
        var A = {
            pointerDim: {},
            container: null,
            getBoundingRectangle: function(a) {
                if (!a) return null;
                var b = this.getElementCoords(a),
                    c = this.getElementDimensions(a);
                return {
                    x1: b.x,
                    y1: b.y,
                    x2: b.x + c.width,
                    y2: b.y + c.height
                }
            },
            getElementDimensions: function(a) {
                return {
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            },
            getElementCoords: function(a, b) {
                var c = 0,
                    d = 0,
                    e = HTMLCS.util.getElementWindow(a);
                if (!0 === b) var f = e.top;
                else var f = e;
                for (;;) {
                    do {
                        c += a.offsetLeft, d += a.offsetTop
                    } while (a = a.offsetParent);
                    if (e === f) break;
                    if (a = e.frameElement, e = e.parent, "frame" === a.nodeName.toLowerCase()) break
                }
                return {
                    x: c,
                    y: d
                }
            },
            getWindowDimensions: function(a) {
                var b = HTMLCS.util.getElementWindow(a),
                    c = a.ownerDocument,
                    d = 0,
                    e = 0;
                if (b.innerWidth) {
                    d = b.innerWidth, e = b.innerHeight;
                    var f = this.getScrollbarWidth(a);
                    c.documentElement.scrollHeight > e && "number" == typeof f && (d -= f), c.body.scrollWidth > d && "number" == typeof f && (e -= f)
                } else c.documentElement && (c.documentElement.clientWidth || c.documentElement.clientHeight) ? (d = c.documentElement.clientWidth, e = c.documentElement.clientHeight) : c.body && (c.body.clientWidth || c.body.clientHeight) && (d = c.body.clientWidth, e = c.body.clientHeight);
                return {
                    width: d,
                    height: e
                }
            },
            getScrollbarWidth: function(a) {
                if (null !== k) return k;
                doc = a.ownerDocument;
                var b = null,
                    c = null,
                    d = 0,
                    e = 0;
                b = doc.createElement("div"), b.style.position = "absolute", b.style.top = "-1000px", b.style.left = "-1000px", b.style.width = "100px", b.style.height = "50px", b.style.overflow = "hidden", c = doc.createElement("div"), c.style.width = "100%", c.style.height = "200px", b.appendChild(c), f.body.appendChild(b), d = c.offsetWidth, b.style.overflow = "auto", e = c.offsetWidth, doc.body.removeChild(doc.body.lastChild);
                var g = d - e;
                return k = g, g
            },
            getScrollCoords: function(a) {
                var b = HTMLCS.util.getElementWindow(a);
                doc = a.ownerDocument;
                var c = 0,
                    d = 0;
                return b.pageYOffset ? (c = b.pageXOffset, d = b.pageYOffset) : doc.body && (doc.body.scrollLeft || doc.body.scrollTop) ? (c = doc.body.scrollLeft, d = doc.body.scrollTop) : (c = doc.documentElement.scrollLeft, d = doc.documentElement.scrollTop), {
                    x: c,
                    y: d
                }
            },
            isPointable: function(a) {
                if (null === a.ownerDocument) return !1;
                for (var b = a.parentNode; b && b.ownerDocument;) b = b.parentNode;
                return null !== b && (!0 !== HTMLCS.util.isVisuallyHidden(a) && null !== this.getPointerDirection(a))
            },
            getPointerDirection: function(a) {
                var b = null,
                    c = this.getBoundingRectangle(a),
                    d = this.getPointer(a),
                    e = a.ownerDocument;
                d.className = d.className.replace("HTMLCS-pointer-hidden", ""), d.className += " HTMLCS-pointer-hidden-block", this.pointerDim.height = 62, this.pointerDim.width = 62;
                var f = this.getWindowDimensions(a),
                    g = (HTMLCS.util.getElementWindow(a), Math.max(0, Math.min(c.y1 - 100, e.documentElement.offsetHeight - f.height)));
                return c.y1 - this.pointerDim.height - 20 > g ? b = "down" : c.y2 + this.pointerDim.height < f.height - g ? b = "up" : c.x2 + this.pointerDim.width < f.width ? b = "left" : c.x1 - this.pointerDim.width > 0 && (b = "right"), d.className = d.className.replace("HTMLCS-pointer-hidden-block", ""), d.className += " HTMLCS-pointer-hidden", b
            },
            pointTo: function(a) {
                if (a.ownerDocument) var b = a.ownerDocument;
                else var b = a;
                var c = b.getElementById("HTMLCS-pointer");
                if (c && c.parentNode.removeChild(c), !1 !== this.isPointable(a)) {
                    var d = HTMLCS.util.getElementWindow(a).top,
                        e = (this.getWindowDimensions(d.document.documentElement), this.getPointerDirection(a)),
                        f = this.getPointer(a);
                    if (f.className = f.className.replace("HTMLCS-pointer-hidden-block", ""), null === e) f.className += " HTMLCS-pointer-hidden";
                    else {
                        var g = !1;
                        if ("fixed" === HTMLCS.util.style(a).position) var g = !0;
                        for (var h = a.parentNode; h.ownerDocument;) {
                            if ("fixed" === HTMLCS.util.style(h).position) {
                                g = !0;
                                break
                            }
                            h = h.parentNode
                        }
                        if (!0 === g) f.style.position = "fixed";
                        else {
                            f.style.position = "absolute";
                            for (var i = this.getElementCoords(a, !0), j = HTMLCS.util.getElementWindow(a), k = Math.max(i.y - 100, 0); k >= 0;) {
                                j.scrollTo(0, k);
                                if (k -= this.getScrollCoords(j.document.documentElement).y, k = Math.max(k, 0), j === d) break;
                                j = j.parent
                            }
                        }
                        this.showPointer(a, e)
                    }
                }
            },
            getPointer: function(a) {
                try {
                    var b = a.ownerDocument;
                    HTMLCSAuditor.includeCss("HTMLCS", b);
                    var c = "HTMLCS",
                        d = b.getElementById(c + "-pointer");
                    d || (d = b.createElement("div"), d.id = c + "-pointer", d.className = c + "-pointer " + c + "-pointer-hidden", b.body.appendChild(d))
                } catch (a) {}
                return d
            },
            showPointer: function(a, b) {
                var c = "HTMLCS",
                    d = this.getPointer(a);
                this._removeDirectionClasses(d), d.className += " " + c + "-pointer-" + b, d.className = d.className.replace(c + "-pointer-hidden", "");
                var e = this.getBoundingRectangle(a),
                    f = 0,
                    g = 0,
                    h = 20;
                switch (b) {
                    case "up":
                        h = -h, f = e.y2, g = e.x2 - e.x1 < 250 ? this.getRectMidPnt(e) - this.pointerDim.width / 2 : e.x1;
                        break;
                    case "down":
                    default:
                        f = e.y1 - this.pointerDim.height, g = e.x2 - e.x1 < 250 ? this.getRectMidPnt(e) - this.pointerDim.width / 2 : e.x1;
                        break;
                    case "left":
                        g = e.x2, f = this.getRectMidPnt(e, !0) - this.pointerDim.height / 2;
                        break;
                    case "right":
                        h = -h, g = e.x1 - this.pointerDim.width, f = this.getRectMidPnt(e, !0) - this.pointerDim.height / 2
                }
                var i = this.getScrollCoords(a);
                d.style.top = f + "px", d.style.left = g + "px";
                var j = this.getBoundingRectangle(this.container);
                e = this.getBoundingRectangle(d);
                var k = e.x1 + (e.x2 - e.x1) / 2,
                    l = e.y1 + (e.y2 - e.y1) / 2;
                if ("fixed" !== HTMLCS.util.style(d).position && (l -= i.y), j.x1 <= k && j.x2 >= k && j.y1 <= l && j.y2 >= l) {
                    var m = this;
                    this.container.className += " HTMLCS-translucent", setTimeout(function() {
                        m.container.className = m.container.className.replace("HTMLCS-translucent", "")
                    }, 4e3)
                }
                this.bounce(d, function() {
                    setTimeout(function() {
                        d.parentNode && d.parentNode.removeChild(d)
                    }, 1500)
                }, b)
            },
            bounce: function(a, b, c) {
                var d = c,
                    e = 0,
                    f = "",
                    g = 0;
                switch (c) {
                    case "up":
                        d = c + "-op", g = 30;
                    case "down":
                        f = "top";
                        break;
                    case "left":
                        d = c + "-op", g = 30;
                    case "right":
                        f = "left"
                }
                e = Number(a.style[f].replace("px", "")) + g;
                var h = e,
                    i = e - 30,
                    j = 0,
                    k = setInterval(function() {
                        if (d === c) {
                            if (h--, a.style[f] = h + "px", h < i && (d = c + "-op", 5 === j && 0 !== g)) return clearInterval(k), void b.call(this)
                        } else if (h++, a.style[f] = h + "px", h >= e && (d = c, 5 === ++j && 0 === g)) return clearInterval(k), void b.call(this)
                    }, 10)
            },
            getRectMidPnt: function(a, b) {
                return !0 === b ? a.y1 + (a.y2 - a.y1) / 2 : a.x1 + (a.x2 - a.x1) / 2
            },
            _removeDirectionClasses: function(a) {
                for (var b = ["down", "up", "left", "right"], c = b.length, d = 0; d < c; d++) a.className = a.className.replace("HTMLCS-pointer-" + b[d], "")
            }
        }
    }; // Expose globals.
    return _global;
}));