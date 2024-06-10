import Image from 'next/image'
import React from 'react'

interface Item {
  img:string,
  title:string
}
const ServiceCard = ({item}:{item:Item}) => {

  return (

    <>
        <div className='cardGradient flex flex-col items-center box-border  rounded-[2.5rem]  pt-6 pb-10 min-w-full md:min-w-[49%] lg:min-w-[32.5%] xl:hidden'>
            <Image 
            src={`/${item.img}`}
            alt='card pic'
            width={200}
            height={200}
            className='rounded-full border-[15px] border-[#0E0E0E] border-opacity-[0.32]'
            />
            <h2 className='mt-[21px] font-Montserrat text-white font-bold text-[1.5rem]'>{item.title}</h2>
            <Image 
            src={`/divider.svg`}
            alt='CardPic1.png'
            width={160}
            height={1}
            className='mt-[17.5px]'
            />
            <p className='mt-[21.5px] font-Montserrat text-[12px] text-white max-w-[15.75rem] break-words'>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus 
                libero justo laoreet sit amet vitae.
            </p>
            <button className='mt-[34px] font-Montserrat font-bold text-[14px] md:text-[12px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] px-[3.75rem] py-5 LT:px-12 LT:py-4'>TRY IT NOW</button>
        </div>

{/* card for bigger screens */}
        <div className='hidden cardGradient xl:flex flex-col items-center box-border  rounded-[2.5rem]  pt-6 pb-10 min-w-[17.4rem] FF:min-w-[19.375rem] flex-grow'>
            <Image 
            src={`/${item.img}`}
            alt='card pic'
            width={200}
            height={200}
            className='rounded-full border-[15px] border-[#0E0E0E] border-opacity-[0.32]'
            />
            <h2 className='mt-[21px] font-Montserrat text-white font-bold text-[1.5rem]'>{item.title}</h2>
            <Image 
            src={`/divider.svg`}
            alt='CardPic1.png'
            width={160}
            height={1}
            className='mt-[17.5px]'
            />
            <p className='mt-[21.5px] font-Montserrat text-[12px] text-white max-w-[15.75rem] break-words'>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus 
                libero justo laoreet sit amet vitae.
            </p>
            <button className='mt-[34px] font-Montserrat font-bold text-[14px] md:text-[12px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] px-[3.75rem] py-5 LT:px-12 LT:py-4'>TRY IT NOW</button>
        </div>
      </>
  )
}

export default ServiceCard