import React from 'react';

import './Form.css';

import InputGroup from '../../../containers/InputGroup';

import { Form, Field } from 'react-final-form';

// const validate = values => {
//     const errors = {}
//     if (!values.name) {
//         errors.name = 'Required'
//     }
//     if (!values.password) {
//         errors.password = 'Required'
//     }
//     return errors
// }



const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        validate={props.validate}
        render={({ handleSubmit, form, submitting, pristine, values, error, errors, submitError, touched }) => (
            <form onSubmit={handleSubmit}>
                <h2 className="text-center m-b-md">Sign Up</h2>
                <InputGroup>
                    <Field name="name" component="input" type="text" placeholder="name" />
                    {errors.name && touched.name ?
                        <div className="m-b-lg">
                            <p className="absolute info-text">{errors.name}</p>
                        </div>
                        : <div className="m-b-lg"></div>}
                </InputGroup>
                <InputGroup>
                    <Field name="email" component="input" type="email" placeholder="email" />
                    {errors.email && touched.email ?
                        <div className="m-b-lg">
                            <p className="absolute info-text">{errors.email}</p>
                        </div>
                        : <div className="m-b-lg"></div>}
                </InputGroup>
                <InputGroup>
                    <Field name="password" component="input" type="password" placeholder="password" />
                    {errors.password && touched.password ?
                        <div className="m-b-lg">
                            <p className="absolute info-text">{errors.password}</p>
                        </div>
                        : <div className="m-b-lg"></div>}
                </InputGroup>
                <InputGroup>
                    <Field name="confirmPassword" component="input" type="password" placeholder="confirm-password" />
                    {errors.confirmPassword && touched.confirmPassword ?
                        <div className="m-b-lg">
                            <p className="absolute info-text">{errors.confirmPassword}</p>
                        </div>
                        : <div className="m-b-lg"></div>}
                </InputGroup>
                <div className="m-b-md"></div>
                {submitError && <div className="error">{submitError}</div>}
                <button type="submit" className="fw button-primary">Sign Up</button>
                <div className="m-b-md"></div>
            </form>
        )}
    />
)

export default LoginForm;