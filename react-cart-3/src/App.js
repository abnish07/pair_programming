import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import CartApplication from './components/CartApplication'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CartApplication />
      </BrowserRouter>
    </div>
  );
}

export default App;
