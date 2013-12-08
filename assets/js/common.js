	$(document).ready(function(){
		$(".highlight").hover(
			function(){
				if($(this).hasClass("cur_item")){
				}else{
					$(this).css("background-color","#398600");
					$(this).children().css("color","#fff");
				}
			},
			function(){
				if($(this).hasClass("cur_item")){
				}else{
					$(this).css("background-color","#fff");
					$(this).children().css("color","#666");
				}
			}
		);
		$(".highlight a").css("color","#666");
		$(".cur_item").css("background-color","#398600");
		$(".cur_item").css("color","#fff");
		$(".cur_item").children("a").css("color","#fff");
		
		$("#gw_en_logo").click(function(){
			location.href="Default.html";
		});
	});