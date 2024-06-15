/* eslint-disable react/no-danger-with-children */
import Image from 'next/image'
import React from 'react'

const ProcessCard = ({num, text}:{num:number, text:string}) => {
  return (
    <div className='relative cursor-pointer'>
    <div className=' z-50 border-[11px] border-[#0E0E0E] border-opacity-[0.32] rounded-full'>
      <button className={`font-Montserrat font-bold text-[64px] text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full ${num ==0 ? 'px-11 py-[28px]': num == 3 ? 'px-[35px] py-[30px]' : 'px-[38px] py-[30px]'}  h-full w-full`}>
                {`0${num+1}`}
    </button></div>
    
    <div className={`-ml-[21px] absolute flex items-start gap-4 ${num==0 ? 'mt-[28px]': 'mt-6'}`}>
        <Image 
        src={'/progressShape.svg'}
        alt='right arrow'
        width={28}
        height={23}
        className='mt-2 hidden LT:inline'
        />
        <div 
        dangerouslySetInnerHTML={{ __html: text }}      //by using this div would be able to understand content written in text as HTML, and will render it but it demands a self closing element
        className='font-Montserrat text-white font-bold text-[16px] xl:text-[24px] xl:w-[250px]'/>
    </div>
    
    </div>

  )
}

export default ProcessCard