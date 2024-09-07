import React from 'react'
import htmlProject1 from "../assets/figmaToHtml/HtmlProject1.png"
import htmlProject2 from "../assets/figmaToHtml/HtmlProject2.png"
import htmlProject3 from "../assets/figmaToHtml/HtmlProject3.jpg"
import htmlProject4 from "../assets/figmaToHtml/HtmlProject4.jpg"
import htmlProject5 from "../assets/figmaToHtml/HtmlProject5.png"
import { CiLocationArrow1 } from "react-icons/ci";


const htmlData = [
    {   
        "projectImage": htmlProject1,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.github.io/digital-marketing-systems/"
       },
       {
        "projectImage": htmlProject2,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.com/13cure/"
       },
       {
        "projectImage": htmlProject3,
        "tools": "Figma, HTML, CSS.",
        "link": "https://fulfillnext.com/"
       },
       {
        "projectImage": htmlProject4,
        "tools": "Figma, HTML, CSS.",
        "link": "https://www.ibizaexecutivetravel.com"
       },
       {
        "projectImage": htmlProject5,
        "tools": "Figma, HTML, CSS.",
        "link": "https://mhpreschool.com/"
       },
    ]

function HtmlProjects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            htmlData.map((HtmlItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg flex-shrink w-full h-68 object-cover  object-center mb-4" src={HtmlItem.projectImage} alt="" />
              <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{HtmlItem.tools}</h2>
              <a className="visitSite flex underline hover:no-underline items-center gap-3" href={HtmlItem.link} target='_blank'><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
              </div>
            ))
          }
          
        
        </div>
      </div>
    </section>
  )
}

export default HtmlProjects