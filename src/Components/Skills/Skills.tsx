import { motion } from "framer-motion";

export default function Skills() {
  const skillIcons = [
    { name: "HTML", icon: "fa-html5" },
    { name: "CSS", icon: "fa-css3-alt" },
    { name: "JavaScript", icon: "fa-js" },
    { name: "Bootstrap", icon: "fa-bootstrap" },
    { name: "Tailwind", icon: "fa-css3-alt" },
    { name: "React", icon: "fa-react" },
    { name: "TypeScript", icon: "fa-js" },
    { name: "Next" , src : "/images/nextjs.png"},
    { name : "Pusher" , src : "/images/pusher.svg"},
    { name: "Angular", icon: "fa-angular" },
    { name: "Git", icon: "fa-git-alt" },
    {name : "IQVIA" , src : "/images/iqvia.png"}
  ];

  return (
    <div className="container border-bottom mb-5">
      <motion.p
        className="h1 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }} 
      >
        Skills
      </motion.p>

      <motion.div
        className="text-center w-100 d-flex flex-column align-items-center justify-content-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="w-50">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="w-50">
          I have experience working with HTML, CSS, React, JavaScript,
          TypeScript, and modern front-end tools to build fast and responsive web
          applications...
        </p>
      </motion.div>

      <div className="icons mb-5">
        <motion.div
          className="d-flex flex-wrap justify-content-center align-items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {skillIcons.map((skill) => (
            <motion.div
              key={skill.name}
              className="text-center m-3"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill?.src ? (
                <img src={skill.src} alt={skill.name} className="custom-icon h-[500px]" style={{maxHeight : "320px" , maxWidth : "160px"}} />
              ) : (
              <i className={`fa-brands ${skill.icon} custom-icon`}></i> 
              )}
              <p className="mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
