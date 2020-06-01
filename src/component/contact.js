import React, { Component } from 'react';
import contactData from '../data/contact.json';

class Contact extends Component {

    componentDidMount = () => {
        window.document.title = contactData.title;
    }

    render() {
        return (
            <div className="contact-parent">
                <h1 className="contact-title">{contactData.title}</h1>
                <p>{contactData.description}</p>

                <div className="contact-section">
                    {contactData.profile.map(function (p) {
                        return (
                            <div className="contact-row">
                                <div className="contact-label">{p.key}</div>
                                {p.network === "email" ?
                                    <a className="contact-value" href={p.url}>{p.value}</a>
                                    : <a className="contact-value" href={p.url} rel="noopener noreferrer" target="_blank">{p.value}</a>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Contact;