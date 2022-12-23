import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-[100%]'>
      <div className='w-[100%]'>
        <div className='max-w-[1280px] mx-auto pt-[35px] px-3'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-6 bg-blue-600 md:py-[100px] items-center'>
            <div className='text-white md:px-[42px] px-[20px] pt-5'>
              <p>NEWSLETTER</p>
              <p className='text-[32px] leading-[54px] font-semibold '>Subscribe our News Letter
                to get Latest Updates.</p>
            </div>
            <div className='md:px-[52px] px-[20px] md:pb-0 pb-[20px]'>
              <input type="text" className='py-3 px-5  w-[100%]' placeholder='go+@gamil.com' />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1280px] mx-auto px-3 md:text-left text-center'>
        <div className='w-[100%] md:pt-[99px] pt-[20px] grid md:grid-cols-7 grid-cols-1'>
          <div className='md:col-span-3'>
            <p className='text-[48px] leading-[58px] font-semibold md:mb-[30px] mb-3'>{"Let's make something special"}</p>
            <p className='text-[24px] leading-[36px] font-semibold md:mb-[30px] mb-2'>{"Let's talk! 🤙 "}</p>
            <p>020 7993 2905 <br /> hi@finsweet.com</p>
            <hr className='w-[50%] md:m-0 mx-auto' />
            <p>DLF Cybercity, Bhubaneswar,
              India, &52050</p>
          </div>
          <div className='md:col-span-4'>
            <div className='flex justify-around my-6'>
              <ul className=''>
                <li>Home</li>
                <li>Service</li>
                <li>Company</li>
                <li>news</li>
              </ul>
              <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Company</li>
                <li>news</li>
              </ul>
              <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Company</li>
                <li>news</li>
              </ul>
            </div>
            <div className='text-right '>Contact us {'->'}</div>
          </div>
        </div>
      </div>
      <div className='w-[100%] bg-[#FFE6D2] mt-4  '>
        <div className='max-w-[1280px] py-5'></div>
      </div>
    </div>
  )
}

export default Footer