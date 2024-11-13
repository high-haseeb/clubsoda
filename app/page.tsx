"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import data from "@/components/linksData";

export default function Home() {
    const [activePrimary, setActivePrimary] = useState("");
    const [activeSecondary, setActiveSecondary] = useState("");
    const [activeLink, setActiveLink] = useState("");
    return (
        <main className="w-screen h-screen overflow-hidden text-white font-bubblebold select-none py-[64px] p-[64px]">
            <video src="/bg.mp4" muted autoPlay loop className="object-cover -z-10 absolute top-0 left-0 w-screen h-screen"></video>
            <div className="absolute top-[215px] right-[215px] flex flex-col items-start justify-center w-auto animate-fadeOut" style={{ animationDelay: "1000ms" }}>
                <Image src={'/logo/logo.png'} width={800} height={100} alt="clubsoda logo" className="h-[100px] w-auto aspect-auto" />
                <div className="text-[64px] font-semibold leading-none mt-[24px]  w-full text-center">{"Digital Solution"} </div>
                <div className="text-[48px] font-semibold leading-none self-end">{"& Talent Network Hub "}</div>
            </div>
            <div className="flex items-start w-full"><Image src={'/logo/mark.png'} width={150} height={160} alt="clubsoda logo" className="w-[150px] animate-fadeIn opacity-0" style={{ animationDelay: "3000ms" }} /></div>
            <div className='flex flex-col w-full px-[151px] mt-[64px] mb-[64px] animate-fadeIn opacity-0 gap-[76px]' style={{ animationDelay: '3000ms' }}>
                <div className="text-7xl grid grid-cols-7 justify-items-start gap-x-[100px] h-auto font-semibold" >
                    <div className='flex flex-col gap-6 w-full col-span-3'>
                        {
                            data.map((item, idx) => <div className={`cursor-pointer transition-colors capitalize ${item.title === activePrimary ? "text-[#FFFEFE]" : "text-[#fffefe]/80"} hover:text-[#FFFEFE]`} key={idx} onClick={() => setActivePrimary(item.title)} >{item.title}</div>)
                        }
                    </div>

                    <div className='flex flex-col gap-3 w-full col-span-2'>
                        {
                            data.map((item) =>
                                item.list.map((secondaryItem, idx) =>
                                    <div className={`cursor-pointer flex items-baseline gap-3 text-3xl font-semibold ${activePrimary === item.title ? "block opacity-0" : "hidden"} animate-fadeInFast group`}
                                        onClick={() => setActiveSecondary(secondaryItem.title)}
                                    >
                                        <div className={`capitalize transition-colors ${secondaryItem.title === activeSecondary ? "text-[#FFFEFE]" : "text-[#fffefe]/80"} group-hover:text-[#FFFEFE] `} key={idx} >{secondaryItem.title}</div>
                                        <Image src={'/icons/left.svg'} width={10} height={10} alt='arrow-open' className={`w-[20px] h-[16px] ${secondaryItem.title === activeSecondary ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`} />
                                    </div>
                                ))
                        }
                    </div>

                    <div className='flex flex-col gap-3 w-full col-span-2'>
                        {
                            data.map((item) =>
                                item.list.map((secondaryItem) =>
                                    secondaryItem.list.map((link, idx) =>
                                        <Link className={`group flex gap-3 items-baseline text-3xl font-semibold animate-fadeInFast ${activeSecondary === secondaryItem.title && activePrimary === item.title ? "opacity-0 block" : "hidden"}`}
                                            href={link}
                                        >
                                            <div className={`cursor-pointer capitalize transition-colors ${link === activeLink ? "text-[#FFFEFE]" : "text-[#fffefe]/80"} group-hover:text-[#FFFEFE]`} key={idx} onClick={() => setActiveLink(link)} >{link}</div>
                                            <Image src={'/icons/open.svg'} width={10} height={10} alt='arrow-open' className={`w-[20px] h-[16px] ${link === activeLink ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`} />
                                        </Link>
                                    )))
                        }
                    </div>
                </div>
                <div className="flex flex-col text-3xl text-[#FFFEFE]/60 font-semibold justify-self-end">
                    <Link href={'/about'}>About</Link>
                    <Link href={'/work'}>Work</Link>
                    <Link href={'/careers'}>Careers</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>
            </div>
        </main >
    );
}
