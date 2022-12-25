import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../../ListDetail/Filter';
import Table from '../../../ListDetail/Table';
import ModalCreateAccount from '../../../ListDetail/Modal/ModalCreateAccount';
import TableDataGrid from '../../../ListDetail/TableDataGrid'
import * as menuCompany from './menuCompany'
class CompanyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: '',
            isOpenModal: false,
        }
    }

    componentDidMount() {
        this.handleMenuCompany(this.props.typeCompany);
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

    handleMenuCompany = (typeCompany) => {
        if (typeCompany === 'factory') {
            this.setState({
                menuList: menuCompany.factoryProps
            })
        }
        if (typeCompany === 'service-center') {
            this.setState({
                menuList: menuCompany.serviceCenterProps
            })
        }
        if (typeCompany === 'distribution-agent') {
            this.setState({
                menuList: menuCompany.distributionAgentProps
            })
        }
    }

    render() {
        let { menuList } = this.state

        return (
            <div className='list-container'>
                <ModalCreateAccount
                    isOpen={this.state.isOpenModal}
                    toggleOpenModal={this.toggleOpenModal}
                    createAccount={this.createAccount}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={menuList.listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={menuList.title}
                    />
                </div>
                <div className='product-table-right'>
                    <TableDataGrid
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
