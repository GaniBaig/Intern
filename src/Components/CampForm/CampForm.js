import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import '@shopify/polaris/build/esm/styles.css';
import {Button} from '@shopify/polaris';
import './CampForm.css';
import { useState,useContext } from 'react';
import FormContext from '../FormContext/form.context';
function CampForm(props) {
  const [pgNo, setPgNo] = useState(1);
  const {open,setOpen}=useContext(FormContext);
    return (
      <div className='hieght-fit'>
      <p>Page {pgNo} / 2</p>
      {pgNo == 1 ? <Page1 /> : <Page2/>}
      <div className="flex-buttons">
      {pgNo > 1 && (
            <Button 
            onClick={() => {
              let pg = pgNo;
              setPgNo(pg - 1);
            }}
            >Back</Button>
          )}
      {pgNo < 2 && (
            <Button
            onClick={() => {
              let pg = pgNo;
              setPgNo(pg + 1);
            }}
            >Next</Button>
          )}
    {pgNo == 2 && (
            <Button onClick={setOpen} 
            >Submit</Button>
          )}   
          </div>
     </div> 
    );
}

export default CampForm;