import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className='lg:mt-[90px] FF:px-[84px]'>
    <div className='flex justify-between'>
        <div className='flex flex-col'>
          <h2 className='font-Montserrat font-bold text-[2.25rem] text-white'>INTRODUCTION</h2>
          <div className='flex items-center gap-[1.88rem]'>
          <p className='font-Montserrat weight text-[2.25rem] text-white'>TO HYDRA VR</p>
          <Image 
          src={'rightArrow.svg'}
          width={200}
          height={36}
          alt='right arrow'
          />
          </div>
        </div>
        <div className='FF:max-w-[40.625] flex justify-end'>
          <p className='w-full text-[1rem] text-white'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br /> 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br /> 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br /> 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About