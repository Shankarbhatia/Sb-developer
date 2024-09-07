import React from 'react'
import emailProject1 from "../assets/backendprojects/emailTemplateproj1.png"
import emailProject2 from "../assets/backendprojects/emailTemplateproj2.png"
import emailProject3 from "../assets/backendprojects/emailTemplateproj3.png"
import emailProject4 from "../assets/backendprojects/emailTemplateproj4.png"
import emailProject5 from "../assets/backendprojects/emailTemplateproj5.png"
import { CiLocationArrow1 } from "react-icons/ci";


const backendprojectdata = [
    {
        "projectImage": emailProject1,
        "title": "E-Com website from where you can buy and customize sports gear.",
        "tools": "Tech: The front end is in React JS and Bootstrap, and the back is in Symfony Framework.",
        "link": "https://www.sportsgearswag.com"
       },
       {
        "projectImage": emailProject2,
        "title": "A platform for learning code. Users can practice the code by using this platform.",
        "tools": "Tech: Laravel, MySQL",
        "link": "https://app.vivocoder.com/"
       },
       {
        "projectImage": emailProject3,
        "title": "A platform for handling the latest events, new membership registrations, and online payments for a Singapore based society ",
        "tools": "Tech: Codeigniter, MySQL",
        "link": "https://learning.slp.org.sg/"
       },
       {
        "projectImage": emailProject4,
        "title": "Real estate website for selling property and posting ads. In development",
        "tools": "Tech: NextJs, MongoDB",
        "link": "https://main.d2dtlafb1s9gfu.amplifyapp.com/auth/login"
       },
       {
        "projectImage": emailProject5,
        "title": "Its a web application that allows users to personalize their phone cases by uploading images, customizing designs, materials, finishes, and colors. Users can preview their custom designs and complete the purchase through an integrated payment system.",
        "tools": "Tech: Next.js, TypeScript, PostgreSQL, Prisma ORM, Stripe for Payment, Shadcn/UI.",
        "link": "https://moments-covers.vercel.app/"
       },
    ]

function BackendProjectsProjects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            backendprojectdata.map((wPItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg flex-shrink w-full h-68 object-cover  object-center mb-4" src={wPItem.projectImage} alt="" />
              <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{wPItem.title}</h2>
              <h2 className="title-font text-left font-medium lg:text-sm  my-2 text-sm text-gray-900">{wPItem.tools}</h2>
              <a className="visitSite flex underline hover:no-underline items-center gap-3" href={wPItem.link} target='_blank'><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
              </div>
            ))
          }
          
        
        </div>
      </div>
    </section>
  )
}

export default BackendProjectsProjects