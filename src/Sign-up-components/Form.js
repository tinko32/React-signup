import React, {useState} from "react";
import Signupform from './Signupform';
import SignupformSuccess from "./SignupFormSuccess"
const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return(  <div>
            { !formIsSubmitted ? 
            ( <Signupform submitForm={submitForm} /> ) 
            : 
            ( <SignupformSuccess />)}
            
        </div>
    )
    
};

export default Form;