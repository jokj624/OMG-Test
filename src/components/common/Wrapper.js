import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const WrapperDiv = styled(Responsive)`
    display: flex;
    position: relative;
    top: 5%;
    justify-content: center;
`

const Wrapper = (props) => {
    return (
        <WrapperDiv {...props} />
    );
};

export default Wrapper;