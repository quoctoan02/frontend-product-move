import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './TopProduct.scss'

class TopProduct extends Component {

    render() {

        return (
            <div className='top-product-box'>
                <div className='top-product-header'>
                    <div className='top-product-title'>
                        <span>Top sản phẩm bán chạy </span>
                    </div>
                </div>
                <div className='top-product-content'>

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

export default connect(mapStateToProps, mapDispatchToProps)(TopProduct);
