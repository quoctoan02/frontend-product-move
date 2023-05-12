import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './StatusFilter.scss'

class StatusFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowFilter: true,
        }
    }

    showHideFilter = () => {
        this.setState(prevState => ({
            isShowFilter: !prevState.isShowFilter
        }));
    }

    render() {
        let { isShowFilter } = this.state
        console.log(isShowFilter)
        return (
            <div className='status-filter-box'>
                <div className='status-filter-header'>
                    <span className='status-filter-title'>Trạng thái sản phẩm</span>
                    <div
                        className='show-hide-icon '
                        onClick={() => this.showHideFilter()}

                    >
                        <i className={isShowFilter ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                </div>
                {isShowFilter &&
                    <div className='status-filter-content'>

                    </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(StatusFilter);
