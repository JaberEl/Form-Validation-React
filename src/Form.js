import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form_container">
                <span className="close_btn"></span>
                <div className="form_content_left">
                    <img src="img/img-2.svg" alt="spaceship" className="form_img"/>
            </div>

            {!isSubmitted ? (
                <FormSignup submitForm= {submitForm} />
                ):(
                <FormSuccess/>
                )}

            </div>
        </>
    );
};

export default Form
