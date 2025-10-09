"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-white px-4">
      {/* ✅ Green Tick Icon */}
      <FaCheckCircle className="text-green-600 w-24 h-24 mb-6" />

      {/* ✅ Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Login Successful!
      </h1>

      {/* ✅ Subtitle */}
      <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
        Welcome back! You’ve successfully logged in to your account.
      </p>

      {/* ✅ Button */}
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-green-600 text-white rounded-xl font-semibold shadow-md hover:bg-green-700 transition-all duration-300"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Success;
