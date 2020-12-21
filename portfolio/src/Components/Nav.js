import React from 'react';
import '../style/Nav.css';
import ExternalLinks from './ExternalLinks';

const Nav = () => {
    return (
        <div id='nav'>
            <a href='#portfolio'>Portfolio</a>
            <a href='#faq'>FAQ</a>
            <a href='#contact'>Contact</a>
            <a href='#bio'>Bio</a>
            <ExternalLinks />
        </div>
    )
}

export default Nav;