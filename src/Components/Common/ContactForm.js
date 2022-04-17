import { Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g95jpy4', 'template_868nu6d', form.current, 'pYBmMY9-bsl22t9xH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (

        <form ref={form} onSubmit={sendEmail} className=' mx-auto'>
            <div className='my-3'>
                <label className='d-block text-start'>নাম</label>
                <input className='input-group' type="text" name="user_name" placeholder=' আপনার নাম' />
            </div>
            <div className='my-3'><label className='d-block text-start'>ইমেইল</label>
                <input className='input-group' type="email" name="user_email" placeholder='আপনার ইমেইল' />
            </div>
            <div className='my-3'><label className='d-block text-start'>মেসেজ</label>
                <textarea className='input-group' name="message" placeholder='আপনার মেসেজটি লিখুন' />
            </div>
            <div className="text-end">
                <input type="submit" className='btn btn-primary px-4' value="সেন্ড করুন" />
            </div>
        </form>

    )
}
