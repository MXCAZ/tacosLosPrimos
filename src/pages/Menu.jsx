import "./pages.css";

import menu from "./images/menu.png";
import logo from "./images/taqueria.jpeg";
import video from "./images/tacosvideo.mp4";

import { motion } from "framer-motion";

export default function Menu() {
  return (
    <>
      <section>
        <div className="container">
          <div className="content">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="background-clip">
              {" "}
            </video>

            <div className="backgroundText">
              <h2 style={{ color: "#000", fontSize: "30px" }}>
                Authentic Mexican Food
              </h2>
              <br />

              <img src={logo} alt="logo" className="logo" />
              <a href="/">Home Page</a>

              <br />
            </div>
          </div>
          <div className="spikes"></div>
        </div>{" "}
      </section>
      <div className="menuContainer">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="menuImgContainer">
          <img src={menu} alt="Menu" className="menu" />
        </motion.div>
      </div>
    </>
  );
}
