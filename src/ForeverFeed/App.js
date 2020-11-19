import React, { Component } from 'react';
import './App.css';

import { FeedList } from './FeedList/FeedList';
import { Header } from './Header/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage: 1,
            prevY: 0
        }
    }

    componentDidMount() {
        this.getPosts(this.state.currentPage);

        const options = {
            root: null, // page as root
            rootMargin: '0px',
            threshold: 1.0
        };

        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );

        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const nextPage = this.state.currentPage + 1;
            this.getPosts(nextPage);
            this.setState({ currentPage: nextPage});
        }
        this.setState({ prevY: y });
    }

    getPosts = (pageNumber) => {
        const { posts } = this.state;
        fetch(`http://localhost:3004/posts?_page=${pageNumber}`)
            .then(response => response.json())
            .then(newPosts => {
                this.setState({
                    posts: [...posts, ...newPosts]
                })
            })
            .catch(e => {
                console.error(e);
                console.log(`Hey, most probably you didn't start the server properly or started it in another port.
                            Please check it and start again.`);
            })
    }

    handleClick = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null;
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <FeedList posts={this.state.posts} onClick={this.handleClick}/>
                <div ref={loadingRef => (this.loadingRef = loadingRef)}>Loading...</div>
            </div>
        );
    }
}

export { App };
