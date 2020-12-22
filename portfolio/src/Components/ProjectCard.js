import React from 'react';
import '../style/ProjectCard.css';

const ProjectCard = ({project}) => {
    return(
        <div className='pcCont'>
            <h3 className='pcHeader'>{project.title}</h3>
            <p className='pcBody'>{project.body}</p>
            <img src={require(`../assets/images/projectImages/${project.image}`)} className='pcImg' />
            <a className='pcLink' href={project.githubLink}>Github</a>
            {project.deployedLink ? (<a href={project.deployedLink} className='pcLink'>Deployed</a>): null}
        </div>
    )
}

export default ProjectCard;