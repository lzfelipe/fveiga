import React from 'react'

import Navbar from "../components/navBar";
import Footer from "../components/footer";
import InconscienteThumb from "../assets/projects-thumb/inconsciente.png";
import { motion } from "framer-motion";

import "../styles/css/projects.css";

// Placeholder thumbnails until each project gets its own card
const projects = Array.from({ length: 6 }, (_, i) => ({ id: i, thumb: InconscienteThumb, title: 'Inconsciente' }));

function Projects() {
  return (
    <>
      <div style={{ width: "100%", position: "relative", top: 0 }}>
        <Navbar />
      </div>

      <main className="projects-page">
        <div className="projecs-title-wrapper">
          <h1 className="projects-title" style={{ marginBottom: 20 }}>
            My latest projects<span>.</span>
          </h1>
        </div>
        <motion.div
          animate={{ x: "0vh", opacity: 1 }}
          initial={{ x: "-30vw", opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <ul className="projects-list">
            {projects.map(({ id, thumb, title }) => (
              <li key={id} className="project-card">
                <img alt={title} src={thumb} loading="lazy" />
              </li>
            ))}
          </ul>
        </motion.div>
      </main>

      <Footer />
    </>
  )
}


export default Projects
