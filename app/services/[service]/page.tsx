"use client";
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";

const Service = ({ params }: { params: { service: string; } }) => {
    return (
        <div className="bg-black p-6 lg:p-10 w-screen h-auto overflow-hidden select-none">
            <Header />
            <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full lg:p-28">
                <div className="w-full lg:w-1/2 h-auto  p-4 lg:h-full flex items-center justify-center lg:p-20">
                    <Image src="/logo/mark.png" width={500} height={500} alt="logo-mark" className="w-full h-auto object-fill" />
                </div>
                <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col gap-2 lg:gap-6 text-white">
                    <div id="title" className="text-[#E26BFA] font-semibold text-5xl lg:text-7xl capitalize">{params.service.replace('%20', ' ')}</div>
                    <div id="desc" className="uppercase text-xs lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </div>
                    <div id="points" className="flex flex-col items-start justify-center gap-2">
                        <Point desc="point 1" />
                        <Point desc="point 2" />
                        <Point desc="point 3" />
                    </div>
                    <button className="rounded-full p-1 uppercase bg-gradient-to-r from-[#E26BFA] to-[#8A1EE1] text-white font-semibold text-base lg:text-lg w-60 group mt-4">
                        <div className="flex bg-black rounded-full items-center justify-center h-full w-full p-2 gap-3 group-hover:bg-transparent transition-colors">
                            get in touch
                            <Image src="/icons/left-purple.svg" alt="open-about" width={16} height={16} className="w-4 h-4 object-cover" />
                        </div>
                    </button>
                </div>
            </div>
            <JoinSection />
        </div>
    )
}

const JoinSection = () => {
    return (
        <div className="w-full h-[100vh] lg:h-[50vh] bg-black flex items-center justify-center uppercase font-semibold text-2xl lg:text-6xl text-white flex-col gap-5">
            Join the club

            <button className="rounded-full p-1 uppercase bg-gradient-to-r from-[#E26BFA] to-[#8A1EE1] text-white font-semibold text-base lg:text-lg w-60 group mt-4">
                <div className="flex bg-black rounded-full items-center justify-center h-full w-full p-2 gap-3 group-hover:bg-transparent transition-colors">
                    contact us
                    <Image src="/icons/left.svg" alt="open-about" width={16} height={16} className="w-4 h-4 object-cover" />
                </div>
            </button>
        </div>
    )
}

const Point = ({ desc }: { desc: string }) => (
    <div className="text-sm flex items-center justify-center gap-2 hover:gap-4 transition-[gap]">
        <Image src="/icons/left-purple.svg" alt="open-about" width={16} height={16} className="w-4 h-4 object-cover" />
        <div className="capitalize text-xs lg:text-xl">{desc}</div>
    </div>
)

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div id="header" className="flex items-center justify-between isolate">
            <Link href="/"><Image src="/logo/mark.png" alt="logo-mark" width={64} height={64} className="w-8 h-8 lg:w-16 lg:h-16 object-cover z-50" /></Link>
            <div className="flex-col gap-4 group items-center justify-center hidden lg:flex">
                <Link href="/about" className="flex items-center justify-center gap-2 ">
                    <div className="uppercase text-white font-semibold text-xl">Connect with us</div>
                    <Image src="/icons/left.svg" alt="open-about" width={16} height={16} className="w-4 h-4 object-cover" />
                </Link>
                <div className="h-[2px] bg-white rounded-full w-0 group-hover:w-full transition-[width]" />
            </div>
            <div className="block lg:hidden" onClick={() => setMenuOpen(true)}>
                <Image src="/icons/menu.svg" alt="logo-mark" width={64} height={64} className="w-6 h-6 lg:w-16 lg:h-16 object-cover" />
            </div>
            <div className={`w-screen h-screen bg-[#252525] fixed top-0 z-10 left-0 ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform p-6`}>
                <div className="flex items-center justify-between">
                    <Link href="/"><Image src="/logo/mark.png" alt="logo-mark" width={64} height={64} className="w-8 h-8 lg:w-16 lg:h-16 object-cover z-50" /></Link>
                    <Image src="/icons/close.svg" alt="logo-mark" width={64} height={64} className="w-6 h-6 lg:w-16 lg:h-16 object-cover" onClick={() => setMenuOpen(false)} />
                </div>
                <div className="flex flex-col font-semibold text-4xl gap-4 text-white capitalize mt-10">
                    <Link href={"about"} >About</Link>
                    <Link href={"solutions"} >solutions</Link>
                    <Link href={"recruit"} >recruit</Link>
                    <Link href={"contact"} >contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Service
