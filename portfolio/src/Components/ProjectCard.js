import React, {useState} from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { IoNavigateOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import '../style/ProjectCard.css';

const ProjectCard = ({project}) => {
    const [ovDisplay, setOvDisplay] = useState(false);
    const overlayManager = () => {
        setOvDisplay(!ovDisplay);
    }

    return(
        <div className='pcCont'>
            <div id='linksRow'>
                    <a className='pcLink' href={project.githubLink}><FaGithub /></a>
                    {project.deployedLink ? (<a href={project.deployedLink} className='pcLink'><IoNavigateOutline /></a>): null}
                    <GiMagnifyingGlass id='descriptionToggle' onMouseEnter={overlayManager} onMouseLeave={overlayManager}/>
            </div>
            <div id='picCont'>
                <div id='overlay' style={ovDisplay ? {display: 'flex'} : {display: 'none'}}>
                    <p className='pcBody'>{project.body}</p>
                </div>
                <img src={require(`../assets/images/projectImages/${project.image}`)} className='pcImg' style={ovDisplay ? {opacity: '0'} : {opacity: '1'}} />
            </div>
            <h1 className='pcHeader'>{project.title}</h1>
        </div>
    )
}

export default ProjectCard;

