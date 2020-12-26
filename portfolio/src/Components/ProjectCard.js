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
            <div className='headerRow'>
                <div className='picAndLinks'>
                    <img src={require(`../assets/images/projectImages/${project.image}`)} className='pcImg' style={ovDisplay ? {opacity: '0'} : {opacity: '1'}} />
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

{/* <div className='pcCont'>
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
        </div> */}
