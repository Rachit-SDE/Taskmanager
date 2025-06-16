"use client";
import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";

function ChangePasswordForm() {
  const { changePassword } = useUserContext();

  // state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const currentPasswordChange = (e: any) => {
    setCurrentPassword(e.target.value);
  };

  const newPasswordChange = (e: any) => {
    setNewPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    changePassword(currentPassword, newPassword);

    // clear input
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <form className="ml-0 mt-0 m-[2rem] px-10 py-14 rounded-lg bg-card text-card-foreground max-w-[520px] w-full">
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[1.35rem] font-medium">
          Reset Your Password!
        </h1>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-muted-foreground">
            Current Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={currentPassword}
            onChange={currentPasswordChange}
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
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={newPasswordChange}
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
  );
}

export default ChangePasswordForm;
