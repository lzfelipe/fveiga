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


        <motion.div  animate={{x: '0vh', opacity: 1}} initial={{x: '-30vw', opacity: 0}} transition={{duration: 1}}>


        <div style={{height: '100vh'}}>

            <div className="contact-main-wrapper">

                <div className="contact-title-wrapper">
                    <h1 className="contact-title" style={{ marginBottom: 20 }}>
                    How can I  be <br/> useful to you<span>?</span>
                    </h1>
                </div>

                <section className="form-wrapper">
                    <form>
                        <label htmlFor="name" style={{color: "#fff"}}>Name</label>
                        <input name="name" maxLength={80}/>

                        <label htmlFor="email" style={{color: "#fff"}}>Email</label>
                        <input name="email" type="email"  maxLength={100} />

                        <label htmlFor="message" style={{color: "#fff"}}>Message</label>
                        <textarea name="message" maxLength={500}></textarea>

                        <div style={{width: '20%', marginTop: 20}}>
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
