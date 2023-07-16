import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import NavBar from "../component/NavBar";

export default function Home() {
  return (
    <>
      <div>
        <NavBar/>
        <HeroSection />
        <Footer/>
        <div className='max-w-7xl mx-auto'>

        </div>
      </div>
    </>
  );
}
