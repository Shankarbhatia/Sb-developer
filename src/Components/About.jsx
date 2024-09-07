import React, { useRef } from 'react'
import Progress from './Progress'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {

  const aboutContainer = useRef();


useGSAP( () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".expText",  
      start: "top 90%",    
      end: "bottom center",      
      scrub: true,          
      markers: false ,             
      stagger:4,
    }
  });

tl.from(".expText", {
  x:-200,
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.2,
  opacity:0

}, [] );
})


  return (
    <div id='about' className="w-full lg:h-screen">
    <div ref={aboutContainer} className="container flex justify-between h-auto items-start lg:pt-20 py-10 gap-10 lg:flex-row flex-col lg:px-0  md:px-8 sm:px-6 px-4">
    <div className="expText lg:w-1/2">
      <h2 className="lg:text-[42px] mb-10 text-[32px] md:leading-9 font-extrabold">
      A Little About me </h2>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em]  lg:mt-0 mt-2">
      I’m a front-end web developer with over 14 years of experience. I work with agencies across the globe to create high performance & rich interactive websites that work across all platforms & devices.
      </p>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
      Although I'm very familiar with using frameworks like Laravel, CI, React, Next, Webflow, but my websites are primarily hand-coded using HTML5, CSS3, Tailwind CSS & JS.
      </p>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
      With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.
      </p>
      <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
      In a quest for always keeping myself updated, I will always search new technoligies.
      </p>
      <button className="mt-5 text-[18px] leading-8 px-8 py-2 border text-white font-bold bg-[#13a300] rounded-full">
        <a href="https://www.thecsshouse.com/wp-content/uploads/2024/09/bharat-resume.pdf" target="_black">Download Resume</a>
      </button>
    </div>
    <div className="expYear w-full lg:w-1/2 lg:pl-10 flex text-[14px] flex-col gap-5">
    
     <Progress />
    </div>
    </div>
</div>
  )
}

export default About