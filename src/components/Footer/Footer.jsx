"use client";  
import React from 'react';  
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";  
import { TfiEmail } from "react-icons/tfi";  
import { FaArrowRight } from "react-icons/fa";  
import { usePathname } from 'next/navigation';  
import Link from 'next/link';

function Footer() {  
    const pathname = usePathname();  

    return (  
        <>
        <footer className='container relative '>  
            <div className="flex flex-col absolute left-12 top-40  gap-y-7 items-center text-4xl  text-slate-300 p-1 rounded-full ">  
                <a href="https://t.me/mrAli2c" className='hover:text-slate-500 cursor-none' aria-label="Telegram">  
                    <FaTelegram />  
                </a>  
                <a href="https://linkedin.com/in/Ali-Tousi77" className='hover:text-slate-500 cursor-none' aria-label="LinkedIn">  
                    <FaLinkedin />  
                </a>  
                <a href="mailto:ali.tousi77@gmail.com" className='hover:text-slate-500 cursor-none' aria-label="Email">  
                    <TfiEmail />  
                </a>  
                <a href="https://github.com/aliaqaa" className='hover:text-slate-500 cursor-none' aria-label="GitHub">  
                    <FaGithub />  
                </a>  
            </div>  
            
        </footer>  
            <div className='absolute  bottom-32 right-0 text-white whitespace-nowrap rotate-90 flex items-center gap-2 uppercase'>  
                {pathname === '/contact' ? (  
                    <Link href="/portfolio" className='flex rotate-180 cursor-none'>  
                            Scroll Top <FaArrowRight className='text-2xl' /> 
                    </Link>  
                ) : (  
                    <>  
                        Scroll Down<FaArrowRight className='text-2xl' />
                    </>  
                )}  
            </div>  
                </>
    );  
}  

export default Footer;  