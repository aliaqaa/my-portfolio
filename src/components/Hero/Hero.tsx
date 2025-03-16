"use client";
import Image from "next/image";
import Link from "next/link";
import useScrollNavigation from '@/hooks/useScrollNavigation'
import { useState } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";

const Hero = () => {
  const [hovered, setHovered] = useState(false);  
  useScrollNavigation()
  return (
    <section className=" container flex  items-center justify-center w-screen text-center   mt-20" >
   
        <div className="flex items-center relative cursor-none" 
        onMouseEnter={() => setHovered(true)}  
        onMouseLeave={() => setHovered(false)}  
        >
                <CustomCursor showIcon={hovered} />  

          <Image
            src="/assets/images/posts/ali.png"
            alt="My Photo"
            width={450}
            height={250}
            className="rounded-full rotate-y-180 -translate-y-10  bg-slate-800 grayscale-75"
          />
          <div className="flex flex-col -translate-x-30 -translate-y-16 gap-y-5">
            <h1 className="text-8xl font-bold mt-4 text-slate-100 whitespace-nowrap ">
              Ali Tousi
            </h1>
            <p className="text-gray-200 mt-2">
              Frontend Developer | React | Next.js
            </p>
            <Link href="https://jobinja.ir/user/alitousi77/download" download className="cursor-none">
              <button className="mt-4 px-6 py-2 bg-transparent border border-slate-500  cursor-none text-white rounded shadow-lg hover:border-slate-100 transition">
                Download CV
              </button>
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Hero;
