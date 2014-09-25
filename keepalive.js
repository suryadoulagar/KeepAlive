// ==UserScript==
// @name       KeepAlive
// @namespace  http://www.kortaggio.com/
// @version    0.1
// @description  Prevents Queen's MyCareer from timing out
// @match      https://careers.sso.queensu.ca/*
// @copyright  2014, Bill Mei
// ==/UserScript==

countdownNum = null;
countdownInterval = null;
beginCountdown = null;
countdown = null;
sessionTimeoutTimeout = null;
sessionTimeoutPopup = function() {
	keepMeLoggedIn.open('get', '/keepAlive.html?rand=' + Math.floor(Math.random()*100000));
	keepMeLoggedIn.send(null);
}