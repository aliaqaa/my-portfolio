"use client";
import React from "react";  
import Logo from "@/components/common/logo/Logo";  
import Link from "next/link";  
import { usePathname } from "next/navigation";    

function Header() {  
  const pathname = usePathname();  // Correct way to get current route in App Router

  const NavbarItems = [  
    { id: 1, title: "About", href: "/about" },  
    { id: 2, title: "Portfolio", href: "/portfolio" },  
    { id: 3, title: "Contact", href: "/contact" },  
  ];  

  console.log(pathname); // Now this will log the correct path

  return (  
    <div className="container w-screen m-auto flex justify-between px-10">  
      <Logo />  
      <div className="flex gap-x-10 items-center">  
        {NavbarItems.map((item) => (  
          <Link  
            href={item.href}  
            key={item.id}  
            className={`text-slate-300 uppercase  hover:text-slate-50 cursor-none ${pathname === item.href ? 'font-bold' : ''}`}  
          >  
            {item.title}  
          </Link>  
        ))}  
      </div>  
    </div>  
  );  
}  

export default Header;
