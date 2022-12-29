import Link from 'next/link'
import React from 'react'
type Props = {}

const Blog = (props: Props) => {
    return (
        <div className='w-[100%]'>
            
                <div className='md:relative '>
                    <div className='max-w-[1280px] p-3 mx-auto grid md:grid-cols-2 gap-4 z-10'>
                        <div className='md:pt-[50px] pt-5 z-10'>
                            <p className=' text-[20px] font-medium leading-5'>Our expertise</p>
                            <h2 className='md:text-[40px] md:leading-[54px]  text-[26px] leading-[34px] font-semibold '>
                                We want to get local identification in every corner of the world in this era of global citizenship
                            </h2>
                            <p className='md:text-[16px] md:leading-[24px]
                        text-[14px] leading-[20px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                            <button className=' hover:text-blue-700 py-2 text-blue-400 mt-2 flex items-center'>Read More
                                <span className='mx-3'>
                                    <svg width="21" className='text-blue-600' height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5L20 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                                    </svg>
                                </span>
                            </button>
                            <img src="./blog1.png" alt="" />
                        </div>
                        <div className='z-10'>
                            <div className='py-[50px] md:mx-[12%] bg-white'>
                                <img className='w-[100%]' src="./blog1.png" alt="" />
                                <p className='text-[24px] leading-[36px] font-semibold '>
                                    We want to get local identification in every
                                </p>
                            </div>
                            <div className='py-[10px] md:mx-[12%] bg-white'>
                                <img className='w-[100%]' src="./blog1.png" alt="" />
                                <p className='text-[24px] leading-[36px] font-semibold p-2 '>
                                    We want to get local identification in every local identification in every
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%]  md:absolute bottom-0 bg-[#F9F9F9]   z-0 py-[80px]'></div>
             
                </div>
                <div className='w-[100%]  bg-[#F9F9F9]   '>
                        <div className='max-w-[1024px] md:pt-[30px] mx-auto px-3 py-5'>
                            <p className='text-[40px]'>All Post</p>
                         
                            <div className='grid md:grid-cols-3  mt-6 grid-cols-1 gap-5'>
                                <div className='bg-white  shadow-md'>
                                    <img src="./blog1.png" alt="" />
                                    <Link href={"/"}>
                                        <div className='px-5 pb-8 pt-2'>   <p className='text-[20px] leading-[30px] font-semibold '>
                                            We want to get local identification in every local identification in every
                                        </p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                        </div>
                                    </Link>

                                </div>
                                <div className='bg-white  shadow-md'>
                                    <img src="./blog1.png" alt="" />
                                    <Link href={"./blog/1"}>
                                        <div className='px-5 pb-8 pt-2'>   <p className='text-[20px] leading-[30px] font-semibold '>
                                            We want to get local identification in every local identification in every
                                        </p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                        </div>
                                    </Link>

                                </div>
                                <div className='bg-white  shadow-md'>
                                    <img src="./blog1.png" alt="" />
                                    <Link href={"/"}>
                                        <div className='px-5 pb-8 pt-2'>   <p className='text-[20px] leading-[30px] font-semibold '>
                                            We want to get local identification in every local identification in every
                                        </p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                        </div>
                                    </Link>

                                </div>
                             
                            </div>


                        </div>
                    </div>  
            </div>

    )
}

export default Blog