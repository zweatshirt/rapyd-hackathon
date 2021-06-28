import React from 'react';
import { Container, Grid } from '@material-ui/core';
// import Post from './Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap'; 

const Post = ({imgSrc, PostTitle, PostDescription}) => {
  return (    
    <Grid container
          direction="row"
          justify="center"
          alignItems="center">

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} />
          
        <Card.Body>
          <Card.Title>{PostTitle}</Card.Title>
            <Card.Text>
              {PostDescription}
            </Card.Text>
              
          <Button alignItems="baseline" variant="success">Trade</Button>
          <Button alignItems="baseline" variant="light">Add to Cart</Button>
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