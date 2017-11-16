$(function(){
    $("body").css({"display":"none","background":"#000"})
    $(window).ready(function(){
        $("body").fadeIn(500)                       
    })
	$(window).blur(function(){
        //$("body").css({"display":"none","background":"#000"})                       
    })
	$(window).focus(function(){
        //$("body").fadeIn(500)                       
    })
	$(window).ready(function(){
        $(".column-left .block span").transition({x:'0px',y:'-35px',delay:300})
        $(".column-left .block img").transition({x:'0px',y:'40px',delay:500})
    })
    $(".smooth").zxxAnchor({
        anchortag: "href"                       
    })
//导航效果
	$("#nav li").not("li:contains(Contact)").fadeTo(10,0.6)
	$("#nav li:contains(Contact)").css("background","#F25C27")
	$("#nav li").hover(function(){
		$(this).stop().fadeTo(300,1)},function(){
		$(this).not("li:contains(Contact)").stop().fadeTo(300,0.6)
	})
//弹窗效果
    $(".fancybox").fancybox({
        maxWidth	: 400,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
    	height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none',
    })
//邮箱效果
    $(".block").live('mouseenter',function(){
        $(".column-left .block span").stop().transition({x:'0px',y:'-35px'})
        $(".column-left .block img").stop().transition({x:'0px',y:'40px',delay:200})
    }),$(".block").live('mouseleave',function(){
        $(".column-left .block span").stop().transition({x:'0px',y:'0px'})
    	$(".column-left .block img").stop().transition({x:'0px',y:'0px',delay:100})
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