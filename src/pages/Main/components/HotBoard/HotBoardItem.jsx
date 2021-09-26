import React from "react";
import styled from "styled-components";

import likeIcon from "../../../../assets/icon/like.png";
import commentIcon from "../../../../assets/icon/comment.png";

import { COLORS } from "../../../../components/Colors";

const HotBoardItemWrapper = styled.div`
  margin: 8px 12px 8px 4px;

  .category-text{
    font-size : 13px;
    font-weight: 450;
  }

  .title-text{
    padding 3px 0px;
    font-size : 14px;
    font-weight: 400;
  }
  .upload-date{
    margin-left: auto;
    font-size: 12px;
    color: ${COLORS.grey_400};
  }
  .new-icon{
    width: 12px;
    height: 12px;
    margin-left: auto;
  }

  .status-wrapper{
    margin: -20px 0px 5px 5px;
    align-items: center;
    display: flex;
    float: right;

    .status-like{
      margin-left: 5px;
      color: ${COLORS.red};
      font-size: 14px;
    }

    .status-comments{
      margin-left: 5px;
      color: ${COLORS.green};
      font-size: 14px;
    }

    .status-icon{
      margin-left: 5px;
      width: 8px;
      height: 8px;      
    }
  }

`


const HotBoardItem = ({ item }) => {

  return (
    <HotBoardItemWrapper className="board-item-wrapper">
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
    </HotBoardItemWrapper>
  )
};

export default HotBoardItem;