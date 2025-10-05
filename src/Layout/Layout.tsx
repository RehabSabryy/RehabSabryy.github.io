import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { motion, useScroll } from "framer-motion"

export default function Layout() {
    const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
    style={{
      scaleX: scrollYProgress,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 6,
      transformOrigin: "left",
      backgroundColor: "#dd2efc",
      zIndex: 9999,
    }}
  />
  <Navbar />
  <Outlet />
  <Footer />
</>
  )
}
