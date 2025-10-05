import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="container d-flex flex-column py-5 border-bottom mb-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="w-100 text-center text-md-start mb-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="d-flex justify-content-md-start flex-wrap w-100 gap-5">
          <motion.div
            className="detailed-work-section shadow-lg rounded-3 d-flex flex-column justify-content-evenly align-items-center"
            whileHover={{
              rotateY: 360, // Flip the entire div
              scale: 1.1, // Optional scaling effect
              transition: { duration: 0.5 },
            }}
            style={{
              perspective: "1000px", 
            }}
          >
            <div className="detailed-work-triangle"></div>
            <img src="/images/front-design.png" className="detailed-work-icon z-5" />
            <h2 className="fw-bold fs-6-1 secondary-color detailed-work-text">Front-end Design</h2>
          </motion.div>

          {/* Hover Animation for Back-end Integration */}
          <motion.div
            className="detailed-work-section shadow-lg rounded-3 d-flex flex-column justify-content-evenly align-items-center"
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <img src="/images/integration.png" className="detailed-work-icon" />
            <h2 className="fw-bold fs-6-1 secondary-color detailed-work-text">Back-end Integration</h2>
          </motion.div>

          {/* Hover Animation for Live Streaming */}
          <motion.div
            className="detailed-work-section shadow-lg rounded-3 d-flex flex-column justify-content-evenly align-items-center"
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <img src="/images/live.png" className="detailed-work-icon" />
            <h2 className="fw-bold fs-6-1 secondary-color detailed-work-text">Live Streaming</h2>
          </motion.div>

          {/* Hover Animation for Realtime Chat */}
          <motion.div
            className="detailed-work-section shadow-lg rounded-3 d-flex flex-column justify-content-evenly align-items-center"
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <img src="/images/chat.png" className="detailed-work-icon" />
            <h2 className="fw-bold fs-6-1 secondary-color detailed-work-text">Realtime Chat</h2>
          </motion.div>

          {/* Hover Animation for Email Campaigns */}
          <motion.div
            className="detailed-work-section shadow-lg rounded-3 d-flex flex-column justify-content-evenly align-items-center"
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <img src="/images/email.png" className="detailed-work-icon" />
            <h2 className="fw-bold fs-6-1 secondary-color detailed-work-text">Email Campaigns</h2>
          </motion.div>

          {/* Hover Animation for Detail Aid */}
          <motion.div
            className="detailed-work-section shadow-lg rounded-3 d-flex flex-column justify-content-evenly align-items-center"
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            style={{
              perspective: "1000px",
            }}
          >
            <img src="/images/fitness-step.png" className="detailed-work-icon" />
            <h2 className="fw-bold fs-6-1 secondary-color detailed-work-text">Detail Aid</h2>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
