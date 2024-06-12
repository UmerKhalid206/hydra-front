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
  const [screenHeight, setScreenHeight] = useState<number|string>(`${(Math.round(window.innerHeight))/16}rem`);
  useEffect(() => {
    // Logic to get and update the screen width
    const handleResize = () => {
      setScreenWidth(`${window.innerWidth}`);
      setScreenHeight(`${window.innerHeight}`)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];
  return (
    <div className="bck-vect personalContianer pb-12"

    >


    <Navbar />
    <h1 className="absolute text-xl text-white">width: {screenWidth} <br /> height: {screenHeight}</h1>
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
