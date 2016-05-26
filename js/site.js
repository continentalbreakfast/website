var countries = {"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}

var works = {
	rossbennett: {
		name: 'Ross Bennett',
		title: '',
		latLng: '51.7094, 0.6123', /* chesham */
		image: '<pre>Our menu application had been approved so we were set to travel to gastronomical heights.<br/>\
<br/>\
**or**<br/>\
<br/>\
Our visa’s were denied on the basis that our ingredients weren’t on the accepted list.<br/>\
<br/>\
**with**<br/>\
<br/>\
You’re not sure, so opt for a mixed menu. (MM no longer available)<br/>\
<br/>\
<br/>\
<br/>\
“”””””””””<br/>\
A news article that started with the headline.<br/>\
	<em>“Member, states intention, to leave club after claiming free gift introductory offer and then disliking the clubs policy on policy approval.”</em> [You don’t read on]<br/>\
<br/>\
The article below reads “<em>Minister’s member of 14 different gyms around the city, doesn’t attend any, many citizens unable to even hold one monthly gym membership</em>”. [You read the article and add a comment in the section at the end. It reads “Feeling the burn! Get back on the bench] <br/>\
<br/>\
…………………….<br/>\
<br/>\
You attend a banner making workshop and feel really satisfied, boarding on smug, with your outcome.<br/>\
<br/>\
‘EUnity’ <br/>\
<br/>\
<br/>\
and <br/>\
<br/>\
<br/>\
‘eUNITED<br/>\
KINGDOM’<br/>\
<br/>\
Which you taped out across an irregular rectangle of cardboard. Someone at the workshop had commented on it saying ‘That’s really good’. You take public transport home and receive various responses. Some smiles, and four negative heckles. <br/>\
<br/>\
Later you put an image of the banner on instagram and most of your european friends hearted it. <br/>\
<br/>\
£><br/>\
<br/>\
———<br/>\
Your dad called you on a Sunday night. He always calls you on a Sunday night. He starts by asking how your weekend had been and quickly goes on to talk about his weekend in the South of France where him and his partner had been looking for a holiday let. You told him about a new mortgage scheme that had been released by the current government, but how you wouldn’t want to live in this city anyway. He said he had to go walk the dog.<br/>\
<br/>\
//<br/>\
A chat at the pub, which started with “Can I borrow a rolley” and led on to “only if you vote leave” – The tobacco tasted sour, you dragged and stubbed it out. <br/>\
<br/>\
<br/>\
Instruction: Run your finger down the menu fiver places. Order this dish, think about it’s properties and origins. Does it align with the description on the menu? How is the dish presented?<br/>\
<br/>\
<br/>\
<br/>\
You are helping a friend who you once worked with pack, as they’ve been given an early eviction notice from their landlord. Under new UK rules, no estate agent let properties can be let out to more than one European tenant at a time. <br/>\
<br/>\
()()<br/>\
<br/>\
You attend a political rally in the main square of your city, the participants are mainly young. There is a feeling of anxious unity looming louder than any of the chants.<br/>\
“Remain human, Remain Union” travels up and down a picket line.<br/>\ Civil servants fluorescently uniformed wear ear defenders and wield bats so as not be humanised whilst on duty. <br/>\
<br/>\
––––––––––––––––––––––––––––––––––––––-–<br/>\
|                                       |<br/>\
|      They kettle a small group in     |<br/>\
|         and forcibly remove the       |<br/>\
|           rest of the protestors.     *<br/>\
*                                       |<br/>\
––––––––––––––––––––––––––––––––––––––-–<br/>\
<br/>\
<br/>\
You realise a borrowed word you had been frequently using for most of your life needs to be returned, and, further retracted from your vocabulary under new governmental language law. You had already been served with a minor cyber criminal charge for using the word in a social media post 2 weeks prior. Your account was later suspended after a tweet you published failed to take into consideration mentioned law above. <br/>\
<br/>\
<br/>\
<br/>\
<br/>\
<br/>\
!!!!!<br/>\
All passports are seized and have new covers applied which read. ‘Stationary identity’<br/>\
“Pass freely” is wiped from the opening page and all pages inside are masked with solid black ink.<br/>\
!!!!!<br/>\
<br/>\
<br/>\
*The feeling in your stomach as a plane takes off.* -> <-<br/>\
replaced by the empty feeling of being denied entry to a club. <br/>\
<br/>\
€capacity has been reached at a gig you were hoping to attend€<br/>\
<br/>\
<br/>\
><br/>\
	Your friend travels as little as possible but unfortunately needed to travel back to visit their [insert family relation here] as they had been [detail here]. <br/>\
	This friend texts you as they sit in an airport waiting for their new digital visa application to be processed. You talk about the annoying procedure. You text a picture of the pair of you, found whilst tidying the flat you used to share.<br/>\
<br/>\
~<br/>\
A stranger you meet on the street is handing out flyers. They call for all possible futures to be imagined, and then tried. For all possible pasts are happening and are tired. Register your interest~<br/>\
<br/>\
+<br/>\
A letter goes out to every household in the Union. It states from this day all passports are void along with boarders. The signatures that follow are longer than the letter that precedes it. Your emotions are higher than they have been in months. <br/>\
<br/>\
You wake with an epic european sized hangover thank*** for cheap export larger. <br/>\
<br/>\
You finish the glass of concentrated orange juice and leave a gracious tip on the table and a heartfelt thanks at the door. <br/>\
<br/>\
<u>Monday</u><br/>\
You are reminded of a lecture series you attended that featured civic architecture, particular focus is made to bridges, designed and built by, ‘self termed’ migrant architects. The lecture had taken place in a public amphitheatre.<br/>\
<br/>\
–One learning from the the lecture was that all architects see themselves as nomad’s. Looking for the problem to solve. The next civic crisis to learn from. It got you thinking. Is anything physical ever a home? Is identity within yourself or your surroundings. <br/>\
<br/>\
=========================================<br/>\
New classes have been defined this time not by accrued wealth but by servitude to society. It is impossible to pass class onto offspring. But it is likely highly respected servers of the common will breed more ambitious commoners.<br/>\
<br/>\
‘jobs’ are still held by those that cling on to the idea that money is a societal need. The rest of society has come to the comprehension that monetary currency is imprisonment. <br/>\
=========================================<br/>\
<br/>\
Whilst having a wee in a petrol services station you notice a sticker  on the underside of the lid. #euroblind You had read about this, the spin off of eurovision that came out once UK had pulled out. Australia, had since been granted full European status and even taken on the euro as dominant currency in most major cities. <br/>\
<br/>\
.<br/>\
<br/>\
Current mood: <strong>Registered pensive</strong></pre>'
	},
	kristianberge: {
		name: 'Kristian Berge',
		title: '',
		latLng: '58.9700, 5.7331', /* stavanger */
		image: '<iframe src="images/oddtojoy/intro.html" width="100%" height="100%"></iframe>'
	},
	elizabethbradley: {
		name: 'Elizabeth Bradley',
		title: '',
		latLng: '51.5430, 0.1493', /* chalk farm */
		image: '<img class="gallery-image" src="images/elizabethbradley/athec.jpg" alt="Elizabeth Bradley"/><iframe src="https://player.vimeo.com/video/167660457?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><img class="gallery-image" src="images/elizabethbradley/medlar_1.jpg" alt="Elizabeth Bradley"/>'
	},
	koosbreen: {
		name: 'Koos Breen',
		title: '',
		latLng: '52.6304, 4.7737', /* oudorp */
		image: '<iframe src="https://player.vimeo.com/video/167623827?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
	},
	anthonyburrill: {
		name: 'Anthony Burrill',
		title: '',
		latLng: '51.0111, 0.7033', /* wittersham */
		image: '<img class="gallery-image" src="images/anthonyburrill/likethemlikeyoulikeme.jpg" alt="Anthony Burrill"/>'
	},
	eveningclass: {
		name: 'Evening Class',
		title: '',
		latLng: '51.4826, 0.0077', /* london */
		image: '<img class="gallery-image" src="images/eveningclass/eveningclass.gif" alt="Evening Class"/>'
	},
	francescocorsini: {
		name: 'Francesco Corsini',
		title: '',
		latLng: '43.7228, 10.4017', /* pisa */
		image: '<iframe src="images/oddtojoy/intro.html" width="100%" height="100%"></iframe>'
	},
	callumcopley: {
		name: 'Callum Copley',
		title: '',
		latLng: '53.5820188,-0.720341', /* scunthorpe */
		image: '<img class="gallery-image" src="images/callumcopley/Amsterdam.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Athens.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Berlin.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Bratislava.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Bucharest.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Budapest.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Copenhagen.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Cypress.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Dublin.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Helsinki.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Lisbon.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Ljubljana.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/London.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Luxembourg.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Madrid.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Prague.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Riga.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Rome.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Sofia.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Stockholm.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Tallin.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Valletta.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Vienna.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Vilnius.jpg" alt="Callum Copley"/><img class="gallery-image" src="images/callumcopley/Warsaw.jpg" alt="Callum Copley"/>'
	},
	iandaniell: {
		name: 'Ian Daniell',
		title: '',
		latLng: '54.8956412,-1.4761631', /* sunderland */
		image: '<img class="gallery-image" src="images/iandaniell/iandaniell.jpg" alt="Ian Daniell"/>'
	},
	fothergill: {
		name: 'Fothergill',
		title: '',
		latLng: '51.7537349,-0.4992408', /* hemel hempstead */
		image: '<iframe src="http://www.smartsurvey.co.uk/s/CJ7DA/" width="100%" height="100%"></iframe>'
	},
	hannahfinchman: {
		name: 'Hannah Finchman',
		title: '',
		latLng: '51.0974, 0.0332', /* forest row */
		image: '<iframe src="http://www.smartsurvey.co.uk/s/CJ7DA/" width="100%" height="100%"></iframe>'
	},
	gergokovacs: {
		name: 'Gergo Kovács',
		title: '',
		latLng: '46.9619, 18.9355', /* dunaujvaros */
		image: ''
	},
	gregmccarronshipman: {
		name: 'Greg McCarron-Shipman',
		title: '',
		latLng: '52.2405, 0.9027', /* northampton */
		image: '<figure class="embed"><iframe src="https://player.vimeo.com/video/167847772?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></figure><figure class="embed"><iframe src="https://player.vimeo.com/video/167847771?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></figure><figure class="embed"><iframe src="https://player.vimeo.com/video/167847770?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></figure><figure class="embed"><iframe src="https://player.vimeo.com/video/167847450?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></figure>'
	},
	sepusnoordmans: {
		name: 'Sepus Noordmans',
		title: '',
		latLng: '52.0705, 4.3007', /* the hague */
		image: '<img class="gallery-image" src="images/sepusnoordmans/sepusnoordmans.jpg" alt="Sepus Noordmans"/>'
	},
	kasperpyndt: {
		name: 'Kasper Pyndt',
		title: '',
		latLng: '55.6419, 12.0878', /* roskilde */
		image: '<img class="gallery-image" src="images/kasperpyndt/kasperpyndt.png" alt="Kasper Pyndt"/>'
	},
	therodina: {
		name: 'The Rodina',
		title: '',
		latLng: '49.1951, 16.6068', /* brno */
		image: '<img class="gallery-image" src="images/terezaruller/terezaruller.jpg" alt="Tereza Ruller"/>'
	},
	andrewthorpe: {
		name: 'Andrew Thorpe',
		title: '',
		latLng: '51.3646, 0.6658', /* windlesham */
		image: ""
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
	galleryClearData: function(gallery, galleryName, galleryTitle, galleryNext, galleryPiece) {
		galleryName.removeClass('loaded');
		galleryTitle.removeClass('loaded');
		galleryPiece.removeClass('loaded');
		galleryNext.data('next', '');
		$( '.content-loading' ).show();
	},
	
	findNextObject: function(currentName) {
		
		var next = $( '.participant-link[data-name="' + currentName + '"]' ).next();
		if( next.length ){
			$('.gallery-header .nav-next').attr( 'data-name', next.data('name') ).removeClass('inactive');
		} else {
			$('.gallery-header .nav-next').attr( 'data-name', '' ).addClass('inactive');
		}
	},
	
	findPreviousObject: function(currentName) {
		
		var previous = $( '.participant-link[data-name="' + currentName + '"]' ).prev();
		if( previous.length ){
			$('.gallery-header .nav-previous').attr( 'data-name', previous.data('name') ).removeClass('inactive');
		} else {
			$('.gallery-header .nav-previous').attr( 'data-name', '' ).addClass('inactive');
		}
	},
	
	galleryLoadData: function(name, slug, redirect) {
				
		var gallery = $('.gallery');
		
		var galleryName = gallery.find('.header-name'),
		 		galleryTitle = gallery.find('.header-title'),
		 		galleryNext = gallery.find('.nav-next'),
		 		galleryPiece = gallery.find('.gallery-piece'),
		 		artistName = name.name,
		 		artistTitle = name.title,
		 		artistPiece = name.image;
		 		
				artistPiece = artistPiece.replace(/(?:\r\n|\r|\n)/g, '<br />');
		
		// Find next and previous object		
		Site.findNextObject(slug);
		Site.findPreviousObject(slug);
		
		Site.galleryClearData(gallery, galleryName, galleryTitle, galleryNext, galleryPiece);
		
		$( '.participant-link' ).each( function(){
			$(this).removeClass('active');
			if( $(this).data('name') == slug )
				$(this).addClass('active');
		});
		
		if( redirect ){		
						
			// Create hashtag in url
			window.location.hash = slug;
			
			// Add ID
			galleryPiece.attr('id', slug);
			
			$('html, body').animate({
			    scrollTop: $(".gallery").offset().top
			}, 1000);
		}
		
		
		// Check if content is loaded
		galleryPiece.html(artistPiece);	PieceOnLoad();
			// iframe
			if( artistPiece.search("<iframe") >= 0 ){		
				$('iframe').on('load', function(){
		      PieceOnLoad();
		    });
			
			} else if( artistPiece.search("<img") >= 0 ){	
				$("img").one("load", function() {
				}).each(function() {
				  if(this.complete) PieceOnLoad();
				});
			
			} else {
				PieceOnLoad();
			}
			
		
		if( !redirect ){
			PieceOnLoad();
		}	


		function PieceOnLoad() {
			galleryName.text(artistName);
			// galleryTitle.text(artistTitle);
			galleryName.addClass('loaded');
			galleryTitle.addClass('loaded');
			galleryPiece.addClass('loaded');
			$( '.content-loading' ).hide();
		}
	},
	
	galleryInit: function() {
		$('.participant-link').click(function() {
			var self = $(this);
			var name = self.data('name');
			var artistData = works[name];
			Site.galleryLoadData(artistData, name, true);
		});
		
		$( document ).on( 'click', '.nav-previous, .nav-next', function(){
			if( !$(this).hasClass( 'inactive' ) && $(this).data('name') ){	
				var name = $(this).attr('data-name'),
						artistData = works[name];
				
				Site.galleryLoadData(artistData, name, true);
			}
		});
		
		$( document ).keydown(function(e) {
		  switch(e.which) {
		    case 37: // left
		    	var name = $( '.nav-previous' ).attr('data-name');
		    	if( name ){
						var artistData = works[name];
						Site.galleryLoadData(artistData, name, true);
					}
		    break;

		    case 39: // right
		    	var name = $( '.nav-next' ).attr('data-name');
		    	if( name ){
						var artistData = works[name];
						Site.galleryLoadData(artistData, name, true);
					}
		    break;

		    default: return;
		  }
		  e.preventDefault(); 
		});
	},
	
	loadRandomObject: function(){
		var length = Object.keys(works).length,
			item = Math.floor(Math.random()*length),
			i = 0;

		$.each( works, function( slug, object ){
			if( i == item )
				Site.galleryLoadData(object, slug, false);
			i++;
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
			if (window.matchMedia("(min-device-width: 800px)").matches) {
				$('.participant-link').hover(function() {
					var name = $(this).data('name');
					var object = works[name];
					var objectCoordinates = object.latLng;
					var markerPosition = Site.coordinatesToNumber(objectCoordinates);

					map.panTo(markerPosition);
					map.setZoom(10);
				});
			}
		};
		initialize();
	}
}

$( document ).ready(function() {
	Site.splash();
	Site.galleryInit();
	Site.map();
	

	// Load content
	if(window.location.hash) {
		
	  var slug = window.location.hash.substring(1); 	
		if( works[slug] ){
			Site.galleryLoadData(works[slug], slug, true);
			
		} else {
			history.pushState("", document.title, window.location.pathname);
			Site.loadRandomObject();
		}
		
	} else {
	  Site.loadRandomObject();
	}
	
});


