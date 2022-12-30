import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import ModalShowDetailProduct from '../../ListDetail/Modal/ModalShowDetailProduct';
import ModalCreateProduct from '../../ListDetail/Modal/ModalCreateProduct';
import TableDataGrid from '../../ListDetail/TableDataGrid'
import factoryService from '../../../services/factoryService';
import * as actions from '../../../store/actions';
import './List.scss'
import { productInsuranceColumns } from '../../ListDetail/TableData';
import _ from 'lodash';
import { toast } from 'react-toastify'
class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listFilter: [
                {
                    type: 'status', label: 'Trạng thái sản phẩm',
                    value: ['Iphone', 'Samsung', 'Realme']
                },
                { type: 'factory', label: 'Cơ sở sản xuất' },
                { type: 'distribution-agent', label: 'Nhà phân phối' },
                { type: 'service-center', label: 'Trung tâm bảo hành' }
            ],
            isOpenModalCreate: false,
            isOpenModalShow: false,
            filterTitle: 'Sản phẩm',
            listProduct: '',
            productDataSelected: ''
        }
    }

    async componentDidMount() {
        let res = await factoryService.getProductInsurance()
        if (res) {
            this.setState({
                listProduct: [],
            })
            res.map(async (item, index) => {
                let productInsuranceData = ''
                let productData = await factoryService.getProductInfo(item.product_id)
                let stockData = await factoryService.getStockInfo(item.stock_id)
                let customerData = await factoryService.getCustomerInfo(item.customer_id)
                if (productData && !_.isEmpty(productData)) {
                    productInsuranceData = {
                        id: item.id,
                        image_url: productData.image_url,
                        quantity: item.quantity,
                        name: productData.name,
                        product_id: productData.id,
                        stock_name: stockData.name,
                        customer_name: customerData.name,
                        stock_id: stockData.id
                    }
                    this.setState(prevState => ({
                        listProduct: [...prevState.listProduct, productInsuranceData]
                    }))

                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.productList !== this.props.productList) {
            this.setState({ listProduct: this.props.productList });
        }
    }

    toggleOpenModalCreate = async (type) => {
        if (this.state.selectedId) {
            this.state.selectedId.map(async (item) => {
                let billData = await factoryService.getInsuranceBillInfo(item)
                let message = ''
                if (type === 'export-agency') {
                    message = await factoryService.insuranceExportToAgency(item, billData.stock_id)
                    toast.success("Export to agency success")

                }
                if (type === 'export-factory') {
                    message = await factoryService.insuranceExportToFactory(item)
                    toast.success("Export to factory success")

                }
                console.log(message)

            })
        }

    }
    toggleOpenModalShow = (productData) => {
        if (!this.state.isOpenModalShow) {
            this.setState({ productDataSelected: productData })
        }
        this.setState({
            isOpenModalShow: !this.state.isOpenModalShow,
        })


    }
    handleSelectedProduct = (selectedId) => {
        this.setState({ selectedId })
    }

    render() {
        return (
            <div className='list-container'>
                <ModalShowDetailProduct
                    productData={this.state.productDataSelected}
                    isOpen={this.state.isOpenModalShow}
                    toggleOpenModal={this.toggleOpenModalShow}
                    createProduct={this.createProduct}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={this.state.listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={this.state.filterTitle}
                    />
                </div>
                <div className='product-table-right'>
                    <TableDataGrid
                        isExportFactory={true}
                        isExportAgency={true}
                        rows={this.state.listProduct}
                        columns={productInsuranceColumns}
                        toggleOpenModalCreate={this.toggleOpenModalCreate}
                        toggleOpenModalShow={this.toggleOpenModalShow}
                        getSelectedRow={this.handleSelectedProduct}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        productList: state.factory.productList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProductList: () => dispatch(actions.fetchProductList()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
