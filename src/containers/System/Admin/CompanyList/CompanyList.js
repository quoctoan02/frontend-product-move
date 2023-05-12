import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../../ListDetail/Filter';
import ModalCreateAccount from '../../../ListDetail/Modal/ModalCreateAccount';
import TableDataGrid from '../../../ListDetail/TableDataGrid'
import * as menuCompany from './menuCompany'
import * as actions from '../../../../store/actions'
import { stockColumns } from '../../../ListDetail/TableData';
class CompanyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: '',
            isOpenModalCreate: false,
            listStock: '',
        }
    }

    componentDidMount() {
        if (this.props.typeCompany) {
            this.props.fetchStockList(this.props.typeCompany);
            this.handleMenuCompany(this.props.typeCompany);
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.stockList !== this.props.stockList) {
            this.setState({ listStock: this.props.stockList });
        }
    }

    toggleOpenModalCreate = () => {
        this.setState({
            isOpenModalCreate: !this.state.isOpenModalCreate,
        })
    }

    handleMenuCompany = (typeCompany) => {
        if (typeCompany === 'factory') {
            this.setState({
                menuList: menuCompany.factoryProps
            })
        }
        if (typeCompany === 'insurance') {
            this.setState({
                menuList: menuCompany.serviceCenterProps
            })
        }
        if (typeCompany === 'agency') {
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
                    isOpen={this.state.isOpenModalCreate}
                    toggleOpenModal={this.toggleOpenModalCreate}
                    createAccount={this.createAccount}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={menuCompany.factoryProps.listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={menuList.title}
                    />
                </div>
                <div className='product-table-right'>
                    <TableDataGrid
                        canAdd={true}
                        rows={this.state.listStock}
                        columns={stockColumns}
                        toggleOpenModalCreate={this.toggleOpenModalCreate}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        stockList: state.factory.stockList,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStockList: (category) => dispatch(actions.fetchStockList(category)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
