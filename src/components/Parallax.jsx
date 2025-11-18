import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MainImage } from "../data/products";
import { motion } from "framer-motion";

const ParallaxComponent = () => {
  const dialogRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const bg = isMobile ? MainImage.backgroundmobile : MainImage.background;

  useEffect(() => {
    const dialog = dialogRef.current;
    const timer = setTimeout(
      () => {
        if (dialog) {
          dialog.showModal();
        }
      },
      isMobile ? 2000 : 3000
    ); // Adjust dialog appearance for mobile
    return () => clearTimeout(timer);
  }, [isMobile]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const buttonHover = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 3, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[#f9f6f2] min-h-screen">
      {/* Parallax Background Section */}
      <motion.section
        className="relative w-full h-[100vw] md:h-screen   bg-right bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4">
          <motion.h1
            className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            Nepal Furniture Udhyog
          </motion.h1>
          <motion.p
            className="text-center text-base sm:text-lg hidden md:block text-white mb-6 sm:mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            Discover timeless pieces that bring elegance to any space.
          </motion.p>

          {/* Button (Responsive) */}
          <Link to="/products">
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#8b5e3c] text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 font-semibold text-sm sm:text-base"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Product Highlight Section */}
      <motion.section
        className="w-11/12 m-auto mt-8 grid grid-cols-1 gap-y-6 sm:gap-y-8 md:grid-cols-2 max-w-6xl items-center mb-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Product Image */}
        <motion.div className="px-2" variants={fadeInUp}>
          <motion.img
            src={MainImage.furniturePiece}
            alt="Elegant furniture piece in a stylish interior"
            className="rounded-lg shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Product Description */}
        <motion.div className="px-2" variants={fadeInUp}>
          <motion.h1
            className="text-2xl sm:text-3xl mb-3 text-[#3b2f2f]"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Modern Comfort, Timeless Design
          </motion.h1>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Explore our curated selection of furniture crafted with quality and
            style. Each piece is designed to make your home both functional and
            beautiful, blending modern comforts with timeless design aesthetics.
          </p>
          <Link to="/products">
            <motion.button
              className="px-5 py-2 mt-4 bg-secondary text-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
            >
              Explore Collection
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ParallaxComponent;
