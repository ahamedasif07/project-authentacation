"use client";

import ForgetVerification from "@/components/Verification/ForgetVerification";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successUser, setSuccessUser] = useState<{
    email?: string;
    otp?: string;
  } | null>(null);

  const router = useRouter();

  const handleSendReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email?.trim();
    if (!trimmedEmail) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmedEmail }),
        }
      );

      const result = await res.json();
      console.log(result);
      if (result.status === 201) {
        const userData = result.data;
        setSuccessUser(userData);
        setModalOpen(true);
        toast.success("OTP sent to your email!");
        localStorage.setItem("resetEmail", trimmedEmail);
        console.log(userData, "API response userData"); // <- This will show correct data
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {modalOpen ? (
        <ForgetVerification successUser={successUser} email={email} />
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <ToastContainer position="top-center" />
          <form
            onSubmit={handleSendReset}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
              Forgot Password
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Enter your email and we’ll send you an OTP to reset your password.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full border px-3 py-2 rounded-md mb-4 focus:ring-2 focus:ring-green-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
