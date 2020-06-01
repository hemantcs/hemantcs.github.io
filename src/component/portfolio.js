import React, { Component } from 'react';
import portfolioData from '../data/portfolio.json';

class Portfolio extends Component {

    componentDidMount = () => {
        window.document.title = portfolioData.title;
    }

    render() {
        function createMarkup(description) {
            return {__html: description};
        }

        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{portfolioData.title}</div>
                    <p>{portfolioData.description}</p>
                    <div className="portfolio-timeline-section">
                        {
                            portfolioData.items.map(function (d, idx) {
                                return (
                                    <ul className="portfolio-timeline">
                                        <li className="portfolio-work">
                                            { d.title ?
                                                <div className="portfolio-timeline-title">{d.title}</div> : ""
                                            }
                                            
                                            { d.subTitle ?
                                                <div className="portfolio-timeline-sub-title">{d.subTitle}</div> : ""
                                            }

                                            <span className="portfolio-date">{d.timeline}</span>

                                            <span className="portfolio-circle"></span>

                                            <div className="portfolio-content" dangerouslySetInnerHTML={createMarkup(d.description)}></div>

                                            { d.ulist ?
                                                <ul className="portfolio-list">
                                                    {d.ulist.map(function (l, lidx) {
                                                        return (
                                                            <li>{l}</li>
                                                        )
                                                    })}
                                                </ul> : ""
                                            }

                                            { d.olist ?
                                                <ol className="portfolio-list">
                                                    {d.olist.map(function (l, lidx) {
                                                        return (
                                                            <li>{l}</li>
                                                        )
                                                    })}
                                                </ol> : "" 
                                            }

                                            { d.technologies ?
                                                <div className="portfolio-technologies-header">
                                                    <div className="portfolio-technologies-title">technologies</div>
                                                    <ul className="portfolio-technologies-content">
                                                        {d.technologies.map(function (l, lidx) {
                                                            return (
                                                                <li className="portfolio-technologies-items">
                                                                    <a href={l.url} rel="noopener noreferrer" target="_blank">{l.title}</a>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div> : "" 
                                            }
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


        // {
        //     d.technologies.map(function (t, tidx) {
        //         return (
        //             <div>
        //                 <div>{t.title}</div>
        //                 <div>{t.url}</div>
        //             </div>
        //         )
        //     })
        // }

export default Portfolio;