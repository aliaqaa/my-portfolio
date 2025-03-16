"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// Define your page routes in order

export default function useScrollNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  
  const pages = ["/","/about","/portfolio","/contact",];

useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const currentIndex = pages.indexOf(pathname);
      if (currentIndex === -1) return; // Avoid errors if pathname is not found

      if (event.deltaY > 0) {
        // Scroll down
        if (currentIndex < pages.length - 1) {
          router.push(pages[currentIndex + 1]);
        }
      } else if (event.deltaY < 0) {
        // Scroll up
        if (currentIndex > 0) {
          router.push(pages[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pathname, router]); // Ensure effect runs when pathname changes
}
