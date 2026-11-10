import React from "react";

export default function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="section-kicker">
        <span>01</span> ABOUT ME
      </div>
      <div className="about-grid">
        <h2>Good design deserves <em>great development.</em></h2>
        <div className="about-copy">
          <p>
            I’m Shankar, a frontend designer and developer from Mohali. I enjoy
            turning Figma designs and ideas into clean, responsive websites
            that feel simple to use and look polished on every screen.
          </p>
          <p>
            My work spans custom frontend development, WordPress, Webflow and
            ecommerce platforms. I also build landing pages and bring
            interfaces to life with thoughtful interactions and animation.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/shankar-bhatia-linkedprofile"
            target="_blank"
            rel="noreferrer"
          >
            More about my work ↗
          </a>
        </div>
      </div>
      <div className="about-stats">
        <div>
          <strong>Frontend</strong>
          <span>Responsive interfaces</span>
        </div>
        <div>
          <strong>CMS &amp; Ecommerce</strong>
          <span>Flexible website builds</span>
        </div>
        <div>
          <strong>Design to Code</strong>
          <span>Figma / PSD conversion</span>
        </div>
      </div>
    </section>
  );
}
