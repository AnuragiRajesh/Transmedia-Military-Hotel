export interface Hotel {
    id: number
    name: string
    location: string
    area: string
    tag: string
    badge: string
    rating: number
    reviews: string
    shortDesc: string
    longDesc: string
    established: string
    access: string
    rooms: string
    amenities: string
    lat: number
    lng: number
}

export const HOTELS: Hotel[] = [
    {
        id: 1,
        name: 'Shivaji Military Hotel',
        location: 'Jayanagar, 8th Block',
        area: 'South Bengaluru',
        tag: 'Army',
        badge: 'EST. 1930S',
        rating: 3.8,
        reviews: '24,531',
        shortDesc: "One of Bangalore's oldest military hotels, once serving soldiers exclusively. Famous for mutton biryani on banana leaf.",
        longDesc:
            "Founded in the early 1930s when the Bengaluru Cantonment was at its colonial peak, Shivaji Military Hotel began as a mess-style eatery feeding soldiers from the nearby barracks. Over nine decades, it has evolved into a beloved civilian institution while retaining its no-frills ethos — bare tables, steel plates, and some of the finest mutton biryani south of the Deccan. The banana-leaf service continues unchanged.",
        established: 'Est. 1930s',
        access: 'Open to Public',
        rooms: 'Dining only',
        amenities: 'Mutton Biryani, Leg Soup, Kheema Gojju',
        lat: 12.9255,
        lng: 77.5931,
    },
    {
        id: 2,
        name: 'Ranganna Military Hotel',
        location: 'Jayanagar, 7th Block',
        area: 'South Bengaluru',
        tag: 'Corps of Engineers',
        badge: 'NAATI STYLE',
        rating: 3.9,
        reviews: '11,114',
        shortDesc: 'Known for nati-style Karnataka cuisine. Signature dishes: mutton biryani, kheema gojju, and leg soup.',
        longDesc:
            'Ranganna Military Hotel is the neighbourhood institution of Jayanagar — an area that once housed thousands of retired defence personnel. The kitchen has barely changed since the 1950s. Every morning, cooks arrive before dawn to prepare the slow-cooked nati broth that forms the base of their legendary leg soup. The gojju — a thick, spiced gravy — is made to a recipe that owner Ranganna Swamy claims has been in his family for three generations.',
        established: 'Est. 1952',
        access: 'Open to Public',
        rooms: 'Dining only',
        amenities: 'Leg Soup, Nati Chicken, Kheema Dosa',
        lat: 12.9306,
        lng: 77.5845,
    },
    {
        id: 3,
        name: 'Bhairaveshwara Military Hotel',
        location: 'Malleswaram',
        area: 'North-West Bengaluru',
        tag: 'Multi-service',
        badge: 'TOP RATED',
        rating: 4.2,
        reviews: '1,384',
        shortDesc: 'Authentic naati non-veg in Malleswaram. Beloved for kaal soup and dosa with kheema saaru at breakfast.',
        longDesc:
            'Tucked in the older part of Malleswaram — a neighbourhood of temples, silk sarees, and old Kannadiga families — Bhairaveshwara is the outlier: a military hotel that survives on the strength of its kaal soup and morning dosa service. The broth, made from slow-cooked trotters and spices, draws a queue of regulars at 7:30 AM sharp. At 4.2 stars, it is the highest-rated military hotel in the city.',
        established: 'Est. 1968',
        access: 'Open to Public',
        rooms: 'Dining only',
        amenities: 'Kaal Soup, Kheema Dosa, Saaru Rice',
        lat: 13.0035,
        lng: 77.5705,
    },
    {
        id: 4,
        name: "S G Rao's Military Hotel",
        location: 'Sultanpete, Chickpet',
        area: 'Central Bengaluru',
        tag: 'Heritage',
        badge: 'HERITAGE',
        rating: 3.9,
        reviews: '3,809',
        shortDesc: 'Old-school Bengaluru with nostalgic infrastructure. Famous for hot pulav and udayagiri chicken.',
        longDesc:
            "S G Rao's stands as one of the last military hotels in old Pete — the dense commercial heart of central Bengaluru. Surrounded by wholesale cloth merchants and jewellery shops, the hotel feeds the working community of Chickpet with hot pulav, crispy fried chicken, and a rasam so sharp it clears the sinuses. The formica tables and hand-written menu boards have not changed since S G Rao himself opened the doors in the 1960s.",
        established: 'Est. 1960s',
        access: 'Open to Public',
        rooms: 'Dining only',
        amenities: 'Veg Pulav, Udayagiri Chicken, Rasam',
        lat: 12.9718,
        lng: 77.5760,
    },
    {
        id: 5,
        name: 'New Military Hotel',
        location: 'Basavanagudi',
        area: 'South Bengaluru',
        tag: 'Indian Air Force',
        badge: 'VINTAGE',
        rating: 4.0,
        reviews: '6,201',
        shortDesc: 'A Basavanagudi staple near the Bull Temple. Classic ragi mudde and naati mutton curry that regulars drive across the city for.',
        longDesc:
            "New Military Hotel sits within walking distance of the Bull Temple — and its clientele reflects Basavanagudi's mix of old Mysore-era households and Air Force families stationed at HAL. The ragi mudde (finger millet balls) served with thick naati mutton saaru is the dish the restaurant is famous for; there is no menu, just what the cooks decide to prepare each morning. Arriving after 1 PM often means disappointment.",
        established: 'Est. 1948',
        access: 'Open to Public',
        rooms: 'Dining only',
        amenities: 'Ragi Mudde, Naati Mutton Saaru, Kidu Curry',
        lat: 12.9416,
        lng: 77.5697,
    },
    {
        id: 6,
        name: 'Kamat Military Hotel',
        location: 'Majestic, Gandhi Nagar',
        area: 'Central Bengaluru',
        tag: 'Multi-service',
        badge: 'ICONIC',
        rating: 3.7,
        reviews: '8,924',
        shortDesc: 'Gateway to Bengaluru for travellers arriving at Majestic bus stand. Known for its all-day meals and iron-stomach portions.',
        longDesc:
            "Steps from Bengaluru's largest bus terminus, Kamat Military Hotel has been feeding inter-city travellers, junior defence personnel in transit, and construction workers since the 1970s. It is one of the few military hotels in the city that serves continuously from 6 AM to 11 PM without a lunch break. The portions are legendary — and the price per plate has barely moved in a decade.",
        established: 'Est. 1971',
        access: 'Open to Public',
        rooms: 'Dining only',
        amenities: 'All-day Thali, Mutton Dishes, Chicken Fry',
        lat: 12.9766,
        lng: 77.5713,
    },
]
