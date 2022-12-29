import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <div className='w-[100%]'>
            <div className='max-w-[1280px] mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='mt-[50px]'>
                    <div className='py-4'>
                        <p className="leading-5 font-medium font-Poppins">CONTACT US</p>
                        <p className='text-[#232536] text-[36px] font-semibold leading-10 my-3'>{"Have a Question ? Let’s Get in Touch with us 👋"}</p>
                        <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
                    </div>
                    <form action="" className='md:mt-[50px] mt-[20px]'>
                        <div className='my-5'>
                            <p className='text-gray-500'>Name</p>
                            <input type="text" className='w-[50%] focus:outline-none focus:bg-white' placeholder='' />
                            <div className='border-t w-[60%] border-gray-300' />
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500'>Email</p>
                            <input type="text" className='w-[50%] focus:outline-none focus:bg-white' placeholder='' />
                            <div className='border-t w-[60%] border-gray-300' />
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500'>Subject</p>
                            <input type="text" className='w-[50%] focus:outline-none focus:bg-white' placeholder='' />
                            <div className='border-t w-[60%] border-gray-300' />
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-500'>Messege</p>
                            <input type="text" className='w-[50%] py-5 focus:outline-none focus:bg-white' placeholder='Type you messege' />

                            <div className='border-t w-[60%] border-gray-300' />
                        </div>
                        <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3  mt-6 flex text-white items-center'> Send messege
                            <span className='mx-3'><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5L20 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                            </svg></span></button>



                    </form>
                </div>
                <div className='bg-blue-500 py-[30px] mt-[40px] text-white px-[12%]'>
                    <div className='px-3 py-4 my-3'>
                        <p className='opacity-60'>Location</p>
                        <hr className='opacity-25 my-3' />
                        <p className='text-[16px]'>DLF Cybercity, Bhubaneswar,
                            India, &52050</p>
                    </div>
                    <div className='px-3 py-4 my-6'>
                        <p className='opacity-60'>Working Hour</p>
                        <hr className='opacity-25 my-3' />
                        <p className='text-[16px]'>Monday To Friday,
                        9:00 AM to 8:00 PM </p>
                    </div>
                    <div className='px-3 py-4 my-3'>
                        <p className='opacity-60'>Contact us</p>
                        <hr className='opacity-25 my-3' />
                        <p className='text-[16px]'>0977 112 143
                        <br />
                        contact@bkplussoft.com</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.681699829565!2d105.80411271445428!3d21.005392593952617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac98b1de85dd%3A0x48e594483498f9fd!2zMjYgTmcuIDIzIEzDqiBWxINuIEzGsMahbmcsIE5ow6JuIENow61uaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSAxMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1671596793206!5m2!1sen!2s" width="100%" height="300" style={{ border: 0 }} loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default index