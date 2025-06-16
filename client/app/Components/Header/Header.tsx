"use client";
import { useTasks } from "@/context/taskContext";
import { useThemeContext } from "@/context/themeContext";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile, sun } from "@/utils/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();

  const {theme, setTheme} = useThemeContext()

  const router = useRouter();

  const toggleTheme = () => {
    setTheme((prev: any) => (prev === 'light' ? 'dark' : 'light'));
  };

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-background text-foreground ">
      <div>
        <h1 className="text-lg font-medium">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Welcome, ${name}!` : "Welcome to Taskfyer"}
        </h1>
        <p className="text-sm ml-[10px]">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-yellow-400">
                {activeTasks.length}
              </span>
              &nbsp;active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className={`px-6 py-2 bg-[#ffb700] text-primary-foreground font-bold rounded-[50px] 
          hover:hover:text-white transition-all duration-200 ease-in-out`}
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add a new Task" : "Login / Register"}
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="#"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-yellow-400 rounded-full flex items-center justify-center text-lg border-2 border-border"
          >
            {github}
          </Link>
          <Link
            href="#"
            onClick={toggleTheme}
            className="h-[40px] w-[40px] text-yellow-400 rounded-full flex items-center justify-center text-lg border-2 border-border"
          >
            {theme === 'light'? moon : sun}
          </Link>
          <Link
            href="#"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-yellow-400 rounded-full flex items-center justify-center text-lg border-2 border-border"
          >
            {profile}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
