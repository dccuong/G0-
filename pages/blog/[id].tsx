import React from 'react'

type Props = {}

const Detail = (props: Props) => {
    return (
        <div className='w-[100%]'>
            <div className='max-w-[1280px] mx-auto px-3 pt-10'>

                <p className=' text-[14px] leading-5'>COMPANY</p>
                <div className='grid md:grid-cols-7 grid-cols-1 mb-3'>
                    <div className='col-span-4'>
                        <h2 className='text-[48px] leading-[58px] font-semibold '>
                            Award-winning Company seen and used by millions around the world.
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal text-[#5D5F6D]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                    </div>

                 
                </div>
                <img className="w-[100%] " src="/company.png"  alt="" />
            </div>
            <div className='max-w-[1280px] mx-auto px-10 pt-10'>
                <b>Transform Your Idea Into Reality with Ether a Leading Digital Agency</b>
                <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
            </div>
        </div>
    )
}

export default Detail