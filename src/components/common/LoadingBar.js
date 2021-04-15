import React, { useState } from "react";
import styled from "styled-components";
import './Main.css';

const Progress = styled.div`
    position: relative;
    backgrond-color: #d8d8d8;
    text-align: center;
    font-family: 'TTTogether';
    border-radius: 20px;
    height: 100%;
    width: 100%;
    margin : 0 auto;   
    @media (max-width: 350px) {
        width: 300px;
    }

`;

const Done = styled.div`
    background: linear-gradient(to left, white, #b5c3ff);
    box-shadow: 0 3px 3px -5px #8BC4C1, 0 2px 5px #b5c3ff;
    border-radius: 20px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    hegiht: 100%;
    width: 0;
    opacity: 0;
    transition: 3s ease;
    margin-top: 10%;
`;

const Text = styled.span`
    font-size: 1.5em;
    color: #b5c3ff;
`;
const LoadingBar = ({ done }) => {
    const [style, setStyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 300);
    return (
        <Progress>
            <Text>나와 비슷한<br /><Text style={{ fontSize: '1.7em', color: '#e7eaf7' }}>오마이걸</Text><br /> 멤버를 분석 중입니다.</Text>
            <Done style={style}>{done}%</Done>
        </Progress>
    )
}


export default LoadingBar;
