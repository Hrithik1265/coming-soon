import React from "react";

// LaunchingSoon Component
const LaunchingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center font-inter text-white p-4">
      <div className="text-center p-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl border border-gray-600 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in">
          Hold On Tight!
        </h1>
        <p className="text-2xl md:text-3xl mb-10 font-light text-gray-300 animate-slide-up">
          Our digital rocket is fueled and ready for launch.
        </p>
        <p className="text-xl md:text-2xl font-medium text-gray-400 animate-fade-in delay-200">
          Get ready for something incredible.
        </p>
        <div className="mt-12">
          {/* Simple loading animation */}
          <div className="flex justify-center items-center space-x-3">
            <div
              className="w-4 h-4 bg-blue-400 rounded-full animate-bounce-dot"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-4 h-4 bg-purple-400 rounded-full animate-bounce-dot"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-4 h-4 bg-pink-400 rounded-full animate-bounce-dot"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS keyframes for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-dot {
          0%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.3s; /* Delay for this animation */
        }
        .animate-bounce-dot {
          animation: bounce-dot 1.2s infinite ease-in-out;
        }
        .delay-200 {
          animation-delay: 0.5s; /* Additional delay for specific elements */
        }
      `}</style>
    </div>
  );
};

// Export the LaunchingSoon component as default
export default LaunchingSoon;
