import React, { useState, useRef } from 'react'
import "./Contact.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

import pic from "../assets/hero3.png";
import Heading from './Heading';
import Hr from "./Hr";
import { fadeIn } from '../variants.js'
import sound from '../assets/notification.mp3';



export default function Contact() {

    const form = useRef(null);
    const notification = new Audio(sound);
    const toastOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleValidation = () => {
        const { name, email, message } = formData;
        if (name.length === 0 && email.length === 0 && message.length === 0) {
            toast.warn('Error : Please fill form!!', { ...toastOptions, theme: "dark" });
            return false;
        }
        if (name.length === 0) {
            toast.error('Error : Name Not Found!!', { ...toastOptions, theme: "dark" });
            return false;
        }
        if (email.length === 0) {
            toast.error('Error : Email Not Found!!', { ...toastOptions, theme: "dark" });
            return false;
        }
        if (!email.includes("@")) {
            toast.error('Error : Email Not Valid!!', { ...toastOptions, theme: "dark" });
            return false;
        }
        if (message.length === 0) {
            toast.error('Error : Message Not Found!!', { ...toastOptions, theme: "dark" });
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {           
            emailjs.sendForm('service_wyvv3gc', 'template_5wvtuzb', form.current, 'iRC4ezYsSO_tSye27')
                .then((result) => {
                    notification.play();
                    toast('🦄 Message sent successfully!!', { ...toastOptions, theme: "light" });
                    setFormData({
                        name : "",
                        email : "",
                        message : ""
                    })
                }, (error) => {
                    toast.error(error.text, {...toastOptions, theme : "dark"});
                });
        }

    }
    return (
        <>
            <ToastContainer />
            <div id="contact">
                <Heading className="heading" title="Contact Me" subTitle="Let's Meet" />
                <div className="container">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        className="banner">
                        <img src={pic} alt="" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        className="content">
                        <h1>Message Me</h1>
                        <Hr />
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="row-1">
                                <div className="name">
                                    <label htmlFor="Name">Name : </label>
                                    <input id="Name" type="text" placeholder='Enter your name' autoComplete='off' onChange={handleChange} value={formData.name} name="name" />
                                </div>
                                <div className="email">
                                    <label htmlFor="email" >Email : </label>
                                    <input id="email" type="text" placeholder='Enter your email' autoComplete='off' onChange={handleChange} value={formData.email} name="email" />
                                </div>
                            </div>
                            <label htmlFor="message">Message : </label>
                            <textarea id="message" placeholder='Enter your message' autoComplete='off' onChange={handleChange} value={formData.message} name="message" />
                            <div className="btn-container">
                                <input type="submit" className='submit' value="SUBMIT" />
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

        </>
    )
}
