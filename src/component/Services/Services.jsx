import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Services.module.css'
import Lottie from 'lottie-react';
import CustomWeb from '../../animations/WebDesign.json';
import SEO from '../../animations/website-design.json';
import Ecom from '../../animations/Ecom.json';
import Business from '../../animations/Business success.json';

const services = [
   {
      id: 1,
      title: "UI Friendly and Modern",
      description: "We design intuitive and modern interfaces to enhance user experience.",
      animation: SEO,
   },
   {
      id: 2,
      title: "Custom Web Development",
      description: "Tailored websites built to meet your unique business needs.",
      animation: CustomWeb,
   },
   {
      id: 3,
      title: "E-Commerce Solutions",
      description: "End-to-end solutions to help you launch and grow your online store.",
      animation: Ecom,
   },
   {
      id: 4,
      title: "SEO Optimization",
      description: "Boost your online visibility with our expert SEO strategies.",
      animation: Business,
   },
];


export function Services() {
   const [selectedService, setSelectedService] = useState(services[0]);
   const [hasAnimated, setHasAnimated] = useState(false); // Track title animation
   const serviceRefs = useRef([]); // Ref for all service boxes
   const serviceDetailsRef = useRef(null);
   const ServiceTitleRef = useRef(null);


   useEffect(() => {
      // Title animation only once
      if (!hasAnimated && ServiceTitleRef.current) {
         gsap.fromTo(
            ServiceTitleRef.current,
            { opacity: 0, y: 50 },
            {
               opacity: 1,
               y: 0,
               duration: 1.2,
               ease: "power3.out",
               onComplete: () => setHasAnimated(true), // Set the state to prevent re-running the animation
            }
         );
         gsap.fromTo(
            serviceDetailsRef.current,
            { opacity: 0, y: 150 },
            {
               opacity: 1,
               y: 0,
               duration: 1.2,
               ease: "power3.out",
            }
         )
         if (serviceRefs.current.length) {
            gsap.utils.toArray(serviceRefs.current).forEach((serviceRef, index) => {
               if (serviceRef) {
                  gsap.fromTo(
                     serviceRef,
                     {
                        opacity: 0,
                        y: 50, // Start from below
                     },
                     {
                        opacity: 1,
                        y: 0, 
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.2, 
                        scrollTrigger: {
                           trigger: serviceRef,
                           start: "top 80%", // Start animation when 80% into viewport
                           toggleActions: "play none none none", // Play only once
                        },
                     }
                  );
               }
            });
         }
      }

      // Trigger content fade-in animation on service change
      if (serviceDetailsRef.current) {
         gsap.fromTo(
            serviceDetailsRef.current,
            { opacity: 0, scale: 0.5, transformOrigin: "center", filter: "blur(5px)" },
            {
               opacity: 1,
               scale: 1,
               duration: 1.5,
               filter: "blur(0px)",
               ease: "power3.out",
            }
         );
      }

   }, [selectedService, hasAnimated]); 

   return (
      <div className={styles.service} id="service">
         <h1 className={styles.serviceTitle} ref={ServiceTitleRef}>What We Offer?</h1>
         <div className={styles.service_main} >
            <div className={styles.service_left} >
               {services.map((service, index) => (
                  <div
                     key={service.id}
                     ref={(el) => (serviceRefs.current[index] = el)}
                     className={`${styles.service_box} ${selectedService.id === service.id ? styles.active : ''}`}
                     onClick={() => setSelectedService(service)}
                  >
                     <h1 className={styles.title}>{service.title}</h1>
                     <img src="/right.png" alt="show" className={styles.rightIcon} />
                     <img src="/right.gif" alt="showGIF" className={styles.rightIconAnim} />
                  </div>
               ))}
            </div>

            <div className={styles.service_right} ref={serviceDetailsRef}>
               <h2 className={styles.heading}>{selectedService.title}</h2>
               <Lottie animationData={selectedService.animation} className={styles.lottieAnim} style={{ }} />
               <p className={styles.brief}>{selectedService.description}</p>
            </div>
         </div>
      </div>
   );
}
