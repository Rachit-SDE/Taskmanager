"use client";
import { useTasks } from "@/context/taskContext";
import { useThemeContext } from "@/context/themeContext";
import { useUserContext } from "@/context/userContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import { badge, check, github, mail } from "@/utils/Icons";
import Image from "next/image";
import React from "react";

function ProfileModal() {
  const ref = React.useRef(null);

  const { closeModal } = useTasks();
  const { user, updateUser, handlerUserInput, userState, changePassword } =
    useUserContext();
  const { theme } = useThemeContext();

  useDetectOutside({
    ref,
    callback: () => {
      closeModal();
    },
  });

  const { name, email, photo } = user;

  //state
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handlePassword = (type: string) => (e: any) => {
    if (type === "old") {
      setOldPassword(e.target.value);
    } else {
      setNewPassword(e.target.value);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-black/30 overflow-hidden ">
      <div
        ref={ref}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-card text-card-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md border-2 border-white"
      >
        <div className="absolute left-0 top-0 w-full h-[80px] bg-muted rounded-tr-md rounded-tl-md"></div>

        <div className="mt-4 relative flex justify-between">
          <div className="relative inline-block">
            <Image
              src={photo}
              alt="profile"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-1 shadow-sm">
              <span className="text-lg text-blue-400">{badge}</span>
              <span className="absolute z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-white">
                {check}
              </span>
            </div>
          </div>
          <div className="self-end flex items-center gap-2">
            <button className="flex items-center gap-2 border-2 border-muted rounded-md py-1 px-3 text-xs font-medium text-foreground">
              {github} Github
            </button>
            <button className="flex items-center gap-2 border-2 border-muted rounded-md py-1 px-3 text-xs font-medium text-foreground">
              {check} Verified
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>

        <form
          action=""
          className="mt-4 pt-2 flex flex-col gap-4 border-t-2 border-t-border"
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(e, {
              name: userState.name,
              email: userState.email,
            });
          }}
        >
          <div className="pt-2 grid grid-cols-[150px_1fr]">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              onChange={(e) => handlerUserInput("name")(e)}
              className={`py-[0.4rem] px-3 font-medium rounded-lg border-2 border-border ${theme === "light" ? "" : "bg-gray-700 text-[white]"}`}
            />
          </div>

          <div className="pt-4 grid grid-cols-[150px_1fr] border-t-2 border-t-border">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handlerUserInput("email")(e)}
                className={`w-full py-[0.4rem] pl-9 pr-2 font-medium rounded-lg border-2 border-border ${theme === "light" ? "" : "bg-gray-700 text-[white]"}`}
              />
              <span className="absolute left-0 top-0 bottom-0 flex items-center px-3 text-muted-foreground">
                {mail}
              </span>
            </div>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-4 border-t-2 border-t-border">
            <div className="flex flex-col gap-1">
              <label htmlFor="oldPassWord" className="text-sm font-medium">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={handlePassword("old")}
                className={`py-[0.4rem] px-3 font-medium rounded-lg border-2 border-border ${theme === "light" ? "" : "bg-gray-700 text-[white] "}`}
              />

            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="newPassword" className="text-sm font-medium">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handlePassword("new")}
                className={`py-[0.4rem] px-3 font-medium rounded-lg border-2 border-border ${theme === "light" ? "" : "bg-gray-700 text-[white] "}`}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="py-3 px-4 bg-primary text-primary-foreground text-sm font-medium rounded-md
                hover:bg-primary/90 transition-all duration-300"
              onClick={() => changePassword(oldPassword, newPassword)}
            >
              Change Password
            </button>
          </div>

          <div className="flex justify-end gap-4 border-t-2 border-t-border">
            <button
            onClick={() => closeModal()}
              className="mt-3 py-2 px-4 bg-transparent text-foreground text-sm font-medium rounded-md border-2 border-muted
                hover:bg-red-600 hover:border-transparent hover:text-background transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mt-3 py-2 px-4 bg-primary text-primary-foreground text-sm font-medium rounded-md
                hover:bg-primary/90 transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;
