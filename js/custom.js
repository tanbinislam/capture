/*NICESCROLL*/
$(document).ready(
function() { 

    $("html").niceScroll({
        cursorcolor: "#d7d7d7",
			cursorwidth: "5px",
			cursorborder: "none",
			cursorborderradius: "10px",
			horizrailenabled: false,
			zindex: 10000
    });

  }

);

/* rev slider*/

jQuery(document).ready(function() {
            jQuery('.tp-banner').revolution({
                delay:7000,
                startwidth:1170,
                startheight:560,
                hideThumbs:10
            });
        });

/* WOW JS*/

new WOW().init();