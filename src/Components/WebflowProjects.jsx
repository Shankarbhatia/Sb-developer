import React from 'react'
import webflowProject1 from "../assets/webflowProjectsImages/webflowProject1.png"
import webflowProject2 from "../assets/webflowProjectsImages/webflowProject2.png"
import webflowProject3 from "../assets/webflowProjectsImages/webflowProject3.png"
import webflowProject4 from "../assets/webflowProjectsImages/webflowProject4.png"
import webflowProject5 from "../assets/webflowProjectsImages/webflowProject5.png"
import webflowProject6 from "../assets/webflowProjectsImages/webflowProject6.png"
import { CiLocationArrow1 } from "react-icons/ci";



const webflowdata = [
        {
            "projectImage": webflowProject1,
            "tools": "Figma, HTML, CSS, Webflow.",
            "link": "https://www.getladle.com/"
           },
           {
            "projectImage": webflowProject4,
            "tools": "Figma, HTML, CSS, Webflow.",
            "link": "https://inaccord.com/"
           },
           {
            "projectImage": webflowProject2,
            "tools": "Figma, HTML, CSS, Webflow.",
            "link": "https://www.vizio.ai/"
           },
           {
            "projectImage": webflowProject3,
            "tools": "Figma, HTML, CSS, Webflow.",
            "link": "https://facefoundry.webflow.io/"
           },
          
           {
            "projectImage": webflowProject5,
            "tools": "Figma, HTML, CSS, Webflow.",
            "link": "https://starlight-stage.webflow.io/"
           },
           {
            "projectImage": webflowProject6,
            "tools": "Figma, HTML, CSS, Webflow.",
            "link": "https://hall-digital.webflow.io/"
           },



]

function WebflowProjects() {
  return (
    <div>
 <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            webflowdata.map((wPItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg flex-shrink w-full h-68 object-cover  object-center mb-4" src={wPItem.projectImage} alt="" />
              <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{wPItem.tools}</h2>
              <a className="visitSite flex underline hover:no-underline items-center gap-3" href={wPItem.link} target='_blank'><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
              </div>
            ))
          }
          
        
        </div>
      </div>
    </section>
    </div>
  )
}

export default WebflowProjects