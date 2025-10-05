import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="container d-flex flex-column flex-md-row align-items-center pt-5 border-bottom mb-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Text Animation */}
      <motion.div
        className="w-100 text-center text-md-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="fw-bold fs-6-1 main-color">Rehab Sabry</h2>

        <div className="d-flex justify-content-md-start flex-column w-100">
          <div>
            <p className="mb-4">
              A passionate Front-End Developer with a focus on creating modern,
              user-friendly web applications. I specialize in building seamless
              user experiences using React, Next.js, and other cutting-edge
              technologies. My journey in development is centered around
              creating intuitive, responsive interfaces while writing clean and
              efficient code.
            </p>
          </div>
          <div>
            <hr />
            <h3 className="fw-bold mb-4 main-color">Experience</h3>
            <div className="d-flex gap-5">
              <div className="">
                <h4 className="fw-semibold ">
                  Seven Square Company
                  <br />
                </h4>
                <h5>(August 2024 - April 2025)</h5>
                <p className="my-4">
                  At Seven Square, I develop scalable SaaS applications using
                  React, TypeScript, and Tailwind CSS. I collaborate on state
                  management, API integrations, and focus on performance
                  optimization and design best practices.
                </p>
              </div>
              <div>
                <h4 className="fw-semibold">
                  Blueholding Company
                  <br />
                </h4>
                <h5> (April 2025 - Present)</h5>
                <p className="my-4">
                  At Blueholding, I build dynamic applications with Next.js,
                  including live streams and Pusher.js chat integrations. I also
                  handle SCORM packages and Genially modules, while using tools
                  like IQVIA and Veeva to support healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        className="w-100 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src="./images/my-img.png"
          alt="Personal Image"
          className="w-100 rounded-5"
        />
        <div className="w-10 h-10 img-bg z-10"></div>
      </motion.div>
    </motion.div>
  );
}
