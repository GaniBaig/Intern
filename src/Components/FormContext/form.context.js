import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [cname, setcname] = useState('');
  const [urlname, seturlname] = useState('');
  const [chkbox, setchkbox] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <FormContext.Provider 
      value={{
        cname,
        urlname,
        chkbox,
        imagePreview,
        videoPreview,
        open,
        setcname,
        seturlname,
        setchkbox,
        setImagePreview,
        setVideoPreview,
        setOpen
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext;