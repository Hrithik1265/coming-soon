import Head from "next/head";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const handleVerifyEmail = (e) => {
    e.preventDefault();
    // Simulate sending OTP (can be connected to backend)
    alert("Verification code sent to " + email);
    setEmailVerified(true);
  };

  return (
    <>
      <Head>
        <title>Shopnow - Sign Up</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-cover bg-fixed bg-center bg-[url('/18.jpg')] flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="flex-1 flex items-center justify-center bg-[rgba(0,0,0,0.6)] p-10">
          <div className="text-center text-white">
            <img
              src="/logo.png"
              alt="Shopnow Logo"
              className="mx-auto mb-6 max-w-[200px]"
            />
            <h2 className="text-3xl font-bold text-[#90ee90] mb-4">
              Welcome to Shopnow
            </h2>
            <p className="text-[#d0fdd2] text-md max-w-md mx-auto">
              Join us and experience the green way to shop. Sign up to unlock
              personalized deals, faster checkout, and exclusive rewards!
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex items-center justify-center bg-[rgba(0,0,0,0.8)] p-10">
          <div className="w-full max-w-md bg-gradient-to-br from-[#00ff7f]/20 to-[#007f4f]/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 text-white shadow-[0_0_25px_#00ff7f,0_0_60px_#00ff7f33]">
            <h1 className="text-3xl font-bold text-[#90ee90] text-center mb-6">
              Create Your Account
            </h1>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
              />

              {/* Email + Verify */}
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                />
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={!email || emailVerified}
                  className={`px-4 py-2 rounded-md font-bold text-sm ${
                    emailVerified
                      ? "bg-green-500 cursor-default"
                      : "bg-[#00ff7f] hover:bg-[#00cc66]"
                  }`}
                >
                  {emailVerified ? "Verified" : "Verify"}
                </button>
              </div>

              {/* OTP Field */}
              {emailVerified && (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                />
              )}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#d0fdd2]"
                >
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>

              <input
                type="text"
                placeholder="Referral Code (Optional)"
                className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
              />

              {/* Terms & Conditions */}
              <div className="flex items-center space-x-2 text-sm text-[#d0fdd2]">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-green-500"
                  required
                />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="/terms" className="underline hover:text-green-300">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className={`w-full py-3 rounded-md font-bold transition duration-300 shadow-[0_0_15px_#00ff7f,0_0_30px_#00ff7f77] ${
                  agreed
                    ? "bg-[#00ff7f] hover:bg-[#00cc66] text-white"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-sm text-[#d0fdd2] text-center">
              Already have an account?{" "}
              <a href="/login" className="underline hover:text-green-300">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
