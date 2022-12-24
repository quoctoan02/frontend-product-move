import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import Table from '../../ListDetail/Table';
import ModalCreateAccount from '../../ListDetail/Modal/ModalCreateAccount';
import CompanyList from './CompanyList/CompanyList';

class DistributionAgentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeModal: '',
            data: '',
            filterTitle: 'Phân phối',
            listFilter: [
                { typeFilter: 'province', label: 'Địa chỉ' },
                { typeFilter: 'factory', label: 'Cơ sở sản xuất' },
                { typeFilter: 'distribution-agent', label: 'Nhà phân phối' },
                { typeFilter: 'service-center', label: 'Trung tâm bảo hành' }
            ],
            isOpenModal: false,
        }
    }

    toggleOpenModal = (typeModal) => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })

        if (this.state.isOpenModal) {
            this.setState({
                typeModal
            })
        }
    }

    render() {
        ;

        return (
            <div className='list-container'>
                <CompanyList />
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

export default connect(mapStateToProps, mapDispatchToProps)(DistributionAgentList);
