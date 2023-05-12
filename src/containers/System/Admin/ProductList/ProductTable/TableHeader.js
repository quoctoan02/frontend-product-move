import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './TableHeader.scss'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TableHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <div className='table-header-container'>
                <div className='search-product'>
                    <i className='fas fa-search'></i>
                    <input
                        type='text'
                        placeholder='Tìm sản phẩm theo mã, tên sản phẩm'

                    />
                    <div className='clear-current-text'>
                        <i className="fa-solid fa-xmark clear-current-text"></i>
                    </div>

                </div>
                <div className='list-btn-right'>
                    <Dropdown
                        className='dropdown-container'
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}>
                        <DropdownToggle
                            className='dropdown-btn'
                            caret
                            color='success'
                        >
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu className='dropdown-menu-content'>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
