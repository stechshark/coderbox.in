"use client";
import {Menu, X} from "lucide-react"
import Link from "next/link";
import {useState} from "react"

export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 font-sans h-25 p-11 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="h-7 w-7 rounded-full bg-cover bg-center bg-[url('/images/logo.jpg')]"></div>
          <div className="font-mono font-semibold text-xl text-white">
            Coder<span className="text-blue-400" >Box</span>
          </div>
      </div>
      <div className="hidden md:flex flex-row gap-7 text-gray-400 border border-gray-600 rounded-md px-7 py-3">
        <Link href="/">Home </Link>
        <Link href="/projects">Projects </Link>
        <Link href="/education">Education </Link>
        <Link href="/contact">Contact </Link>
      </div>
      <button className="hidden md:flex text-white border rounded-sm px-2 py-1 text-sm border-gray-700">Callback</button>
      <Menu className="text-white md:hidden" 
      onClick={()=> {setIsOpen(!isOpen)}}> 
      
        </Menu>
      {
        isOpen && (
          
          <div className="md:hidden fixed top-0 right-0 z-40 h-screen w-52 backdrop-blur-sm bg-black/50 p-12 text-white font-semibold shadow-xl">
            <div className="flex flex-col items-start justify-start gap-7 font-mono text-lg">
              {isOpen ?  <X className="text-red-500 font-bold self-end-safe" onClick={()=> {setIsOpen(!isOpen)}} size={25}/> : <Menu size={25} />  }
              <Link onClick={()=> {setIsOpen(!isOpen)}} href="/">Home</Link>
              <Link onClick={()=> {setIsOpen(!isOpen)}} href="/projects">Projects</Link>
              <Link onClick={()=> {setIsOpen(!isOpen)}} href="/education">Education</Link>
              <Link onClick={()=> {setIsOpen(!isOpen)}} href="/contact">Contact</Link>
            </div>
          </div>
        )
      }
    </div>
  );
}
