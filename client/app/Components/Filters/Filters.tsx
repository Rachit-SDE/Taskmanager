import { useTasks } from "@/context/taskContext";
import React from "react";

function Filters() {
  const { priority, setPriority } = useTasks();

  const [activeIndex, setActiveIndex] = React.useState(0);

  const priorities = ["All", "Low", "Medium", "High"];

  return (
    <div className="relative py-2 px-2 grid grid-cols-4 items-center gap-3 bg-background rounded-md">
      <span
        className="absolute left-[5px] bg-muted rounded-[4px] transition-all duration-300"
        style={{
          width: "calc(100% / 4 - 10px)",
          height: "calc(100% - 10px)",
          top: "50%",
          transform: `translate(calc(${activeIndex * 100}% + ${
            activeIndex * 10
          }px), -50%)`,
          transition: "transform 300ms cubic-bezier(.95,.03,1,1)",
        }}
      ></span>
      {priorities.map((priority, index) => (
        <button
          key={index}
          className={`relative px-1 z-10 font-medium text-sm ${
            activeIndex === index ? "text-yellow-400 " : "text-muted-foreground"
          }`}
          onClick={() => {
            setActiveIndex(index);
            setPriority(priority.toLowerCase());
          }}
        >
          {priority}
        </button>
      ))}
    </div>
  );
}

export default Filters;
