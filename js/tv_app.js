$(function (){
	var parentWidth,
		parentHeight,
		pageWidth = $(document).width(),
		thisStreamContainer,
		thisContainerHover,
		offset,
		streamContainerHeight = $("#streamContainer").height(),
		comment = $(".comments-container li"),
		listWidth;

	for (var i = comment.length - 1; i >= 0; i--) {
		thisComment = $(comment[i]);
		commentHeight = thisComment.height();
		if ( commentHeight > 30 && pageWidth > 620) {
			thisComment.find("a").css("height", commentHeight);
			thisComment.find("span").css("height", commentHeight);
		};
	};

	if (pageWidth < 990) {
		listWidth = $(".main-right ul li").width();
		$(".main-right .container-title").css("width", listWidth);
	};
	$(window).resize(function(){
		if (pageWidth < 990) {
			listWidth = $(".main-right ul li").width();
			$(".main-right .container-title").css("width", listWidth);
		}
	});

	$("li .stream-container-inner").on("mouseenter", function(){
		parentWidth = $(this).width(),
		parentHeight = ($(this).height()+1),
		thisStreamContainer = $(this);
		$(this).prepend("<div class='stream-container-hover'></div>");
		$(".stream-container-hover").css({"width":parentWidth, "height": parentHeight});
		$(".stream-container-hover").append("<span><img src='images/love-red.png' alt='like'>273</span>");
		$(".stream-container-hover").append("<span><img src='images/user-small.png' alt='users'>123</span>");
		$(".stream-container-hover").append("<button class='text-uppercase'>watch</button>");
		thisContainerHover = $(this).find(".stream-container-hover");
		offset = thisStreamContainer.offset();
		thisContainerHover.offset({
			top: offset.top,
			left: offset.left
		});
	});
	$("li .stream-container-inner").on("mouseleave", function(){
		$(".stream-container-hover").remove();
	});
	$("ul").scroll(function(){
		offset = thisStreamContainer.offset();
		thisContainerHover.offset({
			top: offset.top,
			left: offset.left
		});
	});
	$(".bottom-info button").on("click", function(){
		$(this).find("img").attr("src", "images/love-red.png");
	});
	$(document).on("click", ".bottom-info button", function(){
		if (!$(this).hasClass("liked")) {
			$(this).find("img").attr("src", "images/love-red.png");
			$(this).addClass("liked");
		}
		else{
			$(this).find("img").attr("src", "images/love.png");
			$(this).removeClass("liked");
		}
	});
});