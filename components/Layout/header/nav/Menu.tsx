import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
type Props = {}

const Menu = (props: Props) => {
  const router = useRouter()

  const itemNav = [
    { name: "home", link: "/" },
    { name: "service", link: "/service" },
    { name: "career", link: "/career" },
    { name: "company", link: "/company" },
    { name: "blog", link: "/blog" },
    { name: "contact us", link: "/contactus" },]
  return (
    <>
      <ul className="flex justify-between ">
        {itemNav.map((item, index) => (
          <Link href={item.link} key={index}>
            <li className={ router.asPath==item.link?"px-4 font-medium font-Poppins text-[14px] text-white leading-6 opacity-1":" px-4 font-medium font-Poppins text-[14px] text-white leading-6  opacity-60"}>
              {item.name.toUpperCase()}
            </li>
          </Link>
        ))}



      </ul>
    </>
  )
}

export default Menu