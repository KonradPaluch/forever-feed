import React from 'react';
import { FeedItem } from '../FeedItem/FeedItem';
import './FeedList.css';

export const FeedList = (props) =>
    <div className="feed-list">
        { props.posts.map((post, index) =>
            <FeedItem
                index={index}
                title={post.title}
                key={post.url}
                onClick={props.onClick}
                date={post.date}
                thumb={post.thumb}
                excerpt={post.excerpt}
                url={post.url} />
            )
        }
    </div>
