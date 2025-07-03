import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-fixed bg-[url('/18.jpg')]">
        <div className="flex items-center justify-center min-h-screen bg-[rgba(0,0,0,0.6)]">
          <div className="relative bg-gradient-to-br from-[#00ff7f]/20 to-[#007f4f]/10 border border-white/20 backdrop-blur-lg rounded-2xl p-10 w-[90%] max-w-md text-white shadow-[0_0_25px_#00ff7f,0_0_60px_#00ff7f33]">
            <img
              src="/logo.png"
              alt="ShopNow Logo"
              className="mx-auto mb-4 max-w-[200px]"
            />
            <p className="text-[#d0fdd2] text-center text-sm mb-6">
              Here dream comes.... Alive!!!
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#90ee90] mb-2 text-center">
              Login
            </h1>

            <form className="space-y-4">
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                autoFocus
                className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#d0fdd2]"
                >
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#00ff7f] hover:bg-[#00cc66] text-white font-bold transition duration-300 shadow-[0_0_15px_#00ff7f,0_0_30px_#00ff7f77]"
              >
                Login
              </button>

              <div className="flex justify-between text-sm text-[#d0fdd2] mt-6">
                <a href="/forgot-password" className="hover:text-green-300">
                  Forgot Password?
                </a>
                <a href="/signup" className="hover:text-green-300">
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
