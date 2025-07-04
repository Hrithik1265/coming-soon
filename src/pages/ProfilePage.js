import React, { useState } from "react";
import {
  User,
  ShoppingBag,
  MapPin,
  CreditCard,
  Settings,
  ChevronRight,
} from "lucide-react";

// Mock data for demonstration purposes
const mockOrders = [
  {
    id: "ORD001",
    date: "2024-06-25",
    total: "$125.00",
    status: "Delivered",
    items: [
      { name: "Wireless Headphones", qty: 1, price: "$75.00" },
      { name: "USB-C Cable", qty: 2, price: "$25.00" },
    ],
  },
  {
    id: "ORD002",
    date: "2024-06-18",
    total: "$50.00",
    status: "Shipped",
    items: [{ name: "Ergonomic Mouse", qty: 1, price: "$50.00" }],
  },
  {
    id: "ORD003",
    date: "2024-06-10",
    total: "$200.00",
    status: "Processing",
    items: [
      { name: "Mechanical Keyboard", qty: 1, price: "$150.00" },
      { name: "Mouse Pad", qty: 1, price: "$50.00" },
    ],
  },
];

const mockAddresses = [
  {
    id: "ADDR001",
    name: "John Doe",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "90210",
    country: "USA",
    isDefault: true,
  },
  {
    id: "ADDR002",
    name: "John Doe",
    street: "456 Oak Ave",
    city: "Otherville",
    state: "NY",
    zip: "10001",
    country: "USA",
    isDefault: false,
  },
];

const mockPaymentMethods = [
  {
    id: "PM001",
    type: "Visa",
    last4: "4242",
    expiry: "12/26",
    isDefault: true,
  },
  {
    id: "PM002",
    type: "Mastercard",
    last4: "1111",
    expiry: "08/25",
    isDefault: false,
  },
];
const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("profile"); // State to manage active section

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <User className="w-6 h-6 text-green-500" /> Personal Information
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <div>
                <p className="font-medium">Name:</p>
                <p>Hrithik H</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p>john.doe@example.com</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p>+1 (123) 456-7890</p>
              </div>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md">
                Edit Profile
              </button>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <ShoppingBag className="w-6 h-6 text-green-500" /> Order History
            </h2>
            <div className="space-y-6">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : order.status === "Shipped"
                          ? "bg-lime-100 text-lime-800 dark:bg-lime-800 dark:text-lime-100"
                          : "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Date: {order.date} | Total: {order.total}
                  </p>
                  <div className="text-gray-700 dark:text-gray-200">
                    <p className="font-medium mb-1">Items:</p>
                    <ul className="list-disc list-inside text-sm">
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.name} (x{item.qty}) - {item.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-4 text-green-600 hover:underline text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "addresses":
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <MapPin className="w-6 h-6 text-green-500" /> Shipping Addresses
            </h2>
            <div className="space-y-4">
              {mockAddresses.map((address) => (
                <div
                  key={address.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-gray-700 dark:text-gray-200"
                >
                  <p className="font-semibold">{address.name}</p>
                  <p>{address.street}</p>
                  <p>
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <p>{address.country}</p>
                  {address.isDefault && (
                    <span className="mt-2 inline-block px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full font-medium">
                      Default
                    </span>
                  )}
                  <div className="mt-3 flex gap-3">
                    <button className="text-green-600 hover:underline text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md">
                Add New Address
              </button>
            </div>
          </div>
        );
      case "payments":
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <CreditCard className="w-6 h-6 text-green-500" /> Payment Methods
            </h2>
            <div className="space-y-4">
              {mockPaymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-gray-700 dark:text-gray-200 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">
                      {method.type} ending in {method.last4}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Expires: {method.expiry}
                    </p>
                    {method.isDefault && (
                      <span className="mt-1 inline-block px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full font-medium">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button className="text-green-600 hover:underline text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md">
                Add New Card
              </button>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <Settings className="w-6 h-6 text-gray-500" /> Settings
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <p>Account settings and preferences will go here.</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md">
                Change Password
              </button>
              <button className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md">
                Delete Account
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-inter p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-64 bg-gray-50 dark:bg-gray-900 p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <img
              className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover mx-auto mb-3"
              src="https://placehold.co/96x96/000000/FFFFFF?text=HH" // Placeholder image
              alt="User Avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/96x96/000000/FFFFFF?text=JD";
              }}
            />
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Hrithik H
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              john.doe@example.com
            </p>
          </div>

          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection("profile")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === "profile"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <User className="w-5 h-5 mr-3" /> Personal Info
                <ChevronRight className="ml-auto w-5 h-5" />
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("orders")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === "orders"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <ShoppingBag className="w-5 h-5 mr-3" /> Order History
                <ChevronRight className="ml-auto w-5 h-5" />
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("addresses")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === "addresses"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <MapPin className="w-5 h-5 mr-3" /> Shipping Addresses
                <ChevronRight className="ml-auto w-5 h-5" />
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("payments")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === "payments"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <CreditCard className="w-5 h-5 mr-3" /> Payment Methods
                <ChevronRight className="ml-auto w-5 h-5" />
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("settings")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === "settings"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Settings className="w-5 h-5 mr-3" /> Settings
                <ChevronRight className="ml-auto w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6 sm:p-8">{renderSection()}</main>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} E-commerce User. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProfilePage;
