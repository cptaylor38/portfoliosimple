import React, { useState } from 'react';
import '../style/FAQ.css';

const FAQ = () => {

    const [criteria, setCriteria] = useState('personal');

    const criteriaStyler = (selection) => {
        return selection === criteria ? 'underline': 'none';
    }

    const qaDisplayHandler = () => {

        //is this efficient or should I handle in return with truthies to avoid continuous function calls, need to research
        switch(criteria){
            case 'personal':
                return <p>Personal</p>
            case 'professional':
                return <p>Professional</p>
            case 'culture':
                return <p>Culture</p>
            default:
                return <p>Personal</p>
        }
    }

    return (
        <div id='faq'>
            ,<div id='faqHeader'>
                <button style={{textDecoration: criteriaStyler('personal')}} onClick={()=> setCriteria('personal')}>Personal</button>
                <button style={{textDecoration: criteriaStyler('professional')}} onClick={()=> setCriteria('professional')}>Professional</button>
                <button style={{textDecoration: criteriaStyler('culture')}} onClick={()=> setCriteria('culture')}>Culture</button>
            </div>
            {qaDisplayHandler()}
        </div>
    )
}

export default FAQ;