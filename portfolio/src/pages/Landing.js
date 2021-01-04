import React, {useState} from 'react';
import '../style/Landing.css';
import ExternalLinks from '../Components/ExternalLinks';
import Bio from '../Components/Bio';

const Landing = ({scrollHandler}) => {
    const [showBio, setShowBio] = useState(false);

    return (
        <div id='bio'>
            {showBio ? (<Bio setShowBio={setShowBio}/>) : null}
            <img id='selfie' src={require('../assets/images/bioImg.svg')} alt='selfieSVG' />
            <div id='landingContainer'>
                <div id='landingBio'>
                    <header>
                        <h1>Corbin Taylor</h1>
                        <h3>Software Developer | Front End Developer</h3>
                    </header>
                </div>
                <div>
                    <div id='landingNav'>
                        <button className='navBtn' onClick={()=> setShowBio(true)}>Bio</button>
                        <button className='navBtn' onClick={()=> scrollHandler('portfolio')}>Portfolio</button>
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