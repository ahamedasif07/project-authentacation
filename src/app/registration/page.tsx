"use client";

import { BlockList } from "net";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegistrationC() {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [otpModel, setOtpModel] = useState<boolean>(false);
  const [successUser, setSuccessUser] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      <ToastContainer position="top-center" />
      {otpModel ? (
        // <Verification successUser={successUser} />
        ""
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-none">
            <h2 className="text-2xl font-semibold text-center">
              Create your Account
            </h2>
            <p className="text-[13px] mt-[4px] text-gray-400 text-center mb-6">
              When sports Meets smart Tech.
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-1/2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-1/2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />

              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 accent-green-600" />
                <span>
                  I agree to Tech Takes{" "}
                  <a href="#" className="text-green-600 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-600 underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>

              <button
                type="submit"
                className={`w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link href="/" className="text-green-600 font-medium">
                Get started
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
