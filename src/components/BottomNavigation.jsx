import { useLocation } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineChat,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const iconData = [
  { icon: AiOutlineHome, label: "Home", href: "/" },
  { icon: HiOutlineShoppingBag, label: "Products", href: "/products" },
  { icon: HiOutlineUserCircle, label: "About", href: "/about" },
  { icon: HiOutlineBriefcase, label: "Services", href: "/services" },
  {
    icon: HiOutlineChat,
    label: "Let's Chat",
    href: "https://www.facebook.com/profile.php?id=61561912654824",
  },
];

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center py-2">
        {iconData.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={index}
              to={item.href}
              className={`flex flex-col font-bold items-center ${
                isActive ? "text-secondary " : ""
              }`}
            >
              <IconComponent className={`h-6 w-6 font-semibold `} />
              <span className="text-sm font-medium mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
