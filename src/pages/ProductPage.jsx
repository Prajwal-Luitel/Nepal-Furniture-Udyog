import { useParams, Link } from "react-router-dom";
import products from "../data/products"; // Adjust the path as needed
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Function to create a slug from the title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

function ProductPage() {
  const { title } = useParams(); // The title will contain the slug
  const product = products.find((p) => createSlug(p.title) === title); // Compare slugs

  // State to manage the selected image
  const [selectedImage, setSelectedImage] = useState(
    product ? product.imageSrc[0] : null
  );

  // State to handle the description toggle
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleImageChange = (newImage) => {
    if (newImage !== selectedImage) {
      setSelectedImage(newImage);
    }
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  if (!product) {
    return <div className="p-6">Product not found.</div>; // Handle case when product is not found
  }

  return (
    <div className="p-6 sm:p-8 bg-primary ">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link to="/" className="text-gray-500 hover:text-secondary transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          to="/products"
          className="text-gray-500 hover:text-secondary transition"
        >
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.title}</span>
      </nav>

      {/* Product Content */}
      <div className="bg-primary p-6 sm:p-8 mx-auto rounded-lg">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          {/* Image Gallery */}
          <div className="flex-shrink-0 mb-6 sm:mb-0 sm:w-1/2">
            <div className="relative w-full bg-primary flex justify-center rounded-lg overflow-hidden h-72 sm:h-96">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt={product.title}
                  className="w-auto h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>
            </div>
            {product.imageSrc.length > 1 && (
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {product.imageSrc.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover cursor-pointer rounded-md border ${
                      selectedImage === img
                        ? "border-blue-500 ring-2 ring-blue-300"
                        : "border-gray-300"
                    } hover:border-gray-500 transition`}
                    onClick={() => handleImageChange(img)} // Update selected image smoothly
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <motion.div
            className="sm:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {product.title}
            </h1>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              रु {product.price}
            </p>

            <div className="text-gray-700 mb-4">
              <p
                className={`leading-relaxed text-base sm:text-lg transition-all ${
                  showFullDescription ? "" : "line-clamp-3"
                }`}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              {/* Show More / Show Less Button */}
              <button
                onClick={toggleDescription}
                className="text-secondary font-semibold mt-2 focus:outline-none"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
