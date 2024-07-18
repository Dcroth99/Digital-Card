import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './About.css';


export default function About() {
    return (
        <>
            <div className="icon-container">
            <FontAwesomeIcon icon={faLinkedin} className="linkedInIcon" />
            <FontAwesomeIcon icon={faEnvelope} className="EnvelopeIcon" /> 
            </div>
            <h4 className="About--h4">Proficient in React/Node.js || Python, Django</h4>
            <p className="About--p">University of Hawai'i at Manoa, BA
               Passionate about making web apps with a focus on health technology. 
               Enthusiast of music, surfing, and hiking.</p>
            
        </>
    )

}