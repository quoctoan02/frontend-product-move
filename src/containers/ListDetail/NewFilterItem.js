import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';
import './FilterItem.scss'
class FilterItem extends Component {

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
        let { filterInfo } = this.props
        return (
            <div className='filter-item-box'>
                <div className='filter-item-header'>
                    <span className='filter-item-title'>{filterInfo.label}</span>
                    <div
                        className='show-hide-icon '
                        onClick={() => this.showHideFilter()}
                    >
                        <i className={isShowFilter ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                </div>

                {isShowFilter &&
                    <div className='filter-item-content'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                        </FormGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
