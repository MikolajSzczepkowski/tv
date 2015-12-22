$(function (){
	var parentWidth,
		parentHeight,
		offset,
		thisStreamContainer,
		thisContainerHover,
		streamContainerHeight = $("#streamContainer").height(),
		comment = $(".comments-container li");

	$(".main-right ul").css("height", streamContainerHeight);
	$(window).resize(function(){
		streamContainerHeight = $("#streamContainer").height();
		$(".main-right ul").css("height", streamContainerHeight);
	});

	for (var i = comment.length - 1; i >= 0; i--) {
		thisComment = $(comment[i]);
		commentHeight = thisComment.height();
		if ( commentHeight > 30) {
			thisComment.find("a").css("height", commentHeight);
			thisComment.find("span").css("height", commentHeight);
		};
	};

	$("li .stream-container-inner").on("mouseenter", function(){
		parentWidth = $(this).width(),
		parentHeight = ($(this).height()+1),
		thisStreamContainer = $(this);
		$(this).prepend("<div class='stream-container-hover'></div>");
		$(".stream-container-hover").css({"width":parentWidth, "height": parentHeight});
		if ($(this).parents().hasClass("favorite-streams")) {
			$(".stream-container-hover").append("<span><img src='images/love-red.png' alt='like'>273</span>");
		}
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