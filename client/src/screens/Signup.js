import React from 'react';

import { connect } from "react-redux";

import BigBox from '../containers/BigBox';
import InsideBigBox from '../containers/InsideBigBox';
import LoginForm from '../components/SignUp/Form/Form'
// import { FORM_ERROR } from 'final-form'
import { signUp } from '../actions';

class Login extends React.Component {
    onSubmit = values => {
        this.props.signUp(values)
    }

    validate = values => {
        const errors = {}
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required'
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Password does not match'
        }
        return errors
    }




    render() {
        return (
            <BigBox>
                <InsideBigBox>
                    <LoginForm
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                    />
                </InsideBigBox>
            </BigBox>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state:', JSON.stringify(state, null, 2));
    return state
}


export default connect(mapStateToProps, { signUp })(Login);