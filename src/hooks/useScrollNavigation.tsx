"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function useScrollNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const pages = ["/", "/about", "/portfolio", "/contact"];

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (event: WheelEvent) => {
      navigatePages(event.deltaY > 0 ? "down" : "up");
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      touchEndY = event.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        navigatePages("down"); // Swipe up → Scroll down
      } else if (touchEndY - touchStartY > 50) {
        navigatePages("up"); // Swipe down → Scroll up
      }
    };

    const navigatePages = (direction: "up" | "down") => {
      const currentIndex = pages.indexOf(pathname);
      if (currentIndex === -1) return;

      if (direction === "down" && currentIndex < pages.length - 1) {
        router.push(pages[currentIndex + 1]);
      } else if (direction === "up" && currentIndex > 0) {
        router.push(pages[currentIndex - 1]);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router]);
}
