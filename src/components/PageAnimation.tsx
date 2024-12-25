"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageAnimation = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          opacity: 0,
          y: 8,
          scale: 0.98,
        },
        in: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        out: {
          opacity: 0,
          y: -8,
          scale: 0.98,
        },
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};
