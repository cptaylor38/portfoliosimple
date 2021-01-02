import React from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectDetail from '../Components/ProjectDetail';

const Portfolio = () => {
    
    return (
        <div id='portfolio'>
            <div id='portfolioCardCont'>
                {projectData.map(item => {
                    return(
                        <ProjectDetail project={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;