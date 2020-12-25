import React, {useState, useEffect} from "react";
import '../style/index.css';
import Nav from '../Components/Nav';
import Landing from './Landing';
import Portfolio from './Portfolio';
import FAQ from './FAQ';
import Contact from './Contact';

export default function Home() {
  const [nav, setNav] = useState(false);
  const scrollHandler = (div) => {
    document.getElementById(`${div}`).scrollIntoView({behavior: 'smooth'});
}

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      let scrolled = document.scrollingElement.scrollTop;
      if(scrolled >= 500) setNav(true);
      else setNav(false);
    });
  }, [])


  return(
    <div id='main'>
      {nav ? (<Nav scrollHandler={scrollHandler}/>) : null}
      <Landing scrollHandler={scrollHandler}/>
      <Portfolio />
      <FAQ />
      <Contact />
    </div>
  )
}
