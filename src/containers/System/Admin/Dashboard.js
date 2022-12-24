import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dashboard.scss'
import BusinessMetrics from './Dashboard/BusinessMetrics';
import RecentActivity from './Dashboard/RecentActivity';
import TopProduct from './Dashboard/TopProduct';
import ProductSales from './Dashboard/ProductSales';

class AdminDashboard extends Component {

    render() {
        return (
            <div className='dashboard-content'>
                <div className='dashboard-left'>
                    <BusinessMetrics />
                    <ProductSales />
                    <TopProduct />

                </div>
                <div className='dashboard-right'>
                    <RecentActivity />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
