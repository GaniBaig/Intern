import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Switch,Routes,Route } from 'react-router-dom';
import App_provider from './Pages/App_provider/App_provider';

function App() {
  return (
      <div>
        <App_provider/>
      </div>
  );
}
export default App;