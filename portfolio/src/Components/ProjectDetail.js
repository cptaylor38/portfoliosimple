import React from 'react';

const ProjectDetail = ({project, setDetailView})=> {
    return(
        <div>
            <p>Project</p>
            <button onClick={()=> setDetailView({isShowing: false, selected: null})}>X</button>
        </div>
    )
}

export default ProjectDetail;