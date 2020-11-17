import React from 'react';
import {FeedItem} from "../FeedItem/FeedItem";
import './FeedList.css';

const FeedList = (props) =>
    <div className={'feed-list'}>
        {props.posts.map((post) =>
            <FeedItem
                title={post.title}
                key={post.url}
                onClick={() => props.onClick(post.url)}
                date={post.date}
                thumb={post.thumb}
                excerpt={post.excerpt}
                url={post.url}/>)}
    </div>
export {FeedList};
