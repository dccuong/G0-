
import React from 'react'

type Props = {}

const Home1 = (props: Props) => {
    const content1 = "Transform Your Idea Into Reality with Finsweet"
    const content1_2 = "The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude."
    const content2 = [{
        icon: "",
        title: ""
    },
    {
        icon: "",
        title: ""
    }
        , {
        icon: "",
        title: ""
    }
        , {
        icon: "",
        title: ""
    }]
    return (
        <div className='w-[100%]  bg-[#232536]'>
            <div className=' text-white max-w-[1280px]  px-3 items-center  mx-auto md:py-[96px] py-[10px]'>
                <div className='grid md:grid-cols-2 grid-cols-1 z-0'>
                    <div className='text-left md:pt-[18%] pt-[20px]'>
                        <h3 className='font-semibold md:text-[48px] text-[36px] md:leading-[68px] leading-[46px]  text-white'>{content1}
                        </h3>
                      <p className='md:text-[16px] text-[14px] opacity-60 text-white mt-6'>{content1_2}</p>
                        <button className='px-5 py-3 bg-blue-700 mt-6 flex items-center'>Request  Quote
                            <span className='mx-3'><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5L20 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                            </svg></span></button>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <img
                            className='shadow-md md:float-right mx-auto'
                            width={"532px"}
                            height={"632px"}
                            src={"./1home.png"}
                        />
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 items-center mt-8'>
                    <div>
                        <p className='text-[14px] opacity-60 text-white'
                        >Our Clients</p>
                        <p>We are ve Worked with</p>
                    </div>

                    <div>
                        <span className='text-[14px] mx-1 opacity-60 text-white'
                        >icon</span>
                        <span>We are ve Worked with</span>
                    </div>

                    <div>
                        <span className='text-[14px] mx-1 opacity-60 text-white'
                        >icon</span>
                        <span>We are ve Worked with</span>
                    </div>
                    <div>
                        <span className='text-[14px] mx-1 opacity-60 text-white'
                        >icon</span>
                        <span>We are ve Worked with</span>
                    </div>
                    <div>
                        <span className='text-[14px] mx-1 opacity-60 text-white'
                        >icon</span>
                        <span>We are ve Worked with</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1