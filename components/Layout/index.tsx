import { UpSquareOutlined } from '@ant-design/icons/lib/icons';
import React, { useState, useEffect } from 'react'
import Footer from './footer/Footer';
import Header from './header';

type ClientLayoutProps = {
  children: JSX.Element;
};

const LayoutClient = ({ children }: ClientLayoutProps) => {
  const [backtoTop, setBacktoTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTop(true)
      } else {
        setBacktoTop(false)
      }
    })
  }, [])
  const setCrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      <div className='sticky top-0 z-40'>
        <Header />
      </div>
      <main className='font-Poppins'>{children}</main>
      {backtoTop && (<button
        className="fixed bottom-1 right-2"
        onClick={setCrollUp}>
      <UpSquareOutlined className=' text-yellow-300 text-[22px]' />
      </button>)}
      <Footer/>
    </>

  )
}


export default LayoutClient