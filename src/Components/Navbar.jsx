import React, { useEffect } from "react";
import gsap from 'gsap';
import logo from "../assets/logo.png"
import { useGSAP } from "@gsap/react";


function Navbar() {

  useGSAP( () => {
    gsap.from(".logo", {
      duration: 1.6,
      y:10,
      scale:0.7,
      opacity: 0,
    }) 


  gsap.from(".lists ul li",
      {
        duration: 0.6,
        y: -10,
        opacity: 0,
        stagger:0.5,

      });
      gsap.from(".Calendlybtn",
        {
          duration: 0.6,
          delay:1.9,
          y: -10,
          opacity: 0,
          stagger:0.5,
          })
        })



 
  return (
    <div  className="shadow-md navbar w-full sticky left-0 top-0 z-[999] pb-1"
    >
      <div className="container flex justify-between lg:h-24 lg:py-0 py-2  lg:gap-0 gap-2  lg:items-center   px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="logo lg:w-[12%] w-[30%]">
          <img className="w-full " src={logo} alt="" />
        </div>
        <div className="lists lg:w-auto w-[60%] flex lg:items-center justify-between items-end gap-10">
          <ul className="hidden sm:hidden md:hidden lg:flex font-Intersans items-center gap-7 text-[20px] text-white font-semibold ">
            <a href="#about">
              <li className="leading-[18px]">About</li>
            </a>
            <a href="#expertise">
              <li className="leading-[18px]">Expertise</li>
            </a>
            <a href="#contact">
              <li className="leading-[18px]">Contact</li>
            </a>
          </ul>
          <div className="w-[100%] hidden lg:block rounded-full lg:mt-0 lg:w-full lg:text-center text-right lg-8 lg:px-8 lg:py-3 py-2 px-3 bg-green-500 text-white font-bold">
            <a href="https://api.whatsapp.com/send/?phone=9888593715&text&type=phone_number&app_absent=0">Get Touch With Us</a> 
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
