import React, { Component } from 'react';
import eecentBlogData from '../data/recentBlog.json';

class RecentBlog extends Component {

    render() {
        return (
            <div className="sidebar-social">
                <div className="sidebar-title">
                    {eecentBlogData.title}
                </div>
                <div className="sidebar-content">
                    {eecentBlogData.data.map(function (p) {
                        return (
                            <a className="recentBlog-parent" href={p.url} rel="noopener noreferrer" target="_blank">
                                <div className="recentBlog-title">{p.title}</div>
                                <div className="recentBlog-year">{p.year}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default RecentBlog;