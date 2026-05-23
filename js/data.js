const RETREATS = [
  {
    id: "bali-sacred-flow",
    title: "Sacred Flow Bali",
    location: "Ubud, Bali",
    country: "Indonesia",
    continent: "Asia",
    duration: 7,
    price: 1850,
    style: "Vinyasa",
    level: "All Levels",
    theme: "Spiritual",
    spots: 4,
    rating: 4.9,
    reviews: 128,
    startDate: "2026-06-15",
    endDate: "2026-06-22",
    host: "Maya Sutanto",
    teacherId: "maya-sutanto",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Daily Vinyasa & Yin practice in open-air shala",
      "Morning meditation overlooking rice paddies",
      "Traditional Balinese cooking class",
      "Sunrise hike to Mount Batur",
      "Sound healing ceremony with crystal bowls",
      "Two spa treatments included"
    ],
    description: "Seven days of devotion at the spiritual heart of Bali. Practice twice daily in a hand-carved teak shala, eat organic farm-to-table meals, and let Ubud's gentle pace recalibrate your nervous system."
  },
  {
    id: "rishikesh-himalayan-awakening",
    title: "Himalayan Awakening",
    location: "Rishikesh",
    country: "India",
    continent: "Asia",
    duration: 10,
    price: 1450,
    style: "Hatha",
    level: "All Levels",
    theme: "Spiritual",
    spots: 6,
    rating: 4.8,
    reviews: 214,
    startDate: "2026-09-10",
    endDate: "2026-09-20",
    host: "Swami Anand",
    teacherId: "swami-anand",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Traditional Hatha & Pranayama with certified gurus",
      "Daily Ganga aarti at sunset",
      "Vedic philosophy and chanting sessions",
      "Ayurvedic consultation and meals",
      "Day trip to Vashistha Cave",
      "Optional silent meditation day"
    ],
    description: "Return to the source. Ten days in the yoga capital of the world, practicing the way it has been taught for thousands of years — with reverence, discipline, and the Ganga flowing past the ashram gates."
  },
  {
    id: "costa-rica-jungle-reset",
    title: "Jungle & Ocean Reset",
    location: "Nosara",
    country: "Costa Rica",
    continent: "Americas",
    duration: 8,
    price: 2400,
    style: "Vinyasa",
    level: "Intermediate",
    theme: "Adventure",
    spots: 3,
    rating: 4.9,
    reviews: 96,
    startDate: "2026-02-08",
    endDate: "2026-02-16",
    host: "Carolina & Daniel",
    teacherId: "carolina-diaz",
    image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Twice-daily Vinyasa overlooking Playa Guiones",
      "Morning surf lessons (all levels)",
      "Howler monkey wake-up calls",
      "Cacao ceremony and ecstatic dance",
      "Waterfall hike in Ostional reserve",
      "Pura vida — fresh fish, fruit, and freedom"
    ],
    description: "Where the jungle meets the Pacific. Eight days of surf in the morning, yoga as the sun sets behind the breakers, and nights under the most star-dense sky you'll ever see."
  },
  {
    id: "tulum-cenote-stillness",
    title: "Cenote Stillness",
    location: "Tulum",
    country: "Mexico",
    continent: "Americas",
    duration: 6,
    price: 1950,
    style: "Yin",
    level: "All Levels",
    theme: "Spiritual",
    spots: 5,
    rating: 4.7,
    reviews: 73,
    startDate: "2026-03-22",
    endDate: "2026-03-28",
    host: "Sofia Mendez",
    teacherId: "sofia-mendez",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Daily Yin and Restorative practice",
      "Mayan temazcal sweat lodge ceremony",
      "Swimming in three sacred cenotes",
      "Plant medicine integration circle",
      "Mayan cacao ritual at sunrise",
      "Beachfront accommodation"
    ],
    description: "Slow down to the rhythm of the Yucatán. Long Yin holds, deep stillness, and afternoons floating in cenotes — underground freshwater cathedrals carved by 65 million years of patience."
  },
  {
    id: "tuscany-sunrise",
    title: "Tuscan Sunrise",
    location: "Chianti, Tuscany",
    country: "Italy",
    continent: "Europe",
    duration: 7,
    price: 2800,
    style: "Hatha",
    level: "All Levels",
    theme: "Luxury",
    spots: 2,
    rating: 5.0,
    reviews: 41,
    startDate: "2026-05-04",
    endDate: "2026-05-11",
    host: "Isabella Conti",
    image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538334421852-687c439c92f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Sunrise Hatha among the cypress trees",
      "Restored 16th-century villa accommodation",
      "Private chef — slow Italian cuisine",
      "Wine tasting at family-owned vineyards",
      "Truffle hunt with local forager",
      "Florence day trip with art historian"
    ],
    description: "An exquisitely slow week in the Chianti hills. Mornings on the mat under the cypress, long lunches in the vineyard, and the kind of quiet you can only find when the nearest town is a 12th-century walled village."
  },
  {
    id: "santorini-aegean-light",
    title: "Aegean Light",
    location: "Oia, Santorini",
    country: "Greece",
    continent: "Europe",
    duration: 6,
    price: 2650,
    style: "Vinyasa",
    level: "All Levels",
    theme: "Luxury",
    spots: 4,
    rating: 4.9,
    reviews: 58,
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    host: "Elena Papadakis",
    teacherId: "elena-papadakis",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Caldera-view rooftop yoga at sunrise & sunset",
      "Cave-house accommodation in Oia",
      "Private sailing trip with on-deck yoga",
      "Volcanic hot springs swim",
      "Greek cooking class with island grandmothers",
      "Wine tasting at Santo Wines"
    ],
    description: "The light in Santorini is unlike anywhere on earth. Practice on a rooftop terrace above the caldera, eat olives picked that morning, and watch the sun fall into the sea every single evening."
  },
  {
    id: "algarve-surf-soul",
    title: "Surf & Soul",
    location: "Aljezur, Algarve",
    country: "Portugal",
    continent: "Europe",
    duration: 7,
    price: 1750,
    style: "Vinyasa",
    level: "All Levels",
    theme: "Adventure",
    spots: 6,
    rating: 4.8,
    reviews: 112,
    startDate: "2026-09-21",
    endDate: "2026-09-28",
    host: "Joana Silva",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Daily surf lessons on Costa Vicentina",
      "Vinyasa flow on the clifftop at sunset",
      "Cliffside walks along the Fishermen's Trail",
      "Pastéis de nata pit stops (non-negotiable)",
      "Beach bonfire and fado night",
      "All levels — boards & wetsuits included"
    ],
    description: "Wild Atlantic coast, empty beaches, and a small-group atmosphere. Mornings paddling out, afternoons on the mat, evenings around a fire with grilled sardines and vinho verde."
  },
  {
    id: "sedona-red-rock",
    title: "Red Rock Renewal",
    location: "Sedona, Arizona",
    country: "USA",
    continent: "Americas",
    duration: 5,
    price: 2100,
    style: "Kundalini",
    level: "All Levels",
    theme: "Spiritual",
    spots: 4,
    rating: 4.8,
    reviews: 67,
    startDate: "2026-04-13",
    endDate: "2026-04-18",
    host: "Rachel Bloom",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Kundalini kriyas at sunrise on the vortex sites",
      "Guided hikes to Cathedral Rock & Bell Rock",
      "Sound bath in a slot canyon",
      "Native American medicine wheel ceremony",
      "Stargazing in an International Dark Sky community",
      "Mineral hot springs day"
    ],
    description: "The red rocks of Sedona are said to hum. Five days of Kundalini practice in the high desert, hikes to ancient power sites, and starlit nights that make sense of why this land has been considered sacred for millennia."
  },
  {
    id: "marrakech-desert-stars",
    title: "Desert Stars",
    location: "Atlas Mountains & Sahara",
    country: "Morocco",
    continent: "Africa",
    duration: 7,
    price: 1950,
    style: "Hatha",
    level: "All Levels",
    theme: "Adventure",
    spots: 8,
    rating: 4.9,
    reviews: 49,
    startDate: "2026-10-11",
    endDate: "2026-10-18",
    host: "Karim El Fassi",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Riad yoga in a Marrakech medina garden",
      "Atlas Mountain Berber village stay",
      "Camel trek into the Erg Chebbi dunes",
      "Night yoga under the Sahara stars",
      "Hammam and argan oil massage",
      "Souk tour with a tea master"
    ],
    description: "From medina rooftops to dunes the color of cinnamon. A week that moves from the chaos of Marrakech to the deep silence of the Sahara — and your practice changes shape with every landscape."
  },
  {
    id: "kerala-ayurveda",
    title: "Ayurveda & Yoga",
    location: "Kovalam, Kerala",
    country: "India",
    continent: "Asia",
    duration: 14,
    price: 2200,
    style: "Hatha",
    level: "All Levels",
    theme: "Detox",
    spots: 5,
    rating: 4.9,
    reviews: 184,
    startDate: "2026-11-02",
    endDate: "2026-11-16",
    host: "Dr. Priya Nair",
    teacherId: "priya-nair",
    image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Personalized Ayurvedic doshic assessment",
      "Daily Hatha + Pranayama (5:30 AM start)",
      "Panchakarma cleansing treatments",
      "Personalized Sattvic meal plan",
      "Backwater houseboat day in Alleppey",
      "Beachfront accommodation with sea view"
    ],
    description: "Two weeks of true reset — the kind that requires more than a long weekend. Personalized Ayurvedic protocols, twice-daily practice, and the slow rhythm of South Indian beach life to do the deeper work."
  }
];

const STYLES = ["Vinyasa", "Hatha", "Yin", "Kundalini", "Ashtanga"];
const CONTINENTS = ["Asia", "Europe", "Americas", "Africa", "Oceania"];
const THEMES = ["Spiritual", "Adventure", "Detox", "Luxury", "Beginner-Friendly"];

const TEACHERS = [
  {
    id: "maya-sutanto",
    name: "Maya Sutanto",
    location: "Ubud, Bali",
    country: "Indonesia",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?auto=format&fit=crop&w=600&q=80",
    styles: ["Vinyasa", "Yin"],
    certifications: ["E-RYT 500", "Yin Yoga Certified — Bernie Clark lineage"],
    languages: ["English", "Bahasa Indonesia"],
    yearsTeaching: 12,
    bio: "Born in Java and trained in Mysore, Maya teaches a practice rooted in breath and devotion. Her shala overlooks the Tjampuhan ridge — the same ridgeline that has drawn yogis to Ubud for a century. She holds space for both first-time practitioners and old hands.",
    quote: "We don't come to the mat to escape life. We come to remember how to meet it.",
    instagram: "@mayasutanto.yoga",
    retreatIds: ["bali-sacred-flow"]
  },
  {
    id: "swami-anand",
    name: "Swami Anand",
    location: "Rishikesh",
    country: "India",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=600&q=80",
    styles: ["Hatha", "Pranayama"],
    certifications: ["Sannyasa, Bihar School of Yoga", "Yoga Acharya, Parmarth Niketan"],
    languages: ["English", "Hindi", "Sanskrit"],
    yearsTeaching: 28,
    bio: "Swami Anand has lived in Rishikesh for thirty years, the last twenty in the same small ashram on the bank of the Ganga. He teaches the way his teachers taught him — quietly, slowly, and with deep attention to breath. He has guided students from forty countries.",
    quote: "The mat is not a destination. It is a doorway you walk through every morning.",
    instagram: null,
    retreatIds: ["rishikesh-himalayan-awakening"]
  },
  {
    id: "carolina-diaz",
    name: "Carolina Diaz",
    location: "Nosara",
    country: "Costa Rica",
    continent: "Americas",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    styles: ["Vinyasa", "Surf-Yoga"],
    certifications: ["RYT 500", "Surf Instructor — ISA Level 2"],
    languages: ["English", "Spanish"],
    yearsTeaching: 9,
    bio: "Carolina runs her retreats with her partner Daniel — she on the mat, he on the board. Together they pioneered the surf-yoga format on the Nicoyan coast a decade ago, when Nosara was still just a dirt-road village. Their groups are small by design.",
    quote: "Pura vida is not a slogan. It's what it feels like when you finally stop holding your breath.",
    instagram: "@carolinadiaz.flow",
    retreatIds: ["costa-rica-jungle-reset"]
  },
  {
    id: "sofia-mendez",
    name: "Sofia Mendez",
    location: "Tulum",
    country: "Mexico",
    continent: "Americas",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
    styles: ["Yin", "Restorative"],
    certifications: ["RYT 500", "Yin Yoga & Functional Anatomy — Paul Grilley"],
    languages: ["English", "Spanish", "Mayan basics"],
    yearsTeaching: 11,
    bio: "Sofia trained as a marine biologist before yoga claimed her. Her practice draws from the Mayan tradition of slowness — long holds, deep breath, and ceremonies guided by local elders. She splits her year between Tulum and the cenote country to the south.",
    quote: "Yin is not the absence of effort. It is the patience to let the body speak first.",
    instagram: "@sofiayin",
    retreatIds: ["tulum-cenote-stillness"]
  },
  {
    id: "elena-papadakis",
    name: "Elena Papadakis",
    location: "Oia, Santorini",
    country: "Greece",
    continent: "Europe",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    styles: ["Vinyasa", "Power Flow"],
    certifications: ["RYT 500", "Mindfulness-Based Stress Reduction (MBSR)"],
    languages: ["English", "Greek", "French"],
    yearsTeaching: 8,
    bio: "Elena grew up on Santorini, left to study philosophy in Paris, and returned to teach the practice she'd found in between. Her rooftop classes catch the same light that has been drawing artists to the island for two thousand years.",
    quote: "The mind quiets when the body is held by something older than itself.",
    instagram: "@elenapapadakis",
    retreatIds: ["santorini-aegean-light"]
  },
  {
    id: "priya-nair",
    name: "Dr. Priya Nair",
    location: "Kovalam, Kerala",
    country: "India",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    styles: ["Hatha", "Pranayama"],
    certifications: ["BAMS (Bachelor of Ayurvedic Medicine & Surgery)", "RYT 500"],
    languages: ["English", "Malayalam", "Hindi"],
    yearsTeaching: 15,
    bio: "Priya is both a licensed Ayurvedic physician and a senior yoga teacher — a combination still rare outside Kerala. Her retreats are run with her father's traditional Vaidya, blending personalized dosha protocols with the daily practice she's been teaching since her twenties.",
    quote: "Health is rhythm. We help you find the one your body has been asking for.",
    instagram: "@drpriya.ayurveda",
    retreatIds: ["kerala-ayurveda"]
  }
];

const PRACTITIONERS = [
  {
    id: "emma-r-london",
    name: "Emma R.",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    retreatId: "bali-sacred-flow",
    retreatTitle: "Sacred Flow Bali",
    yearAttended: 2025,
    quote: "I came tired and left rewired. The 5am meditations on the rice paddy deck were the most peaceful 30 minutes of my year.",
    story: "I went to Bali burned out from a job I had been pretending to like for three years. Maya didn't push, didn't fix, didn't try to make anything happen. She just held a steady, daily rhythm — breath, breakfast, breath, lunch, breath — and somewhere in the middle of that I started crying on the mat one Tuesday morning and stopped pretending. I came home and quit two weeks later."
  },
  {
    id: "james-t-berlin",
    name: "James T.",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    retreatId: "rishikesh-himalayan-awakening",
    retreatTitle: "Himalayan Awakening",
    yearAttended: 2024,
    quote: "Swami Anand doesn't perform. He just shows up at 5:30 every morning, sits, and starts. After ten days, you find that you've started too.",
    story: "I was skeptical of the ashram thing — I'd been to a few of those week-long 'spiritual experiences' and they always felt like theatre. Rishikesh was different. There was no performance. Swami Anand barely spoke for the first three days. By day six, I realized I hadn't checked my phone since landing. By day ten, the silence felt like the most natural state I had ever been in."
  },
  {
    id: "aiko-m-tokyo",
    name: "Aiko M.",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    retreatId: "tulum-cenote-stillness",
    retreatTitle: "Cenote Stillness",
    yearAttended: 2025,
    quote: "Floating in a cenote in the dark, with Sofia's voice guiding the meditation from the bank — I don't know how to describe what shifted, but it did.",
    story: "I'd practiced yoga for ten years but always as a workout. Tulum showed me what Yin actually was. Sofia teaches like she's in no hurry, and after a few days you stop being in a hurry too. The temazcal ceremony broke something open in me I had been guarding for a long time."
  },
  {
    id: "naledi-m-capetown",
    name: "Naledi M.",
    location: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    retreatId: "santorini-aegean-light",
    retreatTitle: "Aegean Light",
    yearAttended: 2025,
    quote: "Elena teaches Vinyasa the way Greeks make coffee — slowly, with all the time in the world, and somehow it still wakes you up.",
    story: "I'd been hesitant to do a 'luxury' retreat — I worried it would feel sanitized. It didn't. The cave-house, the rooftop, the food, the local grandmothers teaching us to make dolmades — none of it felt staged. Elena's classes carried it. By the third sunset I was already calculating when I could come back."
  },
  {
    id: "diego-l-buenosaires",
    name: "Diego L.",
    location: "Buenos Aires, Argentina",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    retreatId: "sedona-red-rock",
    retreatTitle: "Red Rock Renewal",
    yearAttended: 2024,
    quote: "Five days in Sedona felt like two weeks. The land does something to your sense of time.",
    story: "I went for the hikes and the views — I wasn't expecting much from the Kundalini sessions. By day three I was the one waking up early to get to the vortex. Whatever you believe or don't believe about the energy there, the practice on those rocks at sunrise will change you a little."
  },
  {
    id: "hannah-k-stockholm",
    name: "Hannah K.",
    location: "Stockholm, Sweden",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    retreatId: "algarve-surf-soul",
    retreatTitle: "Surf & Soul",
    yearAttended: 2025,
    quote: "I'd never surfed. I left able to ride a wave, and able to sit with myself a lot longer than I could before.",
    story: "The combination is what made it. Mornings on a board, afternoons on the mat, evenings around the bonfire eating sardines someone caught that day. Everything was small — six of us in the group, one teacher, no rush. I came back to Stockholm and started practicing every morning. That's been a year now."
  }
];

const TRAININGS = [
  {
    id: "rishikesh-200hr-hatha",
    title: "200-Hour Hatha YTT",
    location: "Rishikesh",
    country: "India",
    continent: "Asia",
    duration: 24,
    certification: "200-Hour",
    yogaAlliance: true,
    style: "Hatha",
    price: 1850,
    startDate: "2026-09-01",
    endDate: "2026-09-24",
    school: "Parmarth Yogashram",
    spots: 6,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Yoga Alliance RYS-200 certification on graduation",
      "Traditional Hatha lineage — Sivananda + Iyengar elements",
      "Daily Ganga aarti and silent meditation",
      "Sanskrit chanting and philosophy with resident scholar",
      "Ayurvedic kitchen — three sattvic meals daily",
      "All study materials, anatomy manual, and certificate included"
    ],
    description: "Twenty-four days of immersion in the world capital of yoga. This is not a tourist version of YTT — you stay inside an ashram on the bank of the Ganga, follow a 5:30 AM schedule, and learn from teachers who have been doing this for decades. Designed for serious practitioners ready to teach with depth.",
    curriculum: [
      "Asana technique, alignment & adjustments",
      "Pranayama, kriyas & bandhas",
      "Meditation & mindfulness",
      "Anatomy & physiology of yoga",
      "Yoga philosophy — Yoga Sutras, Bhagavad Gita",
      "Sanskrit fundamentals",
      "Teaching methodology, sequencing & ethics",
      "Practicum — assisting and leading classes"
    ]
  },
  {
    id: "bali-200hr-vinyasa",
    title: "200-Hour Vinyasa YTT",
    location: "Ubud, Bali",
    country: "Indonesia",
    continent: "Asia",
    duration: 28,
    certification: "200-Hour",
    yogaAlliance: true,
    style: "Vinyasa",
    price: 2950,
    startDate: "2026-04-05",
    endDate: "2026-05-02",
    school: "Tjampuhan Yoga School",
    spots: 4,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Yoga Alliance RYS-200 certification",
      "Vinyasa Krama — intelligent sequencing and breath-led flow",
      "Practice in an open-air bamboo shala overlooking rice paddies",
      "Weekly Balinese cultural day (water blessing, temple ceremony)",
      "Small cohort — max 12 students",
      "Optional 50-hour Yin module add-on"
    ],
    description: "A modern, well-supported 200-hour in one of the world's most sacred yoga destinations. Mornings on the mat, afternoons learning to teach, evenings around long communal dinners. By week four you'll have built a teaching voice that is unmistakably your own.",
    curriculum: [
      "Vinyasa sequencing & intelligent flow design",
      "Functional anatomy & biomechanics",
      "Pranayama & meditation",
      "Yoga history & philosophy",
      "The business of teaching — building your first classes",
      "Teaching practicum with peer feedback",
      "Hands-on adjustments & cue language",
      "Trauma-aware teaching basics"
    ]
  },
  {
    id: "costa-rica-200hr-vinyasa",
    title: "200-Hour Vinyasa & Mindfulness YTT",
    location: "Nosara",
    country: "Costa Rica",
    continent: "Americas",
    duration: 21,
    certification: "200-Hour",
    yogaAlliance: true,
    style: "Vinyasa",
    price: 3400,
    startDate: "2026-01-12",
    endDate: "2026-02-02",
    school: "Pura Vida Yoga Institute",
    spots: 5,
    rating: 4.9,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Yoga Alliance RYS-200 certification",
      "Mindfulness module — MBSR-trained lead teacher",
      "Surf-yoga afternoons — boards and lessons included",
      "Plant-based farm-to-table meals",
      "All accommodation in a quiet eco-village",
      "Career mentorship session post-graduation"
    ],
    description: "Twenty-one intensive days that combine a full 200-hour curriculum with a serious mindfulness training. Mornings of asana and pedagogy, afternoons of surf and integration. Best for students who want to teach yoga with a meditation-forward approach.",
    curriculum: [
      "Vinyasa sequencing & alignment",
      "Mindfulness & meditation pedagogy",
      "Anatomy & subtle body",
      "Yoga philosophy — Patanjali & modern interpretations",
      "Teaching methodology",
      "Voice, presence & class management",
      "Inclusive & trauma-informed practice",
      "Practicum with video feedback"
    ]
  },
  {
    id: "goa-300hr-advanced",
    title: "300-Hour Advanced YTT",
    location: "Agonda, Goa",
    country: "India",
    continent: "Asia",
    duration: 30,
    certification: "300-Hour",
    yogaAlliance: true,
    style: "Hatha-Vinyasa",
    price: 2400,
    startDate: "2026-11-04",
    endDate: "2026-12-04",
    school: "Agonda Yoga Institute",
    spots: 4,
    rating: 4.8,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Yoga Alliance RYS-300 advanced certification (requires RYT-200)",
      "Deep dive into advanced asana — inversions, arm balances",
      "Therapeutic yoga & yoga for special populations",
      "Mentorship-based — small group, daily 1-on-1 feedback",
      "Beachfront cottage accommodation",
      "Capstone — design and teach a public week of classes"
    ],
    description: "For teachers who have been practicing and teaching for at least a year and want to go deeper. The 300-hour is about refinement — your eye for alignment, your teaching voice, your ability to hold a room. Tropical Goa is the setting; the work is serious.",
    curriculum: [
      "Advanced asana — inversions, arm balances, backbends",
      "Therapeutic yoga & contraindications",
      "Subtle body — chakras, nadis, koshas",
      "Advanced pranayama & meditation",
      "Yoga psychology",
      "Business of teaching — workshops, retreats, online",
      "Mentorship & teaching observation",
      "Capstone public-class series"
    ]
  },
  {
    id: "sedona-200hr-kundalini",
    title: "200-Hour Kundalini YTT",
    location: "Sedona, Arizona",
    country: "USA",
    continent: "Americas",
    duration: 25,
    certification: "200-Hour",
    yogaAlliance: true,
    style: "Kundalini",
    price: 4500,
    startDate: "2026-03-09",
    endDate: "2026-04-03",
    school: "Red Rock Kundalini Academy",
    spots: 6,
    rating: 4.9,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Yoga Alliance RYS-200 + KRI Level 1 dual certification",
      "Daily kriyas at sunrise on the vortex sites",
      "Mantra, meditation & sound therapy modules",
      "Lineage rooted in Yogi Bhajan's original transmission",
      "Stargazing nights in International Dark Sky country",
      "Two-day silent retreat in the program"
    ],
    description: "Sedona's red rocks have drawn meditators for centuries. This Kundalini YTT honors the classical KRI curriculum while taking full advantage of the land — many of your kriyas happen outdoors, at sunrise, on the vortex sites. Best for students drawn to the more devotional, energy-focused side of yoga.",
    curriculum: [
      "Kundalini kriyas & meditations",
      "Mantra & sound current (Naad yoga)",
      "Pranayama — breath of fire, sitali, etc.",
      "Yogic anatomy — chakras & nadis",
      "Sikh Dharma & lineage history",
      "Teaching methodology — holding space",
      "Sat nam rasayan healing basics",
      "Practicum & community teaching"
    ]
  },
  {
    id: "mysore-ashtanga-immersion",
    title: "Ashtanga Immersion — Mysore Style",
    location: "Mysore",
    country: "India",
    continent: "Asia",
    duration: 28,
    certification: "Immersion (non-RYT)",
    yogaAlliance: false,
    style: "Ashtanga",
    price: 1200,
    startDate: "2026-07-06",
    endDate: "2026-08-02",
    school: "Mysore Mandala Yogashala",
    spots: 8,
    rating: 4.9,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Traditional Mysore-style self-practice — receive postures individually",
      "Daily led primary series + Sanskrit chanting class",
      "Twice-weekly philosophy class with lineage scholar",
      "Authorization track for serious students considering teaching",
      "Long-stay friendly — many students extend their visa",
      "Walk to KPJAYI, eat at Anokhi, drink coconut water"
    ],
    description: "This is not a YTT — it is the way Ashtanga has been studied for fifty years. You practice six mornings a week under direct guidance, attend philosophy in the afternoon, and let Mysore's slow rhythm rebuild your practice from the ground up. For practitioners committed to the tradition.",
    curriculum: [
      "Ashtanga Primary Series — postures, vinyasa count, dṛṣṭi",
      "Sanskrit count & chant — opening invocation, mantras",
      "Yoga Sutras of Patanjali — chapter by chapter",
      "Mysore-style adjustment & assist methodology",
      "Tradition, lineage & ethics of teaching Ashtanga",
      "Pranayama (Krishnamacharya style)",
      "Self-practice discipline & home practice design",
      "Long-form integration — no certificate, deep practice"
    ]
  }
];

const CERTIFICATIONS = ["200-Hour", "300-Hour", "Immersion (non-RYT)"];

function getTrainingById(id) {
  return TRAININGS.find((tr) => tr.id === id);
}

function getTeacherById(id) {
  return TEACHERS.find((t) => t.id === id);
}

function getPractitionersForRetreat(retreatId) {
  return PRACTITIONERS.filter((p) => p.retreatId === retreatId);
}

function getRetreatsForTeacher(teacherId) {
  return RETREATS.filter((r) => r.teacherId === teacherId);
}

function formatPrice(n) {
  return "$" + n.toLocaleString("en-US");
}

function formatDateRange(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const monthFmt = { month: "short", day: "numeric" };
  const yearFmt = { year: "numeric" };
  return `${s.toLocaleDateString("en-US", monthFmt)} – ${e.toLocaleDateString("en-US", monthFmt)}, ${e.toLocaleDateString("en-US", yearFmt)}`;
}

function getRetreatById(id) {
  return RETREATS.find((r) => r.id === id);
}
