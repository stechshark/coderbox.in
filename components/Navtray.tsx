import Link from "next/link"
import {House, LaptopMinimalCheck, GraduationCap, MailPen } from "lucide-react"

export default function Navtray() {
    return(
        <div className="p-5 md:hidden flex flex-row items-center justify-around fixed bottom-0 w-full">
            <Link href="/">
                <House color="#ffffff" />
            </Link>
            <Link href="/projects">
                <LaptopMinimalCheck color="#ffffff" />
            </Link>
            <Link href="/education">
                <GraduationCap color="#ffffff" />
            </Link>
            <Link href="/contact">
                <MailPen color="#ffffff" />
            </Link>
        </div>
    );
}