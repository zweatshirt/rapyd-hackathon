import React from 'react';
import { Container } from '@material-ui/core';
import Post from './Post/Post';

const Posts = () => {
    const imgSrc = "client/public/logo512.png";
    return (
        <Container>
            <h1>Posts</h1>
            <Post imageSource={imgSrc}/>
        </Container>
    );
};

export default Posts;