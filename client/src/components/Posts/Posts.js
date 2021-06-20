import React from 'react';
import Post from './Post/Post';

const Posts = () => {
    return (
        <>
            <h1>Posts</h1>
            <Post imageSource = "client/public/logo512.png"/>
            <Post />
        </>
    );
};

export default Posts;