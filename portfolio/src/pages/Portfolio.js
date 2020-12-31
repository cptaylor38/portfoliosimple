import React, {useState} from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectCard from '../Components/ProjectCard';
import ProjectDetail from '../Components/ProjectDetail';

const Portfolio = () => {
    const [detailView, setDetailView] = useState({isShowing: false, selected: null});
    return (
        <div id='portfolio'>
            {detailView.isShowing ? (<ProjectDetail setDetailView={setDetailView}/>) : (
                <div id='portfolioCardCont'>
                {projectData.map(item => {
                    return(
                        <ProjectCard project={item} key={item.id} setDetailView={setDetailView} />
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default Portfolio;