import React from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectCard from '../Components/ProjectCard';

const Portfolio = () => {

    return (
        <div id='portfolio'>
            <div id='portfolioCardCont'>
                {projectData.map(item => {
                    return(
                        <ProjectCard project={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;