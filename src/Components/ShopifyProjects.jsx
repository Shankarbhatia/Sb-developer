import React from "react";
import sprojectImg1 from "../assets/shopifyProjectsa/CssHouse-projects34.png"
import sprojectImg2 from "../assets/shopifyProjectsa/CssHouse-projects35.png"
import sprojectImg3 from "../assets/shopifyProjectsa/CssHouse-projects36.png"
import sprojectImg4 from "../assets/shopifyProjectsa/CssHouse-projects37.png"
import sprojectImg5 from "../assets/shopifyProjectsa/CssHouse-projects38.png"
import sprojectImg6 from "../assets/shopifyProjectsa/CssHouse-projects38.png"
import { CiLocationArrow1 } from "react-icons/ci";

const shopifyData = [
  {
   "projectImage": sprojectImg1,
   "tools": "Figma, HTML, CSS, JS, Liquid, Shopify.",
   "link": "https://colomerandsons.com/"
  },
  {
   "projectImage": sprojectImg2,
   "tools": "Figma, HTML, CSS, JS, Liquid, Shopify.",
   "link": "https://dressmedown.com/"
  },
  {
   "projectImage": sprojectImg3,
   "tools": "Figma, HTML, CSS, JS, Liquid, Shopify.",
   "link": "https://dressmedown.com/"
  },
  {
   "projectImage": sprojectImg4,
   "tools": "Figma, HTML, CSS, JS, Liquid, Shopify.",
   "link": "https://colorfulnatalie.com/"
  },
  {
   "projectImage": sprojectImg5,
   "tools": "Figma, HTML, CSS, JS, Liquid, Shopify.",
   "link": "https://giganticcandy.com/"
  },
  
 
 ]
 


function ShopifyProjects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            shopifyData.map((pItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg flex-shrink w-full h-68 object-cover  object-center mb-4" src={pItem.projectImage} alt="" />
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

export default ShopifyProjects;
