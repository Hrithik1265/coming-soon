import Head from "next/head";
import { useState } from "react";

export default function ForgotPassword() {
  const [step, setStep] = useState(1); // 1: Enter number, 2: OTP, 3: Reset password
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Simulate sending OTP
  const sendOtp = () => {
    if (mobile.trim().length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    alert(`OTP sent to ${mobile}: ${generatedOtp}`); // Replace this with actual SMS API
    console.log(generatedOtp);
    setStep(2);
  };

  // Simulate OTP verification
  const verifyOtp = () => {
    if (userOtp === otp) {
      alert("OTP verified!");
      setStep(3);
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  // Simulate password reset
  const resetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Call backend API here
    alert("Password successfully reset!");
    // Redirect to login
    window.location.href = "/login";
  };

  return (
    <>
      <Head>
        <title>Reset Password - GreenCart</title>
      </Head>
      <div className="min-h-screen bg-cover bg-center bg-fixed bg-[url('/18.jpg')]">
        <div className="flex items-center justify-center min-h-screen bg-[rgba(0,0,0,0.6)]">
          <div className="bg-gradient-to-br from-[#00ff7f]/20 to-[#007f4f]/10 border border-white/20 backdrop-blur-lg rounded-2xl p-10 w-[90%] max-w-md text-white shadow-[0_0_25px_#00ff7f,0_0_60px_#00ff7f33]">
            <img
              src="/logo.png"
              alt="GreenCart Logo"
              className="mx-auto mb-6 max-w-[200px]"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-[#90ee90] mb-2">
              Reset Password
            </h1>

            <p className="text-[#d0fdd2] text-sm mb-6">
              {step === 1 &&
                "Enter your registered mobile number to receive an OTP."}
              {step === 2 && "Enter the OTP sent to your mobile number."}
              {step === 3 && "Enter and confirm your new password."}
            </p>

            <form className="space-y-4" onSubmit={resetPassword}>
              {step === 1 && (
                <>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                  />
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="w-full py-3 rounded-md bg-[#00ff7f] hover:bg-[#00cc66] text-white font-bold transition duration-300"
                  >
                    Send OTP
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={userOtp}
                    onChange={(e) => setUserOtp(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                  />
                  <button
                    type="button"
                    onClick={verifyOtp}
                    className="w-full py-3 rounded-md bg-[#00ff7f] hover:bg-[#00cc66] text-white font-bold transition duration-300"
                  >
                    Verify OTP
                  </button>
                </>
              )}

              {step === 3 && (
                <>
                  {/* New Password */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                    />
                    <span
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#d0fdd2]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "🙈"}
                    </span>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-[#d0fdd2] outline-none focus:ring-2 focus:ring-[#00ff7f]"
                    />
                    <span
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#d0fdd2]"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      {showConfirm ? "👁️" : "🙈"}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-[#00ff7f] hover:bg-[#00cc66] text-white font-bold transition duration-300"
                  >
                    Reset Password
                  </button>
                </>
              )}
            </form>

            <p className="mt-6 text-sm text-[#d0fdd2] text-right">
              <a href="/login" className="underline hover:text-green-300">
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
