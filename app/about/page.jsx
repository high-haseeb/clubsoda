import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className='w-screen h-screen font-bubble'>
            <Hero />
            <Services />
            <Powered />
        </div>
    )
}
const Hero = () => {
    const links = [
        { title: "about", href: "/about" },
        { title: "news", href: "/news" },
        { title: "service", href: "/service" },
        { title: "work", href: "/work" },
        { title: "careers", href: "/careers" },
        { title: "contact", href: "/contact" },
    ]
    return (
        <>
            <div className='w-screen h-screen relative flex flex-col items-start z-10 text-white gap-10 p-10'>
                <Image src="/clubsoda.png" width={400} height={400} alt='logo clubsoda' />
                <div className='flex flex-col gap-4'>
                    {
                        links.map((link, idx) => <Button key={idx} {...link} />)
                    }
                </div>
            </div>
            <video loop autoPlay muted src="/stars.mp4" className='object-cover w-screen h-screen z-0 pointer-event-none absolute top-0 left-0' />
        </>
    )
}
const Button = ({ href, title }) => (
    <Link href={href} className='flex items-center justify-start gap-4 text-lg'>
        <Image src={'/plus.svg'} width={20} height={20} alt="plus" />
        <div className='capitalize font-bold'>{title}</div>
    </Link>
)
const Powered = () => {
    return (
        <div className='w-screen h-screen relative font-bubblebold text-white text-5xl items-center justify-center flex'>
            <div className='flex flex-col z-10'>
                <div className=''>powered by</div>
                <Image src={'/deepblue.png'} width={700} height={700} alt="deepblue" />
                <div className='ml-[30rem]'>EST. <span className='font-sans'>1999</span></div>
            </div>
            <video src='ball.mp4' muted loop autoPlay className='absolute top-0 left-0 -z-10' />
        </div>
    )
}
const Services = () => {
    return (
        <div className='w-screen bg-black text-white font-bubblebold h-auto p-20 pt-80 flex flex-col items-center justify-center gap-8'>
            <div className='text-7xl w-1/2 text-center wrap-pretty'>{"FULL SERVICE DIGITAL SOLUTION & TALENT NETWORK HUB"}</div>
            <div className='w-1/2 font-sans text-lg text-center'>
                We're the one-stop-shop for all things product development, media magic, creative genius and talent connections. Whether you're an individual, startup with big ideas or an established brand looking for a fresh spark, we've got you covered. Our secret sauce? A perfect blend of cutting-edge tech and creative human brilliance. Whether you need a digital makeover, a creative spark, or a talent infusion. That's our jam. We'll make your brand pop like bubble wrap – but way more satisfying</div>
        </div>
    )
}

export default Page
