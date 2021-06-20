import React from 'react';
import {Image} from 'react';


import "./styles.css";

  const Post = ({ imageSource }) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
      >
        
        <Image source = {imageSource}/>  
        
      </div>
      Click to upload Image
    </div>
  
  );

        };
export default Post;