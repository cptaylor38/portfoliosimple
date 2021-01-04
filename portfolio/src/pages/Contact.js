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
            <form method="post" data-netlify-honeypot="bot-field" data-netlify="true" name="contact" action='#contact'></form>
                <label for='email'>Email:</label>
                <input className='contactInput' type="email" name="email" placeholder='Your email:' />
                <label for='name'>Name:</label>
                <input className='contactInput' type="text" name="name" placeholder='Your name:' />
                <label for='message'>Message:</label>
                <textarea className='contactInput' type="text" name="message" rows={5} placeholder='How can I help you?' />
                <input type="hidden" name="form-name" value="contact" />
                <button id='contactButton'>Send</button>
            </div>
        </div>
    )
}

export default Contact;