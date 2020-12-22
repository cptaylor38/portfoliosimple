import React from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectCard from '../Components/ProjectCard';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const Portfolio = () => {

    const scrollHandler = (direction) => {
        let div = document.getElementById('portfolioCardCont');
        console.log(document.scrollingElement.scrollTop)
        if(direction === 'left') div.scrollLeft -= 20;
        if(direction === 'right') div.scrollLeft += 20;
    }

    return (
        <div id='portfolio'>
            <div id='portfolioCardCont'>
                <button className='portfolioScrollBtn' id='scrollLeftBtn' onClick={()=> scrollHandler('left')}><BiLeftArrow /></button>
                {projectData.map(item => {
                    return(
                        <ProjectCard project={item} />
                    )
                })}
                <button className='portfolioScrollBtn' id='scrollRightBtn' onClick={()=> scrollHandler('right')}><BiRightArrow /></button>
            </div>
        </div>
    )
}

export default Portfolio;