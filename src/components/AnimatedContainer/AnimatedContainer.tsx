// components/AnimatedContainer.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const variants = {
    initial: { opacity: 0, y: 1000, },
    animate: { opacity: 1, y: 0, },
    
    exit: { opacity:1, y: -1000, },
  };

  return (
    <AnimatePresence >
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className=" absolute  w-[100%] h-[100%] "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
