import React from 'react';
import '../style/Nav.css';
import ExternalLinks from './ExternalLinks';

const Nav = ({scrollHandler}) => {

   return (
        <div id='nav'>
            {/* <a href='#portfolio'>Portfolio</a> */}
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('portfolio')}>Portfolio</button>
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('faq')}>FAQ</button>
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('contact')}>Contact</button>
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('bio')}>Bio</button>
            <div id='navExteranlLinks'>
                <ExternalLinks />
            </div>
        </div>
    )
}

export default Nav;