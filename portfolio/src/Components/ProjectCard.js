import React, {useState} from 'react';
import { IoNavigateOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import '../style/ProjectCard.css';

const ProjectCard = ({project, setDetailView}) => {
    const [hovered, setHovered] = useState(false);
    const detailViewHandler = (isShowing, selected) => {
        setDetailView({isShowing, selected})
    }
    
    
    return(
        <div className='pcCont'  onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}>
            <div className='cardHoverView' style={{display: hovered ? 'flex' : 'none'}}>
                <button onClick={()=> detailViewHandler(true, project)}>Details</button>
                <div className='linksRow'>
                        <a className='pcLink' href={project.githubLink}><FaGithub /></a>
                        {project.deployedLink ? (<a href={project.deployedLink} className='pcLink'><IoNavigateOutline /></a>): null}
                </div>
            </div>
            <div className='picAndLinks'>
                <h2>{project.title}</h2>
                <img src={require(`../assets/images/projectImages/${project.image}`)} alt={project.title} className='pcImg'/>
            </div>
        </div>
    )
}

export default ProjectCard;
