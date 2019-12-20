import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Pages from './pages'
import Mobile from '@/pages/mobile'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Pages}></Route>
        <Route path='/mobile' exact component={Mobile}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
