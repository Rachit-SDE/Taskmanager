"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import accountIcon from "@/public/account.png"
import React from "react";
import { useThemeContext } from "@/context/themeContext";

function Profile() {
  const { user } = useUserContext();
  const { theme } = useThemeContext();
  const { tasks, activeTasks, completedTasks, openProfileModal } = useTasks();
  return (
    <div className="mx-6">
      <div
        className="px-2 py-4 flex items-center gap-3 bg-muted rounded-[0.8rem]
        hover:bg-muted transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-2 hover:border-gray-400"
        onClick={openProfileModal}
      >
        <div>
          <Image
            src={accountIcon}
            alt="avatar"
            width={50}
            height={50}
            className={`rounded-full p-[.6rem] ${theme === 'light'?"bg-white":"bg-gray-300"}`}
          />
        </div>
        <div>
          <h1 className="flex flex-col text-xl">
            <span className=" font-medium">Hello,</span>
            <span className="font-bold">{user?.name}</span>
          </h1>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 ml-[4px]">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-400">
            <p className="text-[14px]">Total Tasks:</p>
            <p className="pl-2 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-purple-500 rounded-[5px]"></span>
              <span className={`font-medium text-2xl ${theme === 'light'?"text-zinc-700":"text-white"} ml-[8px]`}>
                {tasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p className="text-[14px]">In Progress:</p>
            <p className="pl-2 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#3AAFAE] rounded-[5px]"></span>
              <span className={`font-medium text-2xl text-[#333]  ${theme === 'light'?"text-zinc-700":"text-white"} ml-[8px]`}>
                {activeTasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p className="text-[14px]">Open Tasks:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-orange-400 rounded-[5px]"></span>
              <span className={`font-medium text-2xl text-[#333]  ${theme === 'light'?"text-zinc-700":"text-white"}`}>
                {activeTasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p className="text-[14px]">Completed:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-400 rounded-[5px]"></span>
              <span className={`font-medium text-2xl text-[#333]  ${theme === 'light'?"text-zinc-700":"text-white"}`}>
                {completedTasks.length}
              </span>
            </p>
          </div>
        </div>
      </div>
      <h3 className="mt-2 font-medium">Activity</h3>
    </div>
  );
}

export default Profile;
