$(function(){

	$('#add').click(function(){
		var t=$(this).parents('.one_cont_bottom').find('#num');
		var e=$(this).parents('.one_cont_bottom').find('#each');
		var s=$('#sum');
		var z=$('#zhe');
		console.log(z.html());
		t.val(parseInt(t.val())+1);
		s.html( parseFloat((parseFloat(e.html()).toFixed(2))*parseInt(t.val())) );
		z.html((parseFloat(e.html()).toFixed(2))*0.2);
	})
	$('#jian').click(function(){
		var t=$(this).parents('.one_cont_bottom').find('#num');
		var e=$(this).parents('.one_cont_bottom').find('#each');
		var s=$('#sum');
		if(parseInt(t.val())!=1){
			t.val(parseInt(t.val())-1);
		}else{
			t.val(1);
		}
        s.html( parseFloat((parseFloat(e.html()).toFixed(2))*parseInt(t.val())) );
		
	})
})