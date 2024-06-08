'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import CustomCarousel from './CustomCarousel';

const Hero = () => {

  const data = [{
    icon_W:'4.375rem',
    icon_H:'4.375rem',
    icon: '/Location-Icon.svg',
    details: 'Union St, Seattle, WA 98101, United States',
},
{
    icon_W:'3.688rem',
    icon_H:'3.688rem',
    icon: '/phone-call.svg',
    details: '(110) 1111-1010',
},
{
    icon_W:'4.063rem',
    icon_H:'4.063rem',
    icon: '/mail.svg',
    details: 'Contact@HydraVTech.com',
},

]

  return (
    <div className=''>

    <div className='mt-[3rem] lg:mt-[98px] FF:px-[84px]'>
      <div className='flex flex-col-reverse md:flex-row md:justify-between md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-0'>
        {/* text div left */}
        <div className='text-center lg:text-start mt-[1.875rem] lg:mt-[48px]'>
        <p className="text-[24px] md:text-[2.25rem] FF:text-[2.875rem] font-bold text-white font-Montserrat">
          <span className="text-[2.25rem] FF:text-[2.875rem] bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] text-transparent bg-clip-text">
            Dive
          </span>
          &nbsp;Into The Depths<br />
          Of&nbsp;<span className="text-[2rem] md:text-[2.25rem] FF:text-[2.875rem] bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] text-transparent bg-clip-text">Virtual Reality</span>
        </p>

        <p className='hidden lg:flex mt-[36px] lg:text-[13px] FF:text-[1rem] text-white font-Montserrat lg:tracking-widest font-extralight'>
        Lorem ipsum dolor sit amet, consectetur adipiscing<br className='FF:hidden lg:inline'/> elit,<br className='hidden FF:inline'/> 
        sed do eiusmod tempor incididunt ut labore et<br className='FF:hidden lg:inline'/> dolore<br className='hidden FF:inline'/>
        nisl tincidunt eget. Lectus mauris eros in vitae.
        </p>

        <Link href={'#'} className=' flex justify-center items-center lg:justify-start  mt-[38px] lg:mt-[66px] gap-[40px] '>
        <button className=' font-bold text-[14px] md:text-[12px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] px-[3.75rem] py-4 md:px-12 md:py-[15px]'>BUILD YOUR WORLD</button>
        <Image 
        src={'/shape.png'}
        width={40}
        height={40}
        className='hidden md:block w-[42px] h-[33.5px]'
        alt='right arrow'
        />
        </Link>

      </div>

        {/* right img div */}
        <div className='flex justify-center lg:justify-end mx-6 md:mx-0'>
            <Image 
            src={'/heroImg.png'}
            width={500}
            height={450}
            alt='heroImage'
            className='w-[17rem] MB:w-[19.75rem] MB:h-[17.313rem] lg:h-[24rem] lg:w-[28rem] FF:h-[26.625rem] FF:w-[30.625rem] border-[11px] lg:border-[18px] border-black border-opacity-15 rounded-t-[100px] rounded-br-[100px] rounded-bl-[240px]'
            />
        </div>
      </div>

{/* black div */}
      <div className='hidden md:block md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-0 mt-[88px]  rounded-[5.625rem] py-[1.625rem] md:px-[1.5rem] lg:px-[3.4rem] drop-shadow bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]'>

        <div className='flex items-center justify-between 2FF:justify-evenly'>
          <div className='flex item-center'>
            <Image 
            src={'Location-Icon.svg'}
            width={70}
            height={70}
            alt='locationIcon'
            className='md:h-[3.75rem] md:w-[3.75rem] FF:h-[calc(70/16)rem] FF:w-[calc(70/16)rem]'
            />
            <div className='flex flex-col justify-center text-white md:gap-[3px] FF:gap-[10px]'>
              <h2 className='hidden LT:block font-Montserrat text-[1.125rem] FF:text-[1.5rem] font-bold mt-[5px] FF:mt-0'>Pay Us a Visit</h2>
              <p className='font-Montserrat md:text-[10px] font-thin FF:font-normal FF:text-[14px] FF:leading-[6px]'>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className='border-r border-r-[#C0B7E8] border-opacity-[0.33] h-[5.315rem] FF:h-[7.3125rem]'></div>
          <div className='flex items-center md:gap-5 FF:gap-[1.8125rem]'>
            <Image 
            src={'phone-call.svg'}
            height={59}
            width={59}
            alt='phoneCallIcon'
            className='md:h-[3rem] md:w-[3rem] FF:h-[3.688rem] FF:w-[3.688rem]'
            />
            <div className='flex flex-col text-white md:gap-[3px] FF:gap-[10px]'>
              <h2 className='hidden LT:block font-Montserrat text-[1.125rem] FF:text-[1.5rem] font-bold mt-[5px] FF:mt-0'>Give Us a Call</h2>
              <p className='font-Montserrat md:text-[10px] font-thin FF:font-normal FF:text-[14px] FF:leading-[6px]'>(110) 1111-1010</p>
            </div>
          </div>
          <div className='border-r border-r-[#C0B7E8] border-opacity-[0.33] h-[5.315rem] FF:h-[7.3125rem]'></div>
          <div className='flex items-center  md:gap-5 FF:gap-[1.8125rem]'>
            <Image 
            src={'mail.svg'}
            height={65}
            width={65}
            alt='mailIcon'
            className='md:h-[3.25rem] md:w-[3.25rem] FF:h-[4.0625rem] FF:w-[4.0625rem]'
            />
            <div className='flex flex-col text-white md:gap-[3px] FF:gap-[10px]'>
              <h2 className='hidden LT:block font-Montserrat text-[1.125rem] FF:text-[1.5rem] font-bold mt-[5px] FF:mt-0'>Send Us a Message</h2>
              <p className='font-Montserrat md:text-[10px] font-thin FF:font-normal FF:text-[14px] FF:leading-[6px]'>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>

      </div>

    {/* for smaller screens */}
<div className='md:hidden'>
  <CustomCarousel />
</div>
    </div>
  </div>
  );
};

export default Hero;
