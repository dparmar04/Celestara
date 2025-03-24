import { useRef } from "react";
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
               title={"Helverse"}
               link={"https://helverse.netlify.app/"}
               image={"/portfolio2.png"}
            />
            <ProjectCard
               title={"Gericht"}
               link={"https://gerich-restuarant-bydhruv.netlify.app/"}
               image={"/portfolio3.png"}
            />
            <div className={styles.getStarted}>
               <h1 className={styles.makeYours}>Don&apos;t just exist online, stand out. Contact us and let’s bring your dream website to life!</h1>
               <button className={styles.letsgo}>Ready to Stand Out? Let’s Talk!</button>
            </div>
         </div>
      </div>
   );
};

export default Project;
