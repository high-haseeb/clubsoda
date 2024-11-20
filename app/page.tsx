"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import data from "@/components/linksData";
import useMobileCheck from "@/components/isMobile";

export default function Home() {

    const [activePrimary, setActivePrimary] = useState("");
    const [activeSecondary, setActiveSecondary] = useState("");
    const [activeLink, setActiveLink] = useState("");

    const [introDone, setIntroDone] = useState(false);
    useEffect(() => {
        setTimeout(() => setIntroDone(true), 3000);
    }, [])

    if (!useMobileCheck()) {
        return (
            <main className="w-screen h-screen overflow-hidden text-white select-none py-[64px] p-[64px]">
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
                                            key={idx}
                                            onClick={() => setActiveSecondary(secondaryItem.title)}
                                        >
                                            <div className={`capitalize transition-colors ${secondaryItem.title === activeSecondary ? "text-[#FFFEFE]" : "text-[#fffefe]/80"} group-hover:text-[#FFFEFE] `} key={idx} >{secondaryItem.title}</div>
                                            {
                                                secondaryItem.list.length > 0 ?
                                                    <Image src={'/icons/left.svg'} width={10} height={10} alt='arrow-open' className={`w-[20px] h-[16px] ${secondaryItem.title === activeSecondary ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`} />
                                                    :
                                                    <Link href={secondaryItem.title}>
                                                        <Image src={'/icons/open.svg'} width={10} height={10} alt='arrow-open' className={`w-[20px] h-[16px] ${secondaryItem.title === activeSecondary ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`} />
                                                    </Link>

                                            }
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
                                                key={idx}
                                                href={link}
                                            >
                                                <div className={`cursor-pointer capitalize transition-colors ${link === activeLink ? "text-[#FFFEFE]" : "text-[#fffefe]/80"} group-hover:text-[#FFFEFE]`} key={idx} onClick={() => setActiveLink(link)} >{link}</div>
                                                {
                                                    secondaryItem.list.length > 0 &&
                                                    <Image src={'/icons/open.svg'} width={10} height={10} alt='arrow-open' className={`w-[20px] h-[16px] ${link === activeLink ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`} />
                                                }
                                            </Link>
                                        )))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col text-3xl text-[#FFFEFE]/60 font-semibold justify-self-end">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/recruit'}>Recruit</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
            </main >
        );
    }

    return (
        <main className="w-screen h-screen overflow-hidden text-white select-none p-[32px]">
            <video src="/bg.mp4" muted autoPlay playsInline controls={false} loop className="object-cover -z-10 absolute top-0 left-0 w-screen h-screen"></video>
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full animate-fadeOut p-[32px]" style={{ animationDelay: "1000ms" }}>
                <Image src={'/logo/logo.png'} width={280} height={60} alt="clubsoda logo" className="h-[50px] w-auto object-cover" />
                <div className="text-[40px] font-semibold leading-none mt-[24px]  w-full text-center">{"Digital Solution"} </div>
                <div className="text-[24px] text-white/80 font-semibold ">{"& Talent Network Hub "}</div>
            </div>

            <div className="flex items-start w-full">
                <Image src={'/logo/mark.png'} width={150} height={160} alt="clubsoda logo" className="h-[60px] w-[50px] animate-fadeIn opacity-0 object-cover" style={{ animationDelay: "3000ms" }} />
            </div>

            {activePrimary === "" ?
                <div className={`flex flex-col w-full mt-[64px] ${introDone ? "animate-fadeInFast" : "animate-fadeIn"} gap-[76px] opacity-0`} style={{ animationDelay: introDone ? '0ms' : '3000ms' }}>
                    <div className='flex flex-col gap-3 w-full text-[42px] font-semibold'>
                        {
                            data.map((item, idx) => <div className={`cursor-pointer leading-[1.1] transition-colors capitalize ${item.title === activePrimary ? "text-[#FFFEFE]" : "text-[#fffefe]/80"} hover:text-[#FFFEFE]`} key={idx} onClick={() => setActivePrimary(item.title)} >{item.title}</div>)
                        }
                    </div>

                    <div className="flex flex-col text-2xl text-[#FFFEFE]/60 font-semibold justify-self-end">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/recruit'}>Recruit</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
                :
                activeSecondary === "" ?
                    <div>
                        <div className='flex flex-col w-full  mt-[64px] animate-fadeInFast opacity-0 gap-[32px]'>
                            <div className='flex items-baseline gap-3 w-full text-[40px] font-semibold' onClick={() => setActivePrimary("")}>
                                <Image src={"/icons/left.svg"} width={30} height={20} className='w-6 h-6 object-cover rotate-180' alt='back' />
                                <div className='capitalize'>{activePrimary}</div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {data.filter((item) => item.title === activePrimary)[0].list.map((secondary, index) =>
                                    <div key={index} className='font-semibold text-white/60 text-[28px] capitalize' onClick={() => setActiveSecondary(secondary.title)}>{secondary.title}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='flex flex-col w-full  mt-[64px] animate-fadeInFast opacity-0 gap-[32px]'>
                            <div className='flex items-baseline gap-3 w-full text-[40px] font-semibold' onClick={() => setActiveSecondary("")}>
                                <Image src={"/icons/left.svg"} width={30} height={20} className='w-6 h-6 object-cover rotate-180' alt='back' />
                                <div className='capitalize'>{activeSecondary}</div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                {
                                    data.filter((item) => item.title === activePrimary)[0].list.map((secondary) =>
                                        secondary.title === activeSecondary ?
                                            secondary.list.map((link, index) =>
                                                <Link key={index} className='font-semibold text-white/60 text-[28px] capitalize' href={link}>{link}</Link>
                                            )
                                            : null
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }
        </main>
    )
}
