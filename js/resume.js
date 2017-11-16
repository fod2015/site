$(function(){
            $(".smooth").zxxAnchor({
                anchortag: "href"                       
            })
//导航效果
			$("#nav li").not("li:contains(Resume)").fadeTo(10,0.6)
		    $("#nav li:contains(Resume)").css("background","#F25C27")
			$("#nav li").hover(function(){
				$(this).stop().fadeTo(300,1)},function(){
				$(this).not("li:contains(Resume)").stop().fadeTo(300,0.6)
			})
//气泡效果
	        $(".img_p").hover(function(){
		        $(this).animate({backgroundColor:"#BB5E3E"},300)
				$(".img_t").animate({borderRightColor:"#BB5E3E"},300)}
		        ,function(){
		        $(this).animate({backgroundColor:"#f25c27"},200)
				$(".img_t").animate({borderRightColor:"#f25c27"},200)
	        })
//菜单效果
            $(window).load(function(){
                $("#header").sticky({ topSpacing: 0 })
            })
	        $("#header a").hover(function(){
		        $(this).stop().animate({color:"#f25c27"},300)}
		        ,function(){
		        $(this).stop().animate({color:"#eee"},300)
	        })
//提示效果
			$('a.normalTip').aToolTip()
			$('a.fixedTip').aToolTip({
		    	fixed: true
			})
//侧栏效果
            var oDiv=document.getElementById("float");
            var H=0,iE6;
            var Y=oDiv;
            while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
            iE6=window.ActiveXObject&&!window.XMLHttpRequest;
            if(!iE6){
                window.onscroll=function()
                {
                    var s=document.body.scrollTop||document.documentElement.scrollTop;
                    if(s>H){oDiv.className="floata floatb";if(iE6){oDiv.style.top=(s-H)+"px";}}
                    else{oDiv.className="floata";}    
                };
            }
//链接效果
	        $("#footerr a").hover(function(){
		        $(this).stop().animate({color:"#ccc"},300)}
		        ,function(){
		        $(this).stop().animate({color:"#808080"},300)
	        })
//弹窗效果
            $(".fancybox").fancybox({
		        maxWidth	: 800,
		        maxHeight	: 300,
		        fitToView	: false,
		        width		: '70%',
	        	height		: '70%',
		        autoSize	: false,
		        closeClick	: false,
		        openEffect	: 'fade',
				openSpeed   : 'slow',
		        closeEffect	: 'none',
	        })
})