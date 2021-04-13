import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';
import Quiz from '../components/quizs/Quiz';
import Wrapper from '../components/common/Wrapper';

const question = () =>{
    return(
        <>
        <Quiz />    
        </>
    );
};

export default question;