import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import products from "../data/products"; // Adjust the path based on your folder structure
import { motion } from "framer-motion";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

function RelatedProducts({ currentProductId }) {
  // Filter out the current product and display related products (based on category or other logic)
  const relatedProducts = products.filter(
    (product) => product.id !== currentProductId
  );

  return (
    <div className="p-4 sm:p-6 bg-primary">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
        You May Also Like
      </h1>

      {/* Products Grid */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
        {relatedProducts.slice(0, 5).map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to={`/products/${createSlug(product.title)}`}
              className="bg-gray-100 border border-gray-200 rounded-md overflow-hidden block transition-transform duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <motion.img
                src={product.imageSrc[0]}
                alt={product.title}
                className="w-full h-48 sm:h-56 object-cover"
                whileHover={{ scale: 1.02 }}
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
                  {product.description}
                </p>

                {/* Price */}
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  रु {product.price}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

RelatedProducts.propTypes = {
  currentProductId: PropTypes.string.isRequired,
};

export default RelatedProducts;
