// ==UserScript==
// @name       KeepAlive
// @namespace  http://www.kortaggio.com/
// @version    0.1
// @description  Prevents Queen's MyCareer from timing out
// @match      https://careers.sso.queensu.ca/*
// @copyright  2014, Bill Mei
// ==/UserScript==

stopCountdown();
stimedout = false;
interruptTimeout = true;
countdownNum = null;
countdownInterval = null;
beginCountdown = null;
countdown = null;
sessionTimeoutPopup = function() {
	keepMeLoggedIn.open('get', '/keepAlive.html?rand=' + Math.floor(Math.random()*100000));
	keepMeLoggedIn.send(null);
}