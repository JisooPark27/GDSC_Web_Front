import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../components/Colors";

import mypageLogo from "../../../assets/nav/mypage.svg";
import searchLogo from "../../../assets/nav/search.svg";


const TopGuideWrapper = styled.div`
    padding: 16px;
    background-color: white;

    .everytime-text {
        color: ${COLORS.red};
        padding: 0px;
        font-size: 10px;
    }


    .guide-contents {
        margin-top: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        h2 {
          font-size: 16px;
          font-weight: 700;
        }
  
        .icon-wrapper {
          height: 20px;
  
          img {
            width: 20px;
            height: 20px;
          }
        }
  
        .mypage-icon {
          margin-left: 16px;
        }
      }

`


const TopGuide = () => {
    return (
        <TopGuideWrapper>
            <p className="everytime-text">에브리 타임</p>
            <div className="guide-contents">
                <h2>서울과학기술대학교</h2>
                <div className="icon-wrapper">
                    <img src={searchLogo} alt="검색 아이콘"/>
                    <img src={mypageLogo} alt="마이 페이지 아이콘"/>
                </div>
            </div>
        </TopGuideWrapper>
    )
};

export default TopGuide;