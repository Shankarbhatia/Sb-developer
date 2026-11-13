import React from "react";

const roles = [
  {
    company: "Webastral Infosystem, Mohali, Punjab",
    period: "NOV 2025 – PRESENT",
    role: "Frontend Developer & Designer",
    detail:
      "Developing, customizing and maintaining responsive websites using WordPress, Shopify, Webflow and frontend technologies. Working with page builders, custom CSS and JavaScript to improve layouts, functionality and user experience. Converting design references and Figma files into polished, responsive web pages.",
  },
  {
    company: "CSS House, Mohali, Punjab",
    period: "AUG 2023 – AUG 2025",
    role: "Frontend Developer & Designer",
    detail:
      "Designed and developed responsive websites using WordPress, Webflow, Divi, ClickFunnels, HTML, CSS, JavaScript and React.js. Created landing pages, sales funnels and checkout pages, and converted Figma designs into responsive websites with custom styling and animations. Worked with clients to refine layouts, improve usability and deliver functional websites.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-wrap">
        <div className="section-kicker"><span>02</span> EXPERIENCE</div>
        <h2>Where I’ve <em>grown.</em></h2>
        <div className="experience-list">
          {roles.map((item) => (
            <article className="experience-item" key={item.company}>
              <div>
                <div className="company">{item.company}</div>
                <div className="experience-period">{item.period}</div>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
