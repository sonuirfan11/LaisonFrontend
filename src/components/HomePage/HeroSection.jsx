import logo from "../../assets/1752250021683-1b1754.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full md:p-6 text-center">
      <img
        src={logo}
        alt="Hero Banner"
        className=" h-64 md:h-96 mx-auto"
      />
      {/* <div className="absolute top-5 inset-0 bg-tranparent bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Find Trusted Services Near You
        </h1>
      </div> */}
    </section>
  );
}
