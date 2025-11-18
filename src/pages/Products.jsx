import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "/src/data/products.js";

const createSlug = (title) => {
  return title.toLowerCase().replace(/ /g, "-");
};

const Products = () => {
  return (
    <div className="p-4 sm:p-6 bg-primary min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4 text-sm sm:text-base">
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">Products</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
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
                whileHover={{ scale: 1.01 }}
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
                <span className="text-sm sm:text-lg font-bold text-gray-900">
                  रु {product.price}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
