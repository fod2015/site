$(function(){
    $(".smooth").zxxAnchor({
        anchortag: "href"                       
    })
//导航效果
	$("#nav li").not("li:contains(Work)").fadeTo(10,0.6)
	$("#nav li:contains(Work)").css("background","#F25C27")
	$("#nav li").hover(function(){
		$(this).stop().fadeTo(300,1)},function(){
	    $(this).not("li:contains(Work)").stop().fadeTo(300,0.6)
	})
//轮播图效果
    $(window).load(function(){
        $('#slider').nivoSlider({
        	afterLoad: function(){
        		$('#slider a').eq(0).find('div').animate({opacity:.75,top:0},500);
        	},
        	beforeChange: function(){
        		$('#slider a:visible').find('div').animate({opacity:0,top:'20px'},500);
        		$('#slider a:hidden').find('div').delay(500).animate({opacity:.75,top:0},500);
        	},
        	afterChange: function(){
        		$('#slider a:hidden').find('div').delay(500).css({'opacity':0,top:'20px'});
        	}
        });
    })
//图块效果			
	$('.circle').mosaic({
		opacity		:	0.8			//Opacity for overlay (0-1)
	})
	$('.fade').mosaic()
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
//有用链接效果
    $("#right a").hover(function(){
        $(this).stop().animate({color:"#fff"},300)}
        ,function(){
        $(this).stop().animate({color:"#f25c27"},200)
    })
//社交网络效果
    $("a.weibo,a.qing,a.blogbus,a.twitter,a.lofter,a.aboutme").fadeTo(1,0.8).hover(function(){
        $(this).stop().fadeTo(500,1)}
		,function(){
        $(this).stop().fadeTo(500,0.8)
    })
// footer
    var contactPic = [
    	'img/contact-1.jpg',
		'img/contact-2.jpg',
		'img/contact-3.jpg',
		'img/contact-4.jpg',
		'img/contact-5.jpg',
		'img/contact-6.jpg'
	];
	var randomNO = Math.floor( Math.random() * contactPic.length );
	var imagePath = contactPic[randomNO];
	$(".contact-picture").css('background-image', 'url(' + imagePath + ')');
})