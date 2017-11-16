$(function(){
	$.backstretch(["img/banner_up.jpg"]);
// preload
	$("body").queryLoader2({
	    barColor: "#3F96A7",
	    backgroundColor: "#111",
	    percentage: true,
	    barHeight: 1,
	    completeAnimation: "grow",
	    minimumTime: 10
	})
// transition background
	$(".alpha").mouseover(function(){
		$(this).fadeTo(300,0.6);
		$("#pic").slideDown('slow');
		//$.backstretch(["img/banner_down.jpg"],{duration: 3000, fade: 600});
	})
	$(".alpha").mouseout(function(){
		$(this).fadeTo(300,1);
	})
	$(".bravo").mouseover(function(){
		$(this).fadeTo(300,0.6).click(function(){
	    	$("#pic").slideUp('slow');
		//$.backstretch(["img/banner_up.jpg"],{duration: 3000, fade: 600});
		})
	})
	$(".bravo").mouseout(function(){
		$(this).fadeTo(300,1);
	})
// block effect
	$('.circle').mosaic({
		opacity		:	0.8			//Opacity for overlay (0-1)
	})
	$('.bar').mosaic({
		animation	:	'slide'		//fade or slide
	})
	$('.bar2').mosaic({
		animation	:	'slide'		//fade or slide
	})
	$('.bar3').mosaic({
		animation	:	'slide',	//fade or slide
		anchor_y	:	'top'		//Vertical anchor position
	})
	$('.cover2').mosaic({
		animation	:	'slide',	//fade or slide
		anchor_y	:	'top',		//Vertical anchor position
		hover_y		:	'80px'		//Vertical position on hover
	})
})