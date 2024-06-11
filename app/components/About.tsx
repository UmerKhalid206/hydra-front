import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mt-[60px] lg:mt-[90px] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]'>
      {/* intro part of about */}
    <div className='flex justify-center LT:justify-between'>
        <div className='flex flex-col items-center LT:items-start'>
          <h2 className='font-Montserrat font-bold  text-white text-[1.625rem] md:text-[2.25rem]'>INTRODUCTION</h2>
          <div className='flex items-center gap-[1.88rem] lg:-mt-5'>
          <p className='font-Montserrat weight text-white text-[1.625rem] md:text-[2.25rem]'>TO HYDRA VR</p>
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


    {/* about details */}
    <div className='mt-9 flex flex-col items-center LT:flex-row LT:justify-between'>
      <div>
        <Image 
        src={'/aboutHero.png'}
        alt='aboutHero'
        width={524}
        height={557}
        className='w-[18.75rem] h-[22.38rem] LT:w-[21.5rem] LT:h-[25rem] lg:w-[26rem] lg:h-[28rem] FF:w-[32.75rem] FF:h-[31rem] imgbr'
        />
      </div>
      <div className='LT:max-w-[25rem]  LS:max-w-[33rem] FF:max-w-[40.625rem] mx-[20px]'>
      <h2 className='hidden LT:block font-Montserrat font-bold  text-white text-[1.625rem] md:text-[2.25rem]'>ABOUT</h2>
      <p className='hidden LT:block font-Montserrat weight text-white text-[1.625rem] md:text-[2.25rem]'>HYDRA VR</p>
      <div className='flex flex-col items-center LT:items-start mt-[50px] LT:mt-[36px]'>
        <p className='select-none cursor-text w-full font-Montserrat text-[12px]  FF:text-[1rem] text-white break-words text-justify'>
        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
        n tempor.
      </p>
        <button className='mt-[34px] font-Montserrat font-bold text-[14px] md:text-[12px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] px-[3.75rem] py-5 md:px-12 md:py-4'>LET’S GET IN TOUCH</button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default About