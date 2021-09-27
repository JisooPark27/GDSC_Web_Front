import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";

import { dummyMessage } from "../../components/dummyData"
import { COLORS } from "../../components/Colors";

const MessageWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 48px;
  .title{
    font-size: 20px;
    text-decoration: underline;
  }

  .message-wrapper{
    padding: 30px 0px;
    
    .message-content{
      border-bottom: 1px solid ${COLORS.grey_600};
      margin: 15px 0px;
      .message-property{
        display: flex;
      
        .nick{
          font-size: 16px;
          font-weight: 550;
        }
        .date{
          margin-left: auto;
          font-size: 14px;
          font-weight: 400;
          color: ${COLORS.grey_500};

        }
      }
      .content-title{
      padding: 5px 0px;
      font-size: 12px;
      font-weight: 350;
    }    
  }

}
`


const Index = () => {
  const messageContents = dummyMessage;
  return (
    <MessageWrapper>
      <div className="title">쪽지함</div>
      <div className="message-wrapper">
        {messageContents.map((item) => (
          <div className="message-content">
            <div className="message-property">
              <p className="nick">{item.nick}</p>
              <p className="date">{item.date}</p>
            </div>
            <p className="content-title">
              {item.title}
            </p>
          </div>

        ))}

        <div className="bottom-navigation">
          <BottomNavigation activeNum={3} />
        </div>
      </div>
    </MessageWrapper>
  );
};

export default Index;