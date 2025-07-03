import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState(null); // success | error | null
  // const [hasMounted, setHasMounted] = useState(false); // Track client mount

  useEffect(() => {
    // setHasMounted(true); // Now we are on client side

    const targetDate = new Date("2025-12-31T00:00:00Z");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this with your actual API endpoint
      const response = await axios.post(
        "http://localhost:5000/api/subscribe",
        formData
      );
      console.log(response.data);

      setStatus("success");
      setFormData({ name: "", phone: "", email: "" }); // Reset form
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      {/* Left Section with Video */}
      <div className="relative w-full md:w-1/2 h-auto md:h-full">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-64 md:h-full object-cover md:absolute md:top-0 md:left-0 md:w-full"
          src="/comingSoon.mp4"
        ></video>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-green-50">
        {/* Header - Green */}
        <header className="w-full bg-green-600 text-white px-6 py-4 flex items-center justify-center shadow-md">
          <img src="/logo.png" alt="Logo" className="w-60 h-10" />
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center space-y-6 px-6 py-4 lg:py-0 w-full">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-extrabold text-green-700">
              Coming Soon
            </h2>
            <p className="text-md text-gray-600">
              Sign up to be notified first!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
              const value = [
                timeLeft.days,
                timeLeft.hours,
                timeLeft.minutes,
                timeLeft.seconds,
              ][index];
              return (
                <div
                  key={label}
                  className="bg-white/90 text-gray-800 px-4 py-3 rounded-xl shadow-lg min-w-[80px] border border-green-100"
                >
                  <div className="text-2xl font-bold text-green-600">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-sm font-medium">{label}</div>
                </div>
              );
            })}
          </div>

          {/* Sign-up Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-xl space-y-4 border border-white/30"
          >
            <div className="relative">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500">
                <i className="fas fa-user" />
              </span>
            </div>
            <div className="relative">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500">
                <i className="fas fa-phone" />
              </span>
            </div>
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500">
                <i className="fas fa-envelope" />
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-lg font-semibold shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              Notify Me
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm text-center pt-2">
                ✅ You’ve been subscribed!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center pt-2">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </main>

        {/* Footer - Green */}
        <footer className="w-full bg-green-600 text-white text-sm py-4 px-6 shadow-inner">
          <div className="flex justify-between items-center flex-wrap">
            {/* Left - Email */}
            <a
              href="mailto:infogetitofficesolutions@gmail.com"
              className="hover:underline"
            >
              <i className="fas fa-envelope mr-2" />{" "}
              infogetitofficesolutions@gmail.com
            </a>

            {/* Right - Instagram */}
            <a
              href="https://www.instagram.com/soshopnow.com__?igsh=eHJ4MWUydDd0M3ox"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <i className="fab fa-instagram mr-2" />
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
