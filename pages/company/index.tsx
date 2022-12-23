import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import Home3 from "../../components/client/Home/Home3";

type Props = {}

const index = (props: Props) => {
    const data = ["./image1.png", "./image2.png", "./image3.png", "./image3.png", "./image3.png"]
    const bottomHome2 = [{
        title1: "1500",
        title2: "Project Delivere"
    },
    {
        title1: "2500",
        title2: "Project Delivere"
    },
    {
        title1: "3500",
        title2: "Project Delivere"
    }]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className='w-[100%]'>
            <div className='max-w-[1024px] mx-auto px-3 md:pt-[50px] pt-5'>
                <div>
                    <p className=' text-[14px] leading-5'>COMPANY</p>
                    <div className='grid md:grid-cols-7 grid-cols-1'>
                        <div className='col-span-4'>
                            <h2 className='md:text-[46px] text-[36px] md:leading-[58px] leading-[48px] font-semibold '>
                                Award-winning Company seen and used by millions around the world.
                            </h2>
                            <p className='text-[16px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                        </div>
                    </div>
                    <div className='md:my-[48px] my-[20px]'>
                        <Carousel responsive={responsive}
                            autoPlay={true}
                            arrows={false}
                            autoPlaySpeed={1500}
                            infinite={true}>
                            {data.map((item, index) => (
                                <div key={index}><img className="w-[90%]" src={item} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 md:py-[50px] gap-4">
                    <div>
                        <p className=' text-[14px] leading-5'>Our Story 👇</p>
                        <h2 className='text-[36px] leading-[54px] font-semibold '>
                            From Startups to Titans of Industry
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                    </div>

                    <div className="w-[100%] h-full bg-[#FFD3AF] grid grid-cols-2 py-[10%]">
                        {bottomHome2.map((item, index) => (
                            <div className='mr-5 text-center' key={index} >
                                <p className='text-[36px] text-[#232536] font-semibold'>{item.title1}+</p>
                                <p className='text-[16px] text-[#232536] font-normal'>{item.title2}</p>
                            </div>
                        ))}</div>
                </div>
            </div>
            <Home3 />
            <div className='max-w-[1024px] mx-auto px-3 pt-10'>

                <p className=' text-[14px] leading-5'>COMPANY</p>
                <div className='grid md:grid-cols-7 grid-cols-1 mb-3'>
                    <div className='col-span-4'>
                        <h2 className='md:text-[46px] text-[36px] md:leading-[58px] leading-[48px] font-semibold '>
                            Award-winning Company seen and used by millions around the world.
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                    </div>

                   
                </div>
                <img className="w-[100%]" src="./company.png" alt="" />
            </div>
        </div>
    )
}

export default index