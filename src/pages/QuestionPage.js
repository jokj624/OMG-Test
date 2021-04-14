import React from 'react';
import QuizCard from '../components/quizs/Quizcard';

const question = ({ match }) =>{
    return(
        <>
        <QuizCard match={match} />    
        </>
    );
};

export default question;