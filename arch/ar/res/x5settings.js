(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.islocal = true;
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			showCurrent: false,
			verticalScroll: false,
			orientation: 'horizontal',
			menuHeight: 27,
			menuWidth: 120,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.800,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/main_f.png',p + 'menu/main_m.png',p + 'menu/main_l.png',p + 'menu/main_f_h.png',p + 'menu/main_m_h.png',p + 'menu/main_l_h.png',p + 'menu/main_f_c.png',p + 'menu/main_m_c.png',p + 'menu/main_l_c.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		buttonRight: {
			url: p + 'res/b01_r.png',
			position: {
				x: -12,
				y: 0
			}
		},
		buttonLeft: {
			url: p + 'res/b01_l.png',
			position: {
				x: -12,
				y: 0
			}
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.700,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.700
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 0,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});

	// Captcha
	var codes = s.imCaptcha.offlineCodes;
	codes[0] = { letter: 'W', path: 'captcha/imcpa_2k4.gif'};
	codes[1] = { letter: '5', path: 'captcha/imcpa_e2p.gif'};
	codes[2] = { letter: 'F', path: 'captcha/imcpa_l88.gif'};
	codes[3] = { letter: 'H', path: 'captcha/imcpa_4pr.gif'};
	codes[4] = { letter: 'J', path: 'captcha/imcpa_xt3.gif'};
	codes[5] = { letter: 'R', path: 'captcha/imcpa_dl8.gif'};
	codes[6] = { letter: '3', path: 'captcha/imcpa_g58.gif'};
	codes[7] = { letter: 'Z', path: 'captcha/imcpa_l4c.gif'};
	codes[8] = { letter: 'E', path: 'captcha/imcpa_sk3.gif'};
	codes[9] = { letter: 'U', path: 'captcha/imcpa_y6a.gif'};
	s.loaded = true;
})( _jq, x5engine );