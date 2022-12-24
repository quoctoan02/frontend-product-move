

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './RecentActivity.scss'

class RecentActivity extends Component {

    render() {

        return (
            <div className='recent-activity-box'>
                <div className='recent-activity-header'>
                    <span className='recent-activity-title'>Hoạt động gần đây</span>
                </div>
                <div className='recent-activity-content'>
                    <div className='activity-info'>
                        <div className='activity-icon'>
                            <div className='circle-icon'></div>
                            <div className='dashed-rope'></div>
                        </div>
                        <div className='activity-detail'>
                            <span className='activity-text'>Phùng Quốc Toàn vừa đăng nhập hệ thống </span>
                            <p className='activity-time'>23/11/2022 16:45:45</p>
                        </div>
                    </div>
                    <div className='activity-info'>
                        <div className='activity-icon'>
                            <div className='circle-icon'></div>
                            <div className='dashed-rope'></div>
                        </div>
                        <div className='activity-detail'>
                            <span className='activity-text'>Phùng Quốc Toàn vừa đăng nhập hệ thống </span>
                            <p className='activity-time'>23/11/2022 16:45:45</p>
                        </div>
                    </div>
                    <div className='activity-info'>
                        <div className='activity-icon'>
                            <div className='circle-icon'></div>
                            <div className='dashed-rope'></div>
                        </div>
                        <div className='activity-detail'>
                            <span className='activity-text'>Phùng Quốc Toàn vừa đăng nhập hệ thống </span>
                            <p className='activity-time'>23/11/2022 16:45:45</p>
                        </div>
                    </div>

                </div>

            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity);
