// ==UserScript==
// @name       KeepAlive
// @namespace  http://www.kortaggio.com/
// @version    0.1
// @description  Prevents Queen's MyCareer, Moodle, and D2L from timing out
// @include      https://careers.sso.queensu.ca/*
// @include      https://moodle.queensu.ca/*
// @include      https://qsblearning.ca/*
// @copyright  2014, Bill Mei
// ==/UserScript==

// MyCareer
if (document.location.hostname === "careers.sso.queensu.ca") {
	countdownNum = null;
	countdownInterval = null;
	beginCountdown = null;
	countdown = null;
	sessionTimeoutTimeout = null;
	sessionTimeoutPopup = function() {
		keepMeLoggedIn.open('get', '/keepAlive.html?rand=' + Math.floor(Math.random()*100000));
		keepMeLoggedIn.send(null);
	};
}

// Moodle
if (document.location.hostname === "moodle.queensu.ca") {
	var keepalive_timeout = setTimeout(function(){
		M.ajax_warn_logout.showBar = function() {
			var url = M.cfg.wwwroot + '/local/ajax_logout_warn/ajax_renew.php',
				cfg = {
					method: 'GET',
					on: {
						complete: function(id, o, p) {
							M.ajax_warn_logout.resetTimer();
						}
					}
				};
			Y.io(url, cfg);
		};
		M.ajax_warn_logout.showBar();
		clearTimeout(keepalive_timeout);
	}, (3*1000));
}

// D2L
if (document.location.hostname === "qsblearning.ca") {
	D2L.PT.Auth.SessionTimeout.Expire = null;
	D2L.PT.Auth.SessionTimeout.IsExpired = function(){return false;};
}
