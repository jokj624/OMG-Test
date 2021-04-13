import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const WrapperDiv = styled(Responsive)`
    position: relative;
    top : 10%;
    bottom : 10%;
`

const Wrapper = (props) => {
    return (
        <WrapperDiv {...props} />
    );
};

export default Wrapper;