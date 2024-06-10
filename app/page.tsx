'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import About from "./components/About";
import Servics from "./components/Servics";
import TechSection from "./components/TechSection";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<number|string>();
  // const [screenHeight, setScreenHeight] = useState<number|string>(`${(Math.round(window.innerHeight))/16}rem`);
  // useEffect(() => {
  //   // Logic to get and update the screen width
  //   const handleResize = () => {
  //     setScreenWidth(`${(Math.round(window.innerWidth))/16}rem`);
  //     setScreenHeight(`${(Math.round(window.innerHeight))/16}rem`)
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // console.warn('screenWidth', screenWidth)

  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];
  return (
    <div className="bck-vect"
    style={{
      // backgroundImage:"url('/Vector1.svg')",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: `calc(${screenWidth}*0.710416) 170px`,
      // backgroundSize:`calc(${screenWidth}*0.2875) 669px`
    }
    }
    >

    <Navbar />
    <Hero />
    <About />
    <Servics />
    <TechSection />
    
    </div>
  );
}
