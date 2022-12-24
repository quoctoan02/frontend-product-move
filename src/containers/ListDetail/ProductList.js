import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductList.scss'
import Filter from '../../List/Filter';
import Table from '../../List/Table';
import ModalCreateAccount from './ModalCreateAccount';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
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
        this.setState({ isOpenModal: !this.state.isOpenModal })
    }

    render() {
        return (
            <div className='list-container'>
                <ModalCreateAccount
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleOpenModal}
                    createAccount={this.createAccount}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={this.state.listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={"Sản xuất"}
                    />
                </div>
                <div className='product-table-right'>
                    <Table
                        toggleOpenModal={this.toggleOpenModal}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
