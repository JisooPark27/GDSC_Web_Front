import React from "react";
import styled from "styled-components";

import { dummyRealtime } from "../../../../components/dummyData";

import RealTimeItem from "./RealTimeItem";

const RealTimeBoardWrapper = styled.div`
  padding: 12px 6px;
  margin: 5px 0px;
  .title{
    display: inline-block;
    padding: 5px 12px;
    font-weight: 600;
   }

`


const RealTimeBoard = () => {
  const realTimeBoardContents = dummyRealtime;
  return (
    <RealTimeBoardWrapper className="board-wrapper">
      <div className="real-time-board-container">
        <h1 className="title">실시간 인기글</h1>
      </div>
      {realTimeBoardContents.map((item) => (
        <RealTimeItem
          item={item}
        />
      ))}
    </RealTimeBoardWrapper>
  )
};

export default RealTimeBoard;