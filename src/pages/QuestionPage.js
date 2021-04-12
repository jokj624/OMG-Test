import React from 'react';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';
import Quiz from '../components/common/Quiz';

const Qdiv = styled(Responsive)`
    
`;

const QuestionPage = () =>{
    return(
        <>
        <Qdiv>
            <Quiz />    
        </Qdiv>    
        </>
    );
};

export default QuestionPage;