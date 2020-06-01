import React, { Component } from 'react';
import { FaBookOpen, FaUniversity } from "react-icons/fa";
import educationData from '../data/education.json';

class Education extends Component {

    componentDidMount = () => {
        window.document.title = educationData.title;
    }

    render() {
        return (
            <div className="about-inner">
                <div className="about-parent">
                    <div className="about-title">{educationData.title}</div>

                    <div className="education-section">
                        {educationData.data.map(function (p) {
                            return (
                                <div className="education-parent">
                                    <div className="education-table">
                                        
                                        <div className="education-year">
                                            <h3>{p.year}</h3>
                                        </div>
                                        
                                        <div className="education-row">
                                            <div className="education-cell">
                                                <FaBookOpen />
                                                <span className="education-degree">{p.degree}</span>
                                            </div>
                                        </div>
                                        <div className="education-row">
                                            <div className="education-cell">
                                                <FaUniversity />
                                                <span className="education-location">{p.location}</span>
                                            </div>
                                        </div>
                                        <div className="education-row">
                                            <div className="education-cell">
                                                <span className="education-content">{p.content}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;