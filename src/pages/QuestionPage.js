import React from 'react';
import Footer from '../components/common/Footer';
import QuizCard from '../components/quizs/Quizcard';

const QuestionPage = ({ match }) =>{
    return(
        <>
        <QuizCard match={match} />  
        <Footer />  
        </>
    );
};

export default QuestionPage;