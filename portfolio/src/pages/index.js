import React, {useState, useEffect} from "react";
import '../style/index.css';
import Nav from '../Components/Nav';
import Landing from './Landing';
import Portfolio from './Portfolio';
import FAQ from './FAQ';
import Contact from './Contact';

export default function Home() {
  const [nav, setNav] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      let scrolled = document.scrollingElement.scrollTop;
      if(scrolled >= 500) setNav(true);
      else setNav(false);
    });
  }, [])


  return(
    <div id='main'>
      {nav ? (<Nav />) : null}
      <Landing />
      <Portfolio />
      <FAQ />
      <Contact />
    </div>
  )
}
