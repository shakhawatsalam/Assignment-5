import BookCard from "../component/BookCard";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import NavBar from "../component/NavBar";

// Rest of your component code

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-center mt-14'>
          Leatest Books
        </h1>

        <BookCard />

        <Footer />
        <div className='max-w-7xl mx-auto'></div>
      </div>
    </>
  );
}
