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

    const nameValidator = (value) => {
        if(isNaN(parseInt(value[value.length - 1]))) return true;
        return false;
    }

    const domainChecker = (email) => {
        console.log(email);
        let len = email.length;
        let domainCheck = email[len - 1] + email[len - 2] + email[len - 3] + email[len - 4];
        console.log(domainCheck);
        if(domainCheck !== '.com' || domainCheck !== '.net' || domainCheck !== '.edu' || domainCheck !== '.gov' || domainCheck !== '.org') return false;
    }

    const messageChecker = (message) => {
        if(message.length < 2) return false;
        else {
            if(message !== isNaN) return true;
        } 
    }

    const changeHandler = (e)=> {
        switch(e.target.name){
            case 'name':
                if(nameValidator(e.target.value)) setFormData({...formData, name: e.target.value});
                break;
            case 'email':
                setFormData({...formData, email: e.target.value});
                break;
            case 'message':
                setFormData({...formData, message: e.target.value});
                break;
            default:
                return;
        }
    }

    useEffect(()=> {

        //need to fix these validators - test email logic. probably a better way to approach this.
        const {name, email, message} = formData;
        //leaving this temporarily to stay functional
        if(name !== '' && email !== '' && message !== '') setDisabled(false);
        // if(name !== '' && email !== '' && message !== ''){
        //     if(domainChecker(email.trim()) && messageChecker(message.trim())) setDisabled(false);
        // }
        // else {
        //     // if(domainChecker(email.trim()) && !messageChecker(message.trim())) setDisabled(false);
        // }
    }, [formData])
    
    return (
        <div id='contact'>
            <header id='contactHeader'>
                <h3>Interested in chatting? Contact me via the form, download my resume with the button below, shoot me an email, or reach me on LinkedIn or Github.</h3>
                <ExternalLinks />
            </header>
            <form name="contact" id='contactForm' method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="">
                <label htmlFor='email'>Email:</label>
                <input onChange={changeHandler} className='contactInput' type="email" name="email" placeholder='Jsmith@gmail.com' value={formData.email}/>
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