import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./config/router/Router";
import './App.css'


function App() {

  return (
      <div className='wrap__app'>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
      </div>

  );
}

export default App;
