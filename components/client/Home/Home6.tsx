import React from 'react'

type Props = {}

const Home6 = (props: Props) => {
    return (
        <div className='w-[100%]'>
            <div className='w-[100%] bg-[#ECF8F9] md:py-[52px] py-[20px]'>
                <div className='max-w-[1280px] mx-auto px-3'>
                    <p className='text-[36px] leading-[48px]'>Read our latest blogs & news</p>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-3'>
                        <div className='flex bg-white'>
                            <img src="./h5.png" alt="" />
                            <div className='mx-3 py-4'>
                                <p className='text-[#232536] text-[14px] font-medium'>date</p>
                                <p className='text-[20px] leading-9 font-semibold'>Today’s best design trends for digital products</p>

                                <p className='text-blue-600 mt-3 mb-[12px]'>Read more {"->"}</p>
                            </div>
                        </div>
                        <div className='flex bg-white'>
                            <img src="./h5.png" alt="" />
                            <div className='mx-3 py-4'>
                                <p className='text-[#232536] text-[14px] font-medium'>date</p>
                                <p className='text-[20px] leading-9 font-semibold'>Today’s best design trends for digital products</p>

                                <p className='text-blue-600 mt-3 mb-[12px]'>Read more {"->"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
    )
}

export default Home6