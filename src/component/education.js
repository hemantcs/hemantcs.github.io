import React, { Component } from 'react';
import educationData from '../data/education.json';

class Education extends Component {

    componentDidMount = () => {
        window.document.title = educationData.title;
    }

    render() {
        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{educationData.title}</div>
                </div>
            </div>
        );
    }
}

export default Education;