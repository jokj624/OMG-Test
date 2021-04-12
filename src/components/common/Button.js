import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    width: 80%;
    font-size: 1.5em;
    font-weight: bold;
    padding: .5em .5em;
    background: #139af8;
    color: white;
    outline: none;
    box-shadow : 2px 2px 5px #999;
`;

const Button = (props) => {
    return (
        <StyledButton {...props} />
    );
};  

export default Button;