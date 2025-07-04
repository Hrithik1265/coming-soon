import MembershipCards from "@/components/MembershipCards";
import React, { useState, useEffect, useRef } from "react";

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* Header Component */}
      {/* <Header /> */}
      {/* Category Navigation Component */}
      <CategoryNavigation />
      {/* Main Content Area */}
      <div className="container mx-auto p-4 max-w-7xl">
        {/* Carousel Component */}
        <ImageCarousel />
      </div>
      <div className="container mx-auto p-4 max-w-7xl">
        {/* Carousel Component */}
        <MembershipCards />
      </div>
    </div>
  );
};
// Category Navigation Component
const CategoryNavigation = () => {
  const categories = [
    { name: "Grocery", icon: "🛒" },
    { name: "Mobiles", icon: "📱" },
    { name: "Fashion", icon: "👗" },
    { name: "Electronics", icon: "💻" },
    { name: "Home & Furniture", icon: "🛋️" },
    { name: "Appliances", icon: "📺" },
    { name: "Beauty, Toys & More", icon: "💄" },
  ];

  return (
    <nav className="bg-white shadow-sm py-3">
      <div className="container mx-auto flex justify-around items-center flex-wrap max-w-7xl">
        {categories.map((category, index) => (
          <a
            key={index}
            href="/LaunchingSoon"
            className="flex flex-col items-center p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-center text-sm"
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

// Image Carousel Component
const ImageCarousel = () => {
  const images = [
    {
      src: "https://placehold.co/1200x300/007bff/ffffff?text=Round+trip+deals+Up+to+₹3,500+Off",
      alt: "Round trip deals banner",
      text: "",
      code: "",
    },
    {
      src: "https://placehold.co/1200x300/ff5722/ffffff?text=Big+Bachat+Days",
      alt: "Big Bachat Days banner",
      text: "Big Bachat Days",
      code: "",
    },
    {
      src: "https://placehold.co/1200x300/4CAF50/ffffff?text=Electronics+Sale",
      alt: "Electronics Sale banner",
      text: "Electronics Sale",
      code: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle touch events for swiping
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      goToNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right
      goToPrev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      {/* Carousel images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = `https://placehold.co/1200x300/cccccc/333333?text=Image+Not+Found`;
              }}
            />
            {/* Overlay content for the first image (as per the example image) */}
            {index === 0 && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <p className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                  {image.text}
                </p>
                {image.code && (
                  <p className="mt-4 text-xl md:text-2xl font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                    {image.code}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-md hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-md hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Export the main App component as default
export default App;
