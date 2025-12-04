import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { services } from "../../data/services"; // Make sure path is correct
import { Heart, Star , Tag ,Check } from "lucide-react";
import ImageGallery from "../../components/Categories/ImageGallery";
import ServiceTabs from "../../components/Categories/ServiceTabs";
import profession  from "../../assets/profession.jpg";

export default function ServiceDetailPage() {
  const { id } = useParams(); // service id from route
  const navigate = useNavigate();

  const service = services.find((s) => String(s.id) === id);

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  if (!service) {
    return <div className="p-6">Service not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 text-gray-800">
      {/* Back Button */}
      {/* <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
      >
        ← Back
      </button> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-3">
        {/* Left: Images */}
        <div className="relative p-2 md:border border-gray-200">
         <ImageGallery images={service.images} />
          {/* Wishlist */}
          <button
            onClick={() => setWishlist(!wishlist)}
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
          >
            <Heart
              className={`w-6 h-6 ${
                wishlist ? "text-red-500 fill-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>

        {/* Right: Service Info */}
        <div className="md:border border-gray-200 p-2">
          {/* Title */}
          <p className="text-xl ">{service.title}</p>

          {/* Ratings */}
          <div className="flex items-center gap-2 my-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm">{service.rating}</span>
            <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
          </div>
         
         {/* Duration */}
          <div className="mb-2">
            <span className="text-sm text-gray-600">⏱ {service.duration}</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3 mt-2 mb-3">
            <span className="text-2xl font-semibold text-black-300">
              ₹{service.price}
            </span>
            <span className="line-through text-gray-500">₹{service.mrp}</span>
          </div>


          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2"
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition">
              Add to Cart
            </button>
          </div>

          {/* Features */}
          {/* <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <div className="flex flex-col text-gray-700 space-y-1">
              {service.features.map((f, idx) => (
                <p key={idx} ><Check className="text-green"/> {f}</p>
              ))}
            </div>
          </div> */}

          {/* Description */}
          {/* <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{service.description}</p>
          </div> */}

          {/* Service Provider */}
          <div className=" p-4 border border-gray-300  rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">Service Provider</h2>
            <div className="flex items-center gap-4">
              <img
                src={profession}
                alt={service.provider.name}
                className="w-14 h-14 border border-gray-300 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{service.provider.name}</h3>
                <p className="text-sm text-gray-500">{service.provider.profession}</p>
                <p className="text-sm text-gray-500">
                  ⭐ {service.provider.rating} ({service.provider.reviews} reviews)
                </p>
              </div>
            </div>
          </div>

          {/* Q&A */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-2">Questions & Answers</h2>
            <div className="space-y-3">
              {service.qa.map((q, idx) => (
                <div key={idx} className="border p-3 rounded-lg">
                  <p className="font-medium">Q: {q.question}</p>
                  <p className="text-gray-700">A: {q.answer}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div> 
      </div>
       {/* TABS */}
       <ServiceTabs service={service} />



    </div>
  );
}
