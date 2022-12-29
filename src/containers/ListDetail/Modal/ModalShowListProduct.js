import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreateAccount.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import factoryService from '../../../services/factoryService';
import * as actions from "../../../store/actions";
import TableDataGrid from "../TableDataGrid";
import { productColumns } from '../TableData';
import _ from 'lodash';
import ModalShowDetailProduct from './ModalShowDetailProduct';
class ModalShowListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            listProductInStock: [],
            productDataSelected: '',
            isOpenModalShow: false,
        }
    }

    componentDidMount() {
        this.handleGetProductInStock()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.stockId !== this.props.stockId) {
            this.handleGetProductInStock()
        }
    }

    handleGetProductInStock = async () => {
        let res = await factoryService.getProductInStock(this.props.stockId)
        if (res.product_stock_details) {
            this.setState({ listProductInStock: [] })
            res.product_stock_details.map(async (item, index) => {
                let productData = await factoryService.getProductInfo(item.product_id)
                if (productData && !_.isEmpty(productData)) {
                    this.setState(prevState => ({
                        listProductInStock: [...prevState.listProductInStock, productData]
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

    toggle = () => {
        this.props.toggleOpenModal();
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
                        Danh sách sản phẩm trong kho
                    </ModalHeader>
                    <ModalBody
                        style={{ height: '500px' }}
                    >
                        {this.state.listProductInStock &&
                            <TableDataGrid
                                toggleOpenModalShow={this.toggleOpenModalShow}
                                rows={this.state.listProductInStock}
                                columns={productColumns}
                            //toggleOpenModal={this.toggleOpenModal}
                            />}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                        >
                            Add new
                        </Button>
                        <Button color="secondary" onClick={() => { this.toggle() }}>Cancel</Button>
                    </ModalFooter>
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
