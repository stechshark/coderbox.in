import Link from "next/link";

export default function Navbar() {
  return (
    <div className="font-sans h-30 p-11 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="h-7 w-7 rounded-full bg-cover bg-center bg-[url('/images/logo.jpg')]"></div>
          <div className="font-mono font-semibold text-xl text-white">
            Coder<span className="text-blue-400" >Box</span>
          </div>
      </div>
      <div className="flex flex-row gap-7 text-gray-400 border border-gray-600 rounded-md px-7 py-3">
        <Link href="/">Home </Link>
        <Link href="/projects">Projects </Link>
        <Link href="/education">Education </Link>
        <Link href="/contact">Contact </Link>
      </div>
      <button className="text-white border rounded-sm px-2 py-1 text-sm border-gray-700">Callback</button>
    </div>
  );
}
