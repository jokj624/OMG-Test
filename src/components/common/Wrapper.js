import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const WrapperDiv = styled(Responsive)`
    height : 100%;
    position: relative;
`

const Wrapper = (props) => {
    return (
        <WrapperDiv {...props} />
    );
};

export default Wrapper;