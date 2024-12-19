import React from "react";
import styles from "./Project.module.css";

const ProjectCard = ({ title, description, image, link }) => {
   return (
      <div className={styles.projectCard}>
         <a href={link} target="_blank" style={{ background: "transparent" }}>
            <img src={image} alt={title} className={styles.projectImage} />
         </a>
         <h2 className={styles.projectTitle}>{title}</h2>
         <p className={styles.projectDescription}>{description}</p>
      </div>
   );
};

export default ProjectCard;
