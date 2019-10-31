import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Pages from './pages'
import SearchPage from '@/pages/mobile/home/searchPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Pages}></Route>
        <Route path='/mobile/home/search' exact component={SearchPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
