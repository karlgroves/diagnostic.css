// ==UserScript==
// @name        Diagnostic CSS
// @namespace   https://github.com/karlgroves/diagnostic.css
// @description adds diagnostic CSS stylesheet to page
// @include     *
// ==/UserScript==
var newCSS = document.createElement("link");
newCSS.rel = 'stylesheet';
newCSS.type = 'text/css';
newCSS.href = '//rawgithub.com/karlgroves/diagnostic.css/master/diagnostic.css';
document.getElementsByTagName('head')[0].appendChild(newCSS);


