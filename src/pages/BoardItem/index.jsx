import React, {useRef, useState} from "react";
import styled from "styled-components";

import likeIcon from "../../assets/icon/like.png";
import commentIcon from "../../assets/icon/comment.png";


const MainWrapper =styled.div`
  
`;

const Index = ({match}) => {
  console.log("test");
  const item = {
    title: "hello",
    
  }

  return (
    <MainWrapper>
      <div>
        <p>게시판</p>
        <p>GDSC</p>
      </div>
      <div className="content">
        <p className="title-text">{item.title}</p>
        <p className="upload-date">{item.date}</p>
      </div>
      <div className="status-wrapper">
          <img className="status-icon" src={likeIcon} /> 
          <p className="status-like">{item.like}</p>
          <img className="status-icon" src={commentIcon} /> 
          <p className="status-comments">{item.comments}</p>
        </div>
    </MainWrapper>
  );
};

export default Index;
