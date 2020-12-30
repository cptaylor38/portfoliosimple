import React from 'react';
import { IoNavigateOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import '../style/ProjectCard.css';

const ProjectCard = ({project}) => {
    //slide in toggle to view project details - update portfolio view with page of project after details clicked
    
    return(
        <div className='pcCont'>
            <div className='picAndLinks'>
                <h2>{project.title}</h2>
                <img src={require(`../assets/images/projectImages/${project.image}`)} alt={project.title} className='pcImg'/>
                <div className='linksRow'>
                    <a className='pcLink' href={project.githubLink}><FaGithub /></a>
                    {project.deployedLink ? (<a href={project.deployedLink} className='pcLink'><IoNavigateOutline /></a>): null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
