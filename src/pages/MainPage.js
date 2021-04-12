import React from 'react';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';

const MainDiv = styled(Responsive)`
`;
const main = ( { history }) => {
  return (
  <>
    <MainDiv>
        <Button onClick ={ () =>
            {history.push("/question")}}>시작 하기</Button>
    </MainDiv>
  </>
  );
}
export default main;