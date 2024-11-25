import React from 'react'

function ConsultationBanner() {
  return (
    <div className="w-full bg-[#ffe88c]">
        <div className="container flex items-center px-4 sm:px-6 md:px-8 lg:px-0 lg:flex-row flex-col justify-between lg:py-7 py-5 gap-5">
        <h3 className="lg:text-[24px] text-[14px] text-center">Are you ready for serious business? or still have confusion?
        </h3>
        <button className="lg:text-[18px]  font-bold bg-green-500 text-white hover:bg-transparent hover:border hover:border-black px-5 py-3 rounded-full">
        <a href="https://api.whatsapp.com/send/?phone=9888593715&text&type=phone_number&app_absent=0">Get Touch With Us</a>
        </button>
        </div>
      
    </div>
  )
}

export default ConsultationBanner