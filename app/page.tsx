import TypingText from "@/components/Typing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="welcome p-11 h-auto w-full text-white">
      <div className="font-mono flex flex-col gap-4 items-center justify-center wrap-break-word">
        <div className="text-blue-400 text-lg md:text-3xl block">
          {" "}
          <TypingText />{" "}
        </div>
        <p className="text-lg md:text-2xl">
          I am a full stack developer creating solutions that actually matters
        </p>
      </div>
      <div>
        <p>Website is currently in development phase ! </p>
      </div>
    </div>
  );
}
