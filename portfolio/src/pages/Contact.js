import React from 'react';
import ExternalLinks from '../Components/ExternalLinks';

import '../style/Contact.css';

const Contact = ()=> {
    return (
        <div id='contact'>
            <header id='contactHeader'>
                <h3>Interested in chatting? Contact me via the form, download my resume with the button below, shoot me an email, or reach me on LinkedIn or Github.</h3>
                <ExternalLinks />
            </header>
            <div id='contactFormContainer'>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact"></form>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input className='contactInput' type="email" name="email" placeholder='Your email:' />
            <input className='contactInput' type="text" name="name" placeholder='Your name:' />
            <textarea className='contactInput' type="text" name="message" rows={5} placeholder='How can I help you?' />
            <button id='contactButton' type="submit">Send</button>
            </div>
        </div>
    )
}

export default Contact;