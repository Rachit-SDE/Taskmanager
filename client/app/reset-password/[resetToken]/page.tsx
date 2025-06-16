"use client";
import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  params: {
    resetToken: string;
  };
}

function page({ params: { resetToken } }: Props) {
  const { resetPassword } = useUserContext();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // handle submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    resetPassword(resetToken, password);
  };

  return (
    <main className="auth-page w-full h-full flex justify-center items-center">
      <form className="m-[2rem] px-10 py-14 rounded-lg bg-card text-card-foreground max-w-[520px] w-full">
        <div className="relative z-10">
          <h1 className="mb-2 text-center text-[1.35rem] font-medium">
            Reset Your Password!
          </h1>
          <div className="relative mt-[1rem] flex flex-col">
            <label htmlFor="email" className="mb-1 text-muted-foreground">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              id="password"
              name="password"
              placeholder="*********"
              className="px-4 py-3 border-2 rounded-md outline-primary text-foreground bg-background"
            />
            <button
              className="absolute p-1 right-4 top-[43%] text-[22px] text-muted-foreground opacity-45"
              onClick={togglePassword}
              type="button"
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </button>
          </div>
          <div className="relative mt-[1rem] flex flex-col">
            <label htmlFor="email" className="mb-1 text-muted-foreground">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              id="password"
              name="password"
              placeholder="*********"
              className="px-4 py-3 border-2 rounded-md outline-primary text-foreground bg-background"
            />
            <button
              className="absolute p-1 right-4 top-[43%] text-[22px] text-muted-foreground opacity-45"
              onClick={togglePassword}
              type="button"
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </button>
          </div>
          <div className="flex">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Reset Password
            </button>
          </div>
        </div>
        <img src="/flurry.png" alt="" />
      </form>
    </main>
  );
}

export default page;
