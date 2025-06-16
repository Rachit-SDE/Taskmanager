"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";
import { useThemeContext} from "@/context/themeContext"

interface MainContentLayoutProps {
  children: React.ReactNode;
}

function MainContentLayout({ children }: MainContentLayoutProps) {

  const {theme, setTheme} = useThemeContext()

  const toggleTheme = () => {
    setTheme((prev: any) => (prev === 'light' ? 'dark' : 'light'));
  };

  const userId = useUserContext().user._id;
  return (
    <main className={`pb-[1.5rem] flex h-[calc(100vh-5rem)] w-[100%] `}>
      {children}
    </main>
  );
}

export default MainContentLayout;
