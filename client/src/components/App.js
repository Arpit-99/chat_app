import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Chat from '../screens/Chat';
import SignUp from '../screens/Signup';


import { BrowserRouter, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authToken, ...rest }) => (
    < Route {...rest} render={(props) =>
        (authToken
            ? <Component {...props} />
            : <Redirect to='/signup' />
        )} />
);


const Login = () => {
    return <h2>Please login</h2>
}

class App extends React.Component {


    render() {

        console.log('token', this.props.authToken);
        return (
            <BrowserRouter>
                <div>
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/login" exact component={Login} />
                    <PrivateRoute path="/chat" authToken={this.props.authToken} component={Chat} />
                </div>
            </BrowserRouter>
        );
    };



};

const mapStateToProps = (state) => {
    return { authToken: state.auth.token }
}

export default connect(mapStateToProps)(App);