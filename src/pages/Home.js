import React, { Component } from 'react';
import Post from '../components/Post';
import RowPostOne from '../components/RowPostOne';
import RowPostTwo from '../components/RowPostTwo';
import RowPostThree from '../components/RowPostThree';
import NewsLetter from '../components/NewsLetter';
import LoadMore from '../components/LoadMore';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Post />
                <RowPostOne />
                <RowPostTwo />
                <NewsLetter />
                <RowPostThree />
                <LoadMore />
            </div>
        );
    }
}

export default Home;
