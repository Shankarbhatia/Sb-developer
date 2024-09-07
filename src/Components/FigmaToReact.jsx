import React from 'react'
import ReactProject1 from "../assets/figmaToReact/reactProject1.png"
import ReactProject2 from "../assets/figmaToReact/reactProject2.png"
import ReactProject3 from "../assets/figmaToReact/reactProject3.png"
import ReactProject4 from "../assets/figmaToReact/reactProject4.png"
import { CiLocationArrow1 } from "react-icons/ci";


const reactData = [
    {
        "projectImage": ReactProject1,
        "tools": "Figma, HTML, Tailwind CSS, React.",
        "link": "https://webuiexpert.github.io/digital-marketing-systems/"
       },
       {
        "projectImage": ReactProject2,
        "tools": "Figma, HTML, Tailwind CSS, React.",
        "link": "https://www.solutionfounder.com/"
       },
       {
        "projectImage": ReactProject3,
        "tools": "Figma, HTML, Tailwind CSS, React.",
        "link": "https://www.cablemovers.net/"
       },
       {
        "projectImage": ReactProject4,
        "tools": "Figma, HTML, Tailwind CSS, React.",
        "link": "https://www.quantro.net/#investment"
       },
    ]


function FigmaToReact() {
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

export default FigmaToReact