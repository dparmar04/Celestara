import React, { useEffect, useRef } from 'react'
import styles from './Contact.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
   const contactContainer = useRef(null);
   const contactHeading = useRef(null);
   const contactSubheading = useRef(null);
   const getReady = useRef(null);
   const socialLinks = useRef(null);
   const headingRef = useRef(null);
   const copyright = useRef(null);

   useEffect(() => {
      // Split the text into individual characters and wrap each in a span
      const headingText = headingRef.current.textContent;
      const splittedText = headingText.split("");
      headingRef.current.innerHTML = ""; // Clear the original text

      // Wrap each character in a span
      splittedText.forEach((elem) => {
         const span = document.createElement("span");
         span.textContent = elem;
         span.classList.add(styles.letter); // Add CSS module class to each span
         headingRef.current.appendChild(span);
      });




      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: contactContainer.current,
            start: "top 60%", // Animation starts when 60% into the viewport
            toggleActions: "play none none none", // Play only once
         },
      });

      tl.fromTo(
         contactHeading.current,
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
         .fromTo(
            contactSubheading.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4" // Overlap animation by 0.4 seconds
         )
         .fromTo(
            getReady.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.3" // Overlap animation by 0.3 seconds
         )
         .fromTo(
            socialLinks.current.children,
            { opacity: 0, x: 50 },
            {
               opacity: 1,
               x: 0,
               duration: 0.6,
               ease: "power3.out",
               stagger: 0.2, // Stagger each child
            },
            "-=0.3" // Overlap animation with the previous one
         )
         .fromTo(
            headingRef.current.querySelectorAll(`.${styles.letter}`),
            {opacity:0, y: -500 },
            {
               opacity:1,
               y: 0,
               delay: 0.5,
               stagger: 0.12,
               ease: "power3.out",
               // stagger: {
               //    amount: 1, // Total animation time for all letters
               //    from: "start", // Stagger from the start
               //    each: 0.1, // Time between each letter animation
               // },
            }
         )
         .fromTo(
            copyright.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Delay for after the heading animation
         );
   }, []);

   return (
      <div ref={contactContainer} className={styles.contactContainer} id="contact">
         <div className={styles.contactDetails}>
            <h1 className={styles.contactHeading} ref={contactHeading}>Get In Touch</h1>
            <p className={styles.contactSubheading} ref={contactSubheading}>Have questions or need assistance?
               Our team is here to help.</p>
            <div className={styles.connect}>
               <img ref={getReady} className={styles.getReady} src="/rocket1.webp" alt="" />
               <div className={styles.socialLinks} ref={socialLinks}>
                  <p>Email:-
                     <a href="mailto:dronix.dev@gmail.com">connect@celestara.com</a>
                  </p>
                  <p>Contact:- +419 564-855</p>
               </div>
            </div>
         </div>
         <div className={styles.outro}>
            <h1 className={styles.heading} ref={headingRef}>Celestara</h1>
            <p className={styles.copyright} ref={copyright}>&copy; {new Date().getFullYear()} All rights reserved</p>
         </div>
      </div>
   )
}

export default Contact