import { FaBullseye, FaEye, FaThumbsUp, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const sections = [
  {
    title: "Our Mission",
    icon: <FaBullseye className="text-4xl text-secondary mr-2" />,
    description: "To create furniture that makes your home special.",
  },
  {
    title: "Our Vision",
    icon: <FaEye className="text-4xl text-secondary mr-2" />,
    description:
      "To be known for quality furniture and eco-friendly practices.",
  },
  {
    title: "Quality Assurance",
    icon: <FaThumbsUp className="text-4xl text-secondary mr-2" />,
    description: "We ensure every piece meets our high standards of quality.",
  },
  {
    title: "Sustainability",
    icon: <FaShieldAlt className="text-4xl text-secondary mr-2" />,
    description: "We use eco-friendly materials to protect our planet.",
  },
];

const Vision = () => {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="flex flex-col p-4"
          >
            {/* Icon */}
            <div className="px-2">{reason.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {reason.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
