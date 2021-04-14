
import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import './App.css';

function App() {
  return (
    <>
    <Route component={MainPage} path="/" exact />
    <Route component={QuestionPage} path='/question/:id'  />
    </>
  );
}

export default App;
