import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
type Props = {}

const Home2 = (props: Props) => {
  const data = ["./image1.png", "./image2.png", "./image3.png", "./image3.png", "./image3.png"]
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
  const bottomHome2 = [{
    title1: "1500+",
    title2: "Project Delivere"
  },
  {
    title1: "1500+",
    title2: "Project Delivere"
  },
  {
    title1: "1500+",
    title2: "Project Delivere"
  },
  ]
  return (
    <div className="w-[100%]">
      <div className='max-w-[1280px] text-black mx-auto px-3 lg:py-[120px] py-[50px]'>

        <div>
          <p className=' text-[14px] leading-5'>ABOUT US</p>
          <div className='grid md:grid-cols-7 grid-cols-1 gap-4'>
            <div className='col-span-4'>
              <h2 className='md:text-[46px] text-[36px] md:leading-[58px] leading-[46px]  font-semibold '>
                The company leads entire webdesign process from concept to delivery.
              </h2></div>

            <div className='col-span-3'>
              <h3 className='text-[30px] leading-[54px] font-semibold'>The Era Of Technology.</h3>
              <p className='text-[15px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
            </div>
          </div>
          <div className='md:my-[48px] my-[20px]'>

            <Carousel responsive={responsive}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={1500}
              infinite={true}>
              {data.map((item, index) => (
                <div key={index}><img src={item} className="w-[90%]" alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className='grid md:grid-cols-5'>


            <div className='col-span-3 flex items-center '>

              {bottomHome2.map((item, index) => (
                <div key={index} className='mr-5'>
                  <p className='text-[36px] text-[#232536] font-semibold'>{item.title1}</p>
                  <p className='text-[16px] text-[#232536] font-normal'>{item.title2}</p>
                </div>
              ))}

            </div>
            <div className='col-span-2 float-right'>
              <button className=' hover:text-blue-700 px-5 py-3 text-blue-400 mt-6 flex items-center'>Request  Quote
                <span className='mx-3 text-blue-700'>
                  <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5L20 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                  </svg></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2