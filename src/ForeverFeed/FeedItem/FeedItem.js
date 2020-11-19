import React from 'react';
import { ArticlePreview } from '../ArticlePreview/ArticlePreview';
import './FeedItem.scss';

export const FeedItem = (props) => {
    // adjust index to the number from 1 to 10, to assign scss class properly
    const adjustedIndex = ((props.index + 1) % 10) === 0 ? 10 : ((props.index + 1) % 10);
    return(
        <div className={`o-feed__item${adjustedIndex}`} onClick={() => props.onClick(props.url)}>
            <img className="m-item__thumbnail" src={props.thumb} title={props.title} alt="Thumbnail"/>
            <ArticlePreview date={props.date}
                            title={props.title}
                            excerpt={props.excerpt}
                            url={props.url}/>
        </div>
    );
}
