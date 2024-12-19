import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { gsap } from "gsap";
import light from '/weather.png';
import dark from '/weather2.png';
import style from './Navbar.module.css';

const Navbar = () => {
   const { theme, toggleTheme } = useTheme();
   const navLinksRef = useRef([]);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   // useEffect(() => {
   //    // Make sure the navLinksRef array contains all links
   //    if (navLinksRef.current.length > 0) {
   //       gsap.fromTo(
   //          navLinksRef.current,
   //          { opacity: 0, y: -50 }, // Initial state
   //          {
   //             opacity: 1,
   //             y: 0,
   //             stagger: 0.2, // Stagger the links with 0.2s delay
   //             ease: "power4.out", // Smooth easing
   //             duration: 1.2, // Duration of the animation
   //             delay: 0.3
   //          }
   //       );
   //    }
   // }, []);

   return (
      <div className={`${style.navbar} ${isScrolled ? style.scrolled : ""}`}>
         <div className={style.navLogo} ref={(el) => navLinksRef.current.push(el)}> <h1 className={style.navLogo}>Celestara</h1> </div>
         <div className={style.navLinks}>
            <a href="#about" data-link="About" ref={(el) => navLinksRef.current.push(el)}><span>About</span></a>
            <a href="#service" data-link="Services" ref={(el) => navLinksRef.current.push(el)}><span>Services</span></a>
            <a href="#contact" data-link="Contact" ref={(el) => navLinksRef.current.push(el)}><span>Contact</span></a>
            <button onClick={toggleTheme} className={style.themeToggleButton}>
               {/* {theme === 'light' ? 'Dark Mode' : 'Light Mode'} */}
               <img
                  className={style.themeIcon}
                  src={theme === 'light' ? light : dark}
                  alt="" />
            </button>
         </div>
      </div>
   )
}

export default Navbar