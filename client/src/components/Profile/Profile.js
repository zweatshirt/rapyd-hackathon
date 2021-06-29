import React from 'react';
import { Container } from '@material-ui/core';

const Profile = (props) => {
    const items = props.items; // create Items object array array
    const listItems = items.map((item) =>
    <li>{item}</li>
    );

    return (
        <Container>
            <h1>List Items:</h1>
            <ul>listItems</ul>
        </Container>)
}