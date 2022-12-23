import React from 'react';
import { Tabs } from 'antd';
type Props = {}

const careerDetail = (props: Props) => {
  return (
    <div className='w-[100%]'>
      <div className='max-w-[1280px] mx-auto md:pt-[50px] pt-5 px-3'>
        <div className='md:px-[60px] grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2'>
          <div className='py-3'>
            <p className='text-[12px]'> CAREER AT ETHER</p>
            <p className='md:text-[48px] text-[36px]'> Full Stack Developer </p>
            <p className='opacity-50 text-[13px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
            <button className='p-4 bg-blue-500 text-white flex items-center mt-3'> <span className='mr-3'>Apply now</span>  <img src="/muten.svg" alt="" /></button>
          </div>
          <div className='bg-[#FFE0C7] p-[50px]'>
            <p className='font-medium text-[24px] pb-2'>Job Description</p>
            <p>Remote, India , 4 to 5 Years Of Experience</p>
            <p className='py-1'>Department: Product Engineering</p>
            <p>Full Time 5 Position Available.</p>
          </div>
        </div>
        <div className='bg-[#B9BCFF] mt-5'>
          <Tabs
            defaultActiveKey="1"
            centered
            tabBarStyle={{ color: "#FFFFFF" }}
            items={[
              {
                label: (<><div className='text-[16px] font-semibold mx-10'>Tab 1</div> </>),
                key: '1',
                children: (<> <div className='md:px-[60px] px-2 pb-3'>111111</div> </>),
              },
              {
                label: (<><div className='text-[16px] font-semibold md:mx-[50px] '>Tab 1</div> </>),
                key: '2',
                children: (<> <div className='md:px-[60px] pb-3 px-2'>2222222</div> </>),
              },
              {
                label: (<><div className='text-[16px] font-semibold mx-10'>Tab 1</div> </>),
                key: '3',
                children: (<> <div className='md:px-[60px] pb-3 px-2'>33333333</div> </>),
              },
            ]}
          />
        </div>
        <div>
          <form action="">
            <h2 className='md:text-[48px] text-[36px] my-5'> Apply now</h2>
            <div className='grid md:grid-cols-2 grid-cols-1  md:gap-5 gap-2'>

              <input type="text" className='py-[13px] bg-slate-100 px-5 focus:outline-none 
              border border-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-[100%] ' placeholder='go+@gamil.com' />
              <input type="text" className='py-[13px]  bg-slate-100 px-5 focus:outline-none 
              border border-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-[100%]  ' placeholder='go+@gamil.com' />
              <input type="text" className='py-[13px]  bg-slate-100 px-5 focus:outline-none 
              border border-gray-400  focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-[100%] ' placeholder='go+@gamil.com' />
              <input type="text" className='py-[13px]  bg-slate-100 px-5 focus:outline-none 
              border border-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-[100%]  ' placeholder='go+@gamil.com' />


            </div>

            <textarea id="w3review" name="w3review" className='mt-4 py-8 px-5 focus:outline-none 
              border border-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-[100%]   bg-slate-100' placeholder='messege'></textarea>
          </form>
           <div className='flex items-start'> <input type="checkbox"/> <p className='text-[12px] opacity-60 md:w-[60%] ml-2'>I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</p></div>
        </div>
        <button className='p-3 my-3 bg-blue-500 text-white flex items-center mt-3'> <span className='mr-3'>Apply now</span>  <img src="/muten.svg" alt="" /></button>
      </div>

    </div>
  )
}

export default careerDetail