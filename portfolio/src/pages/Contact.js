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
        let domainCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(domainCheck.test(email)) return true;
        else {
            setDisabled(true);
            return false;
        }
    }

    const messageChecker = (message) => {
        if(message.length < 2) return false;
        else {
            if(message !== isNaN) return true;
            else{
                setDisabled(true);
                return false;
            }
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
        const {name, email, message} = formData;
        if(name !== '' && email !== '' && message !== ''){
            if(domainChecker(email) && messageChecker(message.trim())) setDisabled(false);
        }
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