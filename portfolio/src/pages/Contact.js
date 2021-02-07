import React, {useState, useEffect} from 'react';
import ExternalLinks from '../Components/ExternalLinks';
import '../style/Contact.css';

const Contact = ()=> {
    const [disabled, setDisabled] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const changeHandler = (e)=> {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    useEffect(()=> {
        const {name, email, message} = formData;
        if(name !== '' && email !== '' && message !== '') setDisabled(false);
        else setDisabled(true);
    }, [formData])
    
    return (
        <div id='contact'>
            <header id='contactHeader'>
                <h3>Interested in chatting? Contact me via the form, download my resume with the button below, shoot me an email, or reach me on LinkedIn or Github.</h3>
                <ExternalLinks />
            </header>
            <form name="contact" id='contactForm' method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="">
                <label htmlFor='email'>Email:</label>
                <input onChange={changeHandler} className='contactInput' type="email" name="email" placeholder='Jsmith@gmail.com:' value={formData.email}/>
                <label htmlFor='name'>Name:</label>
                <input onChange={changeHandler} className='contactInput' type="text" name="name" placeholder='John Smith' value={formData.name}/>
                <label htmlFor='message'>Message:</label>
                <textarea onChange={changeHandler} className='contactInput' type="text" name="message" rows="5" placeholder="I'd like to reach out about..." value={formData.message}/>
                <input type="hidden" name="form-name" value="contact" />
                <button id={disabled ? 'contactButtonDisabled' : 'contactButton'} disabled={disabled}>Send</button>
            </form>
        </div>
    )
}

export default Contact;