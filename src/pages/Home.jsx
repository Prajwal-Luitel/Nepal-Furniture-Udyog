import HeroCarousel from "../components/Carousel";
import ParallaxComponent from "../components/Parallax";
import BentoGrid from "../components/BentoGrid";
import Numbers from "../components/Numbers";

function Home() {
  return (
    <div className="bg-[#f9f6f2]">
      <ParallaxComponent />
      <Numbers />
      <HeroCarousel />
      <BentoGrid />
    </div>
  );
}

export default Home;
