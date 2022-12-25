import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
// import { userService } from '../../services/userService';
import userService from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            username: '',
            password: '',
            role: 'admin',
            showPassword: false,
        }
        this.state = {
            ...this.initialState
        };
    }

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    handleOnChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })

    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = async () => {
        try {

            let message = await userService.handleLoginApi(this.state.username, this.state.password);
            if (message) {
                this.props.userLoginSuccess({
                    username: this.state.username,
                    password: this.state.password,
                    role: this.state.role,
                });
                this.refresh()
                this.redirectToDashboardPage(this.state.role)
            }

        } catch (e) {
            console.log(e);
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    redirectToDashboardPage = (role) => {
        const { navigate } = this.props;
        navigate(`/${role}/dashboard`);
    }

    render() {



        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center login-title">Login</div>
                        <div className="col-12 form-group">
                            <label>Username: </label>
                            <input
                                type="text"
                                className="form-control login-input"
                                placeholder="Enter your user name"
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeUserName(e)}

                            />

                        </div>
                        <div className="col-12 form-group">
                            <label>Password: </label>
                            <div className="login-password">
                                <input
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    className="form-control login-input"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={(e) => this.handleOnChangePassword(e)}

                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.showPassword ? 'fas fa-eye show-password' : 'fas fa-eye-slash show-password'} ></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button
                                className="btn-login"
                                onClick={() => this.handleLogin()}
                            >Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center login-with mt-3">
                            <span className="">Or login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-facebook social-icon fb"></i>
                            <i className="fab fa-google-plus social-icon gg"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };


};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
