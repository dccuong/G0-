import React from 'react'

type Props = {}

const Career = (props: Props) => {
    const data1 = [
        {
            title1: "On Time Delivery",
            title2: "Through True Rich Attended does no end it his mother since real had half every him.",
            // icon: iconh32

        },
        {
            title1: "On Time Delivery",
            title2: "Through True Rich Attended does no end it his mother since real had half every him.",
            // icon: iconh33
        },
        {
            title1: "On Time Delivery",
            title2: "Through True Rich Attended does no end it his mother since real had half every him.",
            // icon: shuttle1
        }
    ]
    const data = ["Full Stack Dev", "Testing Engineer", "Hr Manager", "Product Designer", "Wordpress Developer", "Jr. QA Tester", "Sr. UX Designer", "Social Media Manager", "Golang Developer"]
    return (
        <div className='w-[100%]'>
            <div className='max-w-[1280px] mx-auto md:py-[50px] py-5 px-3'>
                <div className='md:w-[60%] mx-auto'>
                    <p className='text-[14px] text-center'>CAREER AT FINSWEET</p>
                    <p className='text-[42px] text-center px-6 leading-[48px]'>We hired people who are Always Passionate about what they do</p>
                    <p className='text-[14px] text-center'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                </div>
                <img src="./careers.png" className='w-[90%] mx-auto pt-5' alt="" />
                <div className='p-5 mt-6 bg-[#B9BCFF] grid md:grid-cols-3 grid-cols-1 gap-3'>
                    {data.map((item, index) => (
                        <div className='bg-slate-50 p-6' key={index}>
                            <p className='font-semibold text-[16px] pb-3'>{item}</p>
                            <p className='text-[#232536] opacity-60'> Bengaluru · Full Time <br />  $10K - $18K · No equity </p>
                            <p className='pt-7 text-blue-400 hover:text-blue-600'>Apply Now</p>
                        </div>))}


                </div>
            </div>
            <div className='w-[100%] bg-slate-200 mt-5'>
                <div className='max-w-[1280px] mx-auto  px-3'>
                    <div className='md:py-[50px] pt-[20px]'>
                        <p className=' text-[14px] leading-5'>COMPANY</p>
                        <div className='grid md:grid-cols-7 grid-cols-1'>
                            <div className='col-span-4'>
                                <h2 className='md:text-[36px] text-[32px] md:leading-[48px] leading-[36px] font-semibold '>
                                    Award-winning Company seen and used by millions around the world.
                                </h2>
                                <p className='text-[14px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 grid md:grid-cols-3 grid-cols-1 gap-3'>
                        {data1.map((icon, index) => (
                            <div className='bg-white p-3  my-5' key={index}>
                                <div className='relative mb-2'>
                                    <div className=' p-5 rounded-full bg-[#FFE6D2] w-5 h-5' />
                                    <div className='absolute top-2 left-1'>icon</div>
                                </div>
                                <div className=''>
                                    <p className='font-semibold text-[14px]'> {icon.title1}</p>
                                    <p className='text-[12px] text-gray-500'>{icon.title2}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career