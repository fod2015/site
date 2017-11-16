$(function(){
    $(".smooth").zxxAnchor({
        anchortag: "href"                       
    })
//导航效果
	$("#nav li").not("li:contains(Home)").fadeTo(10,0.6)
	$("#nav li:contains(Home)").css("background","#F25C27")
	$("#nav li").hover(function(){
		$(this).stop().fadeTo(300,1)},function(){
		$(this).not("li:contains(Home)").stop().fadeTo(300,0.6)
	})
//气泡效果
    $(".img_p").hover(function(){
        $(this).stop().animate({backgroundColor:"#BB5E3E"},300)
		$(".img_t").stop().animate({borderRightColor:"#BB5E3E"},300)}
        ,function(){
        $(this).stop().animate({backgroundColor:"#f25c27"},200)
		$(".img_t").stop().animate({borderRightColor:"#f25c27"},200)
    })
//滚动图效果
	$('#accordion').eAccordion({
		easing: 'swing',		// Anything other than "linear" or "swing" requires the easing plugin
		autoPlay: false,			// This turns off the entire FUNCTIONALY, not just if it starts running or not
		startStopped: false,	// If autoPlay is on, this can force it to start stopped
		stopAtEnd: false,		// If autoplay is on, it will stop when it reaches the last slide
		delay: 3000,			// How long between slide transitions in AutoPlay mode
		animationTime: 600,		// How long the slide transition takes
		hashTags: true,			// Should links change the hashtag in the URL?
		pauseOnHover: true,		// If true, and autoPlay is enabled, the show will pause on hover
		height: 600,			// Override the default CSS height
		expandedWidth: '540px', // Width of the expanded slide
		neutralState: true,		// If there should be a state when all pages are equal size (usually onMouseOut)
		bgHeight: '340px'		// The height of the gradient image (bgDescription.png). Useful if you're modifying the image
	})
//问答标签效果-->
    $("#tabsbody div").hide(); // Initially hide all content
    $("#tabs li:first").attr("id","current"); // Activate first tab
    $("#tabsbody div:first").fadeIn(); // Show first tab content
    $('#tabs a').hover(function(e) {
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
        return       
        }
        else{             
             $("#tabsbody div").hide(); //Hide all content
             $("#tabs li").attr("id",""); //Reset id's
             $(this).parent().attr("id","current"); // Activate this
             $('#' + $(this).attr('name')).fadeIn(); // Show content for current tab
        }
    })
//问答内容效果-->
	$('.nsub').hide();
	$('.nitem a').toggle(function(){
		$(this).parent().next('.nsub').stop().slideDown('slow');
		$(this).find("span").text("-")
	},function(){
		$(this).find("span").text("+")
		$(this).parent().next('.nsub').stop().slideUp('slow');
	})
	/*$('.nitem a').live('click', function(e){
		e.preventDefault();
		$(this).parent().next('.nsub').slideToggle('slow');
		if($(this).parent().next('.nsub').is(':hidden')) {
            $(this).addClass("");
        } else {
            $(this).removeClass("");
        }
	})*/
//按钮效果-->
	$('button').toggle(function(){
		$(this).nextAll('.nsub').slideDown('slow');
		$("#tab4 .nitem a").find("span").text("-")
	},function(){
		$(this).nextAll('.nsub').slideUp('slow');
		$("#tab4 .nitem a").find("span").text("+")
    })
	/*$('button').live('click', function(e){
		e.preventDefault();
		$(this).nextAll('.nsub').slideToggle('slow');
	})*/
//提示效果-->
	$('a.normalTip').aToolTip();
	$('a.fixedTip').aToolTip({
    	fixed: true
	})
//图块效果-->
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
//更多按钮效果
    $(".more a").hover(function(){
        $(this).stop().animate({backgroundColor:"#BB5E3E"},300)}
        ,function(){
        $(this).stop().animate({backgroundColor:"#f25c27"},200)
    })
//有用链接效果
    $("#right a, .accordion div a").hover(function(){
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