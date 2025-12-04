
import { useNavigate } from "react-router-dom";
import { 
  FaTint, FaBolt, FaHammer, FaBroom, FaPaintRoller, FaSnowflake, FaWrench, 
  FaLaptop, FaCouch, FaLock, FaBug, FaCar, FaKey, FaDoorOpen, FaTools, FaFan, 
  FaPlug, FaChair, FaBrush, FaCogs, FaRecycle, FaShower, FaBoxOpen, FaTv, 
  FaDatabase 
} from "react-icons/fa";

export const categories = [
  {
    title: "Plumbing",
    slug: "plumbing",
    icon: <FaTint className="text-sky-500" />,
    price: 199,
    subcategories: [
      { id:1, title: "Leak Fixing", icon: <FaTint className="text-sky-500" />, desc: "Quick and reliable leak repairs.",
        features: [
        "Durable fittings",
        "Leak-proof guarantee",
        "Affordable pricing",
        "Experienced professionals",
      ],
       },
      {id:2,  title: "Pipe Installation", icon: <FaTools className="text-gray-600" />, desc: "Professional pipe fitting services.",
         features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ]
       },
      {id:3, title: "Bathroom Fittings", icon: <FaShower className="text-blue-400" />, desc: "Tap, shower, and sink installation.",
         features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
       },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Electrician",
    slug: "electrician",
    icon: <FaBolt className="text-yellow-500" />,
    price: 149,
    subcategories: [
      {id:4, title: "Wiring", icon: <FaPlug className="text-orange-500" />, desc: "Complete home & office wiring." },
      {id:5, title: "Fan Installation", icon: <FaFan className="text-gray-500" />, desc: "Ceiling and wall fan setup." },
      {id:6, title: "Switch Repair", icon: <FaBolt className="text-yellow-500" />, desc: "Fix or replace faulty switches." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Carpentry",
    slug: "carpentry",
    icon: <FaHammer className="text-amber-800" />,
    price: 249,
    subcategories: [
      {id:7, title: "Furniture Repair", icon: <FaChair className="text-amber-700" />, desc: "Fix broken chairs, tables, etc." },
      {id:8, title: "Door & Window Work", icon: <FaDoorOpen className="text-brown-600" />, desc: "Door fitting & window frames." },
      {id:9, title: "Custom Woodwork", icon: <FaHammer className="text-amber-800" />, desc: "Tailor-made wooden furniture." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Cleaning",
    slug: "cleaning",
    icon: <FaBroom className="text-green-600" />,
    price: 99,
    subcategories: [
      {id:10, title: "Home Cleaning", icon: <FaBroom className="text-green-600" />, desc: "Full home deep cleaning." },
      {id:11, title: "Kitchen Cleaning", icon: <FaRecycle className="text-teal-500" />, desc: "Oil & grease removal from kitchen." },
      {id:12, title: "Bathroom Cleaning", icon: <FaShower className="text-blue-500" />, desc: "Sparkling clean bathrooms." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Painting",
    slug: "painting",
    icon: <FaPaintRoller className="text-purple-500" />,
    price: 299,
    subcategories: [
      {id:13, title: "Wall Painting", icon: <FaBrush className="text-purple-500" />, desc: "Interior & exterior painting." },
      {id:14, title: "Texture Painting", icon: <FaPaintRoller className="text-indigo-500" />, desc: "Modern textured wall designs." },
      {id:15, title: "Wood Polishing", icon: <FaHammer className="text-amber-600" />, desc: "Furniture and wooden polish." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "AC Repair",
    slug: "ac-repair",
    icon: <FaSnowflake className="text-blue-400" />,
    price: 399,
    subcategories: [
      {id:16, title: "AC Servicing", icon: <FaSnowflake className="text-blue-400" />, desc: "General cleaning and servicing." },
      {id:17, title: "Gas Refill", icon: <FaCogs className="text-gray-600" />, desc: "AC gas top-up & leakage check." },
      {id:18, title: "AC Installation", icon: <FaTools className="text-gray-600" />, desc: "New AC setup and installation." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Appliance Repair",
    slug: "appliance-repair",
    icon: <FaWrench className="text-gray-600" />,
    price: 199,
    subcategories: [
      {id:19, title: "Washing Machine", icon: <FaRecycle className="text-green-500" />, desc: "All brands repair service." },
      {id:20, title: "Refrigerator", icon: <FaBoxOpen className="text-blue-500" />, desc: "Cooling issues & maintenance." },
      {id:21, title: "Microwave", icon: <FaTv className="text-red-500" />, desc: "Quick microwave repair." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Computer Repair",
    slug: "computer-repair",
    icon: <FaLaptop className="text-indigo-500" />,
    price: 299,
    subcategories: [
      {id:22, title: "Hardware Repair", icon: <FaCogs className="text-gray-600" />, desc: "Fix broken laptop/desktop parts." },
      {id:23, title: "Software Setup", icon: <FaDatabase className="text-teal-500" />, desc: "OS, antivirus, and software setup." },
      {id:24, title: "Data Recovery", icon: <FaDatabase className="text-indigo-600" />, desc: "Recover lost or deleted files." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Furniture",
    slug: "furniture",
    icon: <FaCouch className="text-rose-500" />,
    price: 199,
    subcategories: [
      {id:25, title: "Sofa Repair", icon: <FaCouch className="text-rose-500" />, desc: "Cushion & frame fixing." },
      {id:26, title: "Table & Chairs", icon: <FaChair className="text-amber-700" />, desc: "Repair or polish wooden sets." },
      {id:27, title: "Custom Furniture", icon: <FaHammer className="text-amber-800" />, desc: "Design new furniture pieces." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Locksmith",
    slug: "locksmith",
    icon: <FaLock className="text-gray-700" />,
    price: 149,
    subcategories: [
      {id:29, title: "Key Duplication", icon: <FaKey className="text-gray-600" />, desc: "Duplicate house or car keys." },
      {id:30, title: "Lock Repair", icon: <FaLock className="text-gray-700" />, desc: "Fix jammed or broken locks." },
      {id:31, title: "New Lock Installation", icon: <FaDoorOpen className="text-gray-600" />, desc: "Secure lock system setup." },
    ],
    features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676

  },
  {
    title: "Pest Control",
    slug: "pest-control",
    icon: <FaBug className="text-red-500" />,
    price: 349,
    subcategories: [
      {id:32, title: "Termite Control", icon: <FaBug className="text-amber-700" />, desc: "Protect wooden furniture & doors." },
      {id:33, title: "Cockroach Control", icon: <FaBug className="text-red-500" />, desc: "Safe pest treatment for kitchen." },
      {id:34, title: "Rodent Control", icon: <FaBug className="text-gray-600" />, desc: "Eliminate rats & mice from home." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
  {
    title: "Car Service",
    slug: "car-service",
    icon: <FaCar className="text-teal-600" />,
    price: 499,
    subcategories: [
      {id:36, title: "Car Wash", icon: <FaCar className="text-blue-500" />, desc: "Exterior & interior car cleaning." },
      {id:37, title: "Engine Check", icon: <FaCogs className="text-gray-600" />, desc: "Full engine diagnostic & service." },
      {id:38, title: "Tyre & Brake", icon: <FaTools className="text-gray-700" />, desc: "Repair & replacement services." },
    ],
     features: [
    "Durable fittings",
    "Leak-proof guarantee",
    "Affordable pricing",
    "Experienced professionals",
  ],
  image: "https://picsum.photos/1600/900",
  bookings :1233,
  rating :4.7,
  totalRatings:12676
  },
];






export default function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="p-3 mt-6">
      <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-100 shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/category/${cat.slug}`)}
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h3 className="text-base font-semibold text-center">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

