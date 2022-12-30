import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import ModalCreateStock from '../../ListDetail/Modal/ModalCreateStock';
import ModalShowListProduct from '../../ListDetail/Modal/ModalShowListProduct';
import TableDataGrid from '../../ListDetail/TableDataGrid'
import factoryService from '../../../services/factoryService';
import * as actions from '../../../store/actions';
import { billColumns } from '../../ListDetail/TableData';
import _ from 'lodash';

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
            listBill: '',
            billIdSelected: ''
        }
    }

    async componentDidMount() {
        let res = await factoryService.getBillList()
        this.handleBuildBillData(res)
    }

    handleBuildBillData = (data) => {
        if (data) {
            this.setState({ listBill: [] })
            data.map(async (item, index) => {
                let billData = ''
                let customerData = await factoryService.getCustomerInfo(item.customer_id)
                let stockData = await factoryService.getStockInfo(item.stock_id)

                if (customerData && stockData && !_.isEmpty(customerData) && !_.isEmpty(stockData)) {
                    let billDate = new Date(item.createdAt).toISOString().slice(0, 19).replace('T', ' ').split(' ')[0];
                    billData = {
                        id: item.id,
                        customer_name: customerData.name,
                        customer_phone: customerData.phone_number,
                        stock_name: stockData.name,
                        sell_date: billDate
                    }
                    this.setState(prevState => ({
                        listBill: [...prevState.listBill, billData]
                    }))
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.billList !== this.props.billList) {
        //     this.setState({ listBill: this.props.billList });
        // }
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
        this.setState({ billIdSelected: rowData.id })
    }

    render() {
        return (
            <div className='list-container'>
                {/* <ModalCreateStock
                    isOpen={this.state.isOpenModalCreate}
                    toggleOpenModal={this.toggleOpenModalCreate}
                    createStock={this.createStock}
                    category={"agency"}
                /> */}
                <ModalShowListProduct
                    isExportInsurance={true}
                    billId={this.state.billIdSelected}
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
                        rows={this.state.listBill}
                        columns={billColumns}
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
