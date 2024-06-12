import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=''>

        {/* nav */}
    <div className='flex justify-between items-center md:gap-2s px-5 pt-[1.5625rem] md:px-[2.25rem] xl:px-[4.688rem] xl:pt-[2.688rem] FF:px-[5.25rem] FF:pt-[3.125rem]'>  
        <div className='flex gap-[11px] lg:gap-[15px] md:items-center cursor-pointer'>
        <Image 
        src={'/logo.svg'}
        width={102}
        height={103}
        alt='hydra logo'
        className='w-[4.375rem] h-[3.75rem] md:w-[5.3125rem] md:h-[4.5625rem] lg:w-[6.375rem] lg:h-[6.4375rem]'
        />
        <div className='flex items-end'>
        <Image 
        src={'/hydra.svg'}
        width={500}
        height={500}
        alt='hydra text'
        className='mb-2 w-[2.875rem] h-7 md:mt-5 lg:mt-0 lg:h-[2.875rem] lg:w-[4.75rem]'
        /> 
        </div>
        </div>
    <div className='hidden md:flex md:gap-5 lg:gap-[42px] md:font-semibold lg:font-bold text-[10px] FF:text-[12px] text-white transform uppercase font-Montserrat'>
      <Link href={'#'}>About</Link>
      <Link href={'#'}>Services</Link>
      <Link href={'#'}>Technologies</Link>
      <Link href={'#'}>HowTo</Link>
    </div>
    <div className='hidden md:flex md:gap-4 lg:gap-6 FF:gap-[2.375rem]'>
      <button className='font-Montserrat md:text-[10px] FF:text-[12px]  font-bold text-white uppercase rounded-[40px] border-[2px] border-white py-[6px] px-[15px] lg:py-2 lg:px-6 FF:px-8 FF:py-3'>Contact US</button>
      <button className='font-Montserrat md:text-[10px] FF:text-[12px]  font-bold text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  rounded-[40px] py-[8px] px-[15px] lg:py-2 lg:px-6 FF:px-8 FF:py-3 uppercase'>Join Hydra</button>
    </div>
    <div className='flex items-end md:hidden'>
      <button className='mt-4'>
        <Image 
        src={'Hamburger-Button.svg'}
        width={33}
        height={26}
        alt='menuIcon'
        />
      </button>
    </div>
    </div>


    </div>
  )
}

export default Navbar