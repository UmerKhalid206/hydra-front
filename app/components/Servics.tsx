import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ServiceCard from './ServiceCard'

const Servics = () => {

  const data = [
    {
      img: 'CardPic1.png',
      title: 'SIMULATION'
    },
    {
      img: 'CardPic2.png',
      title: 'EDUCATION'
    },
    {
      img: 'CardPic3.png',
      title: 'SELFCARE'
    },
    {
      img: 'CardPic4.png',
      title: 'OUTDOOR'
    },
  ]

  const items = [data[data.length - 1], ...data, data[0]];
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to account for the first duplicate
    const [isTransitioning, setIsTransitioning] = useState(true);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
              setCurrentIndex(data.length);
          }, 500); // Match this timeout to your CSS transition duration
      } else if (currentIndex === items.length - 1) {
          setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(1);
          }, 500); // Match this timeout to your CSS transition duration
      }


      
  }, [currentIndex, data.length, items.length]);

  return (
    <div className='mt-[3.75rem] LT:mt-[6.938rem] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]'>
            <div className='flex justify-center LT:justify-between'>
        <div className='flex flex-col items-center LT:items-start'>
          <h2 className='font-Montserrat font-bold  text-white text-[1.625rem] md:text-[2.25rem]'>WHY BUILD</h2>
          <div className='flex items-center gap-[1.88rem] lg:-mt-5'>
          <p className='font-Montserrat weight text-white text-[1.625rem] md:text-[2.25rem]'>WITH HYDRA?</p>
          <Image 
          src={'rightArrow.svg'}
          width={200}
          height={36}
          alt='right arrow'
          className='hidden lg:inline -ml-[14px] LS:ml-0'
          />
          </div>
        </div>
        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
    </div>



    <div className='xl:hidden z-40 mt-[1.625rem] md:mt-[6.375rem] min-w-[16.75rem] MB:min-w-[17.5rem] xl:w-full mx-[30px] md:mx-0 overflow-x-hidden md:overflow-x-scroll md:no-scrollbar'>
    
    <div className='md:hidden mt-[13rem] -left-[0.1px] z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
      <button onClick={goToPrevious} className=' bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full px-2 py-3 '>
                <Image 
                    src={'/cardArrow.svg'}
                    width={16}
                    height={8}
                    alt='left icon'
                    className='rotate-180 w-6 h-4'
                />
            </button></div>
            
            <div className='md:hidden mt-[13rem] -right-[0.1px] z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
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
    <div className={`md:hidden flex lg:justify-between md:gap-[10px] ${isTransitioning ? 'transition-transform duration-500' : ''}`}
    style={{ transform: `translateX(${-currentIndex * 100}%)` }}
    onTransitionEnd={() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
        }
    }}
    >
      {
        items.map((item, index) => 
          <ServiceCard key={index} item={item}/>
        )
      }

    </div>
    
    {/* for screens greater than 767 and less than 1280*/}
    <div className={`hidden xl:hidden md:flex justify-between md:gap-[10px] `}
    >
      {
        data.map((item, index) => 
          <ServiceCard key={index} item={item}/>
        )
      }

    </div>
    </div>

    <div className={`hidden xl:mt-[6.375rem] xl:flex xl:justify-between xl:gap-[10px]`}
    >
      {
        data.map((item, index) => 
          <ServiceCard key={index} item={item}/>
        )
      }

    </div>

    </div>
  )
}

export default Servics