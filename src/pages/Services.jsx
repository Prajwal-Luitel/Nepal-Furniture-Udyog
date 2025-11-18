import { Link } from "react-router-dom";
import { BiChair } from "react-icons/bi";
import { TbTools, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BiLayout } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri"; // New icon for Custom Design
import { PiCouchBold } from "react-icons/pi";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Design",
    description: "We make furniture just for you, from start to finish.",
    icon: <RiDraftLine className="h-10 w-10 text-secondary mb-2" />, // New icon
  },
  {
    title: "Restoration",
    description: "We fix and renew your old furniture to make it look new.",
    icon: <TbTools className="h-10 w-10 text-secondary mb-2" />, // Changed icon
  },
  {
    title: "Shop Furniture",
    description:
      "Check out our collection to find the right furniture for your home.",
    icon: <MdOutlineShoppingCart className="h-10 w-10 text-secondary mb-2" />, // Changed icon
  },
  {
    title: "Fast Delivery",
    description: "We bring your furniture to you quickly and set it up.",
    icon: <TbTruckDelivery className="h-10 w-10 text-secondary mb-2" />,
  },
  {
    title: "Upholstery",
    description: "We give your furniture a fresh look with new fabric.",
    icon: <PiCouchBold className="h-10 w-10 text-secondary mb-2" />, // Changed to a couch icon
  },
  {
    title: "Assembly",
    description: "We help you put your furniture together easily.",
    icon: <BiChair className="h-10 w-10 text-secondary mb-2" />,
  },
  {
    title: "Interior Design",
    description: "We help you design your home to be beautiful and useful.",
    icon: <AiOutlineHome className="h-10 w-10  text-secondary mb-2" />,
  },
  {
    title: "Space Planning",
    description: "We organize your space to make it comfortable and efficient.",
    icon: <BiLayout className="h-10 w-10 text-secondary mb-2" />,
  },
];

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="py-10 px-6 min-h-[60vh] bg-primary">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4 text-gray-600 text-sm sm:text-base">
        <Link to="/" className="hover:text-secondary transition duration-200">
          Home
        </Link>
        <span className="mx-1 text-gray-400">/</span>
        <span className="text-gray-600">Services</span>
      </nav>

      {/* Title Section */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-8 text-sm sm:text-base"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        Discover a range of services made just for you.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 text-center"
            variants={fadeInUp}
          >
            {/* Icon */}
            <div className="px-2 mb-2">{service.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
