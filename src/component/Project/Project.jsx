import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
   const containerRef = useRef(null);

   return (
      <div className={styles.ProjectContainer}>
         <div className={styles.ProjectParah}>
            <h1 className={styles.ProjectTitle}>Unveiling Digital Artistry</h1>
            <p className={styles.ProjectSubTitle}>
               Innovative Projects Built with Precision and Passion
            </p>
         </div>
         <div className={styles.projectCardsContainer} ref={containerRef}>
            <ProjectCard
               title={"HealDoc"}
               link={"https://healdoc.ai/"}
               description={"Description for project 1"}
               image={"/portfolio1.png"}
            />
            <ProjectCard
               title={"Helverse"}
               link={"https://helverse.netlify.app/"}
               description={"Description for project 1"}
               image={"/portfolio2.png"}
            />
            <div className={styles.getStarted}>
               <h1 className={styles.makeYours}>Don't just exist online, stand out. Contact us and let’s bring your dream website to life!</h1>
               <button className={styles.letsgo}>Ready to Stand Out? Let’s Talk!</button>
            </div>
            <ProjectCard
               title={"Gericht"}
               link={"https://gerich-restuarant-bydhruv.netlify.app/"}
               description={"Description for project 1"}
               image={"/portfolio3.png"}
            />
         </div>
      </div>
   );
};

export default Project;
