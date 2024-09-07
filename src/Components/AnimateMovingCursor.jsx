import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimateMovingCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
const testiSection = document.querySelector('.testiVideo');
    window.addEventListener('mousemove', (e) => {

        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out',
          });
    });

    testiSection.addEventListener('mouseenter', (e) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            opacity:0,
        })
    })
    testiSection.addEventListener('mouseleave', (e) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            opacity:1,
        })
    })



  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default AnimateMovingCursor;
