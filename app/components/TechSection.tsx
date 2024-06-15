import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const TechSection = () => {
    const [pressed, setPressed] = useState<boolean>(false)
    const divRef = useRef<HTMLDivElement | null>(null);

    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to account for the first duplicate
    const [isTransitioning, setIsTransitioning] = useState(true);

    const handleResize = () => {
        setPressed(!pressed)
    }

    interface Rect{
        bottom:number,
        left:number,
        right:number,
        top:number,
        width:number,
        x:number,
        y:number,
        height:number,
    }
    const changeScroll = () => {

    const rect = divRef?.current?.getBoundingClientRect();
    
    if(rect){
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTopRelativeToDocument = rect.top + scrollTop;
      if(window.scrollY > 2105 && window.scrollY < 3320){
      if(pressed === true){
          window.scrollTo({
              top: elementTopRelativeToDocument,
            behavior: 'smooth' // Optional: Smooth scrolling effect
        });
    }else if(!pressed){
        window.scrollTo({
            top: elementTopRelativeToDocument,
          behavior: 'smooth', // Optional: Smooth scrolling effect
        
      });
    }
}
    }
}
    const techPics = ['Hydra-Tech1.svg','Hydra-Tech2.svg','Hydra-Tech3.svg','Hydra-Tech4.svg']
    const items = [techPics[techPics.length - 1], ...techPics, techPics[0]];

    const goToPrevious = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const goToNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(techPics.length);
            }, 500); // Match this timeout to your CSS transition duration
        } else if (currentIndex === items.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500); // Match this timeout to your CSS transition duration
        }
    }, [currentIndex, techPics.length, items.length]);

    return (
    <div>
        <div 
        onTransitionEnd={() => {
            changeScroll()
        }}
        ref={divRef}
        className={`relative z-20 techBG transition-[height] rounded-[60px] md:rounded-[70px] h-[163px] ${pressed ? ' lg:h-[850px] lg:rounded-[150px]  duration-[500ms]' : 'lg:h-[230px] lg:rounded-full'}  mt-[3.5rem] lg:mt-[7.125rem] mx-[20px] md:mx-[2rem] xl:mx-[4.688rem] FF:mx-[5.25rem]`}>
        {/* <div className="absolute inset-0 bg-[#302C42] opacity-75 rounded-[2.5rem]"></div> */}
            <div className='flex flex-col items-center justify-center z-50 bg-[#302C42] opacity-[0.79] h-full'>
                <h1 className='FF:ml-[4.5rem] FF:mt-4 font-Montserrat text-white text-[1rem] font-bold md:text-[1.5rem] lg:text-[2.25rem]'>TECHNOLOGIES & HARDWARE</h1>
                <p className='FF:ml-[3rem] font-Montserrat text-white text-[1.5rem] font-extralight md:text-[1.5rem] lg:text-[2.25rem]'>USED BY HYDRA VR.</p>
            </div>

            <div className='hidden lg:block left-[49%] -bottom-8 z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
      <button 
    //   onClick={handleResize}  
      className=' bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full px-2 py-[14px] '>
                <Image 
                    src={'/cardArrow.svg'}
                    width={25}
                    height={12.5}
                    alt='left icon'
                    className={`${pressed ? 'rotate-[270deg]' : 'rotate-90'} transition-transform duration-300 w-6 h-3`}
                />
            </button></div>
        </div>

{/* static div */}
        <div className='hidden  LT:flex flex-col md:flex-row md:justify-between  mt-[3.75rem] LT:mt-[3.75rem] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]'>
            {techPics.map((item, index) => 
            <Image
            key={index} 
            src={`/${item}`}
            alt='tech pic'
            width={174}
            height={174}
            className='cursor-pointer'
            />
            )}
        </div>

{/* carousel effect */}
<div className='LT:hidden z-40 mt-[1.625rem] min-w-[16.75rem] MB:min-w-[17.5rem] xl:w-full mx-[30px] md:mx-0 overflow-x-hidden '>
    
    <div className='LT:hidden mt-[3.5rem] -left-[0.1px] md:left-8 z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
      <button onClick={goToPrevious} className=' bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full px-2 py-3 '>
                <Image 
                    src={'/cardArrow.svg'}
                    width={16}
                    height={8}
                    alt='left icon'
                    className='rotate-180 w-6 h-4'
                />
            </button></div>
            
            <div className='LT:hidden mt-[3.5rem] -right-[0.1px] md:right-8 z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
              <button onClick={goToNext} className='flex justify-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full px-2 py-3'>
                <Image 
                    src={'/cardArrow.svg'}
                    width={16}
                    height={8}
                    alt='right icon'
                    className='w-6 h-4'
                />
            </button></div>
   {/* for smaller screens */}
    <div className={`LT:hidden flex lg:justify-between md:gap-[10px] ${isTransitioning ? 'transition-transform duration-500' : ''}`}
    style={{ transform: `translateX(${-currentIndex * 100}%)` }}
    onTransitionEnd={() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
        }
    }}
    >
            {items.map((item, index) => 
            <div key={index} className='min-w-full flex justify-center'>
            <Image
            src={`/${item}`}
            alt='tech pic'
            width={174}
            height={174}
            className='cursor-pointer '
            />
            </div>
            )}

    </div>
    
    </div>
    </div>
  )
}

export default TechSection