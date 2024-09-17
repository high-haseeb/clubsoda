'use client'
import {useState} from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (
        <main className="w-screen h-screen overflow-hidden text-white font-bubblebold select-none">
            <video src="/bg.mp4" muted autoPlay loop className="object-cover -z-10 absolute top-0 left-0"></video>
            <div className="absolute right-28 top-28 flex flex-col items-end gap-4 animate-fadeOut">
                <Image src={'/logo/logo.png'} width={1500} height={100} alt="clubsoda logo" className="object-cover" />
                <div className="text-8xl mt-8 mr-16">Digital ingenuity</div>
                <div className="text-5xl">Done by human intelligence</div>
            </div>
            <Image src={'/logo/mark.png'} width={100} height={100} alt="clubsoda logo" className="absolute top-10 left-10" />
            <div className="flex flex-col absolute left-40 top-40 text-7xl gap-12 animate-fadeIn opacity-0" style={{animationDelay: '3000ms'}}>
                <MenuItem title="For Digital"/>
                <MenuItem title="For Mutltimedia"/>
                <MenuItem title="For Creative"/>
                <MenuItem title="For Talent"/>
                <div className="flex flex-col gap-4 text-4xl">
                    <Link href={'/about'}>About</Link>
                    <Link href={'/work'}>Work</Link>
                    <Link href={'/careers'}>Careers</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>
            </div>
        </main>
    );
}
const MenuItem = ({title} : {title: string;}) => {
    return(
    <div className="cursor-pointer">{title}</div>
    )
}
