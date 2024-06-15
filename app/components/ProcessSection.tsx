import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProcessCard from './ProcessCard'

const ProcessSection = () => {

    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to account for the first duplicate
    const [isTransitioning, setIsTransitioning] = useState(true);

    const texts = [`3D Conception <br />& Design`, `Interaction <br />Design`,`VR World <br />User Testing`,`Hydra VR <br />Deploy`]
  
  
    const items = [texts[texts.length - 1], ...texts, texts[0]];

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
                setCurrentIndex(texts.length);
            }, 500); // Match this timeout to your CSS transition duration
        } else if (currentIndex === items.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500); // Match this timeout to your CSS transition duration
        }
    }, [currentIndex, texts.length, items.length]);
  
    return (
    <div className='mt-[60px] lg:mt-[90px] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]'>
            <div className='flex justify-center LT:justify-between'>
        <div className='flex flex-col items-center LT:items-start'>
          <h2 className='font-Montserrat font-bold  text-white text-[1.625rem] md:text-[2.25rem]'>HOW WE BUILD</h2>
          <div className='flex items-center gap-[1.88rem] lg:-mt-5'>
          <p className='font-Montserrat weight text-white text-[1.625rem] md:text-[2.25rem]'>WITH HYDRA VR?</p>
          <Image 
          src={'rightArrow.svg'}
          width={200}
          height={36}
          alt='right arrow'
          className='hidden lg:inline -ml-[20px] xl:ml-0 w-[146px]'
          />
          </div>
        </div>
        <div className='hidden LT:max-w-[30rem] LS:max-w-[34.8rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
    </div>

{/* static process cards */}
    <div className='hidden LT:flex justify-evenly  mt-[5.625rem]'>
    {texts.map((item, index) => 
        <ProcessCard key={index} num={index} text={item}/>
    )}
    
    </div>

    {/* carousel effect */}
<div className='LT:hidden z-40 mt-[2.25rem] min-w-[16.75rem] MB:min-w-[17.5rem] xl:w-full mx-[30px] md:mx-0 overflow-x-hidden '>
    
    <div className='LT:hidden mt-[12.5rem] left-[0.1px] md:left-8 z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
      <button onClick={goToPrevious} className=' bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full px-2 py-3 '>
                <Image 
                    src={'/cardArrow.svg'}
                    width={16}
                    height={8}
                    alt='left icon'
                    className='rotate-180 w-6 h-4'
                />
            </button></div>
            
            <div className='LT:hidden mt-[12.5rem] right-[0.1px] md:right-8 z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
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
            <div key={index} className='min-w-full flex flex-col items-center'> 
                    <div className=' z-50 border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
                    <button className={`font-Montserrat font-bold text-[64px] text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full ${index ==1 || index ==5 ? 'px-11 py-[28px]': index == 3 ? 'px-[35px] py-[30px]' : 'px-[38px] py-[30px]'}  h-full w-full`}>
                              {`${index == 5 ? `01` : `${index==0 ? `04` : `0${index}`}`}`}
                  </button></div>
                  <div 
        dangerouslySetInnerHTML={{ __html: item }}      //by using this div would be able to understand content written in text as HTML, and will render it but it demands a self closing element
        className='mt-[2.25rem] font-Montserrat text-white font-bold text-[16px] xl:text-[24px] xl:w-[250px]'/>
            </div>
            )}

    </div>
    
    </div>
    </div>
  )
}

export default ProcessSection