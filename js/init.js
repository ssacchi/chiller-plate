const G_TRACKING_ID = 'google tracking id';

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

	  <!-- Global site tag (gtag.js) - Google Analytics -->
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', G_TRACKING_ID);

  }); // end of document ready
})(jQuery); // end of jQuery name space
