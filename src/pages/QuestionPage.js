import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';
import QuizCard from '../components/quizs/Quizcard';
import Wrapper from '../components/common/Wrapper';

const QuestionPage = ({ match }) =>{
    return(
        <>
        <QuizCard match={match} />    
        </>
    );
};

export default QuestionPage;