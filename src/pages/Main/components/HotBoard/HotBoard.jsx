import React from "react";
import styled from "styled-components";

import HotItem from "./HotBoardItem"

import { dummyHot } from "../../../../components/dummyData";

const HodBoardWrapper = styled.div`
  padding: 12px 6px;
    
  .title{
    display: inline-block;
    padding: 5px 12px;
    font-weight: 600;
  }
`


const HotBoard = () => {
  const hotBoardContents = dummyHot;
  return (
    <HodBoardWrapper className="board-wrapper">
      <div className="popular-board-container">
        <h1 className="title">HOT 게시물</h1>
      </div>
      {hotBoardContents.map((item) => (
        <HotItem
          item={item}
        />
      ))}
    </HodBoardWrapper>
  )
};

export default HotBoard;