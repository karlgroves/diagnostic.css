diagnostic.css
==============

Diagnostic.css is a stylesheet which allows the user to test for common errors in a page's markup. 
Inspired by Eric Meyer's diagnostic CSS file, this one is intended to flesh out accessibility related issues on a page.  

## Philosophy ##
The goal of this stylesheet is to provide very quick, very accurate feedback. As a consequence, items that are too conservative and create "false positives" are likely to be eliminated from the sheet and won't be included in any merges.

## How to use ##
If you're working with a site you own, add this (temporarily, of course) to your site to display the errors.

Alternately, use the bookmarklet.js found in this repo. Create a bookmarklet in your browser and then click it when you're on a page you want to test.

If you're checking work you don't have access to, use this as a user style. 

## Make it better ##
This is an open repo. Contribute to it, add to the documentation, submit an issue, etc.

## Change Log ##
06-September 2013: Totally revamped the stylesheet. Added new selectors. Added generated content to show error information.

13-September 2013: Merged request from AWK to change overly conservative rule.

## OH, the irony ##
I realize that CSS-generated content is not content. I've even posted about it: http://www.karlgroves.com/2013/08/26/css-generated-content-is-not-content/

This is intended to be a quick way for developers to get immediate feedback without requiring a tool. If anyone wishes to expand, build upon, or collaborate on
this in a more accessible way, please get in touch!
