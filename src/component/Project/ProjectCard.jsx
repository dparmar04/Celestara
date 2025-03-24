import styles from "./Project.module.css";
import PropTypes from "prop-types";

const ProjectCard = ({ title, image, link }) => {
   return (
      <div className={styles.projectCard}>
         <a href={link} target="_blank" style={{ background: "transparent" }}>
            <img src={image} alt={title} className={styles.projectImage} />
         </a>
         <h2 className={styles.projectTitle}>{title}</h2>
      </div>
   );
};

ProjectCard.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
};

export default ProjectCard;
