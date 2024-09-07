import React from "react";
import WhatsAppbtn from "./WhatsAppbtn";
import GotoTopBtn from "./GotoTopBtn";



function Footer() {
  return (
    <div id="book-appointment" className="w-full h-auto">
      <div className="max-w-[1320px] mx-auto lg:py-3 py-10 md:px-8 sm:px-6 px-4 flex items-center flex-col gap-3">
      <p>© 2016-24 Bharat-singh.com All Rights Reserved.</p>

        {/* <div className="flex gap-5">
        <a className="hover:-mt-1 duration-500 " href="https://www.facebook.com/seondigitalmarketingexpert"><FaFacebookF /></a> 
        <a className="hover:-mt-1 duration-500 " href="#"><FaLinkedinIn /></a> 
        </div> */}
      </div>
      <div className="whatsaapDiv fixed right-16 bottom-3">
      <WhatsAppbtn />
      </div>
      <div className="gotop fixed right-2 bottom-4">
      <GotoTopBtn  />
      </div>
      
    </div>
  );
}

export default Footer;
