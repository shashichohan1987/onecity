// Shared data for the Attractions & Experiences flow (attractions.html,
// attraction-detail.html). Kept in one file so both pages stay in sync.
(function (global) {
  var CATEGORIES = [
    { key: 'tours', label: 'Tours & Sightseeing' },
    { key: 'museums', label: 'Museums & Culture' },
    { key: 'skiptheline', label: 'Skip-the-Line Tickets' },
    { key: 'food', label: 'Food & Drink Experiences' },
    { key: 'walking', label: 'Walking Tours' },
    { key: 'family', label: 'Family Fun' }
  ];

  var FEATURES = [
    { key: 'popular', label: 'Popular' },
    { key: 'guided', label: 'Guided Tour' },
    { key: 'freecancel', label: 'Free Cancellation' },
    { key: 'family', label: 'Family Friendly' },
    { key: 'smallgroup', label: 'Small Group' },
    { key: 'accessible', label: 'Access for Disabled' }
  ];

  var DURATIONS = [
    { key: 'upto1', label: 'Up to 1 hour' },
    { key: '1to3', label: '1 to 3 hours' },
    { key: '3to6', label: '3 to 6 hours' },
    { key: 'full', label: 'Full day' }
  ];

  var RATINGS = [4.5, 4, 3.5];

  var ATTRACTIONS = [
    {
      slug: 'tower-of-london-guided-tour',
      name: 'Tower of London: Crown Jewels & Beefeater Guided Tour',
      category: 'tours', badge: 'Bestseller', img: 'assets/img/discover-history.jpg',
      rating: 4.7, reviews: 2184, price: 42, duration: '1to3', durationLabel: '2 hours',
      features: ['popular', 'guided', 'freecancel'],
      desc: 'Meet a Yeoman Warder, see the Crown Jewels up close and uncover 1,000 years of royal history inside England’s most famous fortress.',
      longDesc2: 'Your Yeoman Warder guide has lived on site for years and brings nine centuries of royal history to life with first-hand stories you won’t find in any guidebook.',
      venueAddress: 'Tower of London, Tower Hill, London, EC3N 4AB',
      meetingPoint: 'Meet your Beefeater guide at the West Gate, beside the ticket office. Look for the OneCity flag.',
      highlights: ['See the Crown Jewels up close, including the Imperial State Crown', 'Meet a Yeoman Warder and hear their personal stories', 'Explore the White Tower and the medieval royal armouries', 'Stand on Tower Green, site of royal executions'],
      included: ['Skip-the-line entry ticket to the Tower of London', 'Guided tour led by a Yeoman Warder', 'Access to the Crown Jewels exhibition'],
      notIncluded: ['Food and drink', 'Hotel pickup and drop-off', 'Gratuities'],
      additionalInfo: 'Tours run rain or shine. Please arrive 15 minutes before your selected time to clear security.'
    },
    {
      slug: 'st-pauls-dome-climb',
      name: 'St Paul’s Cathedral: Dome Climb & Guided Tour',
      category: 'museums', badge: 'Top Rated', img: 'assets/img/cat-landmarks.png',
      rating: 4.9, reviews: 1532, price: 28, duration: '1to3', durationLabel: '1.5 hours',
      features: ['popular', 'guided'],
      desc: 'Climb 528 steps to the Golden Gallery for 360° views of the City, then explore Wren’s masterpiece with a local guide.',
      longDesc2: 'Your guide traces Wren’s design from the ashes of the Great Fire to the dome that became wartime London’s defiant silhouette.',
      venueAddress: 'St Paul’s Cathedral, St Paul’s Churchyard, London, EC4M 8AD',
      meetingPoint: 'Meet at the West Front steps of St Paul’s Cathedral, beneath the main portico.',
      highlights: ['Climb 528 steps to the Golden Gallery for 360° views', 'Stand beneath the Whispering Gallery and test its famous acoustics', 'See Wren’s tomb and the crypt memorials', 'Learn how the dome survived the Blitz'],
      included: ['Cathedral entry ticket', 'Guided tour with a local historian', 'Dome climb access (weather permitting)'],
      notIncluded: ['Transport to St Paul’s', 'Food and drink', 'Audio headsets'],
      additionalInfo: 'The dome climb involves over 500 steps on spiral staircases — not recommended for those with mobility or heart conditions.'
    },
    {
      slug: 'sky-garden-priority-access',
      name: 'Sky Garden: Priority Access Ticket',
      category: 'skiptheline', badge: 'Skip the Line', img: 'assets/img/discover-views.jpg',
      rating: 4.5, reviews: 3021, price: 18, duration: 'upto1', durationLabel: '45 minutes',
      features: ['popular', 'freecancel', 'accessible'],
      desc: 'Skip the booking queue and head straight up to London’s highest public garden for panoramic City views across three floors.',
      longDesc2: 'At 155 metres up, the Sky Garden is London’s highest public garden — and one of the few view points in the City that doesn’t charge admission.',
      venueAddress: 'Sky Garden, 1 Sky Garden Walk, London, EC3M 8AF',
      meetingPoint: 'Head straight to the Sky Garden entrance lobby at 20 Fenchurch Street — no meeting point needed with priority access.',
      highlights: ['Skip the general booking queue with priority access', 'Panoramic views across three planted floors', 'Mediterranean and South African garden terraces', 'Bars and restaurants open until late'],
      included: ['Priority timed-entry ticket', 'Access to all three public garden floors'],
      notIncluded: ['Food and drink', 'Restaurant reservations (book separately)'],
      additionalInfo: 'Bags larger than a small daypack must be left at security. Entry is for your booked time slot only.'
    },
    {
      slug: 'guildhall-art-gallery-amphitheatre',
      name: 'Guildhall Art Gallery & Roman Amphitheatre Tour',
      category: 'museums', badge: 'Hidden Gem', img: 'assets/img/guide-art.jpg',
      rating: 4.6, reviews: 412, price: 15, duration: 'upto1', durationLabel: '50 minutes',
      features: ['guided', 'accessible'],
      desc: 'Step beneath the City’s streets to London’s only Roman amphitheatre, then browse Pre-Raphaelite masterpieces above ground.',
      longDesc2: 'Only discovered during building work in 1988, the amphitheatre is marked out in black lines across Guildhall Yard above so you can picture its true scale.',
      venueAddress: 'Guildhall Art Gallery, Guildhall Yard, London, EC2V 5AE',
      meetingPoint: 'Meet at the Guildhall Art Gallery reception desk, just off Guildhall Yard.',
      highlights: ['Descend to London’s only Roman amphitheatre, discovered in 1988', 'Browse Pre-Raphaelite masterpieces and Victorian treasures', 'See John Singleton Copley’s monumental history paintings', 'Learn how the amphitheatre once held 7,000 Roman spectators'],
      included: ['Guided tour of the gallery and amphitheatre', 'Entry to both the gallery and amphitheatre'],
      notIncluded: ['Food and drink', 'Photography permits for commercial use'],
      additionalInfo: 'The amphitheatre remains are displayed in situ in a darkened lower gallery — allow your eyes a moment to adjust.'
    },
    {
      slug: 'leadenhall-film-locations-walk',
      name: 'Leadenhall Market: Film Locations Walking Tour',
      category: 'walking', badge: 'Popular', img: 'assets/img/cat-shopping.jpg',
      rating: 4.8, reviews: 967, price: 22, duration: '1to3', durationLabel: '2 hours',
      features: ['popular', 'guided', 'smallgroup'],
      desc: 'Wander Leadenhall’s Victorian arcades and spot the corners that doubled as Diagon Alley, with stories from a local guide.',
      longDesc2: 'Leadenhall’s wrought-iron arcades have featured in Harry Potter and dozens of other productions, and your guide points out every frame.',
      venueAddress: 'Leadenhall Market, Gracechurch Street, London, EC3V 1LT',
      meetingPoint: 'Meet beneath the main archway of Leadenhall Market on Gracechurch Street.',
      highlights: ['Spot the corner that doubled as Diagon Alley', 'Learn the market’s 600-year history as a meat, poultry and game market', 'Admire the ornate Victorian ironwork and glass roof', 'See locations from Harry Potter and other film shoots'],
      included: ['Guided walking tour with a local storyteller', 'Small-group experience (max 12 guests)'],
      notIncluded: ['Food and drink', 'Shopping purchases inside the market'],
      additionalInfo: 'The tour is entirely on foot over cobbled lanes — comfortable flat shoes are recommended.'
    },
    {
      slug: 'monument-fast-track-climb',
      name: 'Monument to the Great Fire: Fast-Track Climb',
      category: 'skiptheline', badge: 'Skip the Line', img: 'assets/img/discover-hidden.jpg',
      rating: 4.4, reviews: 1189, price: 14, duration: 'upto1', durationLabel: '30 minutes',
      features: ['freecancel'],
      desc: 'Skip the ticket queue and climb 311 steps to the viewing platform for sweeping views over the Thames and the Square Mile.',
      longDesc2: 'Designed by Christopher Wren and Robert Hooke, the column stands exactly 202 feet from the Pudding Lane bakery where the Great Fire began.',
      venueAddress: 'The Monument, Fish Street Hill, London, EC3R 8AH',
      meetingPoint: 'Head straight to the Monument ticket desk at the base of the column — fast-track ticket holders skip the queue.',
      highlights: ['Climb 311 steps to London’s best-value viewing platform', 'Sweeping views over the Thames, Tower Bridge and the City', 'Learn how the column marks the start of the Great Fire of 1666', 'Receive a certificate for completing the climb'],
      included: ['Fast-track entry ticket', 'Access to the viewing platform'],
      notIncluded: ['Food and drink', 'Lift access (there is no lift — stairs only)'],
      additionalInfo: 'The staircase is a narrow spiral with no lift. Not suitable for those with mobility issues, vertigo or claustrophobia.'
    },
    {
      slug: 'thames-afternoon-tea-cruise',
      name: 'Afternoon Tea Cruise on the Thames from Tower Pier',
      category: 'food', badge: 'Romantic', img: 'assets/img/discover-restaurants.jpg',
      rating: 4.7, reviews: 845, price: 65, duration: '1to3', durationLabel: '2.5 hours',
      features: ['popular', 'smallgroup'],
      desc: 'Sip sparkling tea and nibble finger sandwiches as you glide past Tower Bridge, the Shard and the Houses of Parliament.',
      longDesc2: 'The cruise runs rain or shine in a heated, glass-topped boat, so the view — and the tea — are guaranteed whatever the weather.',
      venueAddress: 'Tower Pier, Tower Hill, London, EC3N 4EE',
      meetingPoint: 'Meet at Tower Pier, directly below the Tower of London, 20 minutes before departure.',
      highlights: ['Glide past Tower Bridge, the Shard and the Houses of Parliament', 'Enjoy a full afternoon tea with sparkling wine', 'Live commentary on the City’s riverside landmarks', 'Heated, covered seating with panoramic windows'],
      included: ['River cruise ticket', 'Full afternoon tea (sandwiches, scones, pastries)', 'A glass of sparkling wine'],
      notIncluded: ['Hotel pickup', 'Additional drinks from the bar', 'Gratuities for crew'],
      additionalInfo: 'Dietary requirements (vegetarian, vegan, gluten-free) can be catered for with 48 hours’ notice.'
    },
    {
      slug: 'sculpture-in-the-city-walk',
      name: 'Sculpture in the City: Street Art Walking Tour',
      category: 'walking', badge: 'Free to Join', img: 'assets/img/discover-artlovers.jpg',
      rating: 4.6, reviews: 288, price: 0, duration: 'upto1', durationLabel: '1 hour',
      features: ['freecancel', 'family', 'accessible'], noBooking: true,
      desc: 'A free, self-guided trail of contemporary sculpture woven through the Square Mile’s streets, squares and rooftop gardens.',
      longDesc2: 'Now in its second decade, the trail rotates each year, so no two visits to the Square Mile’s open-air gallery are ever quite the same.',
      venueAddress: 'Leadenhall Street, London, EC3',
      meetingPoint: 'Start at the sculpture outside 1 Undershaft (the “Gherkin”), Leadenhall Street.',
      highlights: ['A free, self-guided trail through the Square Mile’s streets and squares', 'New artworks installed every year by leading contemporary artists', 'Striking contrasts between ancient streets and modern towers', 'Finish at a rooftop garden with skyline views'],
      included: ['Self-guided trail map', 'Access to all outdoor sculpture sites'],
      notIncluded: ['Guide (self-guided only)', 'Food and drink'],
      additionalInfo: 'The trail is outdoors and free at any time — no booking required, though a free digital map helps you find every piece.'
    },
    {
      slug: 'st-dunstan-secret-gardens-photo-walk',
      name: 'St Dunstan-in-the-East: Secret Gardens Photography Walk',
      category: 'walking', badge: 'Hidden Gem', img: 'assets/img/discover-parks.jpg',
      rating: 4.8, reviews: 176, price: 19, duration: 'upto1', durationLabel: '1 hour',
      features: ['guided', 'smallgroup'],
      desc: 'Explore a Blitz-ruined Wren church turned secret garden with a photographer-guide, finding the City’s most romantic hidden corners.',
      longDesc2: 'Bombed in the Blitz and never rebuilt, the church’s roofless nave has been left to nature since the 1970s — one of the City’s best-kept secrets.',
      venueAddress: 'St Dunstan-in-the-East, St Dunstan’s Hill, London, EC3R 5DD',
      meetingPoint: 'Meet at the entrance gate to St Dunstan-in-the-East on St Dunstan’s Hill.',
      highlights: ['Explore a Blitz-ruined Wren church reclaimed by climbing plants', 'Learn photography tips for low-light, atmospheric shots', 'Visit nearby hidden gardens most visitors miss', 'Small-group experience with plenty of time to shoot'],
      included: ['Guide and photography tips', 'Small-group experience (max 8 guests)'],
      notIncluded: ['Camera equipment (bring your own)', 'Food and drink'],
      additionalInfo: 'Best light is in the early morning or an hour before sunset — time slots are scheduled accordingly.'
    },
    {
      slug: 'barbican-highwalks-architecture-tour',
      name: 'Barbican Highwalks: Brutalist Architecture Tour',
      category: 'tours', badge: 'For Architecture Lovers', img: 'assets/img/cat-arts-culture.jpg',
      rating: 4.7, reviews: 203, price: 24, duration: '1to3', durationLabel: '1.5 hours',
      features: ['guided', 'smallgroup'],
      desc: 'Trace the Barbican Estate’s elevated walkways and concrete towers with a guide who knows every corner of this Brutalist icon.',
      longDesc2: 'Built to replace streets flattened in the Blitz, the Barbican Estate remains one of Europe’s largest post-war residential developments — and one of its most photographed.',
      venueAddress: 'Barbican Centre, Silk Street, London, EC2Y 8DS',
      meetingPoint: 'Meet at the Barbican Centre Lakeside entrance, Silk Street.',
      highlights: ['Trace the elevated highwalks above the Barbican Estate', 'Learn the history of post-war Brutalist reconstruction', 'Visit the hidden conservatory and lakeside terrace', 'See the three residential towers that once topped London'],
      included: ['Guided architecture tour', 'Small-group experience (max 14 guests)'],
      notIncluded: ['Barbican Centre event tickets', 'Food and drink'],
      additionalInfo: 'The route includes stairs and raised walkways; it is not step-free throughout.'
    },
    {
      slug: 'smithfield-market-food-history-tour',
      name: 'Smithfield Market: Food & History Walking Tour',
      category: 'food', badge: 'Local Favourite', img: 'assets/img/discover-trail.jpg',
      rating: 4.9, reviews: 534, price: 55, duration: '1to3', durationLabel: '2.5 hours',
      features: ['popular', 'guided', 'smallgroup'],
      desc: 'Taste your way through 900 years of market history at London’s last surviving wholesale meat market, with stops for pastries and coffee.',
      longDesc2: 'Smithfield has been a market for 900 years and a place of execution, plague burials and medieval fairs — your guide covers all of it, appetite intact.',
      venueAddress: 'Smithfield Market, Charterhouse Street, London, EC1A 9PS',
      meetingPoint: 'Meet outside the main entrance to Smithfield Market on Charterhouse Street.',
      highlights: ['Taste pastries, cheese and coffee from historic traders', 'Learn 900 years of market, execution and plague history', 'See the UK’s last surviving wholesale meat market in action', 'Visit the nearby church of St Bartholomew-the-Great'],
      included: ['Guided walking tour', 'Food tastings at 4 stops', 'Small-group experience (max 10 guests)'],
      notIncluded: ['Additional food and drink purchases', 'Gratuities'],
      additionalInfo: 'The market is a working trade site — tours run outside peak unloading hours for safety.'
    },
    {
      slug: 'city-ghosts-legends-evening-walk',
      name: 'City of London Ghosts & Legends Evening Walking Tour',
      category: 'walking', badge: 'Evening', img: 'assets/img/guide-evening.jpg',
      rating: 4.8, reviews: 721, price: 16, duration: '1to3', durationLabel: '1.5 hours',
      features: ['popular', 'guided'],
      desc: 'Wind through lamplit alleys and churchyards after dark, uncovering the City’s darkest legends with a storyteller guide.',
      longDesc2: 'As the City empties out after office hours, its oldest alleys take on a different character — your guide knows exactly where to find it.',
      venueAddress: 'Meeting point: St Paul’s Underground Station, London, EC4M 8AD',
      meetingPoint: 'Meet outside the main exit of St Paul’s Underground Station, 15 minutes before start time.',
      highlights: ['Wind through lamplit alleys and forgotten churchyards', 'Hear the City’s darkest legends and real unsolved cases', 'Visit sites linked to plague pits and public executions', 'Finish near a historic pub for a nightcap (optional)'],
      included: ['Guided evening walking tour', 'Small-group experience (max 15 guests)'],
      notIncluded: ['Food and drink', 'Transport to the meeting point'],
      additionalInfo: 'Recommended for ages 12+. The tour runs for around 90 minutes, mostly outdoors.'
    },
    {
      slug: 'guildhall-yard-family-discovery-trail',
      name: 'Guildhall Yard: Family Discovery Trail',
      category: 'family', badge: 'Family Favourite', img: 'assets/img/discover-kids.jpg',
      rating: 4.5, reviews: 310, price: 12, duration: 'upto1', durationLabel: '1 hour',
      features: ['family', 'freecancel', 'accessible'],
      desc: 'A self-led trail of clues and City secrets, built for families with children aged 6 to 12, finishing at the Roman amphitheatre.',
      longDesc2: 'Each clue sends families to a different corner of Guildhall Yard, building up the story of the City’s Roman and medieval past along the way.',
      venueAddress: 'Guildhall Yard, Gresham Street, London, EC2V 7HH',
      meetingPoint: 'Collect your trail pack from the Guildhall Yard information point.',
      highlights: ['A self-led trail of clues and City secrets for ages 6–12', 'Finishes at the Roman amphitheatre remains', 'Printable certificate for young explorers', 'Flexible timing — start any time during opening hours'],
      included: ['Printed trail pack and map', 'Entry to the Roman amphitheatre'],
      notIncluded: ['Food and drink', 'Guide (self-led activity)'],
      additionalInfo: 'Suitable for children aged 6 to 12, accompanied by an adult. Takes around an hour to complete.'
    },
    {
      slug: 'dr-johnsons-house-literary-tour',
      name: 'Dr Johnson’s House & Fleet Street Literary Walk',
      category: 'museums', badge: 'For Bookworms', img: 'assets/img/guide-walks.jpg',
      rating: 4.6, reviews: 158, price: 20, duration: '1to3', durationLabel: '1.5 hours',
      features: ['guided', 'smallgroup'],
      desc: 'Visit the house where Samuel Johnson wrote his dictionary, then follow Fleet Street’s ink-stained history to the Old Bell Tavern.',
      longDesc2: 'Samuel Johnson spent nine years in this Georgian townhouse compiling his Dictionary of the English Language — a single-handed feat that took teams decades to match.',
      venueAddress: 'Dr Johnson’s House, 17 Gough Square, London, EC4A 3DE',
      meetingPoint: 'Meet at the front door of Dr Johnson’s House, 17 Gough Square.',
      highlights: ['Stand in the garret where Johnson compiled his Dictionary', 'Follow Fleet Street’s 300-year history of print and ink', 'Visit the Old Bell Tavern, a Fleet Street institution', 'Hear tales of Grub Street hacks and literary rivalries'],
      included: ['Entry to Dr Johnson’s House', 'Guided literary walking tour'],
      notIncluded: ['Food and drink', 'Books or souvenirs'],
      additionalInfo: 'The house has some narrow stairs and is not fully step-free.'
    },
    {
      slug: 'leadenhall-rooftop-bar-crawl',
      name: 'Leadenhall to Liverpool Street: Rooftop Bar Crawl',
      category: 'food', badge: '18+', img: 'assets/img/guide-rooftop.jpg',
      rating: 4.4, reviews: 266, price: 48, duration: '3to6', durationLabel: '3 hours',
      features: ['popular', 'smallgroup'],
      desc: 'Climb three of the City’s best rooftop bars for skyline views and a welcome drink at each stop, finishing as the sun sets.',
      longDesc2: 'Each rooftop sits within a few minutes’ walk of the last, so you spend the evening looking at skylines, not queuing for taxis.',
      venueAddress: 'Meeting point: Leadenhall Market, Gracechurch Street, London, EC3V 1LT',
      meetingPoint: 'Meet inside Leadenhall Market, beneath the central archway, 15 minutes before start time.',
      highlights: ['Climb three of the City’s best rooftop bars', 'A welcome drink at every stop', 'Skyline views over the Thames and the Shard', 'Small-group experience with a local host'],
      included: ['Welcome drink at each of 3 venues', 'Host for the full route', 'Skip-the-line entry where required'],
      notIncluded: ['Additional drinks', 'Food', 'Transport between venues (all within walking distance)'],
      additionalInfo: 'Guests must be 18 or over and bring valid photo ID. Dress code applies at some venues (smart casual).'
    },
    {
      slug: 'open-house-architecture-weekend-pass',
      name: 'Open House City: Architecture Weekend Pass',
      category: 'tours', badge: 'Seasonal', img: 'assets/img/event-openhouse.jpg',
      rating: 4.9, reviews: 92, price: 0, duration: 'full', durationLabel: 'Full weekend',
      features: ['popular', 'family', 'accessible'],
      desc: 'A once-a-year pass into the City’s most striking buildings, from livery halls to modern towers, usually closed to the public.',
      longDesc2: 'From Lloyd’s of London to centuries-old livery halls, Open House is the one weekend a year the City of London truly opens its doors.',
      venueAddress: 'Various City of London venues (full list provided after booking)',
      meetingPoint: 'No single meeting point — your pass grants entry to a curated list of City buildings for the weekend.',
      highlights: ['Step inside livery halls and offices usually closed to the public', 'See award-winning modern architecture up close', 'Expert volunteer guides at every venue', 'Valid across the full Open House weekend'],
      included: ['Entry pass to all participating City of London venues', 'Printed guide and map'],
      notIncluded: ['Transport between venues', 'Food and drink'],
      additionalInfo: 'Dates vary each year — usually a weekend in September. Some venues require timed entry booked in advance.'
    }
  ];

  global.ATTRACTIONS_DATA = {
    items: ATTRACTIONS,
    categories: CATEGORIES,
    features: FEATURES,
    durations: DURATIONS,
    ratings: RATINGS
  };
})(window);
