"use client";

import { useEffect, useState } from "react";

interface SkillProps {
  skill: string;
  percentage: number;
}

export default function SkillCircle({
  skill,
  percentage,
}: SkillProps) {
  const [progress, setProgress] = useState(0);

  // Circle settings
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= percentage) {
          clearInterval(timer);
          return percentage;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [percentage]);

  // Calculate how much of the circle should be hidden
  const progressOffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative h-40 w-40">

      {/* SVG BORDER */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 120 120"
      >

        {/* Complete background ring */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgb(30 41 59)"
          strokeWidth="8"
        />

        {/* Animated ring */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgb(239 68 68)"
          strokeWidth="8"
          strokeLinecap="round"

          /* THIS controls the animation */
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}

          /* Smooth movement */
          style={{
            transition: "stroke-dashoffset 20ms linear",
          }}
        />

      </svg>

      {/* CENTER CONTENT */}
      <div
        className="
          absolute inset-[8px]
          flex flex-col
          items-center
          justify-center
          rounded-full
          text-white
          font-semibold
          font-mono
        "
      >
        <h1 className="text-xl">
          {skill}
        </h1>

        <span className="text-sm">
          {progress}%
        </span>
      </div>

    </div>
  );
}

