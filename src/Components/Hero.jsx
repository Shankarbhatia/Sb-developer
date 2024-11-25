import React from 'react'
import profileEmoji from "../assets/memoji-computer.png"
import grainImage from "../assets/grain.jpg"
import Navbar from './Navbar'
// import StarIcon from "../assets/icons/star.svg"


function Hero() {
  return (
    <div className="pb-20 md:pt-26 relative z-50 lg:overflow-visible overflow-hidden">
      <Navbar />
      <div className='absolute inset-0 -z-30 w-full h-[100%] opacity-5'>
        <img className='w-full' src={grainImage} alt="" />
      </div>
      <div className="bg-circle overflow-hidden">
      <div className="size-[620px] border-2 border-emerald-300/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_inset] shadow-emerald-300/5 inset-0"></div>
      <div className="size-[820px] border-2 border-emerald-300/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_inset] shadow-emerald-300/5 inset-0"></div>
      <div className="size-[1020px] border-2 border-emerald-300/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_inset] shadow-emerald-300/5 inset-0"></div>
      <div className="size-[1220px] border-2 border-emerald-300/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_80px_inset] shadow-emerald-300/5 inset-0"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="starBox size-[800px] animate-spin [animation-duration:30s]">
      <div className="star inline-flex animate-spin [animation-duration:5s]">
      <svg className='size-24' width="24" height="24" viewBox="0 0 24 24" fill="#10B981" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="#10B981"/>
</svg>
</div>
</div>
        
      </div>
      </div>
      <div className="container relative z-50 flex items-center justify-center flex-col">
        <img className='size-[100px]' src={profileEmoji} alt="" />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-full flex items-center justify-center gap-3'>
          <div className='bg-green-500 size-2.5 rounded-full'></div>
          <div className='text-white text-sm font-semibold font-Intersans'>Available for new projects</div>
        </div>
        <div className="max-w-lg mx-auto">
        <h1 className='font-Calistogasans text-3xl md:text-5xl md:leading-[1.2em] text-center mt-8 text-white tracking-wide'>Building Exceptional User Experiences</h1>
        <p className='text-white/50 md:text-lg text-center my-4'>
          I specialize in transforming designs into functional, high-performing web application. Let's disucss your next projects.
        </p>
        </div>
        <div className="btnBox flex flex-col md:flex-row items-center mt-4 gap-4">
          <button>
          <a  className='flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl' href="#expertise"><span className='font-semibold text-white'>Explore my work</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></a>
          
          </button>
          <button  className="flex items-center gap-2 border bg-white border-white/15 px-6 h-12 rounded-xl font-semibold">
          <a href="https://api.whatsapp.com/send/?phone=9888593715&text&type=phone_number&app_absent=0"><span>👋</span>
          Let's Connect</a>
        </button>
        </div>
      </div>
     
    </div>
  )
}

export default Hero