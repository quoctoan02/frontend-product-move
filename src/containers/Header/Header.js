import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import * as menus from './Menu';
import { USER_ROLE } from '../../utils';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuApp: []
        }
    }
    componentDidMount() {
        let { userInfo } = this.props
        let menu = []
        if (userInfo && !_.isEmpty(userInfo)) {
            let { role } = userInfo;
            switch (role) {
                case USER_ROLE.FACTORY:
                    menu = menus.factoryMenu
                    break;
                case USER_ROLE.DISTRIBUTION_AGENT:
                    menu = menus.distributionAgentMenu
                    break;
                case USER_ROLE.SERVICE_CENTER:
                    menu = menus.serviceCenterMenu
                    break;
                default:
                    menu = menus.adminMenu
                    break;

            }

            this.setState({
                menuApp: menu
            })
        }
    }

    render() {
        const { processLogout } = this.props;
        return (
            <div className="header-container">
                <div className='container top-header-container'>
                    <div className='left-content'>
                        <a href='/'>
                            <img className='header-logo' src="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" alt='BigCorp' title='BigCorp' />
                        </a>
                    </div>
                    <div className='right-content'>
                        <div className='support'>
                            <i className='fas fa-question-circle'> Support </i>
                        </div>
                        <span className='account'>
                            admin
                        </span>
                        <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>

                <div className='nav-bar-container'>
                    {/* thanh navigator */}
                    <div className="container">
                        <Navigator menus={this.state.menuApp} />
                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
