import React from 'react';
import { Container, Grid } from '@material-ui/core';
// import Post from './Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap'; 

const Post = () => {
  return (    
    <Grid container
          direction="row"
          justify="center"
          alignItems="center">

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
          
        <Card.Body>
          <Card.Title>Post Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
              
          <Button variant="success">Trade</Button>
        </Card.Body>
      </Card>
    </Grid>
       ); 
}
  
export default Post;


    // <>
    //   {/* <Image source={imageSource} /> */}
    // </>

    // // <div
    // //   style={{
    // //     display: "flex",
    // //     flexDirection: "column",
    // //     alignItems: "center",
    // //     justifyContent: "center"
    // //   }}
    // // >
    // //   <div
    // //     style={{
    // //       height: "60px",
    // //       width: "60px",
    // //       border: "1px dashed black"
    // //     }}
    // //   >
        
    // //     {<Image source={imageSource}/>} 
    // //   </div>
    // // </div>