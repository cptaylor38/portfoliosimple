import React from 'react';
import { IoNavigateOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import '../style/ProjectCard.css';

const ProjectCard = ({project}) => {
    
    return(
        <div className='pcCont'>
            <div className='headerRow'>
                <div className='picAndLinks'>
                    <img src={require(`../assets/images/projectImages/${project.image}`)} alt={project.title} className='pcImg'/>
                    <div className='linksRow'>
                        <a className='pcLink' href={project.githubLink}><FaGithub /></a>
                        {project.deployedLink ? (<a href={project.deployedLink} className='pcLink'><IoNavigateOutline /></a>): null}
                    </div>
                </div>
                <div className='headerAndDescription'>
                    <h1 className='pcHeader'>{project.title}</h1>
                    <div className='descriptionRow'>
                        <p className='pcBody'>{project.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
