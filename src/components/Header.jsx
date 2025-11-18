import { useMemo } from "react";
import { Link } from "react-router-dom";

function Header() {
  const navLinks = useMemo(
    () => [
      { name: "Home", to: "/" },
      { name: "Products", to: "/products" },
      { name: "About Us", to: "/about" },
      { name: "Services", to: "/services" },
    ],
    []
  );

  return (
    <header className="bg-primary text-black border-b w-full top-0 z-30 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 flex w-full items-center justify-between h-14">
        {/* Brand */}
        <Link to="/" className="flex items-center">
          <h1 className="font-extrabold text-4xl">
            N<span className="text-secondary">F</span>U
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-secondary hover:text-opacity-95 font-semibold text-lg transition duration-200 relative hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="https://www.facebook.com/profile.php?id=61561912654824"
            className="bg-secondary px-5 py-2 text-sm font-semibold text-primary rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          >
            Let&apos;s Chat
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;