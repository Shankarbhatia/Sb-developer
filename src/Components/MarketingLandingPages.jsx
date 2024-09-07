import React from 'react'
import funnelProject1 from "../assets/FunnelPages/FunnelProject1.png"
import funnelProject2 from "../assets/FunnelPages/FunnelProject2.png"
import funnelProject3 from "../assets/FunnelPages/FunnelProject3.png"
import funnelProject4 from "../assets/FunnelPages/FunnelProject4.png"
import funnelProject5 from "../assets/FunnelPages/FunnelProject5.png"
import funnelProject6 from "../assets/FunnelPages/FunnelProject6.png"
import funnelProject7 from "../assets/FunnelPages/FunnelProject7.png"
import funnelProject8 from "../assets/FunnelPages/FunnelProject8.png"
import funnelProject9 from "../assets/FunnelPages/FunnelProject9.png"
import funnelProject10 from "../assets/FunnelPages/FunnelProject10.png"
import { CiLocationArrow1 } from "react-icons/ci";


const reactData = [
    {
        "projectImage": funnelProject1,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://fitness.tappbrothers.com/"
       },
       {
        "projectImage": funnelProject2,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://www.karatewithfamily.com/"
       },
       {
        "projectImage": funnelProject3,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://www.closercartel.com/"
       },
       {
        "projectImage": funnelProject4,
        "tools": "Figma, HTML, CSS, GHL",
        "link": "https://app.sanesocialmedia.com/v2/preview/VHshYgyjKJDPrZSotMZm?notrack=true"
       },
       {
        "projectImage": funnelProject5,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://canpsy.com/"
       },
       {
        "projectImage": funnelProject6,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://www.salonologygoldclub.com/"
       },
       {
        "projectImage": funnelProject7,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://university.commercialclaimsadvocate.com/ebook"
       },
       {
        "projectImage": funnelProject8,
        "tools": "Figma, HTML, CSS, Clickfunnel",
        "link": "https://workshop.theadgirls.com/academy"
       },
       {
        "projectImage": funnelProject9,
        "tools": "Figma, HTML, CSS, GHL",
        "link": "https://book.empoweru.com.au/advanced_camp_lp"
       },
       {
        "projectImage": funnelProject10,
        "tools": "Figma, HTML, CSS, GHL",
        "link": "https://book.empoweru.com.au/revisit-empower-u-page"
       },

    ]


function MarketingLandingPages() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
        
        {
          reactData.map((reactItem, index) => (
            <div key={index} className="flex flex-col items-start bg-white rounded">
            <img className="border p-1  rounded-lg flex-shrink w-full h-68 object-cover  object-center mb-4" src={reactItem.projectImage} alt="" />
            <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{reactItem.tools}</h2>
            <a className="visitSite flex underline hover:no-underline items-center gap-3" href={reactItem.link} target='_blank'><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
            </div>
          ))
        }
        
      
      </div>
    </div>
  </section>
  )
}

export default MarketingLandingPages