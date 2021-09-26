import React from "react";
import styled from "styled-components";

import tmpProfile from "../../../../assets/img/0.png"
import likeIcon from "../../../../assets/icon/like.png";
import commentIcon from "../../../../assets/icon/comment.png";

import { COLORS } from "../../../../components/Colors";

const RealTimeItemWrapper = styled.div`
  margin: 8px 12px 0px 4px;
  align-items: center;

  .user-wrapper{
    display: flex;
    margin: 18px 5px 0px 0px;
    align-items: center;
    
    .profile-img{
      padding: 0px 10px;
      width: 30px;
      height: 30px;
    }

   .upload-date{
      margin-left: auto;
      font-size: 12px;
      color: ${COLORS.grey_400};
    }
  }
  .content{
    margin: 10px 0px;
    
    .title-text{
      font-size : 16px;
      font-weight: 450;
    }

    .preview-content{
      margin: 2px 0px;
      font-size : 14px;
      font-weight: 400;
      line-height: 1.5;
    }
    
    .category-text{
      margin: 3px 0px;
      font-size : 11px;
      font-weight: 350;
    }

    .status-wrapper{
      display: flex;
      float: right;
      align-items: center;

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
        width: 10px;
        height: 10px;
        
      }
    }
  
  }

`


const RealTimeItem = ({ item }) => {
  const profileImg = item.profileUrl ? item.profileUrl : tmpProfile;
  return (
    <RealTimeItemWrapper className="board-item-wrapper">
      <div className="user-wrapper">
        <img src={profileImg} className="profile-img" />
        <p> {item.nick} </p>
        <p className="upload-date"> {item.date} </p>
      </div>
      
      <div className="content">
        <p className="title-text">{item.title}</p>
        <p className="preview-content">{item.contents}</p>
        <p className="category-text">{item.category}</p>
        
        <div className="status-wrapper">
          <img className="status-icon" src={likeIcon} /> 
          <p className="status-like">{item.like}</p>
          <img className="status-icon" src={commentIcon} /> 
          <p className="status-comments">{item.comments}</p>
        </div>
      </div>
    </RealTimeItemWrapper>
  )
};

export default RealTimeItem;