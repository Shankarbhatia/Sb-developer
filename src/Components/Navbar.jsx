import React, { useState } from "react";
import logo from "../assets/logo.png";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#expertise"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home">
          <img src={logo} alt="Shankar Bhatia" />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="https://api.whatsapp.com/send/?phone=9888593715&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Hire me ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
