import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

import './App.css';


function App() {
  return (
    <>
    <Route component={MainPage} path="/" />
    </>
  );
}

export default App;
