import "./pages.css";

import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import logo from "./images/taqueria.jpeg";
import video from "./images/tacosvideo.mp4";
import video2 from "./images/cater.mp4";
import taco from "./images/taco.jpeg";
import tacos from "./images/tacos.jpeg";
import torta from "./images/torta.jpeg";
import burrito from "./images/burrito.jpeg";
import quesadilla from "./images/quesadilla.jpeg";

// import { useState } from "react";
import { useEffect, useRef } from "react";

export default function Home() {
  const form = useRef();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    if (!mediaQueryList.matches) {
      addAnimation();
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pb4ym8",
        "template_1dtzrjj",
        form.current,
        "UtS5wF4XdHFhXqFWX"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Message its been send",
            showConfirmButton: true,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <main>
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
                {/* <h1>Menu</h1> */}
                <br />
                <a href="/">See Our Menu</a>
                <a href="/">We Do Catering</a>
              </div>
            </div>
            <div className="spikes"></div>
          </div>{" "}
        </section>

        <motion.section
          initial={{ opacity: 0, scale: 0, x: 200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="secondContainer">
          <h2 style={{ color: "#e38f24" }}>
            <span> Opening Hours </span>
          </h2>
          <br />
          <ul style={{ marginTop: "40px" }}>
            <li>
              <i className="fa-solid fa-clock"></i> &nbsp; Monday to Saturday
              11:00AM to 7:00PM
            </li>
            <li>
              <i className="fa-solid fa-calendar-xmark"></i>&nbsp; Sunday Closed
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>&nbsp; Tel: (801) 895-5592
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>&nbsp; 653 E 12300 S,
              Draper, UT 84020
            </li>
          </ul>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="thirdContainer">
          <div>
            <div
              style={{ marginTop: "50px", marginLeft: "10%" }}
              className="taqueria">
              <p>Taqueria</p>
              <p>Los</p>
              <p>Primos</p>
            </div>
            <div
              style={{
                paddingLeft: "10%",
                paddingRight: "5%",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}>
              <p
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  fontFamily: "Sanchez, sans-serif",
                }}>
                Step into the vibrant world of Taqueria los Primos, where your
                cravings for exceptional Mexican cuisine, delightful company,
                and unforgettable moments converge. Immerse yourself in the
                fiery allure of our sizzling offerings that extend beyond just
                tantalizing your taste buds. From classic tacos and
                mouthwatering quesadillas to generously filled burritos, we
                invite you to embark on a culinary journey right in the heart of
                bustling Draper, Utah.
              </p>
              <img src={taco} alt="taco" className="taco" />
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="forthContainer">
          <h2 style={{ color: "#fff" }}> Our Best Plates</h2>
          <div className="scroller" style={{ paddingBottom: "30px" }}>
            <ul className="tag-list scroller_inner">
              <li>Tacos</li>
              <li>Burritos</li>
              <li>Quesadillas</li>
              <li>Tortas</li>
            </ul>
          </div>
          <div className="scroller" data-direction="right">
            <div className="scroller_inner">
              <img src={tacos} alt="tacos" className="scrollerImg" />
              <img src={burrito} alt="burrito" className="scrollerImg" />
              <img src={quesadilla} alt="quesadilla" className="scrollerImg" />
              <img src={torta} alt="torta" className="scrollerImg" />
            </div>
          </div>
          <div
            className="scroller"
            style={{ paddingBottom: "30px", marginTop: "30px" }}>
            <ul className="tag-list scroller_inner">
              <li>Tacos</li>
              <li>Burritos</li>
              <li>Quesadillas</li>
              <li>Tortas</li>
            </ul>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="fifthContainer">
          <div className="caterContent">
            <video
              src={video2}
              autoPlay
              loop
              muted
              playsInline
              className="caterVideo">
              {" "}
            </video>
            <div className="backgroundText">
              <img src={logo} alt="logo" className="logo" />
              <div className="line"></div>
              <h2 style={{ color: "#fff", fontSize: "60px" }}>We Cater</h2>
              <br />
              <h2 style={{ color: "#fff" }}>
                <i className="fa-solid fa-phone"></i>
                &nbsp; Tel: (801) 895-5592
              </h2>
            </div>
          </div>
        </motion.section>
        <section className="contactBox">
          <motion.h2
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            style={{ color: "#d3462e" }}>
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="contact-box">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="input-field"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
                className="input-field"
              />

              <textarea
                type="text"
                name="message"
                placeholder="Your Message"
                cols="30"
                rows="10"
                required
                className="input-field textarea"></textarea>
              <button type="submit" className="formBtn">
                Send Message
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </>
  );
}
