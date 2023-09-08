import React from "react";
import "./HeroSection.css";
import myImage from "../../images/Swapnil.png";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const words = ["Frontend Developer", "MySQL", "Python", "C/C++"];

  const textRef = useRef();
  const typingSpeed = 50;
  const waitTime = 2000;
  const erasingSpeed = 50;

  const writeText = async (word) => {
    for (let i = 0; i <= word.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, typingSpeed));
      textRef.current.textContent = word.substring(0, i);
    }
  };

  const eraseText = async (word) => {
    for (let i = word.length; i >= 0; i--) {
      await new Promise((resolve) => setTimeout(resolve, erasingSpeed));
      textRef.current.textContent = word.substring(0, i);
    }
  };

  const changeText = async () => {
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

      await writeText(currentWord);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      await eraseText(currentWord);
    }
    changeText();
  };

  useEffect(() => {
    changeText();
    return () => {
      clearTimeout();
    };
  });

  return (
    <div className="HScontainer">
      <div className="HSPhoto">
        <img src={myImage} alt="Swapnil Mannurkar"></img>
      </div>
      <p className="HSName">
        <span>Hi, I'm Swapnil Mannurkar</span>👋
      </p>
      <div className="HSIntro">
        Cyberjunkie |&nbsp;<p ref={textRef}></p>
      </div>
      <div className="HSButton">
        <button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1Ct1ZngaH523RN9ftK3ZFBLD6WW588pMr/view?usp=sharing"
          >
            Download CV ↗
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
