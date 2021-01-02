import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../style/Bio.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Bio = ({setShowBio}) => {
    let bioElement = useRef(null);
    useEffect(()=> {
        TweenMax.to([bioElement.current], .2, {transform: 'translateY(0)'})
    }, [])

    return (
        <div id='bioExtended' ref={bioElement}>
            <div id='bioExtendedContainer'>
                <header>
                    <h2>A little about me...</h2>
                    <button id='bioCloseBtn' onClick={()=> setShowBio(false)}><AiFillCloseCircle /></button>
                </header>
                <section id='bioSection'>
                    <p>Hello, my name is Corbin. I'm currently a freelance developer located in Lexingtion, North Carolina.</p>
                    <p>Creativity has always been an outlet for me, whether it was replicating video game characters out of clay, Frankenstein'ing pieces of old lamps together on my grandmother's back porch, painting or building props for upcoming Movie promotionals at my first job at Carmike Cinemas, or sewing stuffed animals and Halloween costumes. I've always enjoyed finding new mediums to explore and it's this passion that led me to my development journey. </p>
                    <p>In 2015 I graduated from GTCC with an Associates in Simulation and Game design. At the time I was much more interested in 3D Modeling and Environment design but knew that I wanted to explore programming and software development on a deeper level. </p>
                    <p>In 2019 I graduated from a six month Full Stack coding bootcamp at UNCC that led me to my current journey. It's a brand new medium, an expansive, rapidly changing, and highly impactful skillset that has allowed me to express my creativity in a whole new medium. As someone that's worked primarily in Retail and Healthcare, I've found myself at the mercy of the world and the way technology has continued to shape it. Now, I have the foundation for a skillset that allows me to grow with it and be a part of that change. </p>
                    <p>In my free time I'm often practicing front end design, learning, building a passion project, gaming, or exploring a newfound passion for health and fitness. I'm an avid animal lover, supporter of equality and diversity, and a self-proclaimed geek.</p>
                    <p>If you're interested in learning more, please feel free to contact me and be sure to check the frequently asked questions section.</p>
                </section>
            </div>
        </div>
    )
}

export default Bio;