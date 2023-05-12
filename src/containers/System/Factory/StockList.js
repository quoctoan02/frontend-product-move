import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import ModalCreateStock from '../../ListDetail/Modal/ModalCreateStock';
import ModalShowListProduct from '../../ListDetail/Modal/ModalShowListProduct';
import TableDataGrid from '../../ListDetail/TableDataGrid'
import factoryService from '../../../services/factoryService';
import * as actions from '../../../store/actions';

const columns = [
    {
        field: 'id',
        headerName: 'Mã kho',
        width: 80
    },
    {
        field: 'name',
        headerName: 'Tên kho',
        width: 150,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Địa chỉ kho',
        width: 300,
        editable: true,
    }
]

class StockList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listFilter: [
                { typeFilter: 'status', label: 'Trạng thái sản phẩm' },
                { typeFilter: 'factory', label: 'Cơ sở sản xuất' },
                { typeFilter: 'distribution-agent', label: 'Nhà phân phối' },
                { typeFilter: 'service-center', label: 'Trung tâm bảo hành' }
            ],
            isOpenModalCreate: false,
            isOpenModalShow: false,
            filterTitle: 'Sản phẩm',
            listStock: '',
            stockIdSelected: ''
        }
    }

    componentDidMount() {
        this.props.fetchStockList("factory");
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
    toggleOpenModalShow = () => {
        this.setState({
            isOpenModalShow: !this.state.isOpenModalShow,
        })
    }

    handleOnRowClick = (rowData) => {
        this.toggleOpenModalShow()
        this.setState({ stockIdSelected: rowData.id })
    }

    render() {
        return (
            <div className='list-container'>
                <ModalCreateStock
                    isOpen={this.state.isOpenModalCreate}
                    toggleOpenModal={this.toggleOpenModalCreate}
                    category={"factory"}
                />
                <ModalShowListProduct
                    stockId={this.state.stockIdSelected}
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
                        rows={this.state.listStock}
                        columns={columns}
                        toggleOpenModal={this.toggleOpenModalCreate}
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
