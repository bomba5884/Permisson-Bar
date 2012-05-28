// Only do anything if jQuery isn't defined
if (typeof jQuery == 'undefined') {

	function getScript(url, success) {
		var script  = document.createElement('script');
		script.src = url;

		var head = document.getElementsByTagName('head')[0],
		done = false;

		// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {

			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {

			done = true;

				// callback function provided as param
				success();

				script.onload = script.onreadystatechange = null;
				head.removeChild(script);

			};
		};

		head.appendChild(script);
	};

	getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {

		jQuery(document).ready(function($) {
			console.log('jQuery has arrived.')
			loadExternal("http://storage.permissionbar.com/permissionbar.css", "css");
			$('body').append('<div id="permission-bar-prompt" style="display:none">	<div id="permission-bar-prompt-content" > <a id="permission-bar-prompt-logo" href="http://permissionbar.com"><span>permission bar</span></a><a id="permission-bar-prompt-close" href="#"><span>close</span></a><div class="clear"></div><p>This website makes use of cookies to enhance browsing experience and provide additional functionality.<br><br>By clicking <span>Allow cookies</span> you give permission for this website to store small bits of data on your computer. None of this data can or will be used to identify or contact you. You will only have to enable cookies once per domain.<br><br>	To learn more about cookies and this plugin, visit <a href="http://permissionbar.com">Permission Bar</a> website.</p></div></div><div id="permission-bar" style="display:none">	<p>Your experience on this site will be improved by allowing cookies - <a id="permission-bar-prompt-button" href="#prompt">see details</a>	</p><a id="permission-bar-button" href="#">Allow cookies</a></div>');
			function permissionBar () {
	
	function getCookie(c_name) {
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++){
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");

			if (x==c_name){
				return unescape(y);
			}
		}
	}

	function setCookie(c_name,value,exdays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value= escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie= c_name + "=" + c_value;
	}

	function checkCookie() {
		var permissionbar=getCookie("permissionbar");

		if (permissionbar!=null && permissionbar!=""){
			// Don't show Permission Bar
		} else {
			// Show Permission Bar
			$('#permission-bar').fadeToggle('slow');

			var button = $('#permission-bar-button');

			// Set a cookie on button click. 
			button.on('click', function (e) {			
				setCookie("permissionbar", "CookiesAllowed", 365);
				$('#permission-bar').fadeToggle('slow');

			});
		}
	}

	function permissionBarInit () {

		var button = $('#permission-bar-button');
		var promptBtn = $('#permission-bar-prompt-button');
		var promptClose = $('#permission-bar-prompt-close');
		var prompt = $('#permission-bar-prompt');
		var promptContent = $('#permission-bar-prompt-content');

		// prompt bindings 
		promptBtn.on('click', function (e) {
			prompt.fadeToggle('slow');
		});
		promptClose.on('click', function (e) {
			prompt.fadeToggle('slow');
		});

		promptContent.css({
			top: $(window).height() / 2 - 225,
			left: ($(window).width() / 2) - 225 
		});

	}

	permissionBarInit();
	
	checkCookie();

};
			permissionBar();
		});

		$.noConflict();
	});
} else { 
	loadExternal("http://storage.permissionbar.com/permissionbar.css", "css");
	$('body').append('<div id="permission-bar-prompt" style="display:none">	<div id="permission-bar-prompt-content" > <a id="permission-bar-prompt-logo" href="http://permissionbar.com"><span>permission bar</span></a><a id="permission-bar-prompt-close" href="#"><span>close</span></a><div class="clear"></div><p>This website makes use of cookies to enhance browsing experience and provide additional functionality.<br><br>By clicking <span>Allow cookies</span> you give permission for this website to store small bits of data on your computer. None of this data can or will be used to identify or contact you. You will only have to enable cookies once per domain.<br><br>	To learn more about cookies and this plugin, visit <a href="http://permissionbar.com">Permission Bar</a> website.</p></div></div><div id="permission-bar" style="display:none">	<p>Your experience on this site will be improved by allowing cookies - <a id="permission-bar-prompt-button" href="#prompt">see details</a>	</p><a id="permission-bar-button" href="#">Allow cookies</a></div>');
	function permissionBar () {
	
	function getCookie(c_name) {
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++){
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");

			if (x==c_name){
				return unescape(y);
			}
		}
	}

	function setCookie(c_name,value,exdays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value= escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie= c_name + "=" + c_value;
	}

	function checkCookie() {
		var permissionbar=getCookie("permissionbar");

		if (permissionbar!=null && permissionbar!=""){
			// Don't show Permission Bar
		} else {
			// Show Permission Bar
			$('#permission-bar').fadeToggle('slow');

			var button = $('#permission-bar-button');

			// Set a cookie on button click. 
			button.on('click', function (e) {			
				setCookie("permissionbar", "CookiesAllowed", 365);
				$('#permission-bar').fadeToggle('slow');

			});
		}
	}

	function permissionBarInit () {

		var button = $('#permission-bar-button');
		var promptBtn = $('#permission-bar-prompt-button');
		var promptClose = $('#permission-bar-prompt-close');
		var prompt = $('#permission-bar-prompt');
		var promptContent = $('#permission-bar-prompt-content');

		// prompt bindings 
		promptBtn.on('click', function (e) {
			prompt.fadeToggle('slow');
		});
		promptClose.on('click', function (e) {
			prompt.fadeToggle('slow');
		});

		promptContent.css({
			top: $(window).height() / 2 - 225,
			left: ($(window).width() / 2) - 225 
		});

	}

	permissionBarInit();
	
	checkCookie();

};
	permissionBar();

};

function loadExternal(filename, filetype){
	if (filetype=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script')
	  	fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	} else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	} if (typeof fileref!="undefined"){
		document.getElementsByTagName("head")[0].appendChild(fileref)
	}
}
// loadjscssfile("myscript.js", "js") 

