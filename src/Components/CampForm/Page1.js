import React,{useContext} from 'react';
import { useRef } from "react";
import { useForm } from "react-hook-form";
import {Form, FormLayout, Checkbox, TextField, Button} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import {useState, useCallback} from 'react';
import './CampForm.css';
import FormContext from '../FormContext/form.context';
function Page1(props) {
    const {imagePreview, setImagePreview} =useContext(FormContext);
    const {videoPreview, setVideoPreview} =useContext(FormContext);

    const { register, handleSubmit } = useForm() 
    const myref=useRef(null);
    function previewFile(e) {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
      
    }
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
        setVideoPreview(null);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
        setImagePreview(null);
      }
    };
  }
  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
  }

      const {chkbox, setchkbox} = useContext(FormContext);
      const {cname, setcname} = useContext(FormContext);
      const {urlname, seturlname} = useContext(FormContext);
      
      const onSubmit = useCallback((_event) => {
        console.log(_event)
        setImagePreview(null);
         setVideoPreview(null);
          setcname('');
          seturlname('');
          setchkbox(false);
  
        }, []);
    //     function handleChange(e) {
    //       console.log(e.target.files);
    //       setFile(URL.createObjectURL(e.target.files[0]));
    //   }
    return (
        <div className="flex-A">
        
        <div className="flex-B">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLayout>
          <TextField
            value={cname}
            onChange={useCallback(
                (value) => setcname(value),
                [],
              )}
            label="Campaign Name"
            type="text"
            
          />
          <TextField
            value={urlname}
            onChange={useCallback(
                (value) => seturlname(value),
                [],
              )}
            label="URL"
            type="url"
            
          />
          <div className="App">
              <h1 className='App-h1'>Upload Image/Video</h1>
              <div className="btn-container">
              <input ref={myref} accept="image/*, video/*" onChange={previewFile} type="file" name="Multimedia"/>
            </div>
            
        </div>
        <div className='flex-C2' >
        {imagePreview != null && <img className="flex-D" src={imagePreview} alt="" />}
        {videoPreview != null && <video className="flex-D" controls src={videoPreview}></video>}
        </div>
  
          <Checkbox
            label="Sign up for the Product"
            checked={chkbox}
            onChange={
                
                useCallback(
                (value) => 
                setchkbox(value),
                [],
              )}
          />
          
        </FormLayout>
      </Form>
      </div>

      <div className='flex-C1' >
        {imagePreview != null && <img className="flex-D" src={imagePreview} alt="" />}
        {videoPreview != null && <video className="flex-D" controls src={videoPreview}></video>}
        </div>
      </div>
    );
}

export default Page1;