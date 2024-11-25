import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function GotoTopBtn() {

  const GotoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div onClick={GotoTop} className='gotopBtn cursor-pointer border border-white p-2 rounded-full size-10 bottom-3 flex items-center justify-center'>
      <FaArrowUpLong />
    </div>
  )
}

export default GotoTopBtn