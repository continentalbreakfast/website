var countries = {"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}

var works = {
	kubabartwicki: {
		name: 'Kuba Bartwicki',
		title: 'Art Innit',
		latLng: '53.8517024,18.3671142', /* lubichowo */
		image: 'images/04.png'
	},
	alessandrobelliero: {
		name: 'Alessandro Belliero',
		title: 'Art Innit',
		latLng: '49.9929, 8.2473', /* mainz */
		image: 'images/04.png'
	},
	rossbennett: {
		name: 'Ross Bennett',
		title: 'Art Right',
		latLng: '51.7094, 0.6123', /* chesham */
		image: 'images/05.jpg'
	},
	kristianberge: {
		name: 'Kristian Berge',
		title: 'Art Innit',
		latLng: '58.9700, 5.7331', /* stavanger */
		image: 'images/03.jpg'
	},
	elizabethbradley: {
		name: 'Elizabeth Bradley',
		title: 'Art Right',
		latLng: '51.5430, 0.1493', /* chalk farm */
		image: 'images/06.jpg'
	},
	koosbreen: {
		name: 'Koos Breen',
		title: 'Art Innit',
		latLng: '52.6304, 4.7737', /* oudorp */
		image: 'images/01.jpg'
	},
	anthonyburrill: {
		name: 'Anthony Burrill',
		title: 'Art Innit',
		latLng: '51.0111, 0.7033', /* wittersham */
		image: 'images/07.jpg'
	},
	blaisechatelain: {
		name: 'Blaise Chatelain',
		title: 'Art Right',
		latLng: '45.7640, 4.8357', /* lyon */
		image: 'images/01.jpg'
	},
	francescocorsini: {
		name: 'Francesco Corsini',
		title: 'Art Right',
		latLng: '43.7228, 10.4017', /* pisa */
		image: 'images/02.jpg'
	},
	callumcopley: {
		name: 'Callum Copley',
		title: 'Art Right',
		latLng: '53.5820188,-0.720341', /* scunthorpe */
		image: 'images/06.jpg'
	},
	iandaniell: {
		name: 'Ian Daniell',
		title: 'Art Right',
		latLng: '54.8956412,-1.4761631', /* sunderland */
		image: 'images/01.jpg'
	},
	roxannefarahmand: {
		name: 'Roxanne Farahmond',
		title: 'Art Right',
		latLng: '51.7532, 0.4486', /* hemel hempstead */
		image: 'images/02.jpg'
	},
	hannahfinchman: {
		name: 'Hannah Finchman',
		title: 'Art Right',
		latLng: '51.0974, 0.0332', /* forest row */
		image: 'images/03.jpg'
	},
	gergokovacs: {
		name: 'Gergo Kovács',
		title: 'Art Right',
		latLng: '46.9619, 18.9355', /* dunaujvaros */
		image: 'images/06.jpg'
	},
	alexmccullough: {
		name: 'Alex McCullough',
		title: 'Art Right',
		latLng: '51.5074, 0.1278', /* london */
		image: 'images/06.jpg'
	},
	gregmccarronshipman: {
		name: 'Greg McCarron-Shipman',
		title: 'Art Innit',
		latLng: '52.2405, 0.9027', /* northampton */
		image: 'images/04.png'
	},
	sepusnoordmans: {
		name: 'Sepus Noordmans',
		title: 'Art Right',
		latLng: '52.0705, 4.3007', /* the hague */
		image: 'images/03.jpg'
	},
	kasperpyndt: {
		name: 'Kasper Pyndt',
		title: 'Art Right',
		latLng: '55.6419, 12.0878', /* roskilde */
		image: 'images/07.jpg'
	},
	terezaruller: {
		name: 'Tereza Ruller',
		title: 'Art Innit',
		latLng: '49.1951, 16.6068', /* brno */
		image: 'images/02.jpg'
	},
	pausampera: {
		name: 'Pau Sampera',
		title: 'Art Innit',
		latLng: '41.3851, 2.1734', /* barcelona */
		image: 'images/06.jpg'
	},
	andrewthorpe: {
		name: 'Andrew Thorpe',
		title: 'Art Right',
		latLng: '51.3646, 0.6658', /* windlesham */
		image: 'images/05.jpg'
	},
	yuliawagner: {
		name: 'Yulia Wagner',
		title: 'Art Right',
		latLng: '50.9795, 11.3235', /* weimar */
		image: 'images/05.jpg'
	},
	sebastianzimmerhackl: {
		name: 'Sebastian Zimmerhackl',
		title: 'Art Innit',
		latLng: '47.9990, 7.8421', /* freiburg im breisgau */
		image: 'images/04.png'
	}
}

var Site = {
	splash: function() {
		function getCountryData(callback) {
			$.get('http://ipinfo.io', function(response) {
				var countryCode = response.country;
				var countryName = countries[countryCode];
				callback(countryName);
			}, 'jsonp');
		};

		getCountryData(function(response) {
			console.log(response);
			$('.splash h1').addClass('loaded');
			$('.splash h2').addClass('loaded');	
			$('.splash-country').text( response );

			setTimeout(function() {
				$('.splash').fadeOut(250);
				setTimeout(function() {
					$('.main').addClass('visible');
				}, 100);
			}, 4000);
		});

	},
	galleryClearData: function(gallery, galleryName, galleryTitle, galleryNext, galleryImage) {
		galleryName.removeClass('loaded');
		galleryTitle.removeClass('loaded');
		galleryImage.removeClass('loaded');
		galleryNext.data('next', '');
		
	},
	findNextObject: function(currentName) {
		var prevObj;
		for (var key in works) {
		    if (works.hasOwnProperty(key)) {
				var currentObj = works[key];
				if (prevObj) {
			      	if (prevObj.name === currentName) {
						return key;
			        }
				}
				prevObj = currentObj;
		    }
		}
		return false;
	},
	galleryLoadData: function(name) {
		var gallery = $('.gallery');
		var galleryName = gallery.find('.header-name');
		var galleryTitle = gallery.find('.header-title');
		var galleryNext = gallery.find('.nav-next');
		var galleryImage = gallery.find('.gallery-image');
		
		var artistName = name.name;
		var artistTitle = name.title;
		var artistImage = name.image;
		var artistNext = works[Site.findNextObject(artistName)];

		Site.galleryClearData(gallery, galleryName, galleryTitle, galleryNext, galleryImage);

		galleryImage.each(function() {
			var tmpImg = new Image();
			tmpImg.src = artistImage;
			tmpImg.onload = imageOnLoad;
			
		});

		function imageOnLoad() {
			galleryName.text(artistName);
			// galleryTitle.text(artistTitle);
			galleryName.addClass('loaded');
			galleryTitle.addClass('loaded');
			galleryImage.attr('src', artistImage);
			galleryImage.addClass('loaded');
		}
	},
	galleryInit: function() {
		$('.participant-link').click(function() {
			var self = $(this);
			var name = self.data('name');
			var artistData = works[name];
			Site.galleryLoadData(artistData);
		});
	},
	coordinatesToNumber: function(data) {
		var comma = data.indexOf(',');
		var lat = parseFloat(data.substring(0, comma));
		var lng = parseFloat(data.substring(comma + 1, data.length));
		var center = new google.maps.LatLng(lat, lng);
		return center;
	},
	map: function() {
		var initialize = function() {
			var styles = [
				{
					featureType: 'all',
	   			 	stylers: [
			      		{ hue: "#003399" },
			      		{ saturation: 50 },
			      		{ gamma: 1 },
			      		{ visibility: 'simplified' },
			      		{ lightness: 60 }
	    			]
	    		}, {

	    		}
	    	];

			var myLatlng = new google.maps.LatLng(54.9065, 25.3198);
			var mapOptions = {
				center: myLatlng,
				zoom: 5,
				backgroundColor: '#E2ECFE',
				disableDefaultUI: true,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var styledMap = new google.maps.StyledMapType(styles, {name:"Map"});
			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			var markerImage = '../images/arrow-orange.svg';

			// create markers for every participant
			// for (var key in works) {
			// 	if (works.hasOwnProperty(key)) {
			// 		// convert string to int
			// 		var object = works[key];
			// 		var objectCoordinates = object.latLng;
			// 		var markerPosition = Site.coordinatesToNumber(objectCoordinates);
					
			// 		new google.maps.Marker({
			// 			position: markerPosition,
			// 			map: map,
			// 			icon: {
			// 				url: 'data:image/svg+xml;utf-8, \
			// 				  <svg xmlns="http://www.w3.org/2000/svg" id="Calque_1" viewBox="-365.1 429.5 19.6 18.6"><style>.st0{fill:#FFED00;}</style><path class="st0" d="M-361.3 448.1l6-4.4 6 4.4-2.3-7.1 6.1-4.4h-7.5l-2.3-7.1-2.3 7.2-7.5-.1 6.1 4.4-2.3 7.1z"/></svg>',
			// 				scaledSize: new google.maps.Size(70, 70),
			// 			    anchor: new google.maps.Point(16, 16)
			// 			}
			// 		});
			// 	}
			// }
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');
			
			// pan to location on click
			$('.participant-link').hover(function() {
				var name = $(this).data('name');
				var object = works[name];
				var objectCoordinates = object.latLng;
				var markerPosition = Site.coordinatesToNumber(objectCoordinates);

				map.panTo(markerPosition);
				map.setZoom(10);
			});
		};
		initialize();
	}
}

$(window).load(function() {
	Site.splash();
	// Site.galleryInit();
	Site.map();
})