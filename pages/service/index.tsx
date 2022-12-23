import React from 'react'

type Props = {}

const Service = (props: Props) => {
  const data = [
    {
      title1: "On Time Delivery",
      title2: "Through True Rich Attended does no end it his mother since real had half every him.",
      icon: "iconh32.svg"
    },
    {
      title1: "On Time Delivery",
      title2: "Through True Rich Attended does no end it his mother since real had half every him.",
      icon: "iconh33.svg"
    },
    {
      title1: "On Time Delivery",
      title2: "Through True Rich Attended does no end it his mother since real had half every him.",
      icon: "shuttle1.svg"
    }
  ]
  const data2 = [
    {
      title1: "On Time Delivery",
      title2: "Through True Rich Attended does no end it his mother since real had half every him.",
      icon: "iconh32.svg"
    },
    {
      title1: "On Time Delivery",
      title2: "Through True Rich Attended does no end it his mother since real had half every him.",
      icon: "iconh33.svg"
    },

  ]
  return (
    <>
      <div className='w-[100%] bg-[#F9F9FF]'>
        <div className='max-w-[1280px] p-3 md:py-[50px]   mx-auto'>
          <div className='md:mb-[40px]'>
            <p>OUR SERVICES</p>
            <p className='md:text-[48px] text-[36px] font-semibold'>Loren ispum</p>
            <p className='opacity-50 md:w-[50%]'> Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable</p>
          </div>
          <div className=' grid  md:grid-cols-3 grid-cols-1'>
            {data.map((icon, index) => (
              <div className='border py-6 pr-3 pl-6  flex my-5 md:ml-8' key={index}>
                <div className='relative'>
                  <div className=' p-5 rounded-full opacity-50   bg-[#FFE6D2] w-5 h-5' />
                  <div className='absolute top-2 left-2'><img src={icon.icon} alt="" /></div>
                </div>
                <div className='ml-5'>
                  <p className='font-semibold text-[16px]'> {icon.title1}</p>
                  <p>{icon.title2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='md:px-[10%] grid  md:grid-cols-2 grid-cols-1 mx-auto'>
            {data2.map((icon, index) => (
              <div className='md:w-[90%] mx-auto border py-6 pr-3 pl-6  flex my-5 ' key={index}>
                <div className='relative'>
                  <div className=' p-5 rounded-full opacity-50   bg-[#FFE6D2] w-5 h-5' />
                  <div className='absolute top-2 left-2'><img src={icon.icon} alt="" /></div>
                </div>
                <div className='ml-5'>
                  <p className='font-semibold text-[16px]'> {icon.title1}</p>
                  <p>{icon.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='max-w-[1280px] px-3 mx-auto grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div className='md:py-[30%] py-3'>
          <p className='text-[20px] font-semibold'>Technical Support</p>
          <p className='text-[30px] leading-9 font-semibold'>Best in class tech support for your company. We become your tech backbone </p>
          <p className='opacity-50'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>
        <div><img src="./service1.png" alt="" className='md:w-[80%] md:float-right' /></div>
      </div>
      <div className='bg-[#B9BCFF] mt-5'>  <div className='max-w-[1280px]   px-3 mx-auto grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div><img src="./service1.png" alt="" className='md:w-[80%] md:float-left' /></div>
        <div className='md:py-[30%] py-3'>
          <p className='text-[20px] font-semibold'>Technical Support</p>
          <p className='text-[30px] leading-9 font-semibold'>Best in class tech support for your company. We become your tech backbone </p>
          <p className='opacity-50'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>

      </div>

      </div>
      <div className='max-w-[1280px] mt-[50px] px-3 mx-auto grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div className='md:py-[30%] py-3'>
          <p className='text-[20px] font-semibold'>Technical Support</p>
          <p className='text-[30px] leading-9 font-semibold'>Best in class tech support for your company. We become your tech backbone </p>
          <p className='opacity-50'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>
        <div><img src="./service1.png" alt="" className='md:w-[80%] md:float-right' /></div>
      </div>
    </>
  )
}

export default Service  