import telangana from "../assets/images/states/telangana.jpg";
import andhraPradesh from "../assets/images/states/andhra-pradesh.jpg";
import tamilNadu from "../assets/images/states/tamil-nadu.jpg";
import karnataka from "../assets/images/states/karnataka.jpg";
import maharashtra from "../assets/images/states/maharashtra.jpg";
import rajasthan from "../assets/images/states/rajasthan.jpg";
import uttarPradesh from "../assets/images/states/uttar-pradesh.jpg";
import madhyaPradesh from "../assets/images/states/madhya-pradesh.jpg";
import odisha from "../assets/images/states/odisha.jpg";
import delhi from "../assets/images/states/delhi.jpg";

import charminar from "../assets/images/monuments/charminar.jpg";
import golcondaFort from "../assets/images/monuments/golconda-fort.jpg";
import ramappaTemple from "../assets/images/monuments/ramappa-temple.jpg";
import thousandPillar from "../assets/images/monuments/thousand-pillar.jpg";
import warangalFort from "../assets/images/monuments/warangal-fort.jpg";
import bhadrachalamTemple from "../assets/images/monuments/bhadrachalam-temple.jpg";
import undavalliCaves from "../assets/images/monuments/undavalli-caves.jpg";
import tirupatiTemple from "../assets/images/monuments/tirupati-temple.jpg";
import lepakshiTemple from "../assets/images/monuments/lepakshi-temple.jpg";
import amaravatiStupa from "../assets/images/monuments/amaravati-stupa.jpg";

import generic1 from "../assets/images/monuments/generic-1.jpg";
import generic2 from "../assets/images/monuments/generic-2.jpg";
import generic3 from "../assets/images/monuments/generic-3.jpg";

export const statesData = [
    {
        id: "telangana",
        name: "Telangana",
        image: telangana,
        description: "Known for its rich history and architectural marvels.",
        places: [
            { id: "charminar", name: "Charminar", image: charminar, description: "Iconic monument and mosque." },
            { id: "golconda-fort", name: "Golconda Fort", image: golcondaFort, description: "Historic fortress." },
            { id: "ramappa-temple", name: "Ramappa Temple", image: ramappaTemple, description: "UNESCO World Heritage site." },
            { id: "thousand-pillar-temple", name: "Thousand Pillar Temple", image: thousandPillar, description: "Historic Hindu temple." },
            { id: "warangal-fort", name: "Warangal Fort", image: warangalFort, description: "Ruined fort in Warangal district." },
            { id: "bhadrachalam-temple", name: "Bhadrachalam Temple", image: bhadrachalamTemple, description: "Lord Rama temple situated on the banks of Godavari." }
        ]
    },
    {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        image: andhraPradesh,
        description: "Famous for its ancient temples and caves.",
        places: [
            { id: "undavalli-caves", name: "Undavalli Caves", image: undavalliCaves, description: "Monolithic Indian rock-cut architecture." },
            { id: "tirupati-temple", name: "Tirupati Temple", image: tirupatiTemple, description: "One of the most visited pilgrimage centers." },
            { id: "lepakshi-temple", name: "Lepakshi Temple", image: lepakshiTemple, description: "Famous for its hanging pillar." },
            { id: "amaravati-stupa", name: "Amaravati Stupa", image: amaravatiStupa, description: "Ruined Buddhist monument." },
            { id: "belum-caves", name: "Belum Caves", image: generic1, description: "Largest and longest cave system." },
            { id: "gandikota-fort", name: "Gandikota Fort", image: generic2, description: "The Grand Canyon of India." },
            { id: "srikalahasti-temple", name: "Srikalahasti Temple", image: generic3, description: "Ancient Shiva temple." },
            { id: "kanaka-durga-temple", name: "Kanaka Durga Temple", image: generic1, description: "Famous temple of Goddess Durga." }
        ]
    },
    {
        id: "tamil-nadu",
        name: "Tamil Nadu",
        image: tamilNadu,
        description: "Home to magnificent Dravidian architecture.",
        places: [
            { id: "brihadeeswara-temple", name: "Brihadeeswara Temple", image: generic2, description: "UNESCO World Heritage site." },
            { id: "meenakshi-temple", name: "Meenakshi Temple", image: generic3, description: "Historic Hindu temple." },
            { id: "shore-temple", name: "Shore Temple", image: generic1, description: "Built with blocks of granite." },
            { id: "ramanathaswamy-temple", name: "Ramanathaswamy Temple", image: generic2, description: "Features the longest corridor." },
            { id: "gingee-fort", name: "Gingee Fort", image: generic3, description: "Troy of the East." },
            { id: "annamalaiyar-temple", name: "Annamalaiyar Temple", image: generic1, description: "Located at the base of Annamalai hills." }
        ]
    },
    {
        id: "karnataka",
        name: "Karnataka",
        image: karnataka,
        description: "A blend of ancient ruins and technological hubs.",
        places: [
            { id: "hampi", name: "Hampi Ruins", image: generic2, description: "UNESCO Heritage site." },
            { id: "mysore-palace", name: "Mysore Palace", image: generic3, description: "Historical palace." },
            { id: "golkonda", name: "Badami Caves", image: generic1, description: "Rock-cut structural temples." },
            { id: "pattadakal", name: "Pattadakal", image: generic2, description: "A complex of 7th and 8th century Hindu and Jain temples." },
            { id: "shravanabelagola", name: "Shravanabelagola", image: generic3, description: "Features the statue of Gommateshwara." }
        ]
    },
    {
        id: "maharashtra",
        name: "Maharashtra",
        image: maharashtra,
        description: "Famous for its caves and coastal forts.",
        places: [
            { id: "ajanta", name: "Ajanta Caves", image: generic1, description: "Rock-cut Buddhist cave monuments." },
            { id: "ellora", name: "Ellora Caves", image: generic2, description: "One of the largest rock-cut cave complexes." },
            { id: "gateway", name: "Gateway of India", image: generic3, description: "Arch-monument in Mumbai." },
            { id: "chhatrapati-shivaji", name: "Chhatrapati Shivaji Terminus", image: generic1, description: "Historic railway station." },
            { id: "elephanta", name: "Elephanta Caves", image: generic2, description: "Collection of cave temples." }
        ]
    },
    {
        id: "rajasthan",
        name: "Rajasthan",
        image: rajasthan,
        description: "The land of kings, famous for its majestic forts.",
        places: [
            { id: "amber-fort", name: "Amber Fort", image: generic3, description: "A grand palace fort." },
            { id: "hawa-mahal", name: "Hawa Mahal", image: generic1, description: "Palace of winds." },
            { id: "mehrangarh-fort", name: "Mehrangarh Fort", image: generic2, description: "One of the largest forts in India." },
            { id: "city-palace", name: "City Palace", image: generic3, description: "A palace complex in Jaipur." },
            { id: "jaisalmer-fort", name: "Jaisalmer Fort", image: generic1, description: "A massive yellow sandstone fort." }
        ]
    },
    {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        image: uttarPradesh,
        description: "Home to the glorious Taj Mahal.",
        places: [
            { id: "taj-mahal", name: "Taj Mahal", image: generic2, description: "An ivory-white marble mausoleum." },
            { id: "agra-fort", name: "Agra Fort", image: generic3, description: "The main residence of the emperors of the Mughal Dynasty." },
            { id: "fatehpur-sikri", name: "Fatehpur Sikri", image: generic1, description: "A town in the Agra District." },
            { id: "kashi-vishwanath", name: "Kashi Vishwanath Temple", image: generic2, description: "One of the most famous Hindu temples." },
            { id: "bara-imambara", name: "Bara Imambara", image: generic3, description: "An imambara complex in Lucknow." }
        ]
    },
    {
        id: "madhya-pradesh",
        name: "Madhya Pradesh",
        image: madhyaPradesh,
        description: "The Heart of India with profound heritage.",
        places: [
            { id: "khajuraho", name: "Khajuraho Temples", image: generic1, description: "A group of Hindu and Jain temples." },
            { id: "sanchi-stupa", name: "Sanchi Stupa", image: generic2, description: "Buddhist complex, famous for its Great Stupa." },
            { id: "gwalior-fort", name: "Gwalior Fort", image: generic3, description: "A hill fort near Gwalior." },
            { id: "bhimbetka", name: "Bhimbetka Rock Shelters", image: generic1, description: "Archaeological site spanning prehistoric periods." },
            { id: "mandav", name: "Mandu", image: generic2, description: "An ancient fort city." }
        ]
    },
    {
        id: "odisha",
        name: "Odisha",
        image: odisha,
        description: "Known for its stunning sun temples and tribal culture.",
        places: [
            { id: "konark", name: "Konark Sun Temple", image: generic3, description: "A 13th-century CE Sun temple." },
            { id: "jagannath", name: "Jagannath Temple", image: generic1, description: "An important Hindu temple dedicated to Jagannath." },
            { id: "lingaraj", name: "Lingaraj Temple", image: generic2, description: "A Hindu temple dedicated to Shiva." },
            { id: "udayagiri", name: "Udayagiri Caves", image: generic3, description: "Partly natural and partly artificial caves." },
            { id: "dhauli", name: "Dhauli Giri Shanti Stupa", image: generic1, description: "A Buddhist peace pagoda." }
        ]
    },
    {
        id: "delhi",
        name: "Delhi",
        image: delhi,
        description: "The bustling capital showcasing centuries of history.",
        places: [
            { id: "qutub-minar", name: "Qutub Minar", image: generic2, description: "A minaret and 'victory tower'." },
            { id: "red-fort", name: "Red Fort", image: generic3, description: "A historic fort in the city of Delhi." },
            { id: "india-gate", name: "India Gate", image: generic1, description: "A war memorial." },
            { id: "humayuns-tomb", name: "Humayun's Tomb", image: generic2, description: "The tomb of the Mughal Emperor Humayun." },
            { id: "jama-masjid", name: "Jama Masjid", image: generic3, description: "One of the largest mosques in India." }
        ]
    }
];
