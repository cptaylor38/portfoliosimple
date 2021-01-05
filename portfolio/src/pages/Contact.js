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
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="">
                <label htmlFor='email'>Email:</label>
                <input className='contactInput' type="email" name="email" placeholder='Jsmith@gmail.com:' />
                <label htmlFor='name'>Name:</label>
                <input className='contactInput' type="text" name="name" placeholder='John Smith' />
                <label htmlFor='message'>Message:</label>
                <textarea className='contactInput' type="text" name="message" rows="5" placeholder="I'd like to reach out about..." />
                <input type="hidden" name="form-name" value="contact" />
                <button id='contactButton'>Send</button>
            </form>
            </div>
        </div>
    )
}

export default Contact;