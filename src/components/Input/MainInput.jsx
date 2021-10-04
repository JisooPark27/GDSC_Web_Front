import React from "react";
import styled from "styled-components";

import { COLORS } from "../Colors";

const CustomInput =styled.div``;


const MainInput = ({ value, type, onChange, handleFocus, placeholder }) => {
    return (
      <CustomInput
        value={value}
        type={type}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
        placeholder={placeholder}
        spellCheck={false}
      />
    );
  };


  export default MainInput;