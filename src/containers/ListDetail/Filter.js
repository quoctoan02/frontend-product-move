import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Filter.scss'
import NewFilterItem from './NewFilterItem';

class Filter extends Component {

    render() {

        let { listFilter, filterTitle } = this.props;
        return (
            <div className='filter-box'>
                <div className='filter-header'>
                    <span className='filter-title'>{filterTitle}</span>
                </div>
                <div className='filter-content'>
                    {listFilter && listFilter.map((item, index) => {
                        return (
                            <NewFilterItem
                                key={index}
                                filterInfo={item}
                            />
                        )
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
