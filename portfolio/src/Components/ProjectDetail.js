import React from 'react';
import '../style/ProjectDetail.css';
import { IoNavigateOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

const ProjectDetail = ({project })=> {
    return(
        <div className='pdContainer'>
            <div className='pdImgAndDetails'>
                <img className='pdImg' alt={project.title} src={require(`../assets/images/projectImages/${project.image}`)} />
                <div className='pdDetails'>
                    <h2>{project.title}</h2>
                    {project.deployedLink !== '' ? (<a className='pdLink' 
                       target='_blank'
                       rel='noopener noreferrer' 
                       href={project.deployedLink}><IoNavigateOutline /> Visit Site</a>) : null}
                    <a className='pdLink' 
                       target='_blank'
                       rel='noopener noreferrer' 
                       href={project.githubLink}><FaGithub /> View Repo</a>
                    <div className='pdBody'><p>{project.body}</p></div>
                    <div className='pdTech'><p>{project.tech}</p></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;