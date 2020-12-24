import React from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectCard from '../Components/ProjectCard';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const Portfolio = () => {


    let screenWidth = window.innerWidth;
    const scrollHandler = (direction) => {
        let div = document.getElementById('portfolioCardCont');
        console.log(document.scrollingElement.scrollTop)
        if(direction === 'left') div.scrollLeft -= screenWidth;
        if(direction === 'right') div.scrollLeft += screenWidth;
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