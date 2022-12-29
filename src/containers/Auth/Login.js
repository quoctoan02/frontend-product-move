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
            let roleUrl = ''
            if (this.state.role === 'admin') {
                roleUrl = 'executive-board'
            }
            if (this.state.role === 'factory') {
                roleUrl = 'factory'
            }
            if (this.state.role === 'service-center') {
                roleUrl = 'insurance'
            }
            if (this.state.role === 'distribution-agent') {
                roleUrl = 'agency'
            }

            let res = await userService.handleLoginApi(this.state.username, this.state.password, roleUrl)
            if (res.accessToken) {
                this.props.userLoginSuccess({
                    username: this.state.username,
                    password: this.state.password,
                    role: this.state.role,
                });
                localStorage.setItem('accessToken', res.accessToken)
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

    handleChooseRole = (event) => {
        this.setState({
            role: event.target.value
        })
    }

    render() {



        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center login-title">Login</div>
                        <div className="col-12 form-group">
                            <label>Tên đăng nhập: </label>
                            <input
                                type="text"
                                className="form-control login-input"
                                placeholder="Enter your user name"
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeUserName(e)}

                            />

                        </div>
                        <div className="col-12 form-group">
                            <label>Mật khẩu: </label>
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
                        <div className="col-6">
                            <label>
                                Quyền đăng nhập:
                            </label>
                            <div className="col-6"></div>
                            <select className="form-select choose-role"
                                value={this.state.role}
                                onChange={this.handleChooseRole}>
                                <option value="admin" selected>Ban điều hành</option>
                                <option value="factory">Cơ sở sản xuất</option>
                                <option value="service-center">Trung tâm bảo hành</option>
                                <option value="distribution-agent">Đại lý phân phối</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <button
                                className="btn-login"
                                onClick={() => this.handleLogin()}
                            >Đăng nhập</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                    </div>
                </div>
            </div >
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
        userLoginSuccess: (userInfo, token) => dispatch(actions.userLoginSuccess(userInfo, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
