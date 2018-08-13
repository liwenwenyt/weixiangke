$(function() {
	$('section').on('click', function() {
		$(".nav_right").removeClass('hide');
		$(this).addClass('sec');
	}).on('mouseleave', function() {
		$(".nav_right").addClass('hide');
		$(".sub").addClass('hide');
		$(".list").removeClass('sec');
	}).on('mouseenter', 'li', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		if (li_data!="1") {
           $('.hide').first().css("display","none")
		}else{
			$('.hide').first().css({"display":"block","display":"-webkit-flex"})
		}
		
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
		$(this).addClass('sec');
		$('li').not($(this)).removeClass('sec');
		/*$(this).css({
			    "border": "none",
				"border-left":"3px solid #ff4465" ,
				"background": "#fff"
		})*/

	})
})
/*$(function(){
	$('.nav_left').on('click',function(){

	})
})*/