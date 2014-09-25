// ==UserScript==
// @name       KeepAlive
// @namespace  http://www.kortaggio.com/
// @version    0.1
// @description  Prevents Queen's MyCareer and Moodle from timing out
// @match      https://careers.sso.queensu.ca/*
// @copyright  2014, Bill Mei
// ==/UserScript==

// MyCareer
if (typeof sessionTimeoutPopup !== 'undefined') {
	countdownNum = null;
	countdownInterval = null;
	beginCountdown = null;
	countdown = null;
	sessionTimeoutTimeout = null;
	sessionTimeoutPopup = function() {
		keepMeLoggedIn.open('get', '/keepAlive.html?rand=' + Math.floor(Math.random()*100000));
		keepMeLoggedIn.send(null);
	}
}

// Moodle
if (typeof M !== 'undefined' && typeof M.ajax_warn_logout.showBar !== 'undefined') {
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
		Y.io(url, cfg)
	}
}