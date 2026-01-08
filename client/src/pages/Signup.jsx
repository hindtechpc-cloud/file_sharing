


import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../utils/validations.js";
import { LuLoaderCircle } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext.jsx";
import axios from "axios";

export default function Signup() {
  const {login}=useContext(AuthContext);
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {},
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
  });
const handleSignUpAPI = async (data) => {
    let res;
    try {
      res = await axios.post("http://localhost:5000/api/auth/register", data);
    } catch (error) {
      console.log(error);
    }
    if (res.status != 201) {
      alert("you are not logged in");
    }
    await login({ user: res?.data?.user, token: res?.data?.token });
    alert("your account cteated successfully");
    navigate("/")
  };
  const onSubmit = (data) => {
    handleSignUpAPI(data);
    reset();
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <form
          className="w-full bg-white shadow-xl border border-gray-50 rounded-xl flex flex-col gap-4 p-6 sm:p-8 md:p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center font-sans text-gray-800 pb-4 sm:pb-5 text-xl sm:text-2xl md:text-3xl font-bold">
            Create Your Account
          </h1>
          
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-sans text-gray-600 pb-1 sm:pb-2"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className={`py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base outline-0 border w-full shadow-sm bg-gray-50 rounded-lg sm:rounded-xl ${
                errors?.name?.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.name?.message && (
              <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">{errors?.name?.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-sans text-gray-600 pb-1 sm:pb-2"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={`py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base outline-0 border w-full shadow-sm bg-gray-50 rounded-lg sm:rounded-xl ${
                errors?.email?.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.email?.message && (
              <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">{errors?.email?.message}</p>
            )}
          </div>
          
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-sans text-gray-600 pb-1 sm:pb-2"
            >
              Password
            </label>
            <input
              type="text"
              {...register("password")}
              placeholder="Enter your password"
              className={`py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base outline-0 border w-full shadow-sm bg-gray-50 rounded-lg sm:rounded-xl ${
                errors?.password?.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.password?.message && (
              <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">{errors?.password?.message}</p>
            )}
          </div>
          
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm sm:text-base font-sans text-gray-600 pb-1 sm:pb-2"
            >
              Confirm Password
            </label>
            <input
              type="text"
              {...register("confirmPassword")}
              placeholder="Confirm your password"
              className={`py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base outline-0 border w-full shadow-sm bg-gray-50 rounded-lg sm:rounded-xl ${
                errors?.confirmPassword?.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors?.confirmPassword?.message && (
              <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">
                {errors?.confirmPassword?.message}
              </p>
            )}
          </div>
          
          <div className="flex items-center justify-center mt-2 sm:mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white font-sans font-semibold cursor-pointer py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base shadow-sm hover:shadow-md bg-[#086b4d] hover:bg-[#075c43] rounded-lg sm:rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <LuLoaderCircle
                    size={20}
                    className="sm:w-6 sm:h-6 animate-spin"
                  />
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        
        <p className="text-center py-4 sm:py-5 md:py-6 text-gray-500 text-sm sm:text-base">
          Already have an account{" "}
          <Link className="text-[#086b4d] hover:text-[#075c43] font-medium transition-colors" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}