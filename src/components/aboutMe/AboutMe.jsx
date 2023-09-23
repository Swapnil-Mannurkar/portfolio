import React, { useState, useRef, useEffect } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const reff = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    let refer = ref.current;

    if (refer && !hasAnimated) {
      observer.observe(refer);
    }
    if (refer && !hasAnimated) {
      observer.observe(refer);
    }

    return () => {
      if (refer) {
        observer.unobserve(refer);
      }
      if (refer) {
        observer.unobserve(refer);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      setHasAnimated(true);
    }
  }, [isVisible]);

  return (
    <div className="AMContainer" id="about-me-section">
      <div
        className={`AMImgCont ${isVisible ? "fade-in" : ""}`}
        ref={ref}
      ></div>
      <div className={`AMInfoCont ${isVisible ? "slide-left" : ""}`} ref={reff}>
        <h1>ABOUT</h1>
        <h2>Frontend Web Developer</h2>
        <div className="AMInfoContent">
          <p>
            I'm a passionate developer who loves programming and I'm intrested
            in full stack web development and software development. I have
            experience working with React.js, Redux, Context API, Next.js,
            Javascript, CSS, HTML, MySQL, Python.
          </p>
          <p>
            I have worked as a frontend developer for{" "}
            <a
              href="https://www.tokskill.com"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "lightblue" }}
            >
              TokSkill
            </a>{" "}
            and as a freelancer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
