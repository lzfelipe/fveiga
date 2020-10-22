import React from 'react'
import { Container, Row, Col, ScreenClassProvider } from 'react-grid-system';


import Navbar from "../components/navBar";
import Footer from "../components/footer";
import InconscienteThumb from "../assets/projects-thumb/inconsciente.png";
import { motion } from "framer-motion";

import "../styles/css/projects.css";
import { Link } from "react-router-dom";

function Index2() {
  return (
    <ScreenClassProvider>
      <>
        <div style={{ width: "100%", position: "relative", top: 0 }}>
          <Navbar />
        </div>

        <>
          
            <div style={{ height: "100vh", paddingTop: 20 }}>
              <Container className="projecs-title-wrapper">
                <h1 className="projects-title" style={{ marginBottom: 20 }}>
                  My latest projects<span>.</span>
                </h1>
              </Container>
              <motion.div
                animate={{ x: "0vh", opacity: 1 }}
                initial={{ x: "-30vw", opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Container fluid>
                  <ul style={{listStyle: 'none'}} className="projects-list">
                  <Container debug fluid style={{height: 'fit-content'}}>
                  <Row align='center' justify='center'>
                  <Col sm={12} lg={4} md={12}>
                    <Link>
                      <li>
                        <img
                          alt={`Thumbnail`}
                          src={InconscienteThumb}
                        />
                      </li>
                    </Link>
                    </Col>
                    <Col sm={12} lg={4} md={12}>
                    <Link>
                      <li>
                        <img
                          alt={`Thumbnail`}
                          src={InconscienteThumb}
                        />
                      </li>
                    </Link>
                    </Col>
                    <Col sm={12} lg={4} md={12}>
                    <Link>
                      <li>
                        <img
                          alt={`Thumbnail`}
                          src={InconscienteThumb}
                        />
                      </li>
                    </Link>
                    </Col>
                    </Row>
                    <Row align="center" justify='center'>
                    <Col sm={12} lg={4} md={12}>
                    <Link>
                      <li>
                        <img
                          alt={`Thumbnail`}
                          src={InconscienteThumb}
                        />
                      </li>
                    </Link>
                    </Col>
                    <Col sm={12} lg={4} md={12}>
                    <Link>
                      <li>
                        <img
                          alt={`Thumbnail`}
                          src={InconscienteThumb}
                        />
                      </li>
                    </Link>
                    </Col>
                    <Col sm={12} lg={4} md={12}>
                    <Link>
                      <li>
                        <img
                          alt={`Thumbnail`}
                          src={InconscienteThumb}
                        />
                      </li>
                    </Link>
                    </Col>
                    </Row>
                    </Container>
                  </ul>
                  </Container>
                  </motion.div>
                  <Container style={{width: '100vw', padding: 0, bottom: 0}} fluid>
                    <Footer />
                  </Container>

                  
              
            </div>
          
        </>
        
        
      </>
    </ScreenClassProvider>
  )
}


export default Index2