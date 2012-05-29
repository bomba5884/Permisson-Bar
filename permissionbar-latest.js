/* 
   Plugin Name: Permission Bar
   Plugin URL: http://permissionbar.com/
   Author: Milosz Falinski, Callum Hopkins & StudioNEC.
   Description: Permission Bar is a free & simple solution to the EU cookie law.
   Version: 1.5
*/
var jQload = false;
function initPermBar() {
    if(typeof(jQuery) == 'undefined'){
	  if(!jQload) {
		  jQload= true;
		  document.write(unescape('%3Cscript type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"%3E%3C/script%3E'));
	  }
	  setTimeout("initPermBar()", 50);
    }else{
	  ;(function($) {
		  var loadExternal = function loadExternal(filename, filetype){
			  if (filetype=="js"){
				  var fileref=document.createElement('script')
				  fileref.setAttribute("type","text/javascript")
				  fileref.setAttribute("src", filename)
			  } else if (filetype=="css"){
				  var fileref=document.createElement("link")
				  fileref.setAttribute("rel", "stylesheet")
				  fileref.setAttribute("type", "text/css")
				  fileref.setAttribute("href", filename)
			  } if (typeof fileref!="undefined"){
				  document.getElementsByTagName("head")[0].appendChild(fileref)
			  }
		  }
		  var theSetup = function thesetup(){
			  loadExternal("http://storage.permissionbar.com/permissionbar.css", "css");
			  $('body').append('<div id="permission-bar-prompt" style="display:none">	<div id="permission-bar-prompt-content" > <a id="permission-bar-prompt-logo" href="http://permissionbar.com"><span>permission bar</span></a><a id="permission-bar-prompt-close" href="#"><span>close</span></a><div class="clear"></div><p>This website makes use of cookies to enhance browsing experience and provide additional functionality.<br><br>By clicking <span>Allow cookies</span> you give permission for this website to store small bits of data on your computer. None of this data can or will be used to identify or contact you. You will only have to enable cookies once per domain.<br><br>	To learn more about cookies and this plugin, visit <a href="http://permissionbar.com">Permission Bar</a> website.</p></div></div><div id="permission-bar" style="display:none">	<p>Your experience on this site will be improved by allowing cookies - <a id="permission-bar-prompt-button" href="#prompt">see details</a>	</p><a id="permission-bar-button" href="#">Allow cookies</a></div>');
		  };
		  var getCookie = function getCookie(c_name) {
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
		  var setCookie = function setCookie(c_name,value,exdays){
			  var exdate=new Date();
			  exdate.setDate(exdate.getDate() + exdays);
			  var c_value= escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
			  document.cookie= c_name + "=" + c_value;
		  }
		  var checkCookie = function checkCookie() {
			  var permissionbar=getCookie("permissionbar");
			  if (permissionbar!=null && permissionbar!=""){
			  } else {
				  $('#permission-bar').fadeToggle('slow');
				  var button = $('#permission-bar-button');
				  button.on('click', function (e) {			
					  setCookie("permissionbar", "CookiesAllowed", 365);
					  $('#permission-bar').fadeToggle('slow');
				  });
			  }
		  }
		  var permissionBarInit = function permissionBarInit () {
			  var button = $('#permission-bar-button');
			  var promptBtn = $('#permission-bar-prompt-button');
			  var promptClose = $('#permission-bar-prompt-close');
			  var prompt = $('#permission-bar-prompt');
			  var promptContent = $('#permission-bar-prompt-content');
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
		  var permissionBar = function permissionBar(){
			  theSetup();
			  permissionBarInit();
			  checkCookie();
		  };
		  $(document).ready(function(){
			  permissionBar();
		  });
	  })(jQuery);
	}
}
initPermBar();