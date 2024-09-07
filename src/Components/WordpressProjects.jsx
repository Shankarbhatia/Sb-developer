import React from "react";
import wprojectImg1 from "../assets/wordpress-project1.png"
import wprojectImg2 from "../assets/wordpress-project2.png"
import wprojectImg3 from "../assets/wordpress-project3.png"
import wprojectImg4 from "../assets/wordpress-project4.png"
import wprojectImg5 from "../assets/wordpress-project5.png"
import wprojectImg6 from "../assets/wordpress-project6.png"
import { CiLocationArrow1 } from "react-icons/ci";

const wordpressData = [
  {
   "projectImage": wprojectImg1,
   "tools": "Figma,HTML, CSS, JS, WordPress Elementor",
   "link": "https://cmoconfessions.com/"
  },
  {
   "projectImage": wprojectImg2,
   "tools": "Figma,HTML, CSS, JS, WordPress Elementor",
   "link": "http://thein8summit.com.au/"
  },
  {
   "projectImage": wprojectImg3,
   "tools": "Figma,HTML, CSS, JS, WordPress Elementor",
   "link": "https://pandotax.de/"
  },
  {
   "projectImage": wprojectImg4,
   "tools": "Figma,HTML, CSS, JS, WordPress Elementor",
   "link": "https://neocandle.com/"
  },
  {
   "projectImage": wprojectImg5,
   "tools": "Figma,HTML, CSS, JS, WordPress Elementor",
   "link": "https://abcfinance.co.uk/"
  },
  {
   "projectImage": wprojectImg6,
   "tools": "Figma,HTML, CSS, JS, WordPress Elementor",
   "link": "https://mhpreschool.com/"
  },
 
 ]
 


function WordpressProjects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            wordpressData.map((pItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg  flex-shrink w-full h-68 object-cover  object-center mb-4" src={pItem.projectImage} alt="" />
              <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{pItem.tools}</h2>
              <a className="visitSite flex underline hover:no-underline items-center gap-3" href={pItem.link} target="_blank"><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
              </div>
            ))
          }
          
        
        </div>
      </div>
    </section>
  );
}

export default WordpressProjects;
