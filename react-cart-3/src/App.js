import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Route/Routes';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
