import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Products", url: "/products" },
  { name: "About Us", url: "/about" },
];

const contactInfo = [
  "+977 9815022100",
  "+977 980609572",
  "Mechinagar-7, Itabhatta",
];

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "TikTok", url: "https://www.tiktok.com" },
];

function Footer() {
  return (
    <footer className="bg-primary text-gray-800 pt-4 border-t">
      <div className="max-w-screen-lg mx-auto px-4 grid gap-6 md:grid-cols-3">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.url} className="hover:text-gray-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            {contactInfo.map((info, index) => (
              <li key={index} className="text-gray-600">
                {info}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-center text-gray-500"
      >
        © 2024 Nepal Furniture Udyog. Work of{" "}
        <a
          href="https://jynx.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-700"
        >
          <strong>JYNX</strong>
        </a>
        . All rights reserved.
      </motion.div>
      <div className="h-16 md:hidden"></div>
    </footer>
  );
}

export default Footer;
