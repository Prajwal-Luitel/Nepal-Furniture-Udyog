import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import products from "../data/products";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="relative w-full py-6 px-3 sm:py-8 sm:px-4 md:py-10 md:px-6 bg-primary"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-6 sm:mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Products
        </h2>
        <div className="mt-2 sm:mt-3 w-12 sm:w-24 h-1 bg-secondary rounded-sm mx-auto"></div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        {products.slice(0, 5).map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            // whileHover={{ scale: 1.02 }}
          >
            <Link
              to={`/products/${createSlug(product.title)}`}
              className="bg-gray-100 border border-gray-200 rounded-sm overflow-hidden block transition-transform duration-300 hover:shadow-md"
            >
              {/* Product Image */}
              <motion.img
                src={product.imageSrc[0]}
                alt={product.title}
                className="w-full h-48 sm:h-56 object-cover"
                // whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Product Info */}
              <div className="p-4 sm:p-5">
                {/* Product Title */}
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors">
                  {product.title}
                </h2>

                {/* Product Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-1">
                  {product.shortdescription}
                </p>

                {/* Price */}
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  रु {product.price}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Products Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-center mt-6 sm:mt-8"
      >
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-secondary text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-opacity-95 transition-all duration-300"
          >
            All Products
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BentoGrid;
