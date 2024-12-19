import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const containerRef = useRef(null);
   const sectionRefs = useRef([]);
   const aboutTitleRef = useRef(null); // Ref for the h1 element

   const sections = [
      {
         title: "Bringing ideas to life through innovative web solutions.",
         description: "Crafting Dreams Online",
         text: "Transforming ideas into impactful, user-friendly websites.",
         imgSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-01.png",
      },
      {
         title: "Tailored websites that inspire and engage.",
         description: "Your Vision, Our Mission",
         text: "Creating tailored websites that inspire, engage, and deliver value.",
         imgSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-02.png",
      },
      {
         title: "Crafting websites that inspire confidence and drive growth.",
         description: "Innovating for Tomorrow",
         text: "Designing innovative digital solutions to empower your online growth.",
         imgSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-03.png",
      },
   ];

   useEffect(() => {
      const sections = sectionRefs.current;

      // Initialize GSAP animation with ScrollTrigger for horizontal scroll
      gsap.to(sections, {
         xPercent: -100 * (sections.length - 1),
         ease: "none",
         scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => `+=${containerRef.current.offsetWidth * sections.length}`,
         },
      });

      // Animate the About title when it comes into view
      gsap.fromTo(
         aboutTitleRef.current,
         {
            opacity: 0,
            y: 50, // Starting from 50px below the original position
         },
         {
            opacity: 1,
            y: 0, // Moving to its normal position
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
               trigger: aboutTitleRef.current,
               start: "top 80%", // Trigger animation when the title reaches 80% of the viewport
               end: "top 40%", // End when it reaches 40%
               scrub: 2, // Tied to the scroll position
            },
         }
      );

      // Animate each section's content as it comes into view
      sections.forEach((section, i) => {
         const text = section.querySelector(`.${styles.sectionText}`);
         const image = section.querySelector(`.${styles.sectionImageContainer}`);

         // Animate the text from the left
         if (text) {
            gsap.fromTo(
               text,
               {
                  opacity: 0,
                  x: -100, // Start 100px to the left
               },
               {
                  opacity: 1,
                  x: 0, // Move to its normal position
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: section,
                     start: "top 40%",
                     end: "top 50%",
                     toggleActions: "play none none reverse",
                  },
               }
            );
         }

         // Animate the image from below
         if (image) {
            gsap.fromTo(
               image,
               {
                  opacity: 0,
                  y: 100,
               },
               {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: section,
                     start: "top 40%",
                     end: "top 50%",
                     toggleActions: "play none none reverse",
                  },
                  delay: 0.2, // Delay image animation slightly
               }
            );
         }
      });

      return () => {
         // Clean up ScrollTrigger instances on component unmount
         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
   }, []);

   return (
      <div ref={containerRef} className={styles.container}>
         <h1 ref={aboutTitleRef} className={styles.AboutTitle}>Who We Are?</h1>
         <div className={styles.sectionsContainer}>
            {sections.map((section, i) => (
               <div
                  key={i}
                  className={styles.section}
                  ref={(el) => (sectionRefs.current[i] = el)}
               >
                  <div className={styles.sectionContent}>
                     <div className={styles.sectionText}>
                        <span className={styles.sectionTitle}>{section.title}</span>
                        <h2 className={styles.sectionHeading}>{section.description}</h2>
                        <p className={styles.sectionParagraph}>{section.text}</p>
                     </div>
                     <div className={styles.sectionImageContainer}>
                        <img
                           src={section.imgSrc}
                           alt={section.title}
                           className={styles.sectionImage}
                        />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default About;
