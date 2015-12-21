$(function (){
	var parentWidth,
		parentHeight,
		offset,
		thisStreamContainer,
		thisContainerHover;
	$(".stream-container").on("mouseenter", function(){
		parentWidth = $(this).width(),
		parentHeight = ($(this).height()),
		thisStreamContainer = $(this);
		$(this).prepend("<div class='stream-container-hover'></div>");
		$(".stream-container-hover").css({"width":parentWidth, "height": parentHeight});
		$(".stream-container-hover").append("<button class='text-uppercase'>watch</button>");
		$(".stream-container-hover").append("<div class='bottom-info text-center'>PSC-Paul<span><img src='images/user-small.png' alt='users'>27</span></div>");
		thisContainerHover = $(this).find(".stream-container-hover");
		offset = thisStreamContainer.offset();
		thisContainerHover.offset({
			top: offset.top,
			left: offset.left
		});
	});
	$(".stream-container").on("mouseleave", function(){
		$(".stream-container-hover").remove();
	});
	$("ul").scroll(function(){
		offset = thisStreamContainer.offset();
		thisContainerHover.offset({
			top: offset.top,
			left: offset.left
		});
	});
});