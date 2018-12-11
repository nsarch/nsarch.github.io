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
			menuHeight: 25,
			menuWidth: 120,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.800,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/main_f.png',p + 'menu/main_m.png',p + 'menu/main_l.png',p + 'menu/main_f_h.png',p + 'menu/main_m_h.png',p + 'menu/main_l_h.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

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
	codes[0] = { letter: 'E', path: 'captcha/imcpa_naj.gif'};
	codes[1] = { letter: 'V', path: 'captcha/imcpa_srd.gif'};
	codes[2] = { letter: 'D', path: 'captcha/imcpa_ur8.gif'};
	codes[3] = { letter: 'Y', path: 'captcha/imcpa_hay.gif'};
	codes[4] = { letter: 'S', path: 'captcha/imcpa_krn.gif'};
	codes[5] = { letter: 'S', path: 'captcha/imcpa_ynk.gif'};
	codes[6] = { letter: 'R', path: 'captcha/imcpa_k6u.gif'};
	codes[7] = { letter: 'C', path: 'captcha/imcpa_zva.gif'};
	codes[8] = { letter: '7', path: 'captcha/imcpa_dse.gif'};
	codes[9] = { letter: 'V', path: 'captcha/imcpa_z22.gif'};
	s.loaded = true;
})( _jq, x5engine );