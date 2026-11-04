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

  // Transport: tube stations in and around the City, bus stops inside the boundary (OpenStreetMap / NaPTAN, Nov 2026),
  // London airports and Eurostar. "kind" drives the sub-filter chips on the Transport tab.
  var TRANSPORT = [
    { kind: 'tube', name: 'Bank', tag: 'Central &middot; Northern &middot; Waterloo &amp; City &middot; DLR', lat: 51.5131, lng: -0.08937, osm: 'node/1637578440' },
    { kind: 'tube', name: 'Monument', tag: 'District &middot; Circle (linked to Bank)', lat: 51.51063, lng: -0.08613, osm: 'node/3076574237' },
    { kind: 'tube', name: 'Mansion House', tag: 'District &middot; Circle', lat: 51.51189, lng: -0.09522, osm: 'node/18395696' },
    { kind: 'tube', name: 'Cannon Street', tag: 'District &middot; Circle &middot; National Rail', lat: 51.51138, lng: -0.09036, osm: 'node/3637449659' },
    { kind: 'tube', name: 'St Paul&rsquo;s', tag: 'Central', lat: 51.51491, lng: -0.09759, osm: 'node/5475675298' },
    { kind: 'tube', name: 'Blackfriars', tag: 'District &middot; Circle &middot; Thameslink', lat: 51.51159, lng: -0.10377, osm: 'node/3763522921' },
    { kind: 'tube', name: 'Liverpool Street', tag: 'Central &middot; Circle &middot; Metropolitan &middot; H&amp;C &middot; Elizabeth line', lat: 51.51768, lng: -0.08252, osm: 'node/3637436407' },
    { kind: 'tube', name: 'Moorgate', tag: 'Northern &middot; Circle &middot; Metropolitan &middot; H&amp;C &middot; Elizabeth line', lat: 51.51825, lng: -0.08906, osm: 'node/5702714876' },
    { kind: 'tube', name: 'Barbican', tag: 'Circle &middot; Metropolitan &middot; Hammersmith &amp; City', lat: 51.52018, lng: -0.09863, osm: 'node/3076573910' },
    { kind: 'tube', name: 'Aldgate', tag: 'Circle &middot; Metropolitan', lat: 51.51425, lng: -0.07572, osm: 'node/3788735981' },
    { kind: 'tube', name: 'Tower Hill', tag: 'District &middot; Circle', lat: 51.50985, lng: -0.0767, osm: 'node/6260922569' },
    { kind: 'tube', name: 'Aldgate East', tag: 'District &middot; Hammersmith &amp; City', lat: 51.51562, lng: -0.07084, osm: 'node/4984999298' },
    { kind: 'tube', name: 'Temple', tag: 'District &middot; Circle', lat: 51.51097, lng: -0.11433, osm: 'node/6368951709' },
    { kind: 'tube', name: 'Chancery Lane', tag: 'Central', lat: 51.51817, lng: -0.11176, osm: 'node/3076573915' },
    { kind: 'tube', name: 'Farringdon', tag: 'Circle &middot; Metropolitan &middot; H&amp;C &middot; Elizabeth line &middot; Thameslink', lat: 51.51996, lng: -0.10455, osm: 'node/3284103165' },
    { kind: 'tube', name: 'London Bridge', tag: 'Jubilee &middot; Northern &middot; National Rail', lat: 51.50541, lng: -0.0887, osm: 'node/5182456569' },
    { kind: 'tube', name: 'Old Street', tag: 'Northern &middot; National Rail', lat: 51.52563, lng: -0.08761, osm: 'node/70804547' },
    { kind: 'bus', name: 'Aldgate Bus Station', tag: 'Stop L &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51387, lng: -0.07534, osm: 'node/3231501610' },
    { kind: 'bus', name: 'Aldgate Station', tag: '', facts: 'Shelter &middot; Seating', lat: 51.51353, lng: -0.07522, osm: 'node/6548782931' },
    { kind: 'bus', name: 'Aldgate Station', tag: 'Stop D', facts: 'Shelter', lat: 51.51429, lng: -0.07481, osm: 'node/3855607515' },
    { kind: 'bus', name: 'Aldgate Station', tag: 'Stop R &middot; Aldgate High Street &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51415, lng: -0.07476, osm: 'node/469759897' },
    { kind: 'bus', name: 'All Hallows Church', tag: 'Stop U', facts: '', lat: 51.51669, lng: -0.08485, osm: 'node/1594065358' },
    { kind: 'bus', name: 'Apothecary Street', tag: 'Stop K &middot; New Bridge Street &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.5135, lng: -0.10414, osm: 'node/469759971' },
    { kind: 'bus', name: 'Baltic Street West', tag: 'Stop BP &middot; Goswell Road &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.52221, lng: -0.0974, osm: 'node/2118706166' },
    { kind: 'bus', name: 'Bank Station / Cornhill', tag: 'Stop D &middot; eastbound', facts: '', lat: 51.51336, lng: -0.08746, osm: 'node/469759939' },
    { kind: 'bus', name: 'Bank Station / Cornhill', tag: 'Stop E &middot; westbound', facts: '', lat: 51.51328, lng: -0.08761, osm: 'node/469759940' },
    { kind: 'bus', name: 'Bank Station / King William Street', tag: 'Stop F &middot; north-east', facts: '', lat: 51.51223, lng: -0.08802, osm: 'node/469759941' },
    { kind: 'bus', name: 'Bank Station / Poultry', tag: 'Stop K &middot; Cheapside &middot; eastbound', facts: '', lat: 51.51376, lng: -0.09161, osm: 'node/469771225' },
    { kind: 'bus', name: 'Bank Station / Princes Street', tag: 'Stop A &middot; Princes Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51425, lng: -0.08962, osm: 'node/469777308' },
    { kind: 'bus', name: 'Bank Station / Princes Street', tag: 'Stop B &middot; Princes Street &middot; southbound', facts: '', lat: 51.51401, lng: -0.08926, osm: 'node/469777309' },
    { kind: 'bus', name: 'Barbican Station', tag: 'Stop BA &middot; Aldersgate Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.52046, lng: -0.09757, osm: 'node/4703542478' },
    { kind: 'bus', name: 'Barbican Station', tag: 'Stop BB &middot; Aldersgate Street &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.52087, lng: -0.09732, osm: 'node/4703542479' },
    { kind: 'bus', name: 'Beech Street', tag: 'Stop BN &middot; Beech Street &middot; eastbound', facts: 'Shelter', lat: 51.52077, lng: -0.09417, osm: 'node/469764402' },
    { kind: 'bus', name: 'Bishopsgate', tag: 'Stop N &middot; Camomile Street &middot; northbound', facts: '', lat: 51.51591, lng: -0.08117, osm: 'node/469765562' },
    { kind: 'bus', name: 'Bishopsgate', tag: 'Stop R &middot; Cornhill &middot; eastbound', facts: '', lat: 51.51345, lng: -0.08499, osm: 'node/469786574' },
    { kind: 'bus', name: 'Blackfriars Station', tag: 'Stop A &middot; eastbound', facts: '', lat: 51.51222, lng: -0.10252, osm: 'node/469759968' },
    { kind: 'bus', name: 'Blackfriars Station', tag: 'Stop B &middot; Queen Victoria Street &middot; westbound', facts: '', lat: 51.51201, lng: -0.10275, osm: 'node/469759969' },
    { kind: 'bus', name: 'Blackfriars Station / North Entrance', tag: 'Stop J &middot; --- &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51239, lng: -0.10428, osm: 'node/469759970' },
    { kind: 'bus', name: 'Blackfriars Station / North Entrance', tag: 'Stop L &middot; southbound', facts: '', lat: 51.51066, lng: -0.10417, osm: 'node/317316891' },
    { kind: 'bus', name: 'Blackfriars Station / South Entrance', tag: 'Stop C &middot; Blackfriars Bridge &middot; northbound', facts: '', lat: 51.50883, lng: -0.10451, osm: 'node/469785734' },
    { kind: 'bus', name: 'Blackfriars Station / South Entrance', tag: 'Stop D &middot; Blackfriars Bridge &middot; southbound', facts: 'Shelter', lat: 51.50843, lng: -0.10428, osm: 'node/469785737' },
    { kind: 'bus', name: 'Bread Street', tag: 'Stop SN &middot; Cheapside &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.5142, lng: -0.09498, osm: 'node/469786650' },
    { kind: 'bus', name: 'Camomile Street', tag: 'Stop W &middot; Bishopsgate &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51583, lng: -0.08212, osm: 'node/469765563' },
    { kind: 'bus', name: 'Camomile Street', tag: 'Stop Y &middot; Bishopsgate &middot; southbound', facts: 'Shelter', lat: 51.51546, lng: -0.08223, osm: 'node/4827019219' },
    { kind: 'bus', name: 'Cannon Street Station', tag: 'Stop 47 &middot; eastbound', facts: '', lat: 51.5104, lng: -0.09015, osm: 'node/469765319' },
    { kind: 'bus', name: 'Cannon Street Station', tag: 'Stop MA &middot; westbound', facts: '', lat: 51.5113, lng: -0.08902, osm: 'node/469781056' },
    { kind: 'bus', name: 'Cannon Street Station', tag: 'Stop MB &middot; eastbound', facts: '', lat: 51.51184, lng: -0.09112, osm: 'node/469781057' },
    { kind: 'bus', name: 'Chancery Lane', tag: 'Fleet Street &middot; westbound', facts: '', lat: 51.51386, lng: -0.11043, osm: 'node/469786564' },
    { kind: 'bus', name: 'Chancery Lane Station', tag: 'Stop F &middot; High Holborn &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.5182, lng: -0.11223, osm: 'node/469781068' },
    { kind: 'bus', name: 'City Thameslink Station', tag: 'Holborn Viaduct &middot; westbound', facts: 'Seating', lat: 51.51639, lng: -0.10252, osm: 'node/6124650605' },
    { kind: 'bus', name: 'City Thameslink Station', tag: 'Stop HK &middot; Holborn Viaduct &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.5165, lng: -0.10289, osm: 'node/469761894' },
    { kind: 'bus', name: 'City Thameslink Station', tag: 'Stop HL &middot; Holborn Viaduct &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.51693, lng: -0.10369, osm: 'node/469761891' },
    { kind: 'bus', name: 'City Thameslink Station / Ludgate Circus', tag: 'Stop F &middot; Ludgate Hill &middot; northbound', facts: '', lat: 51.51409, lng: -0.10358, osm: 'node/3650157681' },
    { kind: 'bus', name: 'Duke&rsquo;s Place', tag: 'Stop A &middot; Duke&rsquo;s Place &middot; northbound', facts: '', lat: 51.51459, lng: -0.07859, osm: 'node/469767991' },
    { kind: 'bus', name: 'Eldon Street', tag: 'Stop V &middot; Eldon Street &middot; eastbound', facts: '', lat: 51.51861, lng: -0.0855, osm: 'node/469786703' },
    { kind: 'bus', name: 'Fenchurch Street', tag: 'Stop M &middot; Gracechurch Street &middot; northbound', facts: '', lat: 51.51225, lng: -0.08498, osm: 'node/469760420' },
    { kind: 'bus', name: 'Fenchurch Street', tag: 'Stop U &middot; Gracechurch Street &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51135, lng: -0.08539, osm: 'node/469760422' },
    { kind: 'bus', name: 'Fetter Lane', tag: 'Fleet Street &middot; eastbound', facts: '', lat: 51.51422, lng: -0.10873, osm: 'node/469768911' },
    { kind: 'bus', name: 'Fetter Lane', tag: 'Fleet Street &middot; westbound', facts: '', lat: 51.51415, lng: -0.10832, osm: 'node/469768912' },
    { kind: 'bus', name: 'Fleet Street / City Thameslink', tag: 'Stop L &middot; Farringdon Street &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51489, lng: -0.10436, osm: 'node/469781023' },
    { kind: 'bus', name: 'Fleet Street / City Thameslink', tag: 'Stop M &middot; Farringdon Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51527, lng: -0.10468, osm: 'node/21687803' },
    { kind: 'bus', name: 'Gracechurch Street / Monument Station', tag: 'Stop T &middot; Gracechurch Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51137, lng: -0.08558, osm: 'node/469760421' },
    { kind: 'bus', name: 'Great Swan Alley', tag: 'Moorgate &middot; northbound', facts: '', lat: 51.51599, lng: -0.08912, osm: 'node/469770105' },
    { kind: 'bus', name: 'Great Tower Street', tag: 'Stop TT &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.50995, lng: -0.0815, osm: 'node/469770109' },
    { kind: 'bus', name: 'Great Tower Street', tag: 'Stop TU &middot; northbound', facts: '', lat: 51.50993, lng: -0.08117, osm: 'node/469770107' },
    { kind: 'bus', name: 'Holborn Circus', tag: '', facts: '', lat: 51.51803, lng: -0.10674, osm: 'node/6108171364' },
    { kind: 'bus', name: 'Holborn Circus', tag: 'Stop K &middot; Holborn Viaduct &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51757, lng: -0.106, osm: 'node/469771426' },
    { kind: 'bus', name: 'Holborn Circus', tag: 'Stop L &middot; Holborn Viaduct &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51752, lng: -0.10653, osm: 'node/469786587' },
    { kind: 'bus', name: 'Holborn Circus / Fetter Lane', tag: 'Stop G &middot; Holborn &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51775, lng: -0.10875, osm: 'node/469771412' },
    { kind: 'bus', name: 'Holborn Circus / Fetter Lane', tag: 'Stop H &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51782, lng: -0.10938, osm: 'node/469771417' },
    { kind: 'bus', name: 'Houndsditch', tag: 'Stop M &middot; Houndsditch &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51603, lng: -0.07971, osm: 'node/469772121' },
    { kind: 'bus', name: 'King Edward Street', tag: 'Stop ST &middot; Newgate Street &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.51577, lng: -0.0999, osm: 'node/469761239' },
    { kind: 'bus', name: 'King Edward Street / St Paul&rsquo;s Station', tag: 'Stop SX &middot; King Edward Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51656, lng: -0.09863, osm: 'node/469773003' },
    { kind: 'bus', name: 'King William Street / Monument Station', tag: 'Stop G &middot; King William Street &middot; southbound', facts: '', lat: 51.51141, lng: -0.08714, osm: 'node/469760418' },
    { kind: 'bus', name: 'Little Britain', tag: 'Stop SV', facts: '', lat: 51.51763, lng: -0.09803, osm: 'node/3625307789' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: '', facts: '', lat: 51.51802, lng: -0.0828, osm: 'node/5091608014' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop A &middot; Sun Street Passage &middot; southbound', facts: '', lat: 51.51788, lng: -0.08269, osm: 'node/469760984' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop B &middot; Sun Street Passage &middot; southbound', facts: '', lat: 51.51804, lng: -0.0826, osm: 'node/469760985' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop C &middot; Sun Street Passage &middot; southbound', facts: '', lat: 51.51813, lng: -0.08255, osm: 'node/469760986' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop D &middot; Sun Street Passage &middot; southbound', facts: '', lat: 51.51825, lng: -0.0825, osm: 'node/469760987' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop E &middot; Bishopsgate &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51808, lng: -0.07996, osm: 'node/469760988' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop F &middot; Bishopsgate &middot; northbound', facts: '', lat: 51.51743, lng: -0.08061, osm: 'node/25477351' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop G &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51856, lng: -0.07975, osm: 'node/469761438' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop K &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51726, lng: -0.08057, osm: 'node/469761435' },
    { kind: 'bus', name: 'Liverpool Street Station', tag: 'Stop L &middot; Bishopsgate &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51787, lng: -0.07995, osm: 'node/3507382907' },
    { kind: 'bus', name: 'Liverpool Street Station (Airport coaches)', tag: 'Stop G', facts: 'Shelter &middot; Seating', lat: 51.5196, lng: -0.07925, osm: 'node/10012734718' },
    { kind: 'bus', name: 'London Bridge', tag: 'Stop 49 &middot; westbound', facts: '', lat: 51.50966, lng: -0.08758, osm: 'node/469765320' },
    { kind: 'bus', name: 'London Wall', tag: 'Moorgate &middot; northbound', facts: '', lat: 51.51558, lng: -0.08943, osm: 'node/469774548' },
    { kind: 'bus', name: 'London Wall', tag: 'Stop BE &middot; London Wall &middot; eastbound', facts: '', lat: 51.51758, lng: -0.0952, osm: 'node/469776893' },
    { kind: 'bus', name: 'London Wall', tag: 'Stop BH &middot; London Wall &middot; westbound', facts: '', lat: 51.5174, lng: -0.09512, osm: 'node/469776898' },
    { kind: 'bus', name: 'London Wall / Moorgate Station', tag: 'Stop A &middot; London Wall &middot; eastbound', facts: '', lat: 51.51759, lng: -0.08975, osm: 'node/3625306718' },
    { kind: 'bus', name: 'Ludgate Circus', tag: 'Stop E &middot; Fleet Street &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.51425, lng: -0.10534, osm: 'node/469779904' },
    { kind: 'bus', name: 'Ludgate Hill / Old Bailey', tag: 'Stop G &middot; Ludgate Hill &middot; northbound', facts: '', lat: 51.51395, lng: -0.1019, osm: 'node/469773446' },
    { kind: 'bus', name: 'Mansell Street', tag: 'Stop S &middot; Mansell Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51282, lng: -0.0733, osm: 'node/469774429' },
    { kind: 'bus', name: 'Mansion House Station', tag: 'Stop ME &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.51266, lng: -0.09482, osm: 'node/469761460' },
    { kind: 'bus', name: 'Mansion House Station', tag: 'Stop MS &middot; westbound', facts: '', lat: 51.51212, lng: -0.09469, osm: 'node/469761461' },
    { kind: 'bus', name: 'Millennium Bridge', tag: 'Stop SF &middot; Queen Victoria Street &middot; westbound', facts: '', lat: 51.51188, lng: -0.09796, osm: 'node/469788642' },
    { kind: 'bus', name: 'Millennium Bridge', tag: 'Stop SG &middot; Queen Victoria Street &middot; eastbound', facts: '', lat: 51.51205, lng: -0.09922, osm: 'node/469788640' },
    { kind: 'bus', name: 'Minories', tag: 'Stop H', facts: '', lat: 51.51277, lng: -0.07556, osm: 'node/469759895' },
    { kind: 'bus', name: 'Monument Station', tag: 'Stop H &middot; Eastcheap &middot; eastbound', facts: '', lat: 51.51079, lng: -0.08491, osm: 'node/469760419' },
    { kind: 'bus', name: 'Monument Station', tag: 'Stop J &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51068, lng: -0.08517, osm: 'node/469760423' },
    { kind: 'bus', name: 'Moorgate Station', tag: 'Stop B &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51863, lng: -0.08813, osm: 'node/469760424' },
    { kind: 'bus', name: 'Moorgate Station', tag: 'Stop L &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51779, lng: -0.08841, osm: 'node/469760425' },
    { kind: 'bus', name: 'Moorgate Station', tag: 'Stop N &middot; London Wall &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51743, lng: -0.08999, osm: 'node/3625306717' },
    { kind: 'bus', name: 'Museum of London', tag: 'Stop BC &middot; Aldersgate Street &middot; northbound', facts: '', lat: 51.51887, lng: -0.09724, osm: 'node/469776895' },
    { kind: 'bus', name: 'Museum of London', tag: 'Stop BD &middot; Aldersgate Street &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51837, lng: -0.09684, osm: 'node/4826448084' },
    { kind: 'bus', name: 'New Change / Cannon Street', tag: 'Stop SL &middot; New Change &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51387, lng: -0.09658, osm: 'node/441958991' },
    { kind: 'bus', name: 'New Change / Cannon Street', tag: 'Stop SM &middot; New Change &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51349, lng: -0.09627, osm: 'node/469777023' },
    { kind: 'bus', name: 'Poultry / Bank Station', tag: 'Stop L &middot; northbound', facts: '', lat: 51.51356, lng: -0.09109, osm: 'node/469771226' },
    { kind: 'bus', name: 'Primrose Street', tag: 'Stop H &middot; Bishopsgate &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51995, lng: -0.07913, osm: 'node/469778583' },
    { kind: 'bus', name: 'Queen Street Place', tag: 'Queen Street Place &middot; northbound', facts: '', lat: 51.50997, lng: -0.09331, osm: 'node/469778107' },
    { kind: 'bus', name: 'Rood Lane', tag: 'Stop W &middot; Fenchurch Street &middot; eastbound', facts: '', lat: 51.51162, lng: -0.08264, osm: 'node/469777701' },
    { kind: 'bus', name: 'Rood Lane', tag: 'Stop Y &middot; Fenchurch Street &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51156, lng: -0.08216, osm: 'node/469777702' },
    { kind: 'bus', name: 'Shoe Lane', tag: 'Stop H &middot; Fleet Street &middot; westbound', facts: '', lat: 51.51414, lng: -0.10668, osm: 'node/469779905' },
    { kind: 'bus', name: 'Silk Street', tag: 'Stop BM &middot; westbound', facts: '', lat: 51.52094, lng: -0.09173, osm: 'node/1723340818' },
    { kind: 'bus', name: 'Snow Hill', tag: 'Stop HS &middot; Farringdon Street &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51803, lng: -0.10534, osm: 'node/469765707' },
    { kind: 'bus', name: 'Snow Hill', tag: 'Stop HT &middot; Farringdon Street &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51799, lng: -0.10513, osm: 'node/251952339' },
    { kind: 'bus', name: 'St Andrew Street', tag: 'St Andrew Street &middot; southbound', facts: '', lat: 51.51685, lng: -0.10674, osm: 'node/469782014' },
    { kind: 'bus', name: 'St Bartholomew&rsquo;s Hospital', tag: 'Stop HQ &middot; West Smithfield &middot; southbound', facts: 'Shelter', lat: 51.51748, lng: -0.10126, osm: 'node/469781018' },
    { kind: 'bus', name: 'St Botolph Street', tag: 'Stop B &middot; St Botolph Street &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.51493, lng: -0.07522, osm: 'node/469759894' },
    { kind: 'bus', name: 'St Katharine Cree', tag: 'Stop W &middot; Leadenhall Street &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51326, lng: -0.07916, osm: 'node/469781746' },
    { kind: 'bus', name: 'St Katharine Cree', tag: 'Stop X &middot; Leadenhall Street &middot; eastbound', facts: '', lat: 51.51332, lng: -0.07873, osm: 'node/469781745' },
    { kind: 'bus', name: 'St Mary Axe', tag: 'Stop LR &middot; eastbound', facts: '', lat: 51.51352, lng: -0.0827, osm: 'node/469781266' },
    { kind: 'bus', name: 'St Mary Axe', tag: 'Stop Z &middot; westbound', facts: '', lat: 51.51344, lng: -0.08241, osm: 'node/469781267' },
    { kind: 'bus', name: 'St Paul&rsquo;s Cathedral', tag: 'Stop SJ &middot; St Paul&rsquo;s Churchyard &middot; westbound', facts: '', lat: 51.51332, lng: -0.09958, osm: 'node/469781401' },
    { kind: 'bus', name: 'St Paul&rsquo;s Cathedral', tag: 'Stop SK &middot; eastbound', facts: '', lat: 51.5132, lng: -0.09761, osm: 'node/469781398' },
    { kind: 'bus', name: 'St Paul&rsquo;s Churchyard', tag: 'Stop SH &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51304, lng: -0.09748, osm: 'node/469777024' },
    { kind: 'bus', name: 'St Paul&rsquo;s Station', tag: 'Stop SQ &middot; Newgate Street &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51552, lng: -0.09949, osm: 'node/441966148' },
    { kind: 'bus', name: 'St Paul&rsquo;s Station', tag: 'Stop SW &middot; St Martin&rsquo;s Le Grand &middot; southbound', facts: '', lat: 51.51557, lng: -0.09708, osm: 'node/469761242' },
    { kind: 'bus', name: 'St Paul&rsquo;s Station', tag: 'Stop SY &middot; Cheapside &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.51443, lng: -0.09569, osm: 'node/469761244' },
    { kind: 'bus', name: 'Temple Avenue', tag: 'Victoria Embankment &middot; eastbound', facts: 'Shelter &middot; Seating', lat: 51.5111, lng: -0.10933, osm: 'node/469772779' },
    { kind: 'bus', name: 'Temple Avenue', tag: 'Victoria Embankment &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51101, lng: -0.11022, osm: 'node/469774928' },
    { kind: 'bus', name: 'Threadneedle Street', tag: 'Stop LN &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51413, lng: -0.0839, osm: 'node/469774062' },
    { kind: 'bus', name: 'Threadneedle Street', tag: 'Stop S &middot; southbound', facts: 'Shelter &middot; Seating', lat: 51.51384, lng: -0.0839, osm: 'node/469774063' },
    { kind: 'bus', name: 'Tower Gateway Station', tag: 'Stop TC &middot; Minories &middot; northbound', facts: '', lat: 51.5108, lng: -0.07514, osm: 'node/469762510' },
    { kind: 'bus', name: 'Tower Gateway Station', tag: 'Stop TD &middot; Minories &middot; northbound', facts: 'Shelter &middot; Seating', lat: 51.51046, lng: -0.07505, osm: 'node/469762509' },
    { kind: 'bus', name: 'Wormwood Street', tag: 'Stop P &middot; Wormwood Street &middot; northbound', facts: '', lat: 51.51631, lng: -0.08221, osm: 'node/469765564' },
    { kind: 'bus', name: 'Wormwood Street', tag: 'Stop Q &middot; Wormwood Street &middot; westbound', facts: 'Shelter &middot; Seating', lat: 51.51619, lng: -0.08267, osm: 'node/469765565' },
    { kind: 'bus', name: 'Worship Street', tag: 'Worship Street &middot; eastbound', facts: '', lat: 51.5218, lng: -0.08064, osm: 'node/469786700' },
    { kind: 'airport', name: 'Heathrow Airport (LHR)', tag: 'Elizabeth line from Liverpool Street or Farringdon', lat: 51.47, lng: -0.45431 },
    { kind: 'airport', name: 'London City Airport (LCY)', tag: 'DLR from Bank or Tower Gateway', lat: 51.50477, lng: 0.04953 },
    { kind: 'airport', name: 'Gatwick Airport (LGW)', tag: 'Thameslink from City Thameslink or Blackfriars', lat: 51.15372, lng: -0.18208 },
    { kind: 'airport', name: 'Stansted Airport (STN)', tag: 'Stansted Express from Liverpool Street', lat: 51.88602, lng: 0.23888 },
    { kind: 'airport', name: 'Luton Airport (LTN)', tag: 'Thameslink from City Thameslink or Farringdon', lat: 51.87468, lng: -0.36828 },
    { kind: 'eurostar', name: 'Eurostar &ndash; St Pancras International', tag: 'Paris, Brussels, Amsterdam &middot; Thameslink from Farringdon or Circle/Metropolitan from Moorgate', lat: 51.53151, lng: -0.12631 }
  ];

  // Event venues
  var VENUES = [
    { name: 'Mansion House', tag: 'Bank &middot; Lord Mayor&rsquo;s residence &amp; events', lat: 51.51297, lng: -0.08948, osm: 'way/33695114' },
    { name: 'Tobacco Dock', tag: 'Wapping &middot; Events &amp; conference venue', lat: 51.5084, lng: -0.05947, osm: 'relation/12218448' },
    { name: 'ExCeL London', tag: 'Royal Victoria Dock &middot; Exhibition &amp; convention centre', lat: 51.50814, lng: 0.02955 }
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
  var TUBE_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="6.5"/><path d="M2.5 12h19"/></svg>';
  var BUS_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="15" rx="2"/><path d="M5 11h14M8 18v3M16 18v3"/><circle cx="8.5" cy="14.5" r=".8" fill="currentColor"/><circle cx="15.5" cy="14.5" r=".8" fill="currentColor"/></svg>';
  var PLANE_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 21l1.5-1.5 1.5 1.5v-3l-1.5-1V13l8 3v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-3v4l-1.5 1z" transform="translate(1.5 0)"/></svg>';
  var TRAIN_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="14" rx="4"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="12" cy="7" r=".8" fill="currentColor"/></svg>';
  var VENUE_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M4 10h16M12 3l8 5H4zM6 10v11M10 10v11M14 10v11M18 10v11"/></svg>';
  var ICONS = { hotels: BED_SVG, restaurants: FORK_SVG, shows: TICKET_SVG, toilets: WC_SVG, transport: TUBE_SVG, venues: VENUE_SVG };
  var KIND_ICONS = { tube: TUBE_SVG, bus: BUS_SVG, airport: PLANE_SVG, eurostar: TRAIN_SVG };

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

  function venueIcon(cat, id, svg) {
    return L.divIcon({
      className: 'map-pin-anchor',
      iconSize: null,
      html: '<span class="map-pin map-pin--round map-pin--' + cat + '" data-id="' + id + '">' + (svg || ICONS[cat]) + '</span>'
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
    TRANSPORT: TRANSPORT,
    VENUES: VENUES,
    KIND_ICONS: KIND_ICONS,
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
