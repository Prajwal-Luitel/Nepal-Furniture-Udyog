import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Use framer-motion for scroll animations
import PropTypes from "prop-types";

const teamMembers = [
  {
    name: "Hari Sangroula",
    role: "CEO, Founder",
    imgSrc: "teams/hari.jpg",
    facebook: "https://www.facebook.com/hari.sangraula.92",
    phone: "9842703480",
  },
  {
    name: "Kanchan Baral",
    role: "CTO, Co-Founder",
    imgSrc: "teams/kanchan.jpg",
    facebook: "https://www.facebook.com/baral.kanchan",
    phone: "9842703480",
  },
  {
    name: "Bidur Baral",
    role: "COO, Co-Founder",
    imgSrc: "teams/bidur.jpg",
    facebook: "https://www.facebook.com/bidur.baral1",
    phone: "9842703480",
  },
];

const TeamMemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
    transition={{ duration: 0.5 }}
    className="bg-primary border rounded-md p-4 flex flex-col items-center shadow-sm transition-shadow duration-200 hover:shadow-md"
  >
    <img
      src={member.imgSrc}
      alt={member.name}
      className="rounded-full w-24 h-24 mb-2"
    />
    <h3 className="text-lg font-semibold">{member.name}</h3>
    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
    <div className="flex space-x-4">
      <a
        href={member.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Facebook profile of ${member.name}`}
        className="text-secondary hover:text-blue-500 transition-colors"
      >
        <FaFacebookF />
      </a>
      <a
        href={`tel:${member.phone}`}
        aria-label={`Call ${member.name}`}
        className="text-secondary hover:text-green-500 transition-colors"
      >
        <FaPhoneAlt />
      </a>
    </div>
  </motion.div>
);

const Teams = () => (
  <div className="py-12 max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
      Meet Our Team
    </h2>
    <p className="text-gray-700 text-center mb-8">
      Our executives bring experience and passion, ensuring top-quality products
      and services for our customers.
    </p>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  </div>
);

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default Teams;
