import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import Table from '../../ListDetail/Table';
import ModalCreateAccount from '../../ListDetail/Modal/ModalCreateAccount';
class ServiceCenterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeModal: '',
            data: '',
            filterTitle: 'Bảo hành',
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
        let { typeServiceCenter } = this.props;
        let { listFilter, filterTitle } = this.state
        return (
            <div className='list-container'>
                <ModalCreateAccount
                    isOpen={this.state.isOpenModal}
                    toggleOpenModal={this.toggleOpenModal}
                    createAccount={this.createAccount}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={filterTitle}
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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCenterList);
