import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const JoinForm = () => {

    const inputRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event:any) => {
      if (document.activeElement === inputRef.current) {
        event.preventDefault();
      }
    };

    // Add event listener to the window object
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <div className='mt-[5rem] md:mt-[10rem] mx-[20px] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]'>
        <div className='flex flex-col items-center bg-[#211E2E] pt-[2.813rem] pb-[4.063rem] px-[1.313rem] LS:px-[4rem] xl:px-[6.688rem] rounded-[2.5rem]'>
        <h1 className='text-white font-Montserrat font-bold text-[24px]'>JOIN HYDRA</h1>
        <Image 
            src={`/formDivider.svg`}
            alt='divider'
            width={116}
            height={1}
            className='mt-[1.3125rem]'
            />
        <p className='text-center text-white mt-[19px] font-Montserrat font-light text-[24px]'>
        Let’s Build<br /> 
        Your VR Experience
        </p>

            <div className='min-w-full mt-[2.25rem] flex flex-col gap-[1.375rem]'>
                <div className='flex flex-col LT:flex-row gap-[1.375rem] LT:gap-[10px]'>
                <input className='formInp text-white font-Montserrat border-2 border-white bg-transparent rounded-[2.5rem] pl-[1.75rem] py-[1.125rem] min-w-full LT:min-w-[49%] flex-grow outline-none' type="text" placeholder='First Name'/>
                <input className='formInp text-white font-Montserrat border-2 border-white bg-transparent rounded-[2.5rem] pl-[1.75rem] py-[1.125rem] min-w-full LT:min-w-[49%] flex-grow outline-none' type="text" placeholder='Last Name'/>
                </div>
                <div className='flex flex-col LT:flex-row gap-[1.375rem] LT:gap-[10px]'>
                <input className='formInp text-white font-Montserrat border-2 border-white bg-transparent rounded-[2.5rem] pl-[1.75rem] py-[1.125rem] min-w-full LT:min-w-[49%] flex-grow outline-none' type="email" placeholder='Email'/>
                <input ref={inputRef} className='no-scrollbar formInp text-white font-Montserrat border-2 border-white bg-transparent rounded-[2.5rem] pl-[1.75rem] py-[1.125rem] min-w-full LT:min-w-[49%] flex-grow outline-none' type="number" placeholder='Phone Number'/>
                </div>
                <input className='formInp text-white font-Montserrat border-2 border-white bg-transparent rounded-[2.5rem] pl-[1.75rem] py-[1.125rem] min-w-full flex-grow outline-none' type="text" placeholder='Subject'/>
                <textarea 
                className='no-scrollbar formInp text-white font-Montserrat border-2 border-white bg-transparent rounded-[2.5rem] pl-[1.75rem] py-[1.125rem] min-w-full flex-grow outline-none' 
                name="description" id="description"
                placeholder='Tell Us Something...'
                rows={7}
                 />
            </div>
                <button className='min-w-full md:min-w-0 mt-[34px] font-Montserrat font-bold text-[14px] md:text-[12px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] px-10 py-5 md:px-12 md:py-4'>SEND TO HYDRA</button>

        </div>
    </div>
  )
}

export default JoinForm