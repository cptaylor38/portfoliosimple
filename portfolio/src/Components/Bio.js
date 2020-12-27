import React from 'react';
import '../style/Bio.css';

const Bio = ({setShowBio}) => {
    return (
        <div id='bioExtended' onMouseLeave={()=> setShowBio(false)}>
            <div id='bioExtendedContainer'>
                <header>
                    <h2>My Story</h2>
                </header>
                <section>
                    <p>loreejfefjelkjf;elkjelfkje;fkej;lkejfelkfjelkjfelkjfeklfjelkfjelfjelkfjelkfjelfj</p>
                </section>
            </div>
        </div>
    )
}

export default Bio;