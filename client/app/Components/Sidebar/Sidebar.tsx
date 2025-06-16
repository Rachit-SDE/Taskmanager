import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className="w-[21rem] h-[calc(100%-.5rem)] flex flex-col overflow-auto main-layout bg-card text-card-foreground">
      <Profile />
      <div className="mt-4 mx-6 h-[100%]">
        <RadialChart />
      </div>
      <button
        className="mt-[.9rem] mb-6 mx-6 py-2 px-8 bg-background text-red-600 font-bold rounded-[50px] hover:bg-red-600 border-2 border-red-600 hover:text-background transition duration-200 ease-in-out"
        onClick={logoutUser}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
