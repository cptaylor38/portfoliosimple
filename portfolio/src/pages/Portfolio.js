import React from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';

const Portfolio = () => {
    return (
        <div id='portfolio'>
            {projectData.map(item => {
                return(
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Portfolio;