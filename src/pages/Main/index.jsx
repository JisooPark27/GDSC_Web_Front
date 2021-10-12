import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link, useHistory } from "react-router-dom";

import BottomNavigation from "../../layout/BottomNavigation";

import TopGudie from "./components/TopGuide";
import LinkList from "./components/LinkList";
import MyBoard from "./components/MyBoard/MyBoard";
import RealTimeBoard from "./components/RealTimeBoard/RealTimeBoard";
import PopularBoard from "./components/HotBoard/HotBoard";
import MainScreenSettingButton from "./components/MainScreenSetting";


const MainWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-bottom: 48px;
  
  .board{
    padding: 10px 0px;
  }

  .setting-buttion {
    margin : 0px 16px;
    height: 48px;
    border-radius: 10px;

    span {
      width: 100%;
    }
}
`

const Index = () => {

  const history = useHistory();

  const [setting, setSetting] = useState({
    isMine: true,
    isRealTime: true,
    isHot: true,
  })

  const onClickBtn = () => {
    history.push("/setting");
  }

  useEffect(() => {
    const defaultSetting = { isMine: true, isRealTime: true, isHot: true };
    const storage = window.localStorage.getItem("setting");

    if (!storage) {
      window.localStorage.setItem("setting", JSON.stringify(defaultSetting));
    } else {
      const storageJson = JSON.parse(storage);
      setSetting({
        isMine: storageJson.isMine,
        isRealTime: storageJson.isRealTime,
        isHot: storageJson.isHot
      })

    }
  }, []);
  return (
    <MainWrapper>
      <div className="top-navigation">
        <TopGudie />
      </div>
      <div className="board">
        <LinkList />
        {setting.isMine && <MyBoard />}
        {setting.RealTimeBoard && <RealTimeBoard />}
        {setting.isHot && <PopularBoard />}
      </div>

      <div className="main-button-wrapper" onClick={onClickBtn}>
        <MainScreenSettingButton text="홈 화면 설정" />
      </div>

      <div className="bottom-navigation">
        <BottomNavigation activeNum={1} />
      </div>
    </MainWrapper>
  );
};

export default Index;
