import React from "react";
const groups=[
{title:"Frontend Development",skills:["HTML5","CSS3","JavaScript","React.js","Bootstrap","Tailwind CSS","GSAP"]},
{title:"Website Platforms & CMS",skills:["WordPress","Elementor Pro","WooCommerce","Webflow","Shopify","Wix","Bricks","Beaver Builder","Divi","Joomla"]},
{title:"Funnels & Learning Platforms",skills:["GoHighLevel","ClickFunnels","Kajabi","LearnWorlds"]},
{title:"Design, Creative & Tools",skills:["Figma","Adobe","Canva","CapCut","Framer","GitHub"]}
];
export default function Progress(){return <div className="skills-groups">{groups.map(group=><div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></div>)}</div>}