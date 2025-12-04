import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const subCategories = [
  {
    title: "Tap Repair",
    image: "https://picsum.photos/200/300",
    rating: 4.5,
    price: 149,
  },
  {
    title: "Pipe Installation",
    image: "https://picsum.photos/200/300",
    rating: 4.7,
    price: 299,
  },
    {
    title: "Tank Installation",
    image: "https://picsum.photos/200/300",
    rating: 4.7,
    price: 299,
  },
    {
    title: "Wash Basin Installation",
    image: "https://picsum.photos/200/300",
    rating: 4.7,
    price: 299,
  },
    {
    title: "Furniture Installation",
    image: "https://picsum.photos/200/300",
    rating: 4.7,
    price: 299,
  },
    {
    title: "Electronics Installation",
    image: "https://picsum.photos/200/300",
    rating: 4.7,
    price: 299,
  },
  {
    title: "Fan Installation",
    image: "https://picsum.photos/200/300",
    rating: 4.8,
    price: 199,
  },
  {
    title: "Light Fitting",
    image: "https://picsum.photos/200/300",
    rating: 4.6,
    price: 129,
  },
  {
    title: "Furniture Assembly",
    image: "https://picsum.photos/200/300",
    rating: 4.9,
    price: 249,
  },
];

export default function CategoriesCarousel() {
  return (
    <section className="p-1 md:py-6 md:px-4 relative max-w-80 md:max-w-[1200px] mx-auto my-6 ">
      <h2 className="text-xl font-bold mb-4">Appliance Repair</h2>

      <div className="relative w-full ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 3},
            1024: { slidesPerView: 5 },
          }}
          className="overflow-hidden"
        >
          {subCategories.map((cat, idx) => (
            <SwiperSlide key={idx}>
  <div className="my-2 p-2 md:p-3 relative bg-white shadow-md rounded-xl overflow-hidden shadow-md hover:shadow-lg transition h-full cursor-pointer ">
    {/* Image */}
    <img
      src={cat.image}
      alt={cat.title}
      className="w-full h-50 md:h-60 object-cover"
    />

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-white/40 opacity-0 hover:opacity-100 transition duration-300"></div>

    {/* Content */}
    <div className="py-4  relative z-10">
      <h3 className="text-md ">{cat.title}</h3>
      <p className="text-sm text-gray-500 mt-1">⭐ {cat.rating}</p>
      <p className="text-sm  mt-1">
        Starting at ₹{cat.price}
      </p>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        {/* Navigation buttons (kept inside container) */}
        <button className="hidden md:flex custom-prev absolute top-1/2 -left-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="hidden md:flex custom-next absolute top-1/2 -right-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
