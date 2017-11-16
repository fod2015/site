(function ($) {
	
	$.jBar = function (options) {

		// jBar Defaults
		var defaults = {
			startClosed: true,
		};
		
		// jBar Options
		var options = $.extend(defaults, options);
		
		// Shorten Option Names
		var type = options.type,
			delay = options.delay,
			backgroundColor = options.backgroundColor,
			borderColor = options.borderColor,
			buttonTextColor = options.buttonTextColor,
			buttonColor = options.buttonColor,
			buttonColorHover = options.buttonColorHover,
			calltoAction = options.calltoAction,
			buttonText = options.buttonText,
			buttonLink = options.buttonLink;
			
		// jBar Markup
		var jbar_html = '<div id="jbar" class="jbar" style="display:none;">' + '<span class="jbar-cta">' + '<p class="text">' + calltoAction + '<a href="' + buttonLink + '">' 
						+ buttonText + '</a></p>' + '<p class="downarrow"><img src="../img/arrow-up.png" class="jtrigger arrow" alt="Arrow Up"></p>' 
						+ '</span></div>' + '<span class="jribbon"><img src="../img/arrow-down.png" class="arrow jtrigger" alt="Arrow Down"></span>';
						
		// jBar Styles
		var styles = '<style>' + '.jbar{background:' + backgroundColor + ';top:0;left:0;right:0;height:46px;z-index:999998;color:#FFF;border-bottom:0px solid #BB5E3E;' 
					 + borderColor + ';display:none;}' + '.jbar-cta{display:block;max-width:1200px;margin:0 auto;padding:14px;}' 
					 + '.jribbon{padding:5px 2px 0;z-index:999999;top:0;left:4%;display:none;width:38px;text-align:center;background:' + backgroundColor 
					 + ';border:2px solid #f25c27;' + 'border-top:none;color:#FFF;cursor:pointer;border-radius:0 0 2px 2px;}' 
					 + '.downarrow{top:13px;left:4%;width:50px;text-align:center;position:absolute;margin:0;padding:0;}' + '.jribbon:hover{cursor:pointer;}' 
					 + '.text{display:block;padding:0;margin:0;font-family:barkentina1;letter-spacing:0.15em;font-weight:900;text-align:center;}' + '.text a{font-weight:500;text-decoration:none;color:' 
					 + buttonTextColor + ';margin:0 10px;padding:5px 10px;background:' + buttonColor 
					 + ';border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;}' + '.text a:hover{background:' + buttonColorHover 
					 + ';}.arrow{cursor:pointer;}.fixed{position:fixed;}.static{position:absolute;}</style>';

		// Append Styles to <head>
		$('head').append(styles);

		// Prepend jBar to <body>
		$('body').prepend(jbar_html);

		// Options 'Top' and 'Fixed' are selected
		if(type == 'fixed') {
			// Add class 'position-top-fixed'
			$('#jbar').addClass('position-top fixed');
			$('.jribbon').addClass('fixed');
			
			// Initial Animation
			$('body').prepend('<div id="jbar-push" style="height:46px;display:none;" />');
			
			if (options.startClosed) {
				$('.jribbon').delay(delay).slideToggle(200);
			} else {
				$('#jbar, #jbar-push').delay(delay).slideDown(300);
			}
			
			// User Animation
			$('.jtrigger').click(function () {
				$('#jbar-push').slideToggle();
				$('#jbar').slideToggle();
				$('.jribbon').slideToggle(200);
			});
		}
		
		// Options 'Top' and 'Static' are selected
		if(type == 'static') {
			// Add class 'position-top-fixed'
			$('#jbar').addClass('position-top');
			$('.jribbon').addClass('static');
			
			// Initial Animation
			if (options.startClosed) {
				$('.jribbon').slideToggle(200);
			} else {
				$('#jbar').delay(delay).slideDown(300);
			}
			
			// User Animation
			$('.jtrigger').click(function () {
				$('#jbar').slideToggle();
				$('.jribbon').slideToggle(200);
			});
		}
		
	};
	
})(jQuery);
