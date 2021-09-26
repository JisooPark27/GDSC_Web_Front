import React from "react";
import styled from "styled-components";

import googleIcon from "../../../assets/icon/google.svg";
import gdscIcon from "../../../assets/icon/gdsc.svg";
import noticeIcon from "../../../assets/icon/notice.svg";
import schoolIcon from "../../../assets/icon/school.svg";

import { COLORS } from "../../../components/Colors";



const LinkListWrapper = styled.div`
    padding: 0px 0px 30px 0px;
    display: flex;
    justify-content: center;
    
    .link-item{
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: ${COLORS.grey_light};
      margin: 10px;

      .link-icon{
        width: 30px;
        height: 30px;
        margin: 10px;  
      }
      .link-text{
        font-size: 12px;
        text-align: center;
        word-break: keep-all;
      }
    }
`


const LinkList = () => {
  const list = [
    {
      text: "GDSC 홈",
      url: "https://gdsc.community.dev/seoul-national-university-of-science-and-technology",
      icon: gdscIcon
    },
    {
      text: "학교 홈페이지",
      url: "https://www.seoultech.ac.kr/index.jsp",
      icon: schoolIcon
    },
    {
      text: "학사 공지",
      url: "https://www.seoultech.ac.kr/life/sch/common/",
      icon: noticeIcon
    },
    {
      text: "Google",
      url: "https://google.com",
      icon: googleIcon
    }
  ]
  return (
    <LinkListWrapper>
      {list.map((item) => (
          <a className="link-item"
          href={item.url}>
          <img className="link-icon"
            src={item.icon}  >
          </img>
          <p className="link-text">{item.text}</p>
          </a>
      ))}
    </LinkListWrapper>
  )
};

export default LinkList;