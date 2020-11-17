import React from 'react';
import {ArticlePreview} from "../ArticlePreview/ArticlePreview";
import './FeedItem.css';

const FeedItem = (props) => {
    return(
        <div className={'o-feed__item'} onClick={props.onClick}>
            <img className='m-item__thumbnail' src={props.thumb} title={props.title} alt={"Thumbnail"}/>
            <ArticlePreview date={props.date}
                            title={props.title}
                            excerpt={props.excerpt}
                            url={props.url}/>
        </div>
    );
}

export {FeedItem};