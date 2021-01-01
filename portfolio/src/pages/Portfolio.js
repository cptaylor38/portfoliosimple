import React, {useState} from 'react';
import '../style/Portfolio.css';
import projectData from '../assets/PortfolioData.json';
import ProjectCard from '../Components/ProjectCard';
import ProjectDetail from '../Components/ProjectDetail';

const Portfolio = () => {
    const [detailView, setDetailView] = useState({isShowing: false, selected: null});
    const portfolioViewHandler = (isShowing, selected) => {
        document.getElementById('portfolio').scrollIntoView();
        setDetailView({isShowing, selected})
    }
    return (
        <div id='portfolio'>
            {detailView.isShowing ? (<ProjectDetail setDetailView={setDetailView}/>) : (
                <div id='portfolioCardCont'>
                {projectData.map(item => {
                    return(
                        <ProjectCard project={item} key={item.id} portfolioViewHandler={portfolioViewHandler} />
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default Portfolio;