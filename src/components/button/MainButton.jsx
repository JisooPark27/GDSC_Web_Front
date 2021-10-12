import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../Colors";

const CustomButton = styled.div`
  margin: 10px 8px;
  border-radius: 10px;
  background-color: ${COLORS.red};
  height: 32px;
  span {
    font-size: 14px;
    color: ${COLORS.grey_200};
    font-weight: 700;
  }
`;

const MainButton = ({ text, onClick }) => {
  return (
    <CustomButton className="arrange-center-center" onClick={onClick}>
      <span>{text}</span>
    </CustomButton>
  );
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.any,
};

export default MainButton;