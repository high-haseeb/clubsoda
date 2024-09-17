'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const items = [
        {
            title: "For Digital",
            list: [
                "Product concepting and prototyping",
                "Digital transformaiton strategy",
                "Web presence",
                "Mobile development",
                "E-commerce",
                "AI reinvention",
                "Software apps",
                "UI & UX design",
                "Digital Marketing",
                "Technology Consultinng",
                "Cloud, cyber, block & IoT services",
                "Reporting & analytics"
            ]
        }
        ,
        {
            title: "For Mutltimedia",
            list: [
                "Videography",
                "Photography",
                "Film & Motion Graphics",
                "Locations, talent & styling",
                "End to end production services",
                "Virtual production",
                "Interactive media",
                "AR & VR",
                "3d modeling & rendering"
            ]
        },

        {
            title: "For Creative",
            list: [
                "Social media strategy",
                "Creative campaings",
                "Content strategy & creation",
                "Full funnel media",
                "Brand strategy & identity",
                "Marketing & conceptions strategy",
                "Trend analysis and forecasting",
                "Performance reporting & analysis",
                "User generated content campaigns",
                "Storytelling & Narrative development",
                "Market Research and insights",
                "Email & digital advertising"
            ]
        },

        {
            title: "For Talent",
            list: [
                "Copartnerships & sponserships",
                "Talent aquisition & management",
                "Influencer marketing & strategy",
                "Specialist talent network",
                "Community management",
                "Brand ambassdor programs",
                "Sponsership management",
                "Event and apperance management",
                "Social media training for talent",
                "Legal and compliance support",
                "Talent Analytics",
            ]
        },

    ]
    const [active, setActive] = useState("");
    return (
        <main className="w-screen h-screen overflow-hidden text-white font-bubblebold select-none">
            <video src="/bg.mp4" muted autoPlay loop className="object-cover -z-10 absolute top-0 left-0 w-screen h-screen"></video>
            <div className="absolute top-0 left-0 px-28 py-28 flex flex-col items-end gap-4 animate-fadeOut h-screen w-screen overflow-hidden" >
                <Image src={'/logo/logo.png'} width={1200} height={100} alt="clubsoda logo" className="" />
                <div className="text-8xl mt-8 mr-16">Digital ingenuity</div>
                <div className="text-5xl">Done by human intelligence</div>
            </div>
            <Image src={'/logo/mark.png'} width={100} height={100} alt="clubsoda logo" className="absolute top-10 left-10 animate-fadeIn opacity-0" style={{ animationDelay: '3000ms' }} />
            <div className="flex flex-col absolute left-40 top-40 text-7xl gap-12 animate-fadeIn opacity-0 w-3/4 h-auto" style={{ animationDelay: '3000ms' }}>
                {
                    items.map((item, idx) => <MenuItem {...item} key={idx} active={active} setActive={setActive}/>)
                }
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
const MenuItem = ({ title, list, active, setActive }: { title: string; list: string[]; active: string; setActive: any; }) => {
    return (
        <>
            <div className="cursor-pointer" onClick={() => setActive(title)} >{title}</div>
            <div className={ `flex flex-col absolute text-3xl gap-6 left-[45rem] ${active === title ? "opacity-100" : "opacity-0" } transition-opacity` }>
                {
                    list.map((item, idx) => <div key={idx}>{item}</div>)
                }
            </div>
        </>
    )
}
