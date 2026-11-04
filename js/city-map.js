/* Shared hotel / venue data and Leaflet map helpers for book-city.html and search-results.html */
(function (w) {
  var HOTELS = [
    // Real properties inside the City of London boundary (names, addresses and locations from OpenStreetMap, Nov 2026).
    // Prices, room types, policies and generic photos are demo values.
    { slug: 'hyde-london-city', name: 'Hyde London City', img: 'assets/img/hotel-hyde.jpg', loc: 'Blackfriars', miles: 0.4, room: '1 x Superior King Room', bed: 'King size bed', stars: 4, price: 219, cancellation: true, breakfast: false, lat: 51.51621, lng: -0.10236, type: 'Hotel', osm: 'node/12792199736' },
    { slug: 'lost-property-hotel', name: 'Lost Property Hotel', img: 'assets/img/hotel-lostproperty.jpg', loc: 'Ludgate Hill', miles: 0.4, room: '1 x Rooftop View Double', bed: 'Double bed', stars: 4, price: 245, cancellation: true, breakfast: true, lat: 51.51353, lng: -0.10128, type: 'Hotel', osm: 'way/107643543' },
    { slug: 'clayton-hotel-city-of-london', name: 'Clayton Hotel City of London', img: 'assets/img/hotel-clayton.jpg', loc: 'Aldgate', miles: 0.8, room: '1 x Classic Double Room', bed: 'Double bed', stars: 4, price: 178, cancellation: true, breakfast: false, lat: 51.5146, lng: -0.0742, type: 'Hotel' },
    { slug: 'the-chamberlain', name: 'The Chamberlain', img: 'assets/img/hotel-chamberlain.jpg', loc: 'Minories', miles: 0.7, room: '1 x Deluxe Double Room', bed: 'Queen size bed', stars: 4, price: 195, cancellation: false, breakfast: true, lat: 51.5121, lng: -0.07569, type: 'Hotel', osm: 'node/675734360' },
    { slug: 'the-counting-house', name: 'The Counting House', img: 'assets/img/hotel-countinghouse.jpg', loc: 'Cornhill', miles: 0.3, room: '1 x Classic Room', bed: 'Double bed', stars: 3, price: 232, cancellation: false, breakfast: false, lat: 51.5132, lng: -0.0862, type: 'Hotel' },
    { slug: 'doubletree-tower-of-london', name: 'DoubleTree by Hilton &ndash; Tower of London', img: 'assets/img/hotel-doubletree.jpg', loc: 'Tower Hill', miles: 0.7, room: '1 x King Room with Thames View', bed: 'King size bed', stars: 5, price: 210, cancellation: true, breakfast: true, lat: 51.511, lng: -0.07829, type: 'Hotel', osm: 'way/141393955' },
    { slug: 'four-seasons-hotel-london-at-ten-trinity-square', name: 'Four Seasons Hotel London at Ten Trinity Square', img: 'assets/img/discover-history.jpg', loc: 'Tower Hill', miles: 0.7, room: '1 x Standard Double Room', bed: 'Double bed', stars: 5, price: 445, cancellation: false, breakfast: false, lat: 51.51036, lng: -0.07833, type: 'Hotel', address: '10 Trinity Square, London, EC3N 4AJ', osm: 'relation/1020011' },
    { slug: 'the-ned', name: 'The Ned', img: 'assets/img/discover-views.jpg', loc: 'Bank', miles: 0.2, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 5, price: 450, cancellation: false, breakfast: false, lat: 51.51372, lng: -0.09008, type: 'Hotel', address: '27 Poultry, London, EC2R 8AJ', osm: 'way/159646583' },
    { slug: 'pan-pacific-london', name: 'Pan Pacific London', img: 'assets/img/cat-stay.jpg', loc: 'Bishopsgate', miles: 0.5, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 5, price: 440, cancellation: true, breakfast: true, lat: 51.5165, lng: -0.08052, type: 'Hotel', address: '80 Houndsditch, London, EC3A 7AB', osm: 'node/3985072936' },
    { slug: 'andaz-london-liverpool-street', name: 'Andaz London Liverpool Street', img: 'assets/img/cat-landmarks.png', loc: 'Liverpool Street', miles: 0.5, room: '1 x Standard Double Room', bed: 'Double bed', stars: 5, price: 505, cancellation: true, breakfast: false, lat: 51.51737, lng: -0.08158, type: 'Hotel', address: '40 Liverpool Street, London, EC2M 7QN', osm: 'way/30806422' },
    { slug: 'hyatt-regency-london-blackfriars', name: 'Hyatt Regency London Blackfriars', img: 'assets/img/cat-landmarks.png', loc: 'Blackfriars', miles: 0.6, room: '1 x Superior King Room', bed: 'King size bed', stars: 5, price: 375, cancellation: true, breakfast: true, lat: 51.51226, lng: -0.10464, type: 'Hotel', address: '19 New Bridge Street, London, EC4V 6DB', osm: 'way/29390379' },
    { slug: 'the-westin-london-city', name: 'The Westin London City', img: 'assets/img/cat-landmarks.png', loc: 'Upper Thames Street', miles: 0.3, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 5, price: 440, cancellation: true, breakfast: false, lat: 51.51104, lng: -0.09524, type: 'Hotel', address: 'Upper Thames Street, London, EC4V 3AD', osm: 'node/11771807570' },
    { slug: 'the-montcalm-at-brewery-london-city', name: 'The Montcalm at Brewery London City', img: 'assets/img/discover-views.jpg', loc: 'Chiswell Street', miles: 0.4, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 5, price: 550, cancellation: true, breakfast: false, lat: 51.5206, lng: -0.09118, type: 'Hotel', address: '52 Chiswell Street, London, EC1Y 4SA', osm: 'node/11528200707' },
    { slug: 'threadneedles-hotel', name: 'Threadneedles Hotel', img: 'assets/img/cat-stay.jpg', loc: 'Bank', miles: 0.3, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 5, price: 380, cancellation: true, breakfast: true, lat: 51.51397, lng: -0.08539, type: 'Hotel', address: '5 Threadneedle Street, London, EC2R 8AY', osm: 'way/219135306' },
    { slug: 'leonardo-royal-hotel-london-city', name: 'Leonardo Royal Hotel London City', img: 'assets/img/discover-views.jpg', loc: 'Tower Hill', miles: 0.8, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 4, price: 265, cancellation: true, breakfast: false, lat: 51.51073, lng: -0.07641, type: 'Hotel', address: '8-14 Cooper\'s Row, London, EC3N 2BQ', osm: 'way/32455185' },
    { slug: 'leonardo-royal-hotel-london-st-paul-s', name: 'Leonardo Royal Hotel London St Paul\'s', img: 'assets/img/cat-landmarks.png', loc: 'St Paul\'s', miles: 0.4, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 4, price: 260, cancellation: false, breakfast: true, lat: 51.51274, lng: -0.09986, type: 'Hotel', address: '10 Godliman Street, London, EC4V 5AJ', osm: 'relation/11192041' },
    { slug: 'apex-city-of-london-hotel', name: 'Apex City of London Hotel', img: 'assets/img/discover-views.jpg', loc: 'Tower Hill', miles: 0.6, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 4, price: 195, cancellation: true, breakfast: false, lat: 51.51061, lng: -0.07938, type: 'Hotel', address: '1 Seething Lane, London, EC3N 4AX', osm: 'node/795788290' },
    { slug: 'apex-temple-court-hotel', name: 'Apex Temple Court Hotel', img: 'assets/img/book-accommodation.webp', loc: 'Fleet Street', miles: 0.7, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 4, price: 295, cancellation: true, breakfast: true, lat: 51.51382, lng: -0.1089, type: 'Hotel', address: '1-2 Serjeants Inn, London, EC4Y 1AG', osm: 'node/2294047321' },
    { slug: 'canopy-by-hilton-london-city', name: 'Canopy by Hilton London City', img: 'assets/img/cat-landmarks.png', loc: 'Minories', miles: 0.7, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 4, price: 295, cancellation: false, breakfast: false, lat: 51.51293, lng: -0.07529, type: 'Hotel', address: '11-15 Minories, London, EC3N 1BJ', osm: 'node/9211258351' },
    { slug: 'hotel-indigo-london-tower-hill', name: 'Hotel Indigo London &ndash; Tower Hill', img: 'assets/img/cat-landmarks.png', loc: 'Minories', miles: 0.7, room: '1 x Standard Double Room', bed: 'Double bed', stars: 4, price: 220, cancellation: true, breakfast: true, lat: 51.51277, lng: -0.07586, type: 'Hotel', address: '142 Minories, London, EC3N 1LS', osm: 'way/143426675' },
    { slug: 'novotel-london-tower-bridge', name: 'Novotel London Tower Bridge', img: 'assets/img/cat-stay.jpg', loc: 'Tower Hill', miles: 0.7, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 4, price: 215, cancellation: true, breakfast: false, lat: 51.51058, lng: -0.07733, type: 'Hotel', address: '10 Pepys Street, London, EC3N 2NR', osm: 'way/435775218' },
    { slug: 'clayton-hotel-london-wall', name: 'Clayton Hotel London Wall', img: 'assets/img/discover-history.jpg', loc: 'Moorgate', miles: 0.2, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 4, price: 295, cancellation: true, breakfast: true, lat: 51.51605, lng: -0.08818, type: 'Hotel', address: '7-9 Copthall Avenue, London, EC2R 7NJ', osm: 'way/160140566' },
    { slug: 'vintry-and-mercer-hotel', name: 'Vintry &amp; Mercer Hotel', img: 'assets/img/cat-landmarks.png', loc: 'Garlick Hill', miles: 0.3, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 4, price: 280, cancellation: false, breakfast: true, lat: 51.51129, lng: -0.09376, type: 'Hotel', address: '19 Garlick Hill, London, EC4V 2AU', osm: 'way/143417429' },
    { slug: 'great-st-helen-hotel', name: 'Great St Helen Hotel', img: 'assets/img/cat-landmarks.png', loc: 'Bishopsgate', miles: 0.4, room: '1 x Superior King Room', bed: 'King size bed', stars: 4, price: 255, cancellation: true, breakfast: true, lat: 51.51494, lng: -0.08252, type: 'Hotel', address: '36 Great St. Helens, London', osm: 'way/1230834784' },
    { slug: 'hotel-saint', name: 'Hotel Saint', img: 'assets/img/discover-history.jpg', loc: 'Aldgate', miles: 0.7, room: '1 x Standard Double Room', bed: 'Double bed', stars: 4, price: 240, cancellation: true, breakfast: true, lat: 51.51422, lng: -0.07596, type: 'Hotel', address: '9 Aldgate High Street, London, EC3N 1AH', osm: 'way/107740119' },
    { slug: 'sir-devonshire-square', name: 'SIR Devonshire Square', img: 'assets/img/book-accommodation.webp', loc: 'Liverpool Street', miles: 0.6, room: '1 x Standard Double Room', bed: 'Double bed', stars: 4, price: 205, cancellation: true, breakfast: false, lat: 51.5164, lng: -0.07782, type: 'Hotel', address: '5 Devonshire Square, London, EC2M 4YE', osm: 'node/13803882086' },
    { slug: 'club-quarters-hotel-gracechurch', name: 'Club Quarters Hotel, Gracechurch', img: 'assets/img/discover-views.jpg', loc: 'Gracechurch Street', miles: 0.4, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 4, price: 240, cancellation: true, breakfast: true, lat: 51.51271, lng: -0.08494, type: 'Hotel', address: '7 Gracechurch Street, London, EC3V 0DR', osm: 'node/692162507' },
    { slug: 'club-quarters-hotel-st-paul-s', name: 'Club Quarters Hotel, St Paul\'s', img: 'assets/img/discover-views.jpg', loc: 'Ludgate Hill', miles: 0.4, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 4, price: 280, cancellation: true, breakfast: false, lat: 51.51416, lng: -0.1011, type: 'Hotel', address: '24 Ludgate Hill, London, EC4M 7DR', osm: 'way/33731291' },
    { slug: 'cove-cannon-street', name: 'Cove Cannon Street', img: 'assets/img/book-accommodation.webp', loc: 'Cannon Street', miles: 0.2, room: '1 x Studio Apartment', bed: 'Queen size bed', stars: 4, price: 295, cancellation: false, breakfast: true, lat: 51.51214, lng: -0.09318, type: 'Apart-hotel', address: 'London', osm: 'node/12051479697' },
    { slug: 'fraser-residence-city', name: 'Fraser Residence City', img: 'assets/img/discover-views.jpg', loc: 'Monument', miles: 0.5, room: '1 x Studio Apartment', bed: 'Queen size bed', stars: 4, price: 235, cancellation: true, breakfast: true, lat: 51.5103, lng: -0.08403, type: 'Apart-hotel', address: 'London', osm: 'node/4579454593' },
    { slug: 'suffolk-lane-by-bridgestreet', name: 'Suffolk Lane by BridgeStreet', img: 'assets/img/cat-landmarks.png', loc: 'Cannon Street', miles: 0.3, room: '1 x One-Bedroom Apartment', bed: 'Double bed', stars: 4, price: 260, cancellation: false, breakfast: false, lat: 51.51097, lng: -0.08924, type: 'Apart-hotel', address: '2 Suffolk Lane, London, EC4R 0AT', osm: 'way/161288702' },
    { slug: 'saco-st-paul-s-red-lion-court', name: 'SACO St Paul\'s &ndash; Red Lion Court', img: 'assets/img/cat-landmarks.png', loc: 'Fleet Street', miles: 0.7, room: '1 x One-Bedroom Apartment', bed: 'Double bed', stars: 4, price: 180, cancellation: true, breakfast: false, lat: 51.51485, lng: -0.10875, type: 'Apart-hotel', address: 'London', osm: 'node/4684898311' },
    { slug: 'crane-court-apartments', name: 'Crane Court Apartments', img: 'assets/img/cat-landmarks.png', loc: 'Fleet Street', miles: 0.7, room: '1 x Studio Apartment', bed: 'Queen size bed', stars: 3, price: 160, cancellation: true, breakfast: false, lat: 51.51439, lng: -0.10915, type: 'Apart-hotel', address: 'London', osm: 'node/4684899173' },
    { slug: 'tower-suites-by-blue-orchid', name: 'Tower Suites by Blue Orchid', img: 'assets/img/cat-landmarks.png', loc: 'Minories', miles: 0.8, room: '1 x Studio Apartment', bed: 'Queen size bed', stars: 4, price: 175, cancellation: false, breakfast: false, lat: 51.51039, lng: -0.07527, type: 'Apart-hotel', address: '100 Minories, London', osm: 'node/12942455779' },
    { slug: 'widegate-apartments', name: 'Widegate Apartments', img: 'assets/img/cat-stay.jpg', loc: 'Liverpool Street', miles: 0.6, room: '1 x One-Bedroom Apartment', bed: 'Double bed', stars: 3, price: 135, cancellation: false, breakfast: false, lat: 51.5182, lng: -0.07848, type: 'Apart-hotel', address: '26a Widegate Street, London, E1 7HP', osm: 'node/13074783201' },
    { slug: 'motel-one-london-tower-hill', name: 'Motel One London Tower Hill', img: 'assets/img/discover-history.jpg', loc: 'Minories', miles: 0.8, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 3, price: 160, cancellation: false, breakfast: true, lat: 51.51273, lng: -0.07516, type: 'Hotel', address: '24-26 Minories, London, EC3N 1BJ', osm: 'way/168325260' },
    { slug: 'z-hotel-city', name: 'Z Hotel City', img: 'assets/img/discover-history.jpg', loc: 'Fleet Street', miles: 0.8, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 3, price: 105, cancellation: true, breakfast: false, lat: 51.51362, lng: -0.1103, type: 'Hotel', address: '23-28 Fleet Street, London, EC4Y 1AA', osm: 'way/161420212' },
    { slug: 'premier-inn-london-blackfriars-fleet-street', name: 'Premier Inn London Blackfriars (Fleet Street)', img: 'assets/img/book-accommodation.webp', loc: 'Blackfriars', miles: 0.6, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 3, price: 140, cancellation: true, breakfast: true, lat: 51.51288, lng: -0.10519, type: 'Hotel', address: '1-2 Dorset Rise, London, EC4Y 8EN', osm: 'node/2137260103' },
    { slug: 'premier-inn-london-bank-tower', name: 'Premier Inn London Bank (Tower)', img: 'assets/img/cat-stay.jpg', loc: 'Monument', miles: 0.6, room: '1 x Superior King Room', bed: 'King size bed', stars: 3, price: 160, cancellation: false, breakfast: false, lat: 51.50951, lng: -0.08363, type: 'Hotel', address: 'St. Mary at Hill, London, EC3R 8EE', osm: 'node/2952883084' },
    { slug: 'premier-inn-london-farringdon-smithfield', name: 'Premier Inn London Farringdon (Smithfield)', img: 'assets/img/discover-history.jpg', loc: 'Smithfield', miles: 0.4, room: '1 x Superior King Room', bed: 'King size bed', stars: 3, price: 165, cancellation: false, breakfast: true, lat: 51.5175, lng: -0.10208, type: 'Hotel', address: '24-30 West Smithfield, London, EC1A 9HB', osm: 'relation/14548261' },
    { slug: 'hub-by-premier-inn-london-tower-bridge', name: 'hub by Premier Inn London Tower Bridge', img: 'assets/img/discover-history.jpg', loc: 'Monument', miles: 0.6, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 3, price: 130, cancellation: false, breakfast: true, lat: 51.50941, lng: -0.08103, type: 'Hotel', address: '28 Great Tower Street, London, EC3R 5AT', osm: 'way/142681450' },
    { slug: 'travelodge-london-central-bank', name: 'Travelodge London Central Bank', img: 'assets/img/book-accommodation.webp', loc: 'Cannon Street', miles: 0.3, room: '1 x Deluxe Double Room', bed: 'Double bed', stars: 3, price: 155, cancellation: true, breakfast: false, lat: 51.51197, lng: -0.0888, type: 'Hotel', address: 'London', osm: 'way/143407590' },
    { slug: 'travelodge-london-liverpool-street', name: 'Travelodge London Liverpool Street', img: 'assets/img/discover-history.jpg', loc: 'Aldgate', miles: 0.6, room: '1 x Classic Queen Room', bed: 'Queen size bed', stars: 3, price: 135, cancellation: true, breakfast: false, lat: 51.51559, lng: -0.0774, type: 'Hotel', address: '1 Harrow Place, London, E1 7DB', osm: 'way/82677869' },
    { slug: 'travelodge-london-central-tower-bridge', name: 'Travelodge London Central Tower Bridge', img: 'assets/img/book-accommodation.webp', loc: 'Aldgate', miles: 0.9, room: '1 x Standard Double Room', bed: 'Double bed', stars: 3, price: 115, cancellation: true, breakfast: false, lat: 51.51102, lng: -0.07354, type: 'Hotel', address: '1 Goodmans Yard, London, E1 8AT', osm: 'way/225107436' },
    { slug: 'yha-london-st-paul-s', name: 'YHA London St Paul\'s', img: 'assets/img/discover-history.jpg', loc: 'St Paul\'s', miles: 0.4, room: '1 x Private Twin Room', bed: 'Two single beds', stars: 2, price: 55, cancellation: true, breakfast: false, lat: 51.51314, lng: -0.10057, type: 'Hostel', address: '36 Carter Lane, London, EC4V 5AB', osm: 'way/118722498' }
  ];
  HOTELS.forEach(function (h) { h.distance = h.miles + ' miles from City of London'; });

  var RESTAURANTS = [
    { name: 'Duck &amp; Waffle', img: 'assets/img/guide-rooftop.jpg', tag: 'Bishopsgate &middot; British', href: 'book-city.html#restaurants', lat: 51.5164, lng: -0.0812 },
    { name: 'Sushisamba London', img: 'assets/img/discover-restaurants.jpg', tag: 'Heron Tower &middot; Japanese-Brazilian', href: 'book-city.html#restaurants', lat: 51.5154, lng: -0.0795 },
    { name: 'The Ned', img: 'assets/img/cat-food-drink.jpg', tag: 'Poultry &middot; Brasserie &amp; Bar', href: 'book-city.html#restaurants', lat: 51.5136, lng: -0.0907 }
  ];

  var SHOWS = [
    { name: 'Barbican Centre', img: 'assets/img/book-shows.png', tag: 'Silk Street', href: 'book-city.html#shows', lat: 51.5202, lng: -0.0938 },
    { name: 'LSO St Luke&rsquo;s', img: 'assets/img/cat-arts-culture.jpg', tag: 'Old Street', href: 'book-city.html#shows', lat: 51.5254, lng: -0.0945 },
    { name: 'Guildhall School of Music &amp; Drama', img: 'assets/img/guide-art.jpg', tag: 'Barbican', href: 'book-city.html#shows', lat: 51.5196, lng: -0.0905 },
    { name: 'Milton Court Concert Hall', img: 'assets/img/guide-evening.jpg', tag: 'Silk Street', href: 'book-city.html#shows', lat: 51.5213, lng: -0.0885 },
    { name: 'St Paul&rsquo;s Cathedral', img: 'assets/img/guide-walks.jpg', tag: 'St Paul&rsquo;s Churchyard', href: 'book-city.html#shows', lat: 51.5138, lng: -0.0984 },
    // Tower of London photo: "Tower of London viewed from the River Thames" by Bob Collowan, CC BY-SA 3.0,
    // https://commons.wikimedia.org/wiki/File:Tower_of_London_viewed_from_the_River_Thames.jpg
    { name: 'Tower of London', img: 'assets/img/attraction-tower-of-london.jpg', credit: 'Photo: Bob Collowan / CC BY-SA 3.0', tag: 'Tower Hill &middot; Historic palace &amp; fortress', href: 'book-city.html#attractions', lat: 51.50806, lng: -0.07594 },
    { name: 'Leadenhall Market Live', img: 'assets/img/guide-friday.jpg', tag: 'Gracechurch Street', href: 'book-city.html#shows', lat: 51.5127, lng: -0.0836 }
  ];

  // Public toilets inside the City of London boundary (OpenStreetMap, Nov 2026). "Near ..." labels are approximate.
  var TOILETS = [
    { name: 'Public toilet', tag: 'Near Liverpool Street station', fee: 'Free', accessible: true, babyChange: false, hours: '', lat: 51.51768, lng: -0.0816, osm: 'node/553308759' },
    { name: 'Public toilet', tag: 'Near Tower Hill', fee: 'Paid', accessible: true, babyChange: false, hours: '', lat: 51.50882, lng: -0.07889, osm: 'node/694510919' },
    { name: 'Public toilet', tag: 'Near St Paul&rsquo;s Cathedral', fee: 'Paid', accessible: true, babyChange: false, hours: 'Mo-Fr 08:00-20:00; Sa,Su,PH 09:00-17:00', lat: 51.51431, lng: -0.09934, osm: 'node/747813217' },
    { name: 'Public toilet', tag: 'Near Paul&rsquo;s Walk (Thames Path)', fee: 'Paid', accessible: false, babyChange: false, hours: '', lat: 51.51088, lng: -0.10061, osm: 'node/1320893735' },
    { name: 'Public toilet', tag: 'Near Cannon Street riverside', fee: 'Paid', accessible: false, babyChange: false, hours: '', lat: 51.5093, lng: -0.0907, osm: 'node/1723656498' },
    { name: 'Public toilet', tag: 'Near Bow Lane', fee: '', accessible: false, babyChange: false, hours: '', lat: 51.51391, lng: -0.09493, osm: 'node/3269358623' },
    { name: 'Public toilet', tag: 'Near Cheapside', fee: '', accessible: false, babyChange: false, hours: '', lat: 51.51347, lng: -0.09525, osm: 'node/3269424658' },
    { name: 'Public toilet', tag: 'Near Liverpool Street concourse', fee: 'Free', accessible: true, babyChange: false, hours: '', lat: 51.51761, lng: -0.08162, osm: 'node/3794539887' },
    { name: 'Public toilet', tag: 'Near Bank', fee: 'Paid', accessible: false, babyChange: false, hours: '', lat: 51.51348, lng: -0.08862, osm: 'node/3906081659' },
    { name: 'Public toilet', tag: 'Near Barbican Centre', fee: 'Free', accessible: true, babyChange: false, hours: '', lat: 51.51993, lng: -0.09332, osm: 'node/10798970431' },
    { name: 'Public toilet', tag: 'Near Cannon Street station', fee: 'Free', accessible: true, babyChange: true, hours: '', lat: 51.51107, lng: -0.09057, osm: 'node/11866295817' },
    { name: 'Public toilet', tag: 'Near Fenchurch Street station', fee: 'Free', accessible: true, babyChange: false, hours: '', lat: 51.51171, lng: -0.07897, osm: 'node/12222287877' },
    { name: 'Public toilet', tag: 'Near Blackfriars station', fee: 'Free', accessible: true, babyChange: true, hours: '00:00-01:00,06:00-24:00', lat: 51.51146, lng: -0.10298, osm: 'node/12662996350' },
    { name: 'Public toilet', tag: 'Near Queen Victoria Street', fee: '', accessible: false, babyChange: false, hours: '', lat: 51.51181, lng: -0.10063, osm: 'node/13901665062' },
    { name: 'Public toilet', tag: 'Near Ludgate Circus', fee: 'Free', accessible: false, babyChange: false, hours: '', lat: 51.51378, lng: -0.10365, osm: 'node/14185899948' },
    { name: 'Public toilet', tag: 'Near Holborn Viaduct', fee: '', accessible: false, babyChange: false, hours: '', lat: 51.51796, lng: -0.1069, osm: 'way/172307738' },
    { name: 'Public toilet', tag: 'Near Bishopsgate', fee: 'Free', accessible: false, babyChange: false, hours: '', lat: 51.518, lng: -0.07974, osm: 'way/837408790' }
  ];

  var CITY_CENTRE = { name: 'City of London', lat: 51.5155, lng: -0.0922 };

  // Simplified City of London boundary (OpenStreetMap relation 51800)
  var CITY_BOUNDARY = [[51.50705,-0.08106],[51.50687,-0.08021],[51.50758,-0.07978],[51.50779,-0.07942],[51.50791,-0.07934],[51.50789,-0.07925],[51.50825,-0.07909],[51.50829,-0.07917],[51.50883,-0.07873],[51.50888,-0.07880],[51.50893,-0.07872],[51.50906,-0.07910],[51.50913,-0.07896],[51.50946,-0.07884],[51.50942,-0.07858],[51.50983,-0.07823],[51.51010,-0.07783],[51.51021,-0.07693],[51.51048,-0.07689],[51.51056,-0.07624],[51.51010,-0.07608],[51.51012,-0.07579],[51.50987,-0.07575],[51.50973,-0.07554],[51.50999,-0.07484],[51.50993,-0.07443],[51.51009,-0.07384],[51.51010,-0.07302],[51.51018,-0.07288],[51.51037,-0.07277],[51.51103,-0.07279],[51.51146,-0.07301],[51.51319,-0.07329],[51.51409,-0.07363],[51.51519,-0.07491],[51.51625,-0.07652],[51.51665,-0.07693],[51.51730,-0.07738],[51.51808,-0.07780],[51.51847,-0.07820],[51.51852,-0.07811],[51.51898,-0.07813],[51.51888,-0.07944],[51.51989,-0.07906],[51.52073,-0.07892],[51.52151,-0.07855],[51.52167,-0.07977],[51.52195,-0.08105],[51.52143,-0.08128],[51.52076,-0.08176],[51.52031,-0.08233],[51.51981,-0.08333],[51.52035,-0.08526],[51.51881,-0.08623],[51.51997,-0.08998],[51.52069,-0.08972],[51.52072,-0.08979],[51.52103,-0.09239],[51.52147,-0.09252],[51.52133,-0.09333],[51.52156,-0.09344],[51.52159,-0.09357],[51.52148,-0.09434],[51.52177,-0.09440],[51.52221,-0.09461],[51.52311,-0.09512],[51.52283,-0.09644],[51.52314,-0.09660],[51.52317,-0.09670],[51.52331,-0.09678],[51.52287,-0.09797],[51.52243,-0.09763],[51.52178,-0.09738],[51.52158,-0.09741],[51.52160,-0.09753],[51.52071,-0.09769],[51.52053,-0.09875],[51.52009,-0.10050],[51.51776,-0.10785],[51.51826,-0.11240],[51.51826,-0.11383],[51.51793,-0.11372],[51.51649,-0.11234],[51.51579,-0.11184],[51.51501,-0.11146],[51.51383,-0.11108],[51.51370,-0.11196],[51.51319,-0.11173],[51.51302,-0.11233],[51.51289,-0.11221],[51.51273,-0.11253],[51.51259,-0.11242],[51.51263,-0.11231],[51.51240,-0.11212],[51.51234,-0.11207],[51.51230,-0.11219],[51.51199,-0.11191],[51.51202,-0.11179],[51.51180,-0.11158],[51.51091,-0.11160],[51.50977,-0.11147],[51.50990,-0.10792],[51.50987,-0.10463],[51.50966,-0.10464],[51.50963,-0.10474],[51.50960,-0.10464],[51.50912,-0.10466],[51.50910,-0.10475],[51.50907,-0.10466],[51.50856,-0.10472],[51.50841,-0.10468],[51.50842,-0.10421],[51.50855,-0.10415],[51.50863,-0.10419],[51.50906,-0.10417],[51.50909,-0.10408],[51.50911,-0.10417],[51.50959,-0.10416],[51.50962,-0.10404],[51.50965,-0.10415],[51.50986,-0.10415],[51.50981,-0.10159],[51.50953,-0.09773],[51.50928,-0.09573],[51.50836,-0.09193],[51.50788,-0.08775],[51.50769,-0.08519],[51.50705,-0.08106]];

  function toISODate(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function defaultDates() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return { checkin: toISODate(today), checkout: toISODate(tomorrow) };
  }

  function shortDate(value) {
    var d = new Date(value + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  // search-results.html URL with today -> tomorrow, 1 room, 2 adults, opened in map view
  function searchUrl(extra) {
    var dates = defaultDates();
    var p = new URLSearchParams({
      destination: 'City of London, UK',
      checkin: dates.checkin,
      checkout: dates.checkout,
      rooms: '1',
      adults: '2',
      children: '0',
      view: 'map'
    });
    if (extra) Object.keys(extra).forEach(function (k) { p.set(k, extra[k]); });
    return 'search-results.html?' + p.toString();
  }

  var BED_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/></svg>';
  var FORK_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 3c-2 0-3 2-3 6s1 4 3 4v8"/></svg>';
  var TICKET_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3z" transform="translate(0 2)"/></svg>';
  var WC_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="4.5" r="1.8"/><circle cx="17" cy="4.5" r="1.8"/><path d="M5 22v-7H4l1-7h4l1 7H9v7M17 22v-6M15 9h4l1 6h-6z"/></svg>';
  var ICONS = { hotels: BED_SVG, restaurants: FORK_SVG, shows: TICKET_SVG, toilets: WC_SVG };

  function addTiles(map) {
    // Esri tiles need no API key and load from file:// (CARTO/OSM reject requests without a referrer)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);
  }

  function priceIcon(h) {
    return L.divIcon({
      className: 'map-pin-anchor',
      iconSize: null,
      html: '<span class="map-pin" data-slug="' + h.slug + '">' + BED_SVG + '&pound;' + h.price + '</span>'
    });
  }

  // Icon-only hotel pin (no price) for the book-city preview
  function hotelIcon(h) {
    return L.divIcon({
      className: 'map-pin-anchor',
      iconSize: null,
      html: '<span class="map-pin map-pin--round map-pin--hotel" data-slug="' + h.slug + '">' + BED_SVG + '</span>'
    });
  }

  function venueIcon(cat, id) {
    return L.divIcon({
      className: 'map-pin-anchor',
      iconSize: null,
      html: '<span class="map-pin map-pin--round map-pin--' + cat + '" data-id="' + id + '">' + ICONS[cat] + '</span>'
    });
  }

  function addCentreMarker(map) {
    return L.marker([CITY_CENTRE.lat, CITY_CENTRE.lng], {
      interactive: false,
      keyboard: false,
      zIndexOffset: -1000,
      icon: L.divIcon({ className: 'map-pin-anchor', iconSize: null, html: '<span class="map-centre"><i></i>City of London</span>' })
    }).addTo(map);
  }

  function addBoundary(map) {
    return L.polygon(CITY_BOUNDARY, {
      interactive: false, color: '#0A2D50', weight: 2, opacity: 0.7, dashArray: '6 6',
      fillColor: '#FDE52B', fillOpacity: 0.08
    }).addTo(map);
  }

  // Groups nearby pins into a count bubble when zoomed out; individual pins appear as you zoom in
  function clusterGroup(opts) {
    if (!L.markerClusterGroup) return L.layerGroup();
    return L.markerClusterGroup(Object.assign({
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      maxClusterRadius: 50,
      disableClusteringAtZoom: 17,
      iconCreateFunction: function (cluster) {
        return L.divIcon({
          className: 'map-pin-anchor',
          iconSize: null,
          html: '<span class="map-cluster">' + (opts && opts.iconHtml ? opts.iconHtml() : BED_SVG) + cluster.getChildCount() + '</span>'
        });
      }
    }, opts || {}));
  }

  function hotelBounds() {
    return L.latLngBounds(HOTELS.map(function (h) { return [h.lat, h.lng]; }).concat([[CITY_CENTRE.lat, CITY_CENTRE.lng]]));
  }

  // Static (non-interactive) map teaser on book-city.html
  function initPreviews() {
    var previews = document.querySelectorAll('[data-map-preview]');
    if (!previews.length || !w.L) return;
    var dates = defaultDates();

    previews.forEach(function (el) {
      var canvas = el.querySelector('.map-preview-canvas');
      var map = L.map(canvas, {
        zoomSnap: 0.25,
        dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false,
        keyboard: false, touchZoom: false, zoomControl: false, attributionControl: true
      });
      addTiles(map);
      map.fitBounds(hotelBounds(), { padding: [40, 40] });
      addCentreMarker(map);
      addBoundary(map);
      var group = clusterGroup({ maxClusterRadius: 28, zoomToBoundsOnClick: false, spiderfyOnMaxZoom: false });
      HOTELS.forEach(function (h) {
        group.addLayer(L.marker([h.lat, h.lng], { icon: hotelIcon(h), keyboard: false, interactive: false }));
      });
      map.addLayer(group);

      var link = el.querySelector('[data-map-link]');
      if (link) link.href = searchUrl();

      var info = el.querySelector('[data-map-info]');
      if (info) info.innerHTML = shortDate(dates.checkin) + ' &ndash; ' + shortDate(dates.checkout) + ' &middot; 1 night &middot; 2 adults';

      // The preview is a static picture under a blurred overlay; clicking anywhere opens the map view
      el.addEventListener('click', function (e) {
        if (e.target.closest('.leaflet-control-attribution, [data-map-link]')) return;
        window.location.href = searchUrl();
      });

      w.addEventListener('resize', function () { map.fitBounds(hotelBounds(), { padding: [40, 40] }); });
    });
  }

  w.CityMap = {
    HOTELS: HOTELS,
    RESTAURANTS: RESTAURANTS,
    SHOWS: SHOWS,
    TOILETS: TOILETS,
    CITY_CENTRE: CITY_CENTRE,
    CITY_BOUNDARY: CITY_BOUNDARY,
    addBoundary: addBoundary,
    clusterGroup: clusterGroup,
    ICONS: ICONS,
    toISODate: toISODate,
    defaultDates: defaultDates,
    searchUrl: searchUrl,
    addTiles: addTiles,
    priceIcon: priceIcon,
    hotelIcon: hotelIcon,
    venueIcon: venueIcon,
    addCentreMarker: addCentreMarker,
    hotelBounds: hotelBounds,
    initPreviews: initPreviews
  };
})(window);
