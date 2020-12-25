import React from 'react';
import '../style/Landing.css';
import ExternalLinks from '../Components/ExternalLinks';

const Landing = ({scrollHandler}) => {
    return (
        <div id='bio'>
            <img id='selfie' src={require('../assets/images/bioImg.svg')} />
            <div id='landingContainer'>
                <div id='landingBio'>
                    <header>
                        <h1>Corbin Taylor</h1>
                        <h3>Software Developer | Front End Developer</h3>
                    </header>
                    <p>Hello, I'm Corbin. Located in Lexington, NC </p>
                </div>
                <div>
                    <div id='landingNav'>
                        <button className='navBtn' onClick={()=> scrollHandler('portfolio')}>Portfolio</button>
                        <button className='navBtn' onClick={()=> scrollHandler('faq')}>FAQ</button>
                        <button className='navBtn' onClick={()=> scrollHandler('contact')}>Contact</button>
                    </div>
                    <div id='landingLinks'>
                        <ExternalLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;