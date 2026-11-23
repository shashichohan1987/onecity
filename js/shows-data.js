// Shared show/ticketing data for the shows booking flow (show-detail, show-seats,
// show-guest-details, show-payment, show-confirmation). Kept in one file since all
// five pages need the same records to stay in sync.
(function (global) {
  var SHOWS = {
    'barbican-centre': {
      slug: 'barbican-centre',
      name: 'Barbican Centre',
      eventName: 'London Symphony Orchestra: Beethoven Cycle',
      tag: 'Barbican · Theatre & Concerts',
      badge: 'Iconic Venue',
      img: 'assets/img/book-shows.png',
      venue: 'Barbican Hall, Barbican Centre',
      address: 'Silk Street, Barbican, City of London, EC2Y 8DS',
      category: 'Concert',
      ageRec: 'Recommended for 12+',
      runtime: '2 hr 10 min (incl. interval)',
      dateRange: '18 Sep — 20 Dec 2026',
      description: [
        'The London Symphony Orchestra returns to its Barbican Hall home for an evening of Beethoven, opening with the Coriolan Overture before a complete performance of the Seventh Symphony.',
        'Expect the LSO’s trademark warmth and precision in a hall built for orchestral sound, with the stage thrust close to the stalls for an unusually intimate symphonic evening.',
        'Doors open 45 minutes before curtain up. Latecomers will be seated at a suitable pause.'
      ],
      tiers: [
        { key: 'stalls', label: 'Stalls', price: 45, color: 'var(--navy)' },
        { key: 'circle', label: 'Circle', price: 32, color: 'var(--blue)' },
        { key: 'upper', label: 'Upper Circle', price: 20, color: 'var(--teal)' }
      ],
      seatMap: [
        { name: 'Stalls', tierKey: 'stalls', rows: 6, seatsPerRow: 18 },
        { name: 'Circle', tierKey: 'circle', rows: 5, seatsPerRow: 16 },
        { name: 'Upper Circle', tierKey: 'upper', rows: 4, seatsPerRow: 14 }
      ],
      performances: [
        { date: '2026-09-18', label: 'Fri 18 Sep', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-09-19', label: 'Sat 19 Sep', times: [{ time: '2:30 pm', status: 'limited' }, { time: '7:30 pm', status: 'good' }] },
        { date: '2026-09-20', label: 'Sun 20 Sep', times: [{ time: '3:00 pm', status: 'good' }] },
        { date: '2026-09-25', label: 'Fri 25 Sep', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-09-26', label: 'Sat 26 Sep', times: [{ time: '2:30 pm', status: 'good' }, { time: '7:30 pm', status: 'limited' }] },
        { date: '2026-10-02', label: 'Fri 2 Oct', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-10-03', label: 'Sat 3 Oct', times: [{ time: '7:30 pm', status: 'sold' }] },
        { date: '2026-10-09', label: 'Fri 9 Oct', times: [{ time: '7:30 pm', status: 'good' }] }
      ]
    },
    'lso-st-lukes': {
      slug: 'lso-st-lukes',
      name: 'LSO St Luke’s',
      eventName: 'Chamber Music Fridays',
      tag: 'Old Street · Classical & Contemporary',
      badge: 'Live Music',
      img: 'assets/img/cat-arts-culture.jpg',
      venue: 'LSO St Luke’s',
      address: '161 Old Street, City of London, EC1V 9NG',
      category: 'Concert',
      ageRec: 'All ages',
      runtime: '1 hr 30 min (no interval)',
      dateRange: 'Every Friday, 19 Sep — 12 Dec 2026',
      description: [
        'A rotating cast of LSO players and guest soloists take over this converted Hawksmoor church for an intimate evening of chamber music, from Schubert quartets to newly commissioned pieces.',
        'The deconsecrated church’s round, wood-panelled interior means every seat is close to the performers — there isn’t a bad view in the house.',
        'A licensed bar in the crypt serves drinks from 6:45pm before each performance.'
      ],
      tiers: [
        { key: 'stalls', label: 'Stalls', price: 28, color: 'var(--navy)' },
        { key: 'gallery', label: 'Gallery', price: 15, color: 'var(--teal)' }
      ],
      seatMap: [
        { name: 'Stalls', tierKey: 'stalls', rows: 8, seatsPerRow: 14 },
        { name: 'Gallery', tierKey: 'gallery', rows: 3, seatsPerRow: 20 }
      ],
      performances: [
        { date: '2026-09-19', label: 'Fri 19 Sep', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-09-26', label: 'Fri 26 Sep', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-10-03', label: 'Fri 3 Oct', times: [{ time: '7:30 pm', status: 'limited' }] },
        { date: '2026-10-10', label: 'Fri 10 Oct', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-10-17', label: 'Fri 17 Oct', times: [{ time: '7:30 pm', status: 'good' }] },
        { date: '2026-10-24', label: 'Fri 24 Oct', times: [{ time: '7:30 pm', status: 'sold' }] },
        { date: '2026-10-31', label: 'Fri 31 Oct', times: [{ time: '7:30 pm', status: 'good' }] }
      ]
    },
    'guildhall-school': {
      slug: 'guildhall-school',
      name: 'Guildhall School of Music & Drama',
      eventName: 'Guildhall Showcase: Graduate Gala',
      tag: 'Barbican · Student & Guest Performances',
      badge: 'Rising Talent',
      img: 'assets/img/guide-art.jpg',
      venue: 'Milton Court Concert Hall, Guildhall School',
      address: 'Silk Street, Barbican, City of London, EC2Y 8DT',
      category: 'Performance',
      ageRec: 'All ages',
      runtime: '1 hr 45 min (incl. interval)',
      dateRange: 'Nightly, 16 Sep — 30 Sep 2026',
      description: [
        'Guildhall’s graduating actors, singers and instrumentalists take the stage for a nightly showcase of solo and ensemble pieces, ahead of many of their professional debuts.',
        'Programmes change nightly and are announced on the day — expect anything from Mozart arias to new writing from the School’s composition students.',
        'Tickets are priced low to support students building an audience early in their careers.'
      ],
      tiers: [
        { key: 'stalls', label: 'Stalls', price: 18, color: 'var(--navy)' },
        { key: 'circle', label: 'Circle', price: 12, color: 'var(--blue)' }
      ],
      seatMap: [
        { name: 'Stalls', tierKey: 'stalls', rows: 7, seatsPerRow: 16 },
        { name: 'Circle', tierKey: 'circle', rows: 4, seatsPerRow: 18 }
      ],
      performances: [
        { date: '2026-09-16', label: 'Wed 16 Sep', times: [{ time: '7:00 pm', status: 'good' }] },
        { date: '2026-09-17', label: 'Thu 17 Sep', times: [{ time: '7:00 pm', status: 'good' }] },
        { date: '2026-09-18', label: 'Fri 18 Sep', times: [{ time: '7:00 pm', status: 'limited' }] },
        { date: '2026-09-19', label: 'Sat 19 Sep', times: [{ time: '2:00 pm', status: 'good' }, { time: '7:00 pm', status: 'good' }] },
        { date: '2026-09-22', label: 'Tue 22 Sep', times: [{ time: '7:00 pm', status: 'good' }] },
        { date: '2026-09-23', label: 'Wed 23 Sep', times: [{ time: '7:00 pm', status: 'good' }] },
        { date: '2026-09-24', label: 'Thu 24 Sep', times: [{ time: '7:00 pm', status: 'good' }] }
      ]
    },
    'milton-court': {
      slug: 'milton-court',
      name: 'Milton Court Concert Hall',
      eventName: 'Milton Court Recital: Chopin & Debussy',
      tag: 'Barbican · Recitals & Chamber Music',
      badge: 'Intimate Setting',
      img: 'assets/img/guide-evening.jpg',
      venue: 'Milton Court Concert Hall',
      address: '1 Milton Street, Barbican, City of London, EC2Y 9BH',
      category: 'Recital',
      ageRec: 'Recommended for 14+',
      runtime: '1 hr 15 min (no interval)',
      dateRange: 'This weekend only',
      description: [
        'A solo piano recital pairing Chopin’s late Nocturnes with Debussy’s Images — two composers writing, a generation apart, in the same hushed, harmonically restless register.',
        'Milton Court’s 608-seat hall was purpose-built for acoustic recital work, with adjustable acoustic banners keeping every seat within easy earshot of an unamplified piano.',
        'Recommended for those with an existing interest in solo piano repertoire — there is no interval.'
      ],
      tiers: [
        { key: 'stalls', label: 'Stalls', price: 28, color: 'var(--navy)' },
        { key: 'circle', label: 'Circle', price: 18, color: 'var(--blue)' }
      ],
      seatMap: [
        { name: 'Stalls', tierKey: 'stalls', rows: 6, seatsPerRow: 16 },
        { name: 'Circle', tierKey: 'circle', rows: 3, seatsPerRow: 18 }
      ],
      performances: [
        { date: '2026-09-19', label: 'Sat 19 Sep', times: [{ time: '2:30 pm', status: 'good' }, { time: '7:30 pm', status: 'limited' }] },
        { date: '2026-09-20', label: 'Sun 20 Sep', times: [{ time: '3:00 pm', status: 'good' }] }
      ]
    }
  };

  function seededRandom(seed) {
    var s = 0;
    for (var i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  function buildSeatMap(show, performanceKey) {
    var rand = seededRandom(show.slug + '|' + performanceKey);
    return show.seatMap.map(function (section) {
      var rows = [];
      for (var r = 0; r < section.rows; r++) {
        var rowLabel = String.fromCharCode(65 + r);
        var seats = [];
        for (var s = 0; s < section.seatsPerRow; s++) {
          seats.push({
            id: section.name + '-' + rowLabel + (s + 1),
            row: rowLabel,
            num: s + 1,
            sold: rand() < 0.14
          });
        }
        rows.push({ label: rowLabel, seats: seats });
      }
      return { name: section.name, tierKey: section.tierKey, rows: rows };
    });
  }

  global.SHOWS_DATA = SHOWS;
  global.buildShowSeatMap = buildSeatMap;
})(window);
