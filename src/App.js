import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Switch,Routes,Route } from 'react-router-dom';
import App_provider from './Components/App_provider/App_provider';
import { FormProvider } from './Components/FormContext/form.context';
function App(props) {
  return (
      <div>
        <FormProvider>
        <App_provider/>
        </FormProvider>
        </div>
  );
}
export default App;