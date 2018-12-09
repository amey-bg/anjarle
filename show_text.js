	
$(document).ready(function(){
	

		$('#btn').click(function(){
		
		var btn_obj = $('#btn');
		var hidden_obj = $('.hidden_text');
		if( ($(window).width() <= 1024) ){
			var display_val = $(hidden_obj).css('display');
			
			if(display_val == 'block')
			{
				//$(hidden_obj).css({'display' : 'none'});
				$(hidden_obj).slideUp(300);
				$(btn_obj).text('Read More');
			}
			else
			{
				//$(hidden_obj).css({'display' : 'block'});
				$(hidden_obj).slideDown(300);
				$(btn_obj).text('Hide');
			}
		}
	}); //click function ends here...
	
	
});// document.ready ends here...
	