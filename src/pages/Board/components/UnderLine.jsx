import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../../components/Colors";
import LinkList from "../../Main/components/LinkList";

const LineText = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => (props.isActive ? COLORS.black : COLORS.grey_400)};
    text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
`;

const UnderLine = ({ text, isActive }) => {
    return (
        <LineText isActive={isActive}>{text}
        </LineText>
    )
}

export default UnderLine;
