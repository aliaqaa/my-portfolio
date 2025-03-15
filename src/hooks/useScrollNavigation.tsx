// hooks/useScrollNavigation.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Order your routes as desired.
const pages = ["/","/about", "/portfolio", "/contact", ];

export default function useScrollNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(pages.indexOf(pathname));

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // Adjust threshold if needed
      if (event.deltaY > 0) {
        // Scroll down: next page
        if (currentIndex < pages.length - 1) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          router.push(pages[nextIndex]);
        }
      } else if (event.deltaY < 0) {
        // Scroll up: previous page
        if (currentIndex > 0) {
          const prevIndex = currentIndex - 1;
          setCurrentIndex(prevIndex);
          router.push(pages[prevIndex]);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, router]);

  // Sync the current index if the route changes externally.
  useEffect(() => {
    setCurrentIndex(pages.indexOf(pathname));
  }, [pathname]);

  return;
}
