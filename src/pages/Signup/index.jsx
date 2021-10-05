import React, { useState } from 'react'
import styled from 'styled-components'

import MainInput from "../../components/Input/MainInput";
import MainButton from '../../components/button/MainButton';

import { COLORS } from "../../components/Colors";

const MainWrapper = styled.div`
    .label-text {
        font-size: 16px;
        font-weight: 450;
        margin-left: 16px;
        margin-top: 24px;
        color: ${COLORS.green};
    }
    
    .input-wrapper {
        margin: 8px 16px 0px 16px;
    }
`;



const Index = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [major, setMajor] = useState("");

    const [errorNum, setErrorNum] = useState(0);

    const onChangeId = (e) => {
        setId(e.target.value)
    }
    const onChangePassword = (e) => {
        const { value } = e.target;

        const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
        const patternEng = /[a-zA-Z]/;
        const patternNum = /[0-9]/;
        if (
            !patternSpecial.test(value) ||
            !patternNum.test(value) ||
            !patternEng.test(value)
        ) {
            setErrorNum(1);
        } else {
            setErrorNum(0);
        }
        setPassword(value);

    }
    const onChangeRePassword = (e) => {
        const {value} = e.target;

        if(!(value === password)) {
            setErrorNum(2)
        }else{
            setErrorNum(0);
        }
        setRePassword(value)
    }
    const onChageName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        const {value} = e.target;

        const patternEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(patternEmail.test(value)){
            setErrorNum(0);
        } else{
            setErrorNum(3);
        }
        setEmail(value)
        
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }
    const onChangeMajor = (e) => {
        setMajor(e.target.value)
    }

    return (
        <MainWrapper>
            <p className="label-text">아이디</p>
            <div className="input-wrapper">
                <MainInput
                    value={id} type="text"
                    onChange={onChangeId}
                    placeholder="아이디를 입력해주세요."
                />
            </div>
            <p className="label-text">비밀번호</p>
            <div className="input-wrapper">
                <MainInput value={password}
                    type="password"
                    onChange={onChangePassword}
                    placeholder="비밀번호를 입력해주세요."
                />
            </div>
            {errorNum === 1 &&  <p style={{color: 'red'}}>비밀번호가 조건에 맞지 않습니다.</p>}
            <p className="label-text">비밀번호 확인</p>
            <div className="input-wrapper">
                <MainInput
                    value={rePassword}
                    type="password" onChange={onChangeRePassword}
                    placeholder="비밀번호를 다시 입력해주세요."
                />
            </div>
            {errorNum === 2 &&  <p style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</p>}
            <p className="label-text">이름</p>
            <div className="input-wrapper">
                <MainInput
                    value={name}
                    type="text" onChange={onChageName}
                    placeholder="이름을 입력해주세요."
                />
            </div>
            <p className="label-text">이메일</p>
            <div className="input-wrapper">

                <MainInput
                    value={email}
                    type="text" onChange={onChangeEmail}
                    placeholder="이메일을 입력해주세요."
                />
            </div>
            {errorNum === 3 &&  <p style={{color: 'red'}}>이메일 형식이 맞지 않습니다.</p>}
            <p className="label-text">닉네임</p>
            <div className="input-wrapper">
                <MainInput
                    value={nickname}
                    type="text" onChange={onChangeNickname}
                    placeholder="닉네임을 입력해주세요."
                />
            </div>
            <p className="label-text">전공</p>
            <div className="input-wrapper">
                <MainInput
                    value={major}
                    type="text" onChange={onChangeMajor}
                    placeholder="전공을 입력해주세요."
                />
            </div>

            <MainButton
                text="회 원 가 입"
                onClick={() => alert("회원가입")}
            />
        </MainWrapper>
    )
}


export default Index;