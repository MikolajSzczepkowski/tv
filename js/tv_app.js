$(function (){
	var parentWidth,
		parentHeight,
		offset,
		thisStreamContainer,
		thisContainerHover;
	$("li .stream-container-inner").on("mouseenter", function(){
		parentWidth = $(this).width(),
		parentHeight = ($(this).height()+1),
		thisStreamContainer = $(this);
		$(this).prepend("<div class='stream-container-hover'></div>");
		$(".stream-container-hover").css({"width":parentWidth, "height": parentHeight});
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
});