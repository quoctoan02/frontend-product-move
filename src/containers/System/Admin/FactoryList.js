import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import Table from '../../ListDetail/Table';
import ModalCreateAccount from '../../ListDetail/Modal/ModalCreateAccount';
import CompanyList from './CompanyList/CompanyList';
class FactoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeModal: '',
            data: '',
            filterTitle: 'Sản xuất',

            isOpenModal: false,
        }
    }
    render() {
        return (
            <div className='list-container'>
                <CompanyList
                    typeFactory={"factory"}
                />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FactoryList);
