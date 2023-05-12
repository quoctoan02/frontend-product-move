import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import ModalCreateStock from '../../ListDetail/Modal/ModalCreateStock';
import ModalShowListProduct from '../../ListDetail/Modal/ModalShowListProduct';
import TableDataGrid from '../../ListDetail/TableDataGrid'
import factoryService from '../../../services/factoryService';
import * as actions from '../../../store/actions';
import { customerColumns } from '../../ListDetail/TableData';

class StockList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listFilter: [
                { typeFilter: 'status', label: 'Trạng thái sản phẩm' },
                { typeFilter: 'factory', label: 'Cơ sở sản xuất' },
                { typeFilter: 'distribution-agent', label: 'Nhà phân phối' },
                { typeFilter: 'service-center', label: 'Trung tâm bảo hành' },
            ],
            isOpenModalCreate: false,
            isOpenModalShow: false,
            filterTitle: 'Sản phẩm',
            listCustomer: '',
            customerIdSelected: ''
        }
    }

    async componentDidMount() {
        let res = await factoryService.getCustomerList()
        if (res) {
            this.setState({
                listCustomer: res
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.customerList !== this.props.customerList) {
            this.setState({ listCustomer: this.props.customerList });
        }
    }

    toggleOpenModalCreate = () => {
        this.setState({
            isOpenModalCreate: !this.state.isOpenModalCreate,
        })
    }
    toggleOpenModalShow = () => {
        this.setState({
            isOpenModalShow: !this.state.isOpenModalShow,
        })
    }

    handleOnRowClick = (rowData) => {
        this.toggleOpenModalShow()
        this.setState({ customerIdSelected: rowData.id })
    }

    render() {
        console.log(this.state.listCustomer)
        return (
            <div className='list-container'>
                {/* <ModalCreateStock
                    isOpen={this.state.isOpenModalCreate}
                    toggleOpenModal={this.toggleOpenModalCreate}
                    createStock={this.createStock}
                    category={"agency"}
                /> */}
                <ModalShowListProduct
                    customerId={this.state.customerIdSelected}
                    isOpen={this.state.isOpenModalShow}
                    toggleOpenModal={this.toggleOpenModalShow}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={this.state.listFilter}
                        handleGetStockFromParent={this.getStockAfterFiltered}
                        filterTitle={this.state.filterTitle}
                    />
                </div>
                <div className='product-table-right'>
                    <TableDataGrid
                        isStock={true}
                        onRowClickFromParent={this.handleOnRowClick}
                        rows={this.state.listCustomer}
                        columns={customerColumns}
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
        productList: state.factory.productList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStockList: (category) => dispatch(actions.fetchStockList(category)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
