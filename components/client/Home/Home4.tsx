import React from 'react'

type Props = {}

const Home4 = (props: Props) => {
    const data = [
        {
            title1: "Technical support",
            title2: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service.",
            icon: "iconh41.svg"

        },
        {
            title1: "Testing Management",
            title2: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            icon: "iconh42.png"
        },
        {
            title1: "Development",
            title2: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            icon: "icon43.png"
        }]
    return (
        <div className='w-[100%] bg-[#FFE6D2]'>
            <div className='max-w-[1280px] mx-auto px-3 md:py-[79px] py-6 '>
                <div className='w-[100%]'>
                    <p className=' text-[20px] font-medium leading-5'>
                        Our Services</p>
                    <h2 className='text-[36px] leading-[48px] font-semibold '>
                        We build software solutions that solve client{"'"}s business challenges
                    </h2>
                    <button className='px-5 py-3 bg-blue-700 mt-6 flex  text-white items-center'>Start A Project
                        <span className='mx-3'><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5L20 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                        </svg></span></button>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-6'>
                    {data.map((icon, index) => (
                        <div className='bg-white shadow-sm p-3' key={index}>
                            <div className='relative my-3'>
                                <div className=' p-5 rounded-full bg-[#FFE6D2] w-5 h-5' />
                                <div className='absolute top-2 left-2 rounded-full' ><img src={icon.icon} alt="" /></div>
                            </div>
                            <p className='font-semibold text-[16px] leading-7 my-3'> {icon.title1}</p>
                            <p>{icon.title2}</p>

                            <p className='text-blue-600 mt-3 mb-[20px]'>Read more {"->"}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home4