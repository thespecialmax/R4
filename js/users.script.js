/*!
 * Mozgaration theme user(right sidebar) home page Scripts
 * Copyright (C) 2017 Mozgaration theme
 *
 * various scripts file 
 */
var div = jQuery('#right-fix');
var div1 = jQuery('#right-fix #tools');
var countLi = jQuery('#tools>ul>li').size();

function fixsideheight(){
	    var trigheight = jQuery('#right-fixdiv').height();
		var fixheight = jQuery(window).height() - trigheight;
		var resultheight = (fixheight)/2;
			if ( jQuery(window).width()>962 ) {
		            jQuery("#right-fix #section,#right-fix #section1").css({"height" : resultheight +"px"}) ;
		    }else{
					jQuery("#right-fix #section,#right-fix #section1").css({"height" : "auto"}) ;
			}
 };
 
 
 function contentwidths(){
	    var leftsidewidth = jQuery('#left_side').width();
		var rightsidewidth = jQuery('#right-fix').width();
		var allwidth = jQuery(window).width() - leftsidewidth;
		var contswidth = allwidth - 153;
		var contswidth2 = allwidth - 60;
		
		if ( jQuery(window).width() > 1280 ) {
		     jQuery(".content_row").css({"max-width" : contswidth +"px"}) ;
			 jQuery(".content_row_wrapper").css({"max-width" : contswidth +"px"}) ;
		} else if ( jQuery(window).width() < 963 ) {
		     jQuery(".content_row,.content_row_wrapper").css({"max-width" : "100%"}) ;
		} else if ( jQuery(window).width() < 1280 ) {
			 jQuery(".content_row").css({"max-width" : contswidth2 +"px"}) ;
			 jQuery(".content_row_wrapper").css({"max-width" : contswidth2 +"px"}) ;
		}	
		
 };
 
 function toolsheight(){
	 var tgh = jQuery('#right-fixdiv').height();
	 var rgh = jQuery(window).height() - tgh;
	 var resh = (rgh)/2;
	 if(jQuery("body").hasClass("admin-bar")){
		 var abh = jQuery("#wpadminbar").outerHeight();
		 var tlha = resh-abh;
		 var tlh = tlha/countLi;
	 }else{
		 var tlh = resh/countLi;
	 }	
     if ( jQuery(window).width()<963 ) {	 
	    jQuery("#right-fix #section #tools>ul>li>span").css({"height" : "auto"}) ;
	 }else{
		jQuery("#right-fix.stocke2 #section #tools>ul>li>span").css({"height" : tlh +"px"}) ; 
		jQuery("#right-fix.stocke1 #section #tools>ul>li>span").css({"height" : "auto"}) ; 
	 }
};

 
div.removeClass("stocke1").addClass("stocke2");
function fixsidetools(){
        div.removeClass("stocke1").addClass("stocke2");
	    var tops = jQuery(window).scrollTop();
        if (tops > 50) {
			toolsheight();
			if ( jQuery(window).width()<963) {
	             div1.attr('data-item-count' , countLi);
	            jQuery('.mobile-menu .stocke2 #tools ul li.active div.widget').css( 'margin-left', '0' );
	        } else {
	            div1.attr('data-item-count' , '1');
			}
		}else{
			toolsheight();
			if ( jQuery(window).width()<963) {
	             div1.attr('data-item-count' , countLi);
	            jQuery('.mobile-menu .stocke2 #tools ul li.active div.widget').css( 'margin-left', '0' );
	        } else {
	            div1.attr('data-item-count' , '1');
			}
		}
}; 


function homeslideresize(){
	 if ( jQuery(window).width()<963 ) {
		 var height = jQuery(window).width()/1.3; 
	 }else{
		var height = jQuery(window).height();
	 }
		     jQuery('#myhomeslider .owl-item.active .item').css( 'background-size', 'cover' );
		     jQuery('#myhomeslider .owl-item .item').css( 'background-size', 'cover' );
		     jQuery('#myhomeslider .owl-item.active .item').css( 'min-height', height );
			 
				if ( jQuery(window).width()>963 ) {
				jQuery('#myhomeslider .owl-item .item').css( 'background-position', 'left bottom' );
				}else{
				jQuery('#myhomeslider .owl-item .item').css( 'background-position', 'center center' );	
				}
			jQuery('#myhomeslider .owl-item .item').css( 'background-repeat', 'no-repeat' );
			jQuery('#myhomeslider .owl-item .item').css( 'min-height', height );
			jQuery('#myhomeslider .main-carousel').css( 'min-height', height );
			jQuery('#myhomeslider .owl-height').css( 'height', height );	
};
 
jQuery(window).scroll(function(){
	     var top = jQuery(this).scrollTop();
		 if (top > 50) {
			jQuery('#right_side').css( 'min-height', '100%' );	 
		         fixsidetools();
		         contentwidths();
             } else {
		         fixsidetools();
		         contentwidths();
	         }
	         homeslideresize();
});	


jQuery(window).resize(function() {
	     contentwidths();
         fixsideheight();
         fixsidetools();
         homeslideresize();
		 toolsheight();
});	


jQuery(document).ready ( function(){
         fixsideheight();
         fixsidetools();
         contentwidths();
         homeslideresize();
}); 
         contentwidths();
         fixsideheight();
         fixsidetools();
         homeslideresize();
 
 window.onload = function(){
setTimeout( homeslideresize , 100);
}        

jQuery( ".tool-icon" ).click(function() {
        jQuery('.mobile-menu .stocke2 #tools ul li.active div.widget').css( 'margin-left', '0' );
		
});