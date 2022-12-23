import React from 'react'


type Props = {}

const Home3 = (props: Props) => {
    const data = [
        {
            title1: "On Time Delivery",
            title2: "Through True Rich Attended does no end it his mother since real had half every him.",
            icon : "iconh32.svg"
        },
        {
            title1: "On Time Delivery",
            title2: "Through True Rich Attended does no end it his mother since real had half every him.",
            icon : "iconh33.svg"
        },
        {
            title1: "On Time Delivery",
            title2: "Through True Rich Attended does no end it his mother since real had half every him.",
            icon: "shuttle1.svg"
        }
    ]
    return (
        <div className='w-[100%] bg-[#B9BCFF]'>

            <div className='max-w-[1280px] px-3 mx-auto md:py-[59px]'>
                <div className='grid md:grid-cols-2 grid-cols-1 '>
                    <div className='md:pt-[13%] pt-5 mr-5'>
              
                        <p className=' text-[20px] font-medium leading-5'>Our expertise</p>
                        <h2 className='md:text-[36px] text-[30px] md:leading-[48px] leading-9 font-semibold  '>
                        We want to get local identification in every corner of the world in this era of global citizenship
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                       
                    </div>
                    <div className='md:ml-5'>
                        {data.map((icon, index) => (
                            <div className='bg-white py-6 pr-3 pl-6  flex my-5 md:ml-8' key={index}>
                                <div className='relative'>
                                    <div className=' p-5 rounded-full bg-[#FFE6D2] w-5 h-5' />
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
        </div>
    )
}

export default Home3