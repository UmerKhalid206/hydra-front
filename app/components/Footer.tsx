import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const social = ['facebook.svg','twitter.svg','linkedin.svg','youtube.svg','instagram.svg','pinterest.svg']
    const year = new Date().getFullYear()
  return (
    <div className='mt-[5rem] LT:mt-[8rem] mx-[20px] md:mx-[2.25rem] xl:mx-[4.688rem] FF:mx-[5.25rem]'>
        <div className='flex flex-col items-center LT:items-start LT:flex-row LT:justify-between'>
        <Image 
        src={'/logo.svg'}
        width={185}
        height={187}
        alt='hydra logo'
        className='w-[11.563rem] h-[11.688rem]'
        />

        <Image 
        src={'/footerDivider.svg'}
        width={1}
        height={196}
        alt='footerDivider'
        className='w-[6px] h-[12.25rem] hidden LT:inline'
        />
        <ul className='hidden LT:flex flex-col text-white font-Montserrat font-bold text-[1rem] gap-5'>
            <Link href={'#'}><li>ABOUT</li></Link>
            <Link href={'#'}><li>SERVICES</li></Link>
            <Link href={'#'}><li>TECHNOLOGIES</li></Link>
            <Link href={'#'}><li>HOW TO</li></Link>
            <Link href={'#'}><li>JOIN HYDRA</li></Link>
        </ul>

        <Image 
        src={'/footerDivider.svg'}
        width={1}
        height={196}
        alt='footerDivider'
        className='w-[6px] h-[12.25rem] hidden LT:inline'
        />

        <ul className='hidden LT:flex flex-col text-white font-Montserrat font-bold text-[1rem] gap-5'>
            <Link href={'#'}><li>F.A.Q</li></Link>
            <Link href={'#'}><li>SITEMAP</li></Link>
            <Link href={'#'}><li>CONDITIONS</li></Link>
            <Link href={'#'}><li>LICENSES</li></Link>
        </ul>

        <Image 
        src={'/footerDivider.svg'}
        width={1}
        height={196}
        alt='footerDivider'
        className='w-[6px] h-[12.25rem] hidden LT:inline'
        />

        <div className='mt-[3.5rem] LT:mt-0 flex flex-col items-center LT:items-start'>
            <h2 className='text-center LT:text-start text-white font-Montserrat font-bold text-[1rem]'>SOCIALIZE WITH HYDRA</h2>
            <div className='flex gap-5 mt-10'>
                {social.map((item, index) => 
                        <Image
                        key={index} 
                        src={`/${item}`}
                        width={32}
                        height={32}
                        alt='social icon'
                        className='w-8 h-8'
                        />
                )}
            </div>
            <button className='w-[100%] LT:max-w-[75%] mt-12 font-Montserrat font-bold text-[14px] md:text-[12px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] px-10 py-5 md:px-9 md:py-4'>BUILD YOUR WORLD</button>
        </div>

        </div>

        <div className='flex justify-center'>
        <div className=' hrGradient w-[95%] md:w-full h-[1px] md:h-[0.5px] MDB:h-[1px] mt-[4.375rem]'></div>
        </div>

        <p className='leading-6 mt-12 text-center text-white font-Montserrat font-bold text-[14px]'>{year} © HYDRA LANDING PAGE <span className='hidden md:inline'>-</span> <br className='md:hidden'/>BY <Link target='_blank' href={'https://www.linkedin.com/in/umer-khalid-a2b93819a/'}>UMER KHALID</Link> <span className='hidden md:inline'>-</span> <br className='md:hidden'/>ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer