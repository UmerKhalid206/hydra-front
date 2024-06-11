'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import About from "./components/About";
import Servics from "./components/Servics";
import TechSection from "./components/TechSection";
import ProcessSection from "./components/ProcessSection";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";

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
    <div className="bck-vect pb-12"
    style={{
    }
    }
    >

    <Navbar />
    <Hero />
    <About />
    <Servics />
    <TechSection />
    <ProcessSection />
    <JoinForm />
    <Footer />
    </div>
  );
}
