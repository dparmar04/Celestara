import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import style from './Hero.module.css';

const words = ["Better", "Modern", "Fast", "Celestial"]; // Add your words here

const Hero = () => {
   const headingRef = useRef(null);
   const welcomeNoteRef = useRef(null);
   const flipWordRef = useRef(null);
   const [currentWord, setCurrentWord] = useState(words[0]);
   const wordRef = useRef(null);
   let wordIndex = 0;

   useEffect(() => {
      const heading = headingRef.current;
      if (!heading) return;

      // Split the text into individual characters
      const chars = heading.querySelectorAll("span");


      const timeline = gsap.timeline();

      timeline
         // Heading Animation
         .fromTo(
            chars,
            {
               opacity: 0,
               x: -20, // Start slightly offset to the left
            },
            {
               opacity: 1,
               x: 0, // Bring to original position
               duration: 0.5,
               ease: "power3.out",
               stagger: 0.04, // Adds delay for gradual animation
               delay:0.4
            }
         )
         // "We Build" Fog-Like Animation
         .fromTo(
            welcomeNoteRef.current,
            {
               opacity: 0,
               filter: "blur(10px)", // Starts blurred
            },
            {
               opacity: 1,
               filter: "blur(0px)", // Ends crisp
               duration: 1.2,
               ease: "power3.out",
            },
            "-=1" // Overlap animation
         )
         // Dynamic Word Bouncy Animation
         .fromTo(
            flipWordRef.current,
            {
               opacity: 0,
               y: 100,
               scale: 0.8,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 1,
               ease: "bounce.out",
            },
            "-=0.8"
         );
   }, []);

   useEffect(() => {
      const flipWord = () => {
         wordIndex = (wordIndex + 1) % words.length;
         setCurrentWord(words[wordIndex]);

         // GSAP animation for the flip effect
         gsap.fromTo(
            wordRef.current,
            { opacity: 0, y: 20, scale: 0.8, filter: "blur(8px)" }, // Start state
            {
               opacity: 1,
               y: 0,
               scale: 1,
               filter: "blur(0px)",
               duration: 0.6,
               ease: "power2.out",
            }
         );
      };

      // Set interval to flip words every 3 seconds
      const interval = setInterval(flipWord, 3000);

      return () => clearInterval(interval); // Cleanup interval on component unmount
   }, [words]);

   return (
      <div className={style.Hero}>
         <div className={style.blob + ' ' + style.blob1}></div>
         <div className={style.blob + ' ' + style.blob2}></div>
         <div className={style.blob + ' ' + style.blob3}></div>
         <div className={style.Heading} ref={headingRef}>
            <h1>
               {/** Wrap each character in a span for individual animation */}
               {"Welcome To Celestara".split("").map((char, i) => (
                  <span key={i} style={{ display: "inline-block" }}>
                     {char === " " ? "\u00A0" : char}
                  </span>
               ))}
            </h1>
         </div>
         <div className={style.title}>
            <h1 className={style.WelcomeNote} ref={welcomeNoteRef}>
               We Build
            </h1>
            <h1 ref={wordRef} className={style.flipWord}>
               {currentWord}
            </h1>
         </div>
      </div>
   );
};

export default Hero;
