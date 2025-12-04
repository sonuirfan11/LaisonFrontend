import SearchBar from "../../components/HomePage/SearchBar";
import CategoriesSection from "../../components/HomePage/CategoriesSection";
import CategoriesCarousel from "../../components/HomePage/CategoriesCarousel";
import HeroSection from "../../components/HomePage/HeroSection";



export default function HomePage() {
  return (
    <main className="flex-1 p-2 flex flex-col items-center text-black mt-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Find Service at your <br></br> doorstep</h2>
      <SearchBar />
      <br></br>
       <CategoriesSection />
       <CategoriesCarousel/>
       <HeroSection/>
    </main>
  );
}
