import React from 'react';
import './ArticlePreview.css';

export const ArticlePreview = (props) => {
    return(
        <div className="m-item__text">
            <div className="a-item__date">{props.date}</div>
            <div className="a-item__title">{props.title}</div>
            <div className="a-item__excerpt">{props.excerpt}</div>
        </div>
    );
}
