import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Pages from './pages'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Pages}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
