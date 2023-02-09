import React from 'react';
import { useRef } from "react";
import {Form, FormLayout, Checkbox, TextField, Button} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import {useState, useCallback} from 'react';
import './CampForm.css';
import FilePreviewer from './FilePreviewer';
function CampForm(props) {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const filePicekerRef = useRef(null);
 
  function previewFile(e) {
  // Reading New File (open file Picker Box)
  const reader = new FileReader();
  // Gettting Selected File (user can select multiple but we are choosing only one)
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    reader.readAsDataURL(selectedFile);
  }
  // As the File loaded then set the stage as per the file type
  reader.onload = (readerEvent) => {
    if (selectedFile.type.includes("image")) {
      setImagePreview(readerEvent.target.result);
    } else if (selectedFile.type.includes("video")) {
      setVideoPreview(readerEvent.target.result);
    }
  };
}
function clearFiles() {
  setImagePreview(null);
  setVideoPreview(null);
}
  const [file, setFile] = useState();
    const [newsletter, setNewsletter] = useState(false);
    const [cname, setcname] = useState('');
    const [urlname, seturlname] = useState('');
    
    const handleSubmit = useCallback((_event) => {
      setImagePreview(null);
       setVideoPreview(null);
        setcname('');
        seturlname('');
        setNewsletter(false);

      }, []);
    
      const handleNewsLetterChange = useCallback(
        (value) => setNewsletter(value),
        [],
      );
      const handleurlChange = useCallback(
        (value) => seturlname(value),
        [],
      );    
      const handlecnameChange = useCallback((value) => setcname(value), []);
      function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
      <div className="flex-A">
        
        <div className="flex-B">
        <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={cname}
            onChange={handlecnameChange}
            label="Campaign Name"
            type="text"
            
          />
          <TextField
            value={urlname}
            onChange={handleurlChange}
            label="URL"
            type="url"
            
          />
          <div className="App">
              <h1 className='App-h1'>Upload Image/Video</h1>
              <div className="btn-container">
              <input ref={filePicekerRef} accept="image/*, video/*" onChange={previewFile} type="file"/>
            </div>
            
        </div>
          <Checkbox
            label="Sign up for the Product"
            checked={newsletter}
            onChange={handleNewsLetterChange}
          />
          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
      </div>
      <div className='flex-C' >
        {imagePreview != null && <img className="flex-D" src={imagePreview} alt="" />}
        {videoPreview != null && <video className="flex-D" controls src={videoPreview}></video>}
        </div>
      </div>
    );
}

export default CampForm;