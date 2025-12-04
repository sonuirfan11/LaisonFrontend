export default function SubCategoryHighlight({ category }) {

  return (
    <section className="relative bg-yellow-50 py-8 px-4 my-5 w-full rounded-xl">
      <div className=" mx-auto grid grid-cols-1 gap-6 items-center px-0 md:px-8">
        
        {/* Image with overlay */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay with features */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 space-y-2 text-white">
            <h2 className="text-xl md:text-2xl font-bold">{category.title}</h2>
            <ul className=" pl-5 space-y-1">
              {category.features.map((feature, idx) => (
                <li key={idx} className="text-sm md:text-base">✓ {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side content */}
        {/* <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Why choose {category.title}?</h3>
          <p className="text-gray-600 mb-4">{category.desc}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {category.features.map((feature, idx) => (
              <li
                key={idx}
                className="text-gray-700 flex items-center gap-2 text-sm md:text-base"
              >
                ✅ {feature}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
}
