(function( $ ) {
	'use strict';
	$(document).on('click', '.sl-button', function() {
		var button = $(this);
		var post_id = button.attr('data-post-id');
		var security = button.attr('data-nonce');
		var iscomment = button.attr('data-iscomment');
		var allbuttons;
		
		
		if ( iscomment === '1' ) { /* Comments can have same id */
			allbuttons = $('.sl-comment-button-'+post_id);
		} else {
			allbuttons = $('.sl-button-'+post_id);
		}
		
		
		if (post_id !== '') {
			$.ajax({
				type: 'POST',
				url: simpleLikes.ajaxurl,
				data : {
					action : 'mozgaration_process_simple_like',
					post_id : post_id,
					nonce : security,
					is_comment : iscomment,
				},
				beforeSend:function(){
					$(button).html('<i class="fa fa-circle-o-notch fa fa-spin"></i>');
				},	
				success: function(response){
					var icon = response.icon;
					var count = response.count;
					allbuttons.html(icon+count);
					if(response.status === 'unliked') {
						var like_text = simpleLikes.like;
						allbuttons.prop('title', like_text);
						allbuttons.removeClass('liked');
					} else {
						var unlike_text = simpleLikes.unlike;
						allbuttons.prop('title', unlike_text);
						allbuttons.addClass('liked');
					}
					
				/*$.ajax({
				       type: 'POST',
				       url: "/wp-admin/admin-ajax.php",
				       data : {
					   action : 'mozgaration_show_user_likes',
					},
				    success: function(res){
					$("#user-likes").html(res);	
					}
		        });	*/
			
					
				}
			});
			
			
			
			
		}
		
		
		
		
		
		return false;
	});
})( jQuery );
