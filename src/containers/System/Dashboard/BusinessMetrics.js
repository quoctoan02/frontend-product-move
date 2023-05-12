import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './BusinessMetrics.scss'

class BusinessMetrics extends Component {

    render() {

        return (
            <div className='business-result-box'>
                <div className='content-up'>
                    <span className='metrics-title'>Kết quả kinh doanh</span>
                    <div className='metris-filter'>
                    </div>
                </div>
                <div className='content-down'>
                    <div className='metrics-content'>
                        <div className='icon-left  revenue-icon'>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className='metrics-info'>
                            <span className='metrics-name'>Doanh thu</span>
                            <span className='metrics-number revenue-number'>1.000.000</span>
                        </div>
                    </div>
                    <div className='metrics-content'>
                        <div className='icon-left  revenue-icon'>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className='metrics-info'>
                            <span className='metrics-name'>Doanh thu</span>
                            <span className='metrics-number revenue-number'>1.000.000</span>
                        </div>
                    </div>
                    <div className='metrics-content'>
                        <div className='icon-left  revenue-icon'>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className='metrics-info'>
                            <span className='metrics-name'>Doanh thu</span>
                            <span className='metrics-number revenue-number'>1.000.000</span>
                        </div>
                    </div>
                    <div className='metrics-content'>
                        <div className='icon-left  revenue-icon'>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className='metrics-info'>
                            <span className='metrics-name'>Doanh thu</span>
                            <span className='metrics-number revenue-number'>1.000.000</span>
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessMetrics);
