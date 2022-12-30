import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreate.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import factoryService from '../../../services/factoryService';
import * as actions from "../../../store/actions";
import TableDataGrid from "../TableDataGrid";
import { productInDistributionAgentStockColumns, productInBillColumns } from '../TableData';
import _ from 'lodash';
import ModalShowDetailProduct from './ModalShowDetailProduct';
import ModalCreateBill from './ModalCreateBill';
import ModalCreateInsuranceBill from './ModalCreateInsuranceBill';
class ModalShowListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productColumns: [],
            category: '',
            listProduct: [],
            productDataSelected: '',
            selectedId: '',
            isOpenModalShow: false,
            isOpenModalCreate: false,
            isOpenModalCreateBill: false,
            isOpenModalCreateInsuranceBill: false,
        }
    }

    componentDidMount() {
        if (this.props.stockId) {
            this.handleGetProductInStock()
        }
        if (this.props.customerId) {
            //this.handleGetProductOfCustomer()
        }
        if (this.props.billId) {
            this.handleGetProductInBill()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.stockId !== this.props.stockId) {
            this.handleGetProductInStock()
        }
        if (prevProps.billId !== this.props.billId) {
            this.handleGetProductInBill()
        }
    }

    handleGetProductInStock = async () => {
        let res = await factoryService.getProductInStock(this.props.stockId)
        if (res.product_stock_details) {
            this.setState({
                listProduct: [],
                productColumns: productInDistributionAgentStockColumns
            })
            res.product_stock_details.map(async (item, index) => {
                let productData = await factoryService.getProductInfo(item.product_id)
                if (productData && !_.isEmpty(productData)) {
                    productData.quantity = item.quantity
                    this.setState(prevState => ({
                        listProduct: [...prevState.listProduct, productData]
                    }))
                }
            })
        }
    }

    handleGetProductInBill = async () => {
        let res = await factoryService.getBillInfo(this.props.billId)
        if (res) {
            this.setState({
                listProduct: [],
                productColumns: productInBillColumns
            })
            res.product_bill_details.map(async (item, index) => {
                let productData = await factoryService.getProductInfo(item.product_id)
                if (productData && !_.isEmpty(productData)) {
                    productData.quantity = item.quantity
                    this.setState(prevState => ({
                        listProduct: [...prevState.listProduct, productData]
                    }))
                }
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

    toggleOpenModalCreate = () => {
        if (this.props.billId) {
            this.setState({
                isOpenModalCreateInsuranceBill: !this.state.isOpenModalCreateInsuranceBill,
            })
        } else {
            this.setState({
                isOpenModalCreateBill: !this.state.isOpenModalCreateBill,
            })
        }

    }
    toggleOpenModalCreateBill = () => {
        this.setState({
            isOpenModalCreateBill: !this.state.isOpenModalCreateBill,
        })
    }
    toggleOpenModalCreateInsuranceBill = () => {
        this.setState({
            isOpenModalCreateInsuranceBill: !this.state.isOpenModalCreateInsuranceBill,
        })
    }

    toggle = () => {
        this.props.toggleOpenModal();
    }

    handleSelectedProduct = (selectedId) => {
        this.setState({ selectedId })
    }

    render() {
        return (
            <div>
                <ModalShowDetailProduct
                    factoryStockId={this.props.stockId}
                    productData={this.state.productDataSelected}
                    isOpen={this.state.isOpenModalShow}
                    toggleOpenModal={this.toggleOpenModalShow}
                    notInsertProduct={true}
                />
                <ModalCreateBill
                    stockId={this.props.stockId}
                    selectedId={this.state.selectedId}
                    isOpen={this.state.isOpenModalCreateBill}
                    toggleOpenModal={this.toggleOpenModalCreate}
                />
                <ModalCreateInsuranceBill
                    billId={this.props.billId}
                    selectedId={this.state.selectedId}
                    isOpen={this.state.isOpenModalCreateInsuranceBill}
                    toggleOpenModal={this.toggleOpenModalCreate}
                />
                < Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className='modal-container'
                    contentClassName='modal-content-custom'
                    wrapClassName='warp-class'
                    modalClassName='modal-class'
                    backdropClassName='YourCustomClass'
                    size="lg"
                    centered
                >
                    <ModalHeader
                        toggle={() => { this.toggle() }}
                        className='modal-title'
                    >
                        Danh sách sản phẩm
                    </ModalHeader>
                    <ModalBody
                        style={{ height: '500px' }}
                    >
                        {this.state.listProduct &&
                            <TableDataGrid
                                isCreateBill={this.props.isCreateBill}
                                isExportInsurance={this.props.isExportInsurance}
                                toggleOpenModalShow={this.toggleOpenModalShow}
                                rows={this.state.listProduct}
                                columns={this.state.productColumns}
                                toggleOpenModalCreate={this.toggleOpenModalCreate}
                                getSelectedRow={this.handleSelectedProduct}
                            />}
                    </ModalBody>
                </Modal >
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewStock: (category) => dispatch(actions.addNewStock(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalShowListProduct);
