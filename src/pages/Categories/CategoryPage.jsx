import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { categories } from "../../components/HomePage/CategoriesSection";
import StatsSection from "../../components/HomePage/StatsSection";
import { Star, Heart } from "lucide-react";

const services = [
  { 
    id:1,
    category_id:1,
    image: "https://picsum.photos/200/200",
    title: "1 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:2,
    category_id:1,
    image: "https://picsum.photos/200/200",
    title: "2 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:3,
    category_id:1,
    image: "https://picsum.photos/200/200",
    title: "3 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:4,
    category_id:1,
    image: "https://picsum.photos/200/200",
    title: "4 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:5,
    category_id:2,
    image: "https://picsum.photos/200/200",
    title: "5 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:6,
    category_id:2,
    image: "https://picsum.photos/200/200",
    title: "6 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:7,
    category_id:2,
    image: "https://picsum.photos/200/200",
    title: "7 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:8,
    category_id:3,
    image: "https://picsum.photos/200/200",
    title: "8 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:9,
    category_id:3,
    image: "https://picsum.photos/200/200",
    title: "9 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:10,
    category_id:3,
    image: "https://picsum.photos/200/200",
    title: "10 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:11,
    category_id:4,
    image: "https://picsum.photos/200/200",
    title: "11 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:12,
    category_id:4,
    image: "https://picsum.photos/200/200",
    title: "12 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:13,
    category_id:4,
    image: "https://picsum.photos/200/200",
    title: "13 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  },
  { 
    id:14,
    category_id:4,
    image: "https://picsum.photos/200/200",
    title: "14 Professional Home Cleaning Service for living room, kitchen, bedroom and more...",
    rating: 4.6,
    totalReviews: 128,
    price: 499,
    time: "30 mins - 1 hour",
  }

]

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  

  // Wishlist state
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const category = categories.find((cat) => cat.slug === slug);

  const [activeSub, setActiveSub] = useState(
    category?.subcategories?.[0] || null
  );

  if (!category) {
    return <div className="p-6">Category not found</div>;
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto text-black">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">
         <button
        onClick={() => navigate(-1)}
        className="text-gray-700 mr-3"
      >
        ←
      </button>
        {category.title}</h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 items-start">
        {/* Subcategories as Tabs (Left Column) */}
        <div className="border border-gray-300 rounded-2xl lg:col-span-2 grid  grid-cols-3 gap-4 self-start lg:sticky top-20 p-4  ">
          {category.subcategories.map((sub, idx) => (
            <div
              key={idx}
              className={` flex flex-col items-center justify-center bg-gray-100 shadow-md rounded-lg p-2 hover:shadow-lg transition cursor-pointer ${
                activeSub?.title === sub.title
                  ? "border-b-4 border-black-500"
                  : ""
              }`}
              onClick={() => setActiveSub(sub)}
            >
              <div className="text-xl mb-3">{sub.icon}</div>
              <p className="text-xs  text-gray-500 text-center">
                {sub.title}
              </p>
            </div>
          ))}
        </div>

        {/* Active Tab Content (Right Side) */}
        <div className="lg:col-span-4 self-start border border-gray-300 rounded-2xl py-2 lg:p-3">
          {activeSub && (
            <>
              {services.filter(
                (service) => service.category_id === activeSub.id
              ).length > 0 ? (
                services
                  .filter((service) => service.category_id === activeSub.id)
                  .map((service) => (
                    <div
                      key={service.id}
                      className="relative flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition my-2 cursor-pointer"
                      onClick={() => navigate(`/service/${service.id}`)}
                    >
                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(service.id)}
                        className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full  transition"
                      >
                          <Heart
                            className={`w-6 h-6 ${
                              wishlist[service.id]
                                ? "text-red-500 fill-red-500"
                                : "text-gray-400"
                            }`}
                      />
                      </button>

                      {/* Left: Image */}
                      <div className="w-40 flex flex-col items-center justify-between p-3">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h:20 sm:h-40 rounded-lg"
                        />
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 p-2 flex flex-col justify-start">
                        {/* Title */}
                        <h3 className="text-gray-800 line-clamp-2">
                          {service.title}
                        </h3>

                        {/* Rating + Reviews */}
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span>{service.rating}</span>
                          <span className="ml-2 text-gray-500">
                            ({service.totalReviews} reviews)
                          </span>
                        </div>

                        {/* Price + Time */}
                        <div className="text-sm text-gray-700 font-medium my-3">
                          <span className="ml-2 text-gray-500">
                            {service.time}
                          </span>
                        </div>
                        <div className="text-sm text-gray-700 font-medium my-3">
                          Starting from{" "}
                          <span className="text-black">₹{service.price}</span>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center text-gray-500 py-10">
                  🚫 No services available in this category.
                </div>
              )}

              <div className="mt-8">
                <StatsSection category={category} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
