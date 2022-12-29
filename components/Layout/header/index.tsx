import React, { useState, useEffect } from 'react'
import Menu from './nav/Menu'

import { Button,Drawer  } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';

type Props = {}

const Header = (props: Props) => {
  const [showNav, setshowNav] = useState(false)
  const [showNav1, setshowNav1] = useState(true)
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const itemNav = [
    { name: "home", link: "/" },
    { name: "service", link: "/service" },
    { name: "company", link: "/company" },
    { name: "career", link: "/career" },
    { name: "blog", link: "/blog" },
    { name: "contact us", link: "/contactus" },]
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  useEffect(() => {
    var lastVal = 0
    window.addEventListener("scroll", () => {
      setshowNav1(false)
      window.onscroll = function () {

        const now = window.scrollY
        console.log(now, "now")
        if (now > lastVal) {
          setshowNav(true)
        }
        else if (now == 0) {
          setshowNav(true)
        } else {
          setshowNav(false)
        }
        lastVal = now
      }
    })
  }, [])

  return (
    <div className='w-[100%] bg-[#232536] shadow-sm'>
      <div className={showNav ? 'transition-transform flex justify-between items-center max-w-[1280px] pl-3 mx-auto py-3 ' : "hidden"} >
      <div className='logo'><Link href='/'> <img className='w-11' src="./logo.png" alt="" /></Link></div>
        <div className='md:block hidden'> <Menu /></div>
        <div className='md:hidden block '>
     
        <MenuOutlined onClick={showDrawer} className="text-white"/>

      <Drawer placement="right" className={"bg-slate-500"} onClose={onClose} open={open}>
      <ul className="">
          {itemNav.map((item, index) => (
            <Link href={item.link} key={index}>
              <li className={ router.asPath==item.link?"p-4 font-Poppins text-[14px] text-gray-800 font-bold leading-6 opacity-1":" p-4 font-medium font-Poppins text-[14px] text-black leading-6  opacity-60"}>
         
                {item.name.toUpperCase()}
              </li>
            </Link>
          ))}
  
  
  
        </ul>
      </Drawer>
        </div>
      </div>

      <div className={showNav1 ? 'flex justify-between items-center max-w-[1280px] pl-3 mx-auto py-3' : "hidden"} >
      <div className='logo'><Link href='/'> <img className='w-11' src="./logo.png" alt="" /></Link></div>
        <div className='md:block hidden'> <Menu /></div>
        <div className='md:hidden block '>
        
        <MenuOutlined onClick={showDrawer}/>
     
      <Drawer placement="right" className={"bg-slate-500"} onClose={onClose} open={open}>
      <ul className="">
          {itemNav.map((item, index) => (
            <Link href={item.link} key={index}>
              <li className={ router.asPath==item.link?"px-4 font-Poppins text-[14px] text-gray-800 font-bold leading-6 opacity-1":" px-4 font-medium font-Poppins text-[14px] text-black leading-6  opacity-60"}>
                {item.name.toUpperCase()}
              </li>
            </Link>
          ))}
  
  
  
        </ul>
      </Drawer>
        </div>

      </div>

    </div>
  )
}

export default Header   