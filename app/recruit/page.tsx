import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Recruit = () => {
    return (
        <main className="w-screen h-screen overflow-hidden bg-[#D03820] text-white font-fredoka p-16 flex flex-col gap-16">
            <div className="flex flex-col gap-6 items-start">
                <div className="flex gap-8 items-baseline justify-start">
                    <Image src={"/logo/logo.png"} width={325} height={50} alt="clubsoda-logo" className="w-[325px]" />
                    <div className="text-3xl font-semibold text-white/80 uppercase">
                        AGENCY? CREATOR? OR LOOKING TO CONNECT? JOIN CLUBSODA COLLECTIVE
                    </div>
                </div>
                <NavLinks />
            </div>
            <div className="flex flex-col gap-8 w-full items-center justify-center">
                <div className="text-5xl uppercase font-semibold">join the club</div>
                <EyePopupButton />
                <div className="flex flex-col gap-0 text-center uppercase">
                    <div className="text-white/80 text-3xl font-normal">Takes 30 seconds</div>
                    <div className="text-white/60 text-lg font-normal">and cures boredom</div>
                </div>
            </div>
        </main>
    )
}

const EyePopupButton = () => {
    return (
        <div className="relative group z-10 mt-6">
            <Image src="/logo/eyes.png" width={125} height={100} alt="eyes" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[95%] w-28 group-hover:top-0 transition-[top] -z-10" />
            <button className="uppercase text-lg text-[#D03820] bg-white rounded-full py-4 px-16 font-semibold z-10">
                get started
            </button>
        </div>
    )
}

const NavLinks = () => {
    const navLinks = ["about", "solutions", "recruit", "contact"];
    const NavLink = ({ title }: { title: string; }) =>
        <Link className="capitalize group flex gap-2 select-none" href={title}>
            <Image src={"/icons/left.svg"} width={25} height={25} alt='left-arrow' className="w-0 group-hover:w-4 transition-[width]"/>
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
