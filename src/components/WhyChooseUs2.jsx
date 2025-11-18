import { FaLeaf, FaThumbsUp, FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion

const reasons = [
  {
    title: "Experience",
    description: "More than 10 years of skilled work for quality results.",
    icon: <FaStar className="h-10 w-10 text-secondary mb-2" />,
  },
  {
    title: "Eco-Friendly",
    description: "We use sustainable materials for a better planet.",
    icon: <FaLeaf className="h-10 w-10 text-secondary mb-2" />,
  },
  {
    title: "Happy Customers",
    description: "We focus on your needs for great service.",
    icon: <FaThumbsUp className="h-10 w-10 text-secondary mb-2" />,
  },
  {
    title: "Community Support",
    description: "We give back to the community and support local projects.",
    icon: <FaUsers className="h-10 w-10 text-secondary mb-2" />,
  },
];

const WhyChooseUs2 = () => (
  <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
      Why Choose Us
    </h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="flex flex-col items-center justify-center p-6 text-center"
        >
          {reason.icon}
          <h3 className="text-lg font-semibold text-gray-800">
            {reason.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2">{reason.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default WhyChooseUs2;
