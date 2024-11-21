"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Recruit = () => {
    const [section, setSection] = useState(0);
    const categories = ["talent management", "general inquiry", "employment/contractor", "specialist networking", "agency networking"];

    return (
        <main className="w-screen h-screen overflow-hidden text-white font-fredoka p-16 flex flex-col gap-16 select-none relative">

            <Image src="/recruit-bg.png" width={1920} height={1080} alt='bg' className="w-screen h-screen -z-50 object-cover absolute top-0 left-0" />

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-screen h-screen pointer-events-none bg-black ${section !== 0 ? "opacity-100" : "opacity-0"} transition-opacity duration-500 -z-40`} />

            <div className="flex flex-col gap-6 items-start z-50">
                <Header />
                {
                    section === 0 && <NavLinks />
                }
            </div>

            {
                section === 0 &&
                <div className="flex flex-col gap-8 w-full items-center justify-center">
                    <div className="text-5xl uppercase font-semibold">join the club</div>
                    <div className="relative group z-10 mt-6">
                        <Image src="/logo/eyes.png" width={125} height={100} alt="eyes" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[95%] w-28 group-hover:top-0 transition-[top] -z-10" />
                        <button className="uppercase text-lg text-[#D03820] bg-white rounded-full py-4 px-16 font-semibold z-10" onClick={() => setSection(1)}>
                            get started
                        </button>
                    </div>
                    <div className="flex flex-col gap-0 text-center uppercase">
                        <div className="text-white/80 text-3xl font-normal">Takes 30 seconds</div>
                        <div className="text-white/60 text-lg font-normal">and cures boredom</div>
                    </div>
                </div>
            }
            {
                section === 1 &&
                <div className="flex items-center justify-center w-full h-full z-50">
                    <div className="flex flex-col gap-24 w-1/2">
                        <button className="flex text-2xl gap-3" onClick={() => setSection(0)}>
                            <Image src={'/icons/back.svg'} alt='back' width={20} height={20} className="w-5" />
                            <div>Back</div>
                        </button>

                        <div className="flex flex-col gap-16">
                            <div className="font-semibold text-4xl">WHAT CATEGORY ARE YOU?</div>
                            <div className="flex gap-6 flex-wrap">
                                {
                                    categories.map((category, index) => <div className="py-4 px-16 border border-white rounded-xl capitalize hover:bg-white hover:text-black transition-colors" key={index}>{category}</div>)
                                }
                            </div>
                        </div>

                        <div className="self-end">
                            <button className="flex text-xl gap-3 border-white border rounded-lg px-8 py-4" onClick={() => setSection(2)}>
                                <div>Next</div>
                                <Image src={'/icons/back.svg'} alt='back' width={20} height={20} className="w-5 rotate-180" />
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                section === 2 &&
                <div className='flex items-center justify-center w-full h-full z-50'>
                    <div className='flex w-2/3 bg-white h-full rounded-2xl p-4 relative'>
                        <Image src={'/bg-2.png'} width={500} height={500} alt='bg' className='w-2/5 object-cover bg-black rounded--xl' />
                        <div className='flex flex-col absolute top-10 left-10'>
                            <div className='font-semibold text-3xl'>Join Us</div>
                            <div>& Uncap your potential</div>
                        </div>
                    </div>
                </div>
            }

        </main>
    )
}

const Header = () => (
    <div className="flex gap-8 items-baseline justify-start">
        <Link href={'/'}>
            <Image src={"/logo/logo.png"} width={325} height={50} alt="clubsoda-logo" className="w-[325px]" />
        </Link>
        <div className="text-3xl font-semibold text-white/80 uppercase">
            AGENCY? CREATOR? OR LOOKING TO CONNECT? JOIN CLUBSODA COLLECTIVE
        </div>
    </div>
)

const NavLinks = () => {
    const navLinks = ["about", "solutions", "recruit", "contact"];
    const NavLink = ({ title }: { title: string; }) =>
        <Link className="capitalize group flex gap-2 select-none" href={title}>
            <Image src={"/icons/left.svg"} width={25} height={25} alt='left-arrow' className="w-0 group-hover:w-4 transition-[width]" />
            {title}
        </Link>
    return (
        <div className="flex flex-col gap-3 items-start font-semibold text-xl leading-none">
            {
                navLinks.map((link, index) => <NavLink title={link} key={index} />)
            }
        </div>
    )
}

export default Recruit
