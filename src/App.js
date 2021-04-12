import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
function App() {
  return (
    <>
    <Route component={MainPage} path='/' />
    <Route component={QuestionPage} path='/question' />
    </>
  );
}

export default App;
