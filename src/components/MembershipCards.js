// components/MembershipCards.js or pages/index.js (for a full page)
import React, { useState } from "react";

const MembershipCards = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aadharFile, setAadharFile] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsPDF, setShowTermsPDF] = useState(false);

  // Define the membership tiers data
  const membershipTiers = [
    {
      name: "BASIC",
      price: "Rs. 99",
      valueEligibility: "Rs. 1.00 to Rs. 10,000/-",
      validity:
        "Upto 100 days from membership activation or product purchase (whichever comes earlier)",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
    },
    {
      name: "REGULAR",
      price: "Rs. 499/-",
      valueEligibility: "Rs. 1.00 to Rs. 50,000/-",
      validity:
        "Upto 100 days from membership activation or product purchase (whichever comes earlier)",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600",
      hoverColor: "hover:from-green-500 hover:to-green-700",
    },
    {
      name: "PRIME",
      price: "Rs. 999",
      valueEligibility: "Rs. 1.00 to Rs. 1,00,000/-",
      validity:
        "Upto 1 year from membership activation or product purchase (whichever comes earlier)",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      hoverColor: "hover:from-purple-500 hover:to-purple-700",
    },
    {
      name: "ULTRA",
      price: "Rs. 2,499",
      valueEligibility: "Rs. 1.00 to Rs. 2,50,000/-",
      validity:
        "Upto 1 year from membership activation or product purchase (whichever comes earlier)",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      hoverColor: "hover:from-yellow-500 hover:to-yellow-700",
    },
    {
      name: "ELITE",
      price: "Rs. 4,999",
      valueEligibility: "Rs. 1.00 to Rs. 10,00,000/-",
      validity:
        "Upto 1 year from membership activation or product purchase (whichever comes earlier)",
      bgColor: "bg-gradient-to-br from-red-400 to-red-600",
      hoverColor: "hover:from-red-500 hover:to-red-700",
    },
    {
      name: "PREMIUM",
      price: "Rs. 9,999",
      valueEligibility: "Products of any value",
      validity: "Expires only after any product purchase",
      bgColor: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      hoverColor: "hover:from-indigo-500 hover:to-indigo-700",
    },
  ];

  const handleActivateClick = (tier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTier(null);
    setIsModalOpen(false);
    setAadharFile(null);
    setAgreeTerms(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!aadharFile || !agreeTerms) {
      alert("Please upload Aadhar card PDF and accept terms.");
      return;
    }
    // Handle form submission (e.g., upload or save to backend)
    alert(`Membership Activated for ${selectedTier.name}`);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-lg">
          Choose Your Membership
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <div
              key={index}
              className={`
                ${tier.bgColor} ${tier.hoverColor}
                relative flex flex-col items-center justify-between
                p-8 rounded-3xl shadow-xl transition-all duration-300 ease-in-out
                transform hover:-translate-y-2 hover:scale-105
                text-white overflow-hidden
              `}
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* SVG content */}
                  <circle
                    cx="20"
                    cy="20"
                    r="15"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="10"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <rect
                    x="50"
                    y="10"
                    width="20"
                    height="20"
                    fill="currentColor"
                    opacity="0.3"
                    transform="rotate(45 60 20)"
                  />
                  <polygon
                    points="10,90 30,70 50,90 30,100"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Card Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-4 tracking-wide">
                  {tier.name}
                </h2>
                <p className="text-5xl font-extrabold mb-6">{tier.price}</p>
                <div className="text-lg mb-4">
                  <p className="font-semibold">Eligible Product Value:</p>
                  <p>{tier.valueEligibility}</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Validity:</p>
                  <p>{tier.validity}</p>
                </div>
              </div>

              <button
                onClick={() => handleActivateClick(tier)}
                className="relative z-10 mt-8 px-8 py-3 rounded-full text-lg font-semibold
                           bg-white text-gray-800 shadow-md transition-all duration-300
                           hover:bg-gray-100 hover:shadow-lg focus:outline-none
                           focus:ring-4 focus:ring-white focus:ring-opacity-50"
              >
                Activate
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
                onClick={handleCloseModal}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Activate {selectedTier?.name} Membership
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Upload Aadhaar Card (PDF only)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setAadharFile(e.target.files[0])}
                    className="w-full text-black border p-2 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">
                      I agree to the{" "}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowTermsPDF(true);
                        }}
                        className="text-blue-600 underline"
                      >
                        terms and conditions
                      </a>
                    </span>
                  </label>
                </div>
                {showTermsPDF && (
                  <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="relative bg-white w-full max-w-3xl h-[80vh] rounded-xl shadow-lg p-4 flex flex-col">
                      {/* Close Button - fixed position inside modal box */}
                      <button
                        onClick={() => setShowTermsPDF(false)}
                        className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl z-10"
                      >
                        ×
                      </button>

                      {/* Header (optional) */}
                      <h2 className="text-xl text-black font-bold text-center mb-2">
                        Terms & Conditions
                      </h2>

                      {/* Scrollable PDF content */}
                      <div className="flex-grow overflow-hidden rounded-lg border">
                        <iframe
                          src="/membership-t&c.pdf"
                          className="w-full h-full"
                          title="Terms and Conditions"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!agreeTerms}
                  className={`w-full py-2 px-4 rounded-md font-semibold transition
    ${
      agreeTerms
        ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  `}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipCards;
