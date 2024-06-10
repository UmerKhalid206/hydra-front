import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const TechSection = () => {
    const [pressed, setPressed] = useState<boolean>(false)
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleResize = () => {
        setPressed(!pressed)
    }

    const changeScroll = () => {
    const rect = divRef?.current?.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTopRelativeToDocument = rect.top + scrollTop;

      if(pressed){
          window.scrollTo({
              top: elementTopRelativeToDocument + 220,
            behavior: 'smooth' // Optional: Smooth scrolling effect
        });
    }else{
        window.scrollTo({
            top: elementTopRelativeToDocument + 220,
          behavior: 'smooth', // Optional: Smooth scrolling effect
        
      });
    }
    }

  return (
    <div>
        <div 
        onTransitionEnd={() => {
            changeScroll()
        }}
        ref={divRef}
        className={`relative techBG transition-[height] ${pressed ? 'h-[800px] rounded-[150px]  duration-[500ms]' : 'h-[230px] rounded-full'}   mt-[3.75rem] LT:mt-[7.125rem] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]`}>
        {/* <div className="absolute inset-0 bg-[#302C42] opacity-75 rounded-[2.5rem]"></div> */}
            <div className='flex flex-col items-center justify-center z-50 bg-[#302C42] opacity-75 h-full'>
                <h1 className='FF:ml-[4.5rem] FF:mt-4 font-Montserrat text-white font-bold text-[2.25rem]'>TECHNOLOGIES & HARDWARE</h1>
                <p className='FF:ml-[3rem] font-Montserrat text-white font-extralight text-[2.25rem]'>USED BY HYDRA VR.</p>
            </div>
            <div className='left-[45%] -bottom-8 z-50 absolute border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
      <button onClick={handleResize}  className=' bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full px-2 py-[14px] '>
                <Image 
                    src={'/cardArrow.svg'}
                    width={25}
                    height={12.5}
                    alt='left icon'
                    className={`${pressed ? 'rotate-[270deg]' : 'rotate-90'} transition-transform duration-300 w-6 h-3`}
                />
            </button></div>
        </div>

        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>        <div className='hidden LT:max-w-[30rem] LS:max-w-[36rem] FF:max-w-[43rem] LT:flex justify-end'>
          <p className='font-Montserrat w-full text-[12px]  FF:text-[1rem] leading-5 FF:leading-[26px] text-white break-words text-justify'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
    </div>
  )
}

export default TechSection