// ==UserScript==
// @name       KeepAlive
// @namespace  http://www.kortaggio.com/
// @version    0.1
// @description  Prevents Queen's MyCareer from timing out
// @match      https://careers.sso.queensu.ca/*
// @copyright  2014, Bill Mei
// ==/UserScript==

stimedout = false;
interruptTimeout = true;
countdownNum = null;
countdownInterval = null;
sessionInterval = null;
sessionTimeoutPopup = null;
beginCountdown = null;
countdown = null;
stopCountdown();
