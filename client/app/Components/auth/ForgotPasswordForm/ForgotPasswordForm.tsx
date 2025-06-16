"use client";
import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";

function ForgotPasswordForm() {
  const { forgotPasswordEmail } = useUserContext();

  // state
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    forgotPasswordEmail(email);

    // clear input
    setEmail("");
  };

  return (
    <form className="relative m-[2rem] px-10 py-14 rounded-lg bg-card text-card-foreground max-w-[520px] w-full">
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[1.35rem] font-medium">
          Enter email to reset password
        </h1>
        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            placeholder="johndoe@gmail.com"
            className="px-4 py-3 border-2 rounded-md outline-primary text-foreground bg-background"
          />
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

export default ForgotPasswordForm;
