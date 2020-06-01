import React, { Component } from 'react';
import experienceData from '../data/experience.json';

class Experience extends Component {

    componentDidMount = () => {
        window.document.title = experienceData.title;
    }

    render() {
        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{experienceData.title}</div>
                </div>
            </div>
        );
    }
}

export default Experience;