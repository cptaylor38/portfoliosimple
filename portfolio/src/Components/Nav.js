import React, {useEffect, useRef} from 'react';
import { TweenMax } from 'gsap'; 
import '../style/Nav.css';
import ExternalLinks from './ExternalLinks';

const Nav = ({scrollHandler}) => {
   
    const navElement = useRef(null);

   useEffect(()=> {
       TweenMax.to([navElement.current], 0.3, {opacity: 1})

       return () => {
           TweenMax.to([navElement.current], 0.3, {opacity: 0})
       }
   }, [])

   return (
        <div id='nav' ref={navElement}>
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('bio')}>Bio</button>
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('portfolio')}>Portfolio</button>
            <button className='navBtn navbarNav' onClick={()=> scrollHandler('contact')}>Contact</button>
            <div id='navExteranlLinks'>
                <ExternalLinks />
            </div>
        </div>
    )
}

export default Nav;