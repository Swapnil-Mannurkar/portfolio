import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData.json";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

    let reference = ref.current;

    if (reference && !hasAnimated) {
      observer.observe(reference);
    }

    return () => {
      if (reference) {
        observer.unobserve(reference);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      setHasAnimated(true);
    }
  }, [isVisible]);

  return (
    <div className="ProCont" id="project-section">
      <h1 className="ExpHeader">PROJECTS</h1>
      <div className={`ProContent ${isVisible ? "fade-in" : ""}`} ref={ref}>
        {ProjectData.map((pro, index) => (
          <ProjectCard
            key={index}
            title={pro.title}
            desc={pro.desc}
            link={pro.link}
          />
        ))}
        <div className="moreProject">
          for more projects please&nbsp;
          <a
            href="https://github.com/Swapnil-Mannurkar?tab=repositories"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "lightblue" }}
          >
            click here...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
