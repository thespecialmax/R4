jQuery( document ).ready(function() { 
jQuery('.tweet').on('DOMSubtreeModified propertychange',"#twitter-widget-0", function() {
	if(jQuery('.tweet').data('media')=="on"){
	   jQuery(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
	};
});
});