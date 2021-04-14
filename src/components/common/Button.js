import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    width: ${props=>props.width || "80%"};
    font-size: ${props=>props.fontSize || "1.5em"};
    font-weight: ${props=>props.weight || "bold"};
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