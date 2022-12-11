// ==UserScript==
// @name         BT4G Automatic magnetlink copier
// @version      0.0.1
// @namespace    https://github.com/kolakao

// @description  try to take over the world!
// @author       kolakao
// @match        http://bt4g.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/kolakao/bt4g-automatic-magnetlink-copy/blob/master/bt4gautomagnetcopy.meta.js
// @downloadURL  https://github.com/kolakao/bt4g-automatic-magnetlink-copy/blob/master/bt4gautomagnetcopy.user.js
// ==/UserScript==

(function() {
    'use strict';
    var buttons = document.querySelectorAll('button[type="button"]');
    buttons[1].click()
    setTimeout(() => { cptclpbrd(); }, 300);

    function cptclpbrd(){
    var magnetLink = document.querySelector('a[href^="magnet"]');
    console.log(magnetLink.href)

    navigator.clipboard.writeText(magnetLink.href);
    }
}
)();