"use client";
import Modal from "@/app/Components/Modal/Modal";
import ProfileModal from "@/app/Components/Profile/ProfileModal";
import { useTasks } from "@/context/taskContext";
import { useThemeContext } from "@/context/themeContext";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { isEditing, profileModal } = useTasks();
  const {theme} = useThemeContext();

  return (
    <div className={`main-layout  h-[100%] flex-1 bg-muted border-2 ${theme === "light"? "border-[white]" : "   border-blue-950 text-[#ffbb00]" }  rounded-[1.5rem] overflow-auto`}>
      {isEditing && <Modal />}
      {profileModal && <ProfileModal />}
      {children}
    </div>
  );
}

export default MainLayout;
