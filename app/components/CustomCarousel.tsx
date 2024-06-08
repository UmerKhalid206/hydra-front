// import Image from 'next/image'
// import { useEffect, useState } from 'react';


// const CustomCarousel = () => {

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const data = [{
//         icon_W:'4.375rem',
//         icon_H:'4.375rem',
//         icon: '/Location-Icon.svg',
//         details: 'Union St, Seattle, WA 98101, United States',
//     },
//     {
//         icon_W:'3.688rem',
//         icon_H:'3.688rem',
//         icon: '/phone-call.svg',
//         details: '(110) 1111-1010',
//     },
//     {
//         icon_W:'4.063rem',
//         icon_H:'4.063rem',
//         icon: '/mail.svg',
//         details: 'Contact@HydraVTech.com',
//     },

// ]

//     const goToPrevious = () => {
//       const isFirstSlide = currentIndex === 0;
//       const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
//       setCurrentIndex(newIndex);
//     };
  
//     const goToNext = () => {
//       const isLastSlide = currentIndex === data.length - 1;
//       const newIndex = isLastSlide ? 0 : currentIndex + 1;
//       setCurrentIndex(newIndex);
//       console.warn('newIndex', newIndex)
//     };

//     // useEffect(() => {
//     //     const intervalId = setInterval(goToNext, 2000);
//     //     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//     // }, [currentIndex]); // Ensure effect runs again when currentIndex changes


//   return (
//     // <div className='relative flex'>    
//     <div className='relative overflow-x-hidden min-w-[17.5rem] mx-[20px] mt-[53px] rounded-[3.75rem] MB:rounded-[5.625rem] py-[1.125rem] drop-shadow bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]'>
//         <button onClick={goToPrevious} className='z-50 absolute -left-[3px] MB:left-3 mt-5'>
//             <Image 
//             src={'/chevron-circle-right.svg'}
//             width={30}
//             height={30}
//             alt='left icon'
//             />
//             </button>
//         <button onClick={goToNext} className='z-50 absolute -right-[3px] MB:right-3 mt-5 transX'>
//             <Image 
//             src={'/chevron-circle-right.svg'}
//             width={30}
//             height={30}
//             alt='left icon'
//             /></button>
        
//         <div className='flex Transtion' 
//         style={{ transform: `translateX(${-currentIndex * 100}%)` }}
//         >
//             {data.map((item, index) =>
//         <div key={index} className='min-w-[100%] flex justify-center Transtion px-8'>
//             <Image 
//             src={`${item.icon}`}
//             width={70}
//             height={70}
//             alt='locationIcon'
//             className={`h-[${item.icon_H}] w-[${item.icon_W}]`}
//             />
//             <div className=' text-white flex items-center'>
//               <p className='font-Montserrat text-[14px] font-light '>{item.details}</p>
//             </div>
//         </div>
//          )}

//         </div>


        
//     </div>

//     // </div>
//   )
// }

// export default CustomCarousel
















import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

const CustomCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to account for the first duplicate
    const [isTransitioning, setIsTransitioning] = useState(true);
    const data = [
        {
            icon_W: '4.375rem',
            icon_H: '4.375rem',
            icon: '/Location-Icon.svg',
            details: 'Union St, Seattle, WA 98101, United States',
        },
        {
            icon_W: '3.688rem',
            icon_H: '3.688rem',
            icon: '/phone-call.svg',
            details: '(110) 1111-1010',
        },
        {
            icon_W: '4.063rem',
            icon_H: '4.063rem',
            icon: '/mail.svg',
            details: 'Contact@HydraVTech.com',
        },
    ];

    const items = [data[data.length - 1], ...data, data[0]]; // Create the virtual list
    
    // console.warn('items', items)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goToPrevious = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const goToNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    // useEffect(() => {
    //     intervalRef.current = setInterval(goToNext, 2000);
    //     return () => {
    //         if (intervalRef.current) {
    //             clearInterval(intervalRef.current);
    //         }
    //     };
    // }, []);

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

        
        intervalRef.current = setInterval(goToNext, 2000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        
    }, [currentIndex, data.length, items.length]);

    return (
        <div className='relative overflow-x-hidden min-w-[17.5rem] mx-[20px] mt-[53px] rounded-[3.75rem] MB:rounded-[5.625rem] py-[1.125rem] drop-shadow bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]'>
            <button onClick={goToPrevious} className='z-50 absolute -left-[3px] MB:left-3 mt-5'>
                <Image 
                    src={'/chevron-circle-right.svg'}
                    width={30}
                    height={30}
                    alt='left icon'
                />
            </button>
            <button onClick={goToNext} className='z-50 absolute -right-[3px] MB:right-3 mt-5 transX'>
                <Image 
                    src={'/chevron-circle-right.svg'}
                    width={30}
                    height={30}
                    alt='right icon'
                />
            </button>
            <div className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''}`} 
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                onTransitionEnd={() => {
                    if (!isTransitioning) {
                        setIsTransitioning(true);
                    }
                }}
            >
                {items.map((item, index) =>
                    <div key={index} className='min-w-[100%] flex justify-center px-8'>
                        <Image 
                            src={`${item.icon}`}
                            width={70}
                            height={70}
                            alt='locationIcon'
                            className={`h-[${item.icon_H}] w-[${item.icon_W}]`}
                        />
                        <div className='text-white flex items-center'>
                            <p className='font-Montserrat text-[14px] font-light '>{item.details}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomCarousel;
