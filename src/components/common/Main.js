import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

import MainCard from './Maincard';


const Wrapper = styled.div`
    height : 100%;
`

const Main = () => {
    return (
      <>
      <Wrapper>
        <MainCard/>
        </Wrapper>
      </>
    );
  };
  
  export default Main;