import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function FirstSection() {
  const lines = [
    "Hello, I'm Rehab!",
    "I'm a front-end developer",
    "I design and develop web applications",
  ];

  const typingSpeed = 100; 
  const lineDelay = 500; 

  const [typedLines, setTypedLines] = useState(["", "", ""]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          setTypedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] = lines[lineIndex].slice(0, charIndex + 1);
            return newLines;
          });
          charIndex++;
          setTimeout(typeLine, typingSpeed);
        } else {
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, lineDelay);
        }
      }
    }

    typeLine();
  }, []);

  const imageVariants = {
    initial: { x: 0 },
    animate: { x: [0, 20, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
  };

  return (
    <div className="container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center text-center">
      <div className="col-12 col-md-7 code-font">
        <h1 className="fw-bold">
          <span className="text-lightt">01</span> <span>{"<"}</span>
          <span className="main-color">{typedLines[0]}</span>
          <span>{">"}</span>
        </h1>
        <h2 className="fw-semibold">
          <span className="text-lightt">02</span> <span>{"<"}</span>
          {typedLines[1]}
          <span>{">"}</span>
        </h2>
        <h2 className="fw-semibold">
          <span className="text-lightt">03</span> <span>{"<"}</span>
          {typedLines[2]}
          <span>{">"}</span>
        </h2>
        <div className="mt-5 about-me">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} 
          whileHover={{ scale: 1.1, textShadow: "0px 0px 15px rgba(255,255,255,0.8)" }} 
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="main-color h4 text-decoration-none"
          >
            About me {" >"}
          </Link>
        </motion.div>
      </div>
      </div>
      <div className="col-12 col-md-5 d-flex justify-content-center">
        <div className="comp-img">
          <motion.img src="./images/comp.png" alt="computer" className="w-100" variants={imageVariants} initial="initial" animate="animate" />
        </div>
      </div>
    </div>
  );
}
