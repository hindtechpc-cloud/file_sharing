import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../utils/validations.js";
import { LuLoaderCircle } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext.jsx";
import axios from "axios";
export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const handleLoginAPI = async (data) => {
    let res;
    try {
      res = await axios.post("http://localhost:5000/api/auth/login", data);
    } catch (error) {
      console.log(error);
    }
    if (res.status != 200) {
      alert("you are not logged in");
    }
    await login({ user: res?.data?.user, token: res?.data?.token });
    alert("you loggedin successfully");

    navigate("/");
  };

  const onSubmit = (data) => {
    handleLoginAPI(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
        >
          <h1 className="text-center text-gray-800 text-xl sm:text-2xl font-bold">
            Welcome back
          </h1>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={`w-full rounded-xl bg-gray-100 px-4 py-2 text-sm outline-none border focus:ring-2 focus:ring-[#086b4d]
                ${errors?.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors?.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className={`w-full rounded-xl bg-gray-100 px-4 py-2 text-sm outline-none border focus:ring-2 focus:ring-[#086b4d]
                ${errors?.password ? "border-red-500" : "border-gray-300"}`}
            />
            {errors?.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#086b4d] hover:bg-[#075c43] transition text-white font-semibold py-2 rounded-xl flex justify-center items-center"
          >
            {isSubmitting ? (
              <LuLoaderCircle size={22} className="animate-spin" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          I haven't an account?{" "}
          <Link
            to="/signup"
            className="text-[#086b4d] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
