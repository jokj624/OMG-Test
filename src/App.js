import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

import './App.css';


function App() {
  return (
    <>
    <Route component={MainPage} path="/" exact />
    <Route component={QuestionPage} path='/question/:id'  />
    <Route component={ResultPage} path='/result'/>
    </>
  );
}

export default App;
