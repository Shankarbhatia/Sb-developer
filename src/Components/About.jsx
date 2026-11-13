import React from "react";

export default function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="section-kicker">
        <span>01</span> ABOUT ME
      </div>
      <div className="about-grid">
        <h2>3 years of building <em>digital experiences.</em></h2>
        <div className="about-copy">
          <p>
            I’m Shankar, a frontend designer and developer from Mohali with
            3 years of experience creating responsive websites, landing pages
            and user-friendly digital experiences.
          </p>
          <p>
            My work spans frontend development, WordPress, Webflow, Shopify
            and other website platforms. I enjoy turning Figma designs and
            ideas into polished websites, with thoughtful interactions and
            attention to detail.
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
