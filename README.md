diagnostic.css
==============

Diagnostic.css is a stylesheet which allows the user to test for common errors in a page's markup. 
Inspired by Eric Meyer's diagnostic CSS file, this one is intended to flesh out accessibility related issues on a page.  

## Philosophy ##
The goal of this stylesheet is to provide very quick, very accurate feedback. As a consequence, items that are too conservative and create "false positives" are likely to be eliminated from the sheet and won't be included in any merges.

## How to use ##
If you're working with a site you own, add this (temporarily, of course) to your site to display the errors.

If you're checking work you don't have access to, use this as a user style.

### Bookmarklet ###
Alternately, use the bookmarklet.js found in this repo. Create a bookmarklet in your browser and then click it when you're on a page you want to test.

### User Script ###
NEW, as of 07-December 2013, there's a new file, diagnostic-css.user.js in this repo which can be used as a user script. This enables you to get the diagnostic CSS feedback without having to constantly activate the bookmarklet above. This is particularly useful for use case testing or user acceptance testing because you can simply activate this script and browse the screens you want to test.

If you have Greasemonkey installed on Firefox, open the diagnostic-css.user.js file with Firefox. This will install the script as a userscript.
Download Greasemonkey at https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/

Note, as it is set-up now, this userscript is "on" for all websites.  To turn this on for only certain sites, such as those you own, modify the @include directive in the script file. Alternately, you can enable/ disable the script within greasemonkey itself.


## Make it better ##
This is an open repo. Contribute to it, add to the documentation, submit an issue, etc.

## Change Log ##
07-December 2013: Added user script.

28-September 2013: Fixed a bad negation selector for area elements without alt attributes.  

06-September 2013: Totally revamped the stylesheet. Added new selectors. Added generated content to show error information.

13-September 2013: Merged request from AWK to change overly conservative rule.

## OH, the irony ##
I realize that CSS-generated content is not content. I've even posted about it: http://www.karlgroves.com/2013/08/26/css-generated-content-is-not-content/

This is intended to be a quick way for developers to get immediate feedback without requiring a tool. If anyone wishes to expand, build upon, or collaborate on
this in a more accessible way, please get in touch!
