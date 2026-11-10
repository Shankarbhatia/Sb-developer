import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Progress from "./Components/Progress";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
export default function App(){return <main className="portfolio-shell"><Hero/><About/><Experience/><section className="section-wrap skills-section" id="skills"><div className="section-kicker"><span>03</span> WHAT I WORK WITH</div><div className="section-heading-row"><h2>Tools for thoughtful <em>digital work.</em></h2><p>A practical mix of design, frontend and website-building tools.</p></div><Progress/></section><Skills/><ContactSection/><Footer/></main>}