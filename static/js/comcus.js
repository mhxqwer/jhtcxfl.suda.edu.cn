$(function(){
	$(".search-submit").click(function(event) {
		$(this).removeAttr("name");
		/* Act on the event */
		event.preventDefault();
		var val = $.trim($(".search-title").val());
		if(val!==""){
			$(".wp-search").find("form").submit();
			
		}else{
			alert("请输入关键词");
		}
		return false;
	});
	
	/* 导航  */
 	$(".menu-item",".wp-menu").each(function(){
		$(this).mouseenter(function() {
			$(".menu-link",this).addClass("hover");
		});
		$(this).mouseleave(function(){
			$(".menu-link",this).removeClass("hover");
		});
	});

	/*媒体链接*/
	$(".shares li").each(function(){
		$(this).children("a").hover(function(){
			$(this).parent().find(".con").stop(true,true).fadeIn();			
		},function(){
			$(this).parent().find(".con").stop(true,true).fadeOut();
		});
	});
	
	$(".goTop").on("click",function(){
			$("body,html").stop().animate({scrollTop:0}, 500);
	});
	
	
});