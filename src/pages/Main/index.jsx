import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../../components/Colors";


import BottomNavigation from "../../layout/BottomNavigation";

import TopGudie from "./components/TopGuide";
import LinkList from "./components/LinkList";
import MyBoard from "./components/MyBoard/MyBoard";
import RealTimeBoard from "./components/RealTimeBoard/RealTimeBoard";
import PopularBoard from "./components/HotBoard/HotBoard";
import MainScreenSettingButton from "./components/MainScreenSetting";


const MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  padding-top: 70px;
`

const Index = () => {
  return (
    <MainWrapper>
      <div className="top-navigation">
        <TopGudie/>
      </div>
      <div>
       <LinkList/>
        <MyBoard />
        <RealTimeBoard />
        <PopularBoard />
      </div>

      <div className="main-button-wrapper">
        <MainScreenSettingButton text="홈 화면 설정"/>
      </div>

      <div className="bottom-navigation">
        <BottomNavigation activeNum={1} />
      </div>
    </MainWrapper>
  );
};

export default Index;
