import React from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectDetail from '../Components/ProjectDetail';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    
    return (
        <div id='portfolio'>
            <div id='portfolioCardCont'>
                {projectData.map(item => {
                    return(
                        <Fade left>
                            <ProjectDetail project={item} key={item.id} />
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;