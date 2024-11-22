import React, { useRef } from 'react';
import "../contact/contact.css";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        try {
            const response = await fetch("https://getform.io/f/bxoozkya", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                },
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Thank you!',
                    text: 'Your message has been sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                });
                formRef.current.reset();
            } else {
                throw new Error('Failed to send the message.');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }
    };

    const handleRateUs = () => {
        navigate("/multiform"); // Redirect to multi-step form
    };

    return (
        <section className='contact'>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h2>Contact Me</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className='field'
                        name="full-name"
                        placeholder='Enter Your Full Name..'
                        required
                    />
                </div>
                <div className="input-box">
                    <label>Email</label>
                    <input
                        type="email"
                        className='field'
                        name="email"
                        placeholder='Enter Your Email..'
                        required
                    />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea
                        className="field-mess"
                        name="message"
                        placeholder='Enter Your Message'
                        required
                    ></textarea>
                </div>
                <button className='btn' type='submit'>Send Message</button>
            </form>
            <button className="btn rate-us-btn" onClick={handleRateUs}>Rate Us</button>
        </section>
    );
}
