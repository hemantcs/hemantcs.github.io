import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aboutData from '../data/about.json';
import resumePdf from '../pdf/hemant_Resume.pdf';

class About extends Component {

    componentDidMount = () => {
        window.document.title = aboutData.title;
    }

    render() {
        return (
            <div className="about-inner">
                <div className="about-parent">
                    <div className="about-title">{aboutData.title}</div>
                    <p className="about-desc">{aboutData.description}</p>
                    <p className="about-content">{aboutData.content}</p>
                    
                    <div className="about-section-table">
                        <div className="about-section-row">
                            <div className="about-section-left">
                                <div className="about-profile">
                                    <h3 className="about-profile-title">{aboutData.profile.title}</h3>
                                    <p className="about-profile-desc">{aboutData.profile.description}</p>

                                    <ul className="about-ul">
                                        {aboutData.profile.profile.map(function (p) {
                                            return (
                                                <li className="about-li">
                                                    <strong className="about-key">{p.key}</strong>
                                                    <span className="about-value">{p.value}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="about-section-right">
                                <div className="about-skills">
                                    <h3 className="about-skills-title">{aboutData.skills.title}</h3>
                                    <p className="about-skills-desc">{aboutData.skills.description}</p>

                                    <ul className="about-ul">
                                        {aboutData.skills.skills.map(function (s) {
                                            return (
                                                <li className="about-li">
                                                    <div className="about-key">
                                                        <span className="about-key-left">{s.key}</span>
                                                        <span className="about-key-right">{s.value}</span>
                                                    </div>
                                                    <div className="about-progress-container">
                                                        <div className={"about-progress-skills"} style={{ width: s.value }}></div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-download">
                        <a href={resumePdf} download>Download CV</a>
                        <Link to="/contact">Contact Me</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;