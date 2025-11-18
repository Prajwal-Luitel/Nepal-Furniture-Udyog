import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { CarouselImgMobile } from "../data/products";

const images = CarouselImgMobile;

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchMoved = useRef(false); // To track if swipe has moved enough to trigger a slide change
  const [isMobile, setIsMobile] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  }, [currentIndex]);

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, goToNext]);

  // Mobile check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this threshold as needed
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Touch support for swiping (only on mobile)
  const handleTouchStart = (e) => {
    if (isMobile) {
      touchMoved.current = false;
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile) {
      const touchEndX = e.touches[0].clientX;
      const swipeDistance = touchStartX.current - touchEndX;

      // If swipe distance is greater than threshold, consider it a swipe
      if (Math.abs(swipeDistance) > 50 && !touchMoved.current) {
        touchMoved.current = true;

        if (swipeDistance > 0) {
          // Swiped left, go to next slide
          goToNext();
        } else {
          // Swiped right, go to previous slide
          goToPrevious();
        }
      }
    }
  };

  return (
    <div
      className="relative w-full md:w-[70vw] md:rounded-md h-56 md:mx-auto md:h-80 mx-0 md:mx-auto lg:h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "tween", duration: 0.7 }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-56 md:h-80 lg:h-[600px] flex-shrink-0 relative"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-56 md:h-80 lg:h-[600px] object-cover transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 hidden md:block left-2 sm:left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition-all shadow-lg focus:outline-none"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 hidden md:block sm:right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition-all shadow-lg focus:outline-none"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`md:w-2.5 md:h-2.5 h-1.5 w-1.5 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
