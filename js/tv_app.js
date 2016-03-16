$(function (){
	var parentWidth,
		parentHeight,
		pageWidth = $(document).width(),
		thisStreamContainer,
		thisContainerHover,
		offset,
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

	$(document).on("submit", "#streamRequestForm", function(e){
		e.preventDefault();
		
			if ($(this).find("textarea").val().length == 0) {
				$("#alertBox p").text("You have to write a request");
				$("#alertBox").show();
				$("#alertBox").delay(3000).hide(0);
			}
			if ($("#twitchUrlRequest").val().length == 0 &&
				$("#youtubeUrlRequest").val().length == 0 &&
				$("#hitboxUrlRequest").val().length == 0){

				$("#alertBox p").text("You have to insert URL address");
				$("#alertBox").show();
				$("#alertBox").delay(3000).hide(0);
			}
	});
});