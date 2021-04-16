import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import { Helmet } from 'react-helmet-async';
import './App.css';


function App() {
  return (
    <>
    <Helmet>
        <title>오마이걸 테스트</title>
    </Helmet>
    <Route component={MainPage} path="/" exact />
    <Route component={QuestionPage} path='/question/:id'  />
    <Route component={ResultPage} path='/result/:member'/>
    </>
  );
}

export default App;
