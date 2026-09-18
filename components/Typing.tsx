"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const text = "Welcome to my Portfolio !";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="text-3xl font-bold">
      {displayText}
      <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-black"></span>
    </div>
  );
}