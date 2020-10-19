/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import Navbar from "../components/navBar";
import Footer from "../components/footer";
import InconscienteThumb from "../assets/projects-thumb/inconsciente.png";
import { motion } from "framer-motion";

import "../styles/css/projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div style={{ width: "100%", position: "relative", top: 0 }}>
        <Navbar />
      </div>

      <>
        <motion.div
          animate={{ x: "0vh", opacity: 1 }}
          initial={{ x: "-30vw", opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ height: "100vh" }}>
            <div className="projecs-title-wrapper">
              <h1 className="projects-title" style={{ marginBottom: 20 }}>
                My latest projects<span>.</span>
              </h1>
            </div>

            <div>
              <section className="projects-wrapper">
                <ul className="projects-list">
                  <Link style={{ justifySelf: "center" }}>
                    <li className="projects-item">
                      <img
                        alt={`Thumbnail`}
                        src={InconscienteThumb}
                        className="project-thumbnail"
                      />
                    </li>
                  </Link>
                  <Link style={{ justifySelf: "center" }}>
                    <li className="projects-item">
                      <img
                        alt={`Thumbnail`}
                        src={InconscienteThumb}
                        className="project-thumbnail"
                      />
                    </li>
                  </Link>
                  <Link style={{ justifySelf: "center" }}>
                    <li className="projects-item">
                      <img
                        alt={`Thumbnail`}
                        src={InconscienteThumb}
                        className="project-thumbnail"
                      />
                    </li>
                  </Link>
                  <Link style={{ justifySelf: "center" }}>
                    <li className="projects-item">
                      <img
                        alt={`Thumbnail`}
                        src={InconscienteThumb}
                        className="project-thumbnail"
                      />
                    </li>
                  </Link>
                  <Link style={{ justifySelf: "center" }}>
                    <li className="projects-item">
                      <img
                        alt={`Thumbnail`}
                        src={InconscienteThumb}
                        className="project-thumbnail"
                      />
                    </li>
                  </Link>
                  <Link style={{ justifySelf: "center" }}>
                    <li className="projects-item">
                      <img
                        alt={`Thumbnail`}
                        src={InconscienteThumb}
                        className="project-thumbnail"
                      />
                    </li>
                  </Link>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </>

      <div style={{ width: "100%", position: "relative", bottom: 0 }}>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
