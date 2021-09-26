import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../components/Colors";

const MainScreenSettingWapper = styled.div`
margin: 10px 0px;
padding: 10px;    
background-color: ${COLORS.grey_400};
color: ${COLORS.grey_200};
border-radius: 5px;
`


const MainScreenSetting = ({text, onclick}) => {
    return (
        <MainScreenSettingWapper className="arrange-center-center">
            <h1>{text}</h1>
        </MainScreenSettingWapper>
    )
};

export default MainScreenSetting;