import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);


    return (
        <div className="form_content_right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className="form_inputs">
                    <label htmlFor="username" className="form_label"> Username
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form_input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form_inputs">
                    <label htmlFor="email" className="form_label"> Email
                    </label>
                    <input 
                        id="email"
                        type="text" 
                        name="email" 
                        className="form_input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form_inputs">
                    <label htmlFor="password" className="form_label"> Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form_input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form_inputs">
                    <label htmlFor="password2" className="form_label"> Confirm Password
                    </label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        className="form_input"
                        placeholder="Enter your password2"
                        value={values.password2 }
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form_input_btn" type="submit">Sign up</button>
                <span className="form_input_login">
                    Already have an account? Log in <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup;
