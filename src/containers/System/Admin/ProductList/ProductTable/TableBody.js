import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './TableBody.scss'

class TableBody extends Component {

    render() {
        return (
            <div className='product-filter-box'>
                <div className='product-filter-header'>
                    <span className='product-filter-title'>Hàng hóa</span>
                </div>
                <div className='product-filter-content'>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
