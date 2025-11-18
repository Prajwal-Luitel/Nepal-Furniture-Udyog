import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import Teams from "../components/Teams";
import Vision from "../components/Vision";
import WhyChooseUs2 from "../components/WhyChooseUs2";

function AboutUs() {
  return (
    <div className="bg-primary p-4 sm:p-6 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4 text-sm sm:text-base">
        <Link to="/" className="text-gray-500 hover:text-gray-800">
          Home
        </Link>
        <span className="mx-1 sm:mx-2">/</span>
        <span className="text-gray-600">About Us</span>
      </nav>

      <div className="mx-auto px-4 sm:px-6 md:px-8">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            At Nepal Furniture Udhyog, we specialize in creating handcrafted
            furniture that combines traditional craftsmanship with modern
            design.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <Vision />

        {/* Teams Section */}
        <Teams />

        {/* Why Choose Us Section */}
        <WhyChooseUs2 />
      </div>
    </div>
  );
}

export default AboutUs;
