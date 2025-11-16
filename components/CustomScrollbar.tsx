"use client";

import { useEffect, useState } from "react";

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-screen w-1 bg-border/20 z-40">
      <div
        className="w-full bg-gradient-to-b from-primary to-pink-500 rounded-full transition-all duration-300"
        style={{ 
          height: "6%",
          top: `${scrollProgress}%`,
          position: "absolute"
        }}
      />
    </div>
  );
}