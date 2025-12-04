import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtpApi, verifyOtpApi } from "../../data/api/auth";
import { useAuth } from "../../context/AuthContext"; // adjust path
import { fetchUserProfileApi } from "../../data/api/auth";
import {
  UserIcon,
  PencilIcon,
  BookmarkSquareIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      return setError("Enter a valid 10-digit mobile number");
    }

    try {
      setLoading(true);
      const res = await sendOtpApi(mobile);
      setStep(2);
    } catch (err) {
        console.log(err)
      setError("Failed to send OTP. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (otp.length !== 6) {
      return setError("Enter a valid 6-digit OTP");
    }

    try {
      setLoading(true);
      const res = await verifyOtpApi(mobile, otp);
      if (res.data.success) {

    // 🔥 Save JWT tokens
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    // 🔥 Now fetch user profile using JWT
    const profileRes = await fetchUserProfileApi();
    setUser(profileRes.data);

    navigate("/");
}
 else {
        setError(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
      setError(err.response.data.message);
    } else {
      setError("Something went wrong. Try again.");
    }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 bg-white">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {step === 1 ? (
          <form onSubmit={handleMobileSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile number"
                className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {error && (
                <div className="text-sm text-red-600  rounded-lg my-2">
                {error}
                </div>
                )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-5">
          <div className="flex items-center justify-center text-md text-gray-600">
            <span>OTP sent to <b>{mobile}</b></span>
            <span
                className="flex items-center ml-3 text-blue-500 hover:underline cursor-pointer"
                onClick={() => setStep(1)}
                >
            <PencilIcon className="h-4 w-4 mr-1" />
            Change
                </span>
           </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {error && (
                 <div className="p-3 text-sm text-red-600  rounded-lg mb-4">
                {error}
                </div>
                )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}