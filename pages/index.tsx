import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Home1 from '../components/client/Home/Home1'
import Home2 from '../components/client/Home/Home2'
import Home3 from '../components/client/Home/Home3'
import Home4 from '../components/client/Home/Home4'
import Home6 from '../components/client/Home/Home6'
type Props = {}

const index = (props: Props) => {
  return (
    <div className="">
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home6 />
    </div>
  )
}
export default index