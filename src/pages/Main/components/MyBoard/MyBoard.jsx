import React from "react";
import styled from "styled-components";

import { dummyMyboard } from "../../../../components/dummyData";

import MyBoardItem from "./MyBoardItem";

const MyBoardWrapper = styled.div`
  padding: 12px 6px;
  margin: 5px 0px;
  .title{
    display: inline-block;
    padding: 5px 12px;
    font-weight: 450;
  }

`


const MyBoard = () => {
  const myBoardContents = dummyMyboard;

  return (
    <MyBoardWrapper className="board-wrapper">
      <div className="myboard-container">
        <h1 className="title">즐겨찾는 게시판</h1>
      </div>
      <div className="my-board-contents-wrapper">
        {myBoardContents.map((item) => (
          <MyBoardItem
            category={item.category}
            title={item.title}
            isNew={item.isNew}
          />

        ))}
      </div>
    </MyBoardWrapper>
  )
};

export default MyBoard;