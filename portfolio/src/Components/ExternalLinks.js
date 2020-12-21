import React from 'react';
import '../style/ExternalLinks.css';
import {FaLinkedin, FaGithub, FaFileDownload} from 'react-icons/fa';
import {BiMailSend} from 'react-icons/bi';

const ExternalLinks = () => {
    return (
        <div id='externalLinks'>
                    <a
                      href='https://docs.google.com/document/d/1oPcbN59DI1ZDNFx9t0PCiJnB9MI_5TlFAu0ekCZANuc/export?format=pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaFileDownload />
                    </a>
                    <a href='mailto: cylor.dev@gmail.com'>
                      <BiMailSend />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/corbin-taylor-419a8a188/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href='https://github.com/cptaylor38'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaGithub />
                    </a>
                    </div>
    )
}

export default ExternalLinks;