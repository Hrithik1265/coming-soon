import { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi"; // Added more icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchInputRef = useRef(null); // Ref for the mobile search input

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest("header")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Focus the search input when the mobile menu opens
    if (!menuOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 0);
    }
  };

  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a
          href="/home"
          className="flex items-center space-x-2"
          aria-label="ShopNow Home"
        >
          <img
            src="/logo.png"
            alt="ShopNow Logo"
            className="w-28 sm:w-36 md:w-44 max-w-[180px] h-auto object-contain" // Adjusted sizes and added object-contain
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/180x40/4CAF50/FFFFFF?text=ShopNow"; // More fitting placeholder
              e.target.alt = "ShopNow Logo - Image not available"; // Accessible alt text for fallback
            }}
          />
        </a>

        {/* Desktop Search Bar */}
        <div className="flex-grow mx-4 hidden sm:block max-w-xl relative">
          <input
            type="text"
            placeholder="Search for Products, Brands, and More..."
            className="w-full py-2 pl-10 pr-4 rounded-md text-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" // Improved styling
            aria-label="Search products"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />{" "}
          {/* Icon */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">
          <a
            href="/ProfilePage"
            className="flex items-center hover:text-gray-200 transition duration-200 group"
          >
            <FiUser className="mr-2 text-lg group-hover:text-gray-200" />
            Profile
          </a>
          <a
            href="/cart"
            className="flex items-center hover:text-gray-200 transition duration-200 group"
          >
            <FiShoppingCart className="mr-2 text-lg group-hover:text-gray-200" />
            Cart
          </a>
          <a
            href="/logout"
            className="flex items-center hover:text-gray-200 transition duration-200 group"
          >
            <FiLogOut className="mr-2 text-lg group-hover:text-gray-200" />
            Logout
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation and Search */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden bg-green-800 px-4 py-4 transition-all ease-in-out duration-300"
        >
          <div className="relative mb-4">
            <input
              ref={searchInputRef} // Assign ref to the mobile search input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              aria-label="Search products on mobile"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="/profile"
              className="flex items-center py-2 hover:text-gray-200 transition duration-200"
            >
              <FiUser className="mr-3 text-xl" />
              Profile
            </a>
            <a
              href="/cart"
              className="flex items-center py-2 hover:text-gray-200 transition duration-200"
            >
              <FiShoppingCart className="mr-3 text-xl" />
              Cart
            </a>
            <a
              href="/logout"
              className="flex items-center py-2 hover:text-gray-200 transition duration-200"
            >
              <FiLogOut className="mr-3 text-xl" />
              Logout
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
