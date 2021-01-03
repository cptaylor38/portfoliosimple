import React from 'react';
import '../style/ProjectDetail.css';
import { IoNavigateOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

const ProjectDetail = ({project })=> {
    return(
        <div className='pdContainer'>
            <div className='pdHeaderRow'>
                <div><h1 className='pdTitle'>{project.title}</h1></div>
                <div className='pdLinkRow'>
                    <a className='pdLink' 
                       target='_blank'
                       rel='noopener noreferrer' 
                       href={project.deployedLink}><IoNavigateOutline /> Visit Site</a>
                    <a className='pdLink' 
                       target='_blank'
                       rel='noopener noreferrer' 
                       href={project.githubLink}><FaGithub /> View Repo</a>
                </div>
            </div>
            <div className='pdImgAndDetails'>
                <img className='pdImg' alt={project.title} src={require(`../assets/images/projectImages/${project.image}`)} />
                <div className='pdDetails'>
                    <h3>Tech:</h3>
                    <div><p>{project.tech}</p></div>
                    <h3>Description:</h3>
                    <div><p>{project.body}</p></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;