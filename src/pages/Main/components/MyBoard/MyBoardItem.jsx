import React from "react";
import styled from "styled-components";

import newIcon from "../../../../assets/icon/new.svg"
import { COLORS } from "../../../../components/Colors";

const MyBoardItemWrapper = styled.div`
  margin: 8px 12px 0px 4px;
  display: flex;
  align-items: center;

  .category-text{
    font-size : 13px;
    font-weight: 450;
  }

  .title-text{
    padding 3px 10px;
    font-size : 11px;
    font-weight: 450;
    color: ${COLORS.grey_600};
  }
  
  .new-icon{
    width: 12px;
    height: 12px;
    margin-left: auto;
 }

`


const MyBoardItem = ({category, title, isNew}) => {

  return (
    <MyBoardItemWrapper className="board-item-wrapper">
      <p className="category-text">{category}</p>
      <p className="title-text">{title}</p>
      {isNew ? <img className="new-icon" src={newIcon}/>: null} 
    </MyBoardItemWrapper>
  )
};

export default MyBoardItem;