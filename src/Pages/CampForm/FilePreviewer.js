import { useState, useRef } from "react";
export default function FilePreviewer() {
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
  return (
    <div>
      <h1>Preview Image/Video</h1>
      <div className="btn-container">
        <input ref={filePicekerRef} accept="image/*, video/*" onChange={previewFile} type="file"/>
      </div>
      <div className="preview">
        {imagePreview != null && <img src={imagePreview} alt="" />}
        {videoPreview != null && <video controls src={videoPreview}></video>}
      </div>
    </div>
  );
}