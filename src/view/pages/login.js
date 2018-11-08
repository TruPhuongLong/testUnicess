import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmail } from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';


import {LoginForm} from '../components/login-form';

class Login extends React.Component {

    onSubmit = (event) => {
        event.preventDefault();

        // request server login
        this.props.login(this.state.fields)
            .then(res => {
                this.props.history.push('/');
            })
    }

    render() {
        
        return (
            <div className="container" style={{padding: '200px 0'}}>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (model) => {
            // return signupAction(model)
            //     .then(action => dispatch(action));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Login));