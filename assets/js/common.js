	$(document).ready(function(){
		var backgroundColorBefore;
		var colorBefore;
		$(".highlight").hover(
			function(){
				backgroundColorBefore = $(this).css("background-color");
				colorBefore = $(this).css("color");
				$(this).css("background-color","#398600");
				$(this).children().css("color","#fff");
			},
			function(){
				$(this).css("background-color",backgroundColorBefore);
				$(this).children().css("color",colorBefore);
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