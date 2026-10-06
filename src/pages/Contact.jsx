import React from 'react';
import Navbar from '../components/navBar'
import Footer from '../components/footer';

import { motion } from "framer-motion"
import '../styles/css/contact.css'

import { MainButton } from "../styles/title";


function Contact() {
    return (
        <>
        <div style={{width: '100%', position: "relative", top: 0}}>
        <Navbar />
        </div>


        <motion.div  animate={{x: '0vh', opacity: 1}} initial={{x: '-30vw', opacity: 0}} transition={{duration: 1, ease: 'easeOut'}}>


        <div className="contact-page">

            <div className="contact-main-wrapper">

                <div className="contact-title-wrapper">
                    <h1 className="contact-title" style={{ marginBottom: 20 }}>
                    How can I  be <br/> useful to you<span>?</span>
                    </h1>
                </div>

                <section className="form-wrapper">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" autoComplete="name" maxLength={80}/>

                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" autoComplete="email" maxLength={100} />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" maxLength={500}></textarea>

                        <div className="form-actions">
                        <MainButton>send</MainButton>
                        </div>
                    </form>
                </section>

            </div>




        </div>
        </motion.div >

        <div style={{width: '100%', position: "relative", bottom: 0}} className="contact-footer">
            <Footer />
        </div> 


        

       

        </>
     
    )
}

export default Contact
