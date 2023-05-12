import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalShowDetailProduct.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import factoryService from '../../../services/factoryService';
import * as actions from "../../../store/actions";
import InsertProduct from '../InsertProduct';
import { toast } from 'react-toastify';
import ExportProductToAgency from '../ExportProductToAgency';

class ModalShowDetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isInsertProduct: false,
            dataInsert: '',
            dataExport: '',
            isExportProduct: false,
        }
    }

    async componentDidMount() {
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({ ...copyState });
    }

    toggle = () => {
        this.props.toggleOpenModal();
        this.setState({ isInsertProduct: false })
    }

    handleInsertProduct = async () => {
        if (!this.state.isInsertProduct) {
            this.setState({ isInsertProduct: true });
        } else {
            let res = await factoryService.insertProduct({
                productId: this.props.productData.id,
                stockId: this.state.dataInsert.selectedStock.value,
                quantity: this.state.dataInsert.quantity
            })
            if (res) {
                toast.success(res.message)
            }
            this.setState({ isInsertProduct: false })
        }
    }

    handleExportProductToAgency = async () => {
        if (!this.state.isExportProduct) {
            this.setState({ isExportProduct: true });
        } else {
            let res = await factoryService.factoryExportToAgency({
                productId: this.props.productData.id,
                factoryStockId: this.props.factoryStockId,
                agencyStockId: this.state.dataExport.selectedStock.value,
                quantity: this.state.dataExport.quantity
            })
            if (res) {
                toast.success(res.message)
            }
            this.setState({ isExportProduct: false })
        }
    }

    handleGetData = (data) => {
        if (this.state.isInsertProduct) {
            this.setState({
                dataInsert: data
            })
        }
        if (this.state.isExportProduct) {
            this.setState({
                dataExport: data
            })
        }

    }

    render() {
        let { productData } = this.props
        let productDate = ''
        if (productData) {
            productDate = new Date(productData.createdAt).toISOString().slice(0, 19).replace('T', ' ').split(' ')[0];
        }

        return (
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
                >Chi tiết sản phẩm</ModalHeader>
                <ModalBody>
                    <div className='modal-detail-body'>
                        <div className='product-title'>
                            <span className=''>{productData.name}</span>
                        </div>
                        <div className='product-content'>

                            <div className='product-img'
                                style={{ backgroundImage: `url('${productData.image_url}')` }}
                            >
                            </div>
                            <div className='product-info'>
                                <div className='product-info-container'>
                                    <div className='product-label'>Mã sản phẩm:</div>
                                    <div className='product-data'>{productData.id}</div>
                                </div>
                                <div className='product-info-container'>
                                    <div className='product-label'>Dòng sản phẩm:</div>
                                    <div className='product-data'>{productData.product_line}</div>
                                </div>
                                <div className='product-info-container'>
                                    <div className='product-label'>Giá niêm yết:</div>
                                    <div className='product-data'>{productData.price + ' vnđ'}</div>
                                </div>
                                <div className='product-info-container'>
                                    <div className='product-label'>Ngày sản xuất:</div>
                                    <div className='product-data'>{productDate}</div>
                                </div>

                            </div>
                            <div className='product-des'>
                                <div className='product-info-container'>
                                    <div className='product-label'>Mô tả chi tiết:</div>
                                    <div className='product-data'>{productData.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter
                    className='modal-footer-custom'
                >
                    <div className='list-btn'>
                        {!this.props.notInsertProduct && <button type="button" className="btn btn-success"
                            onClick={() => this.handleInsertProduct()}
                        >Thêm vào kho</button>}
                        {this.props.factoryStockId &&
                            <button type="button"
                                className="btn btn-success"
                                onClick={() => this.handleExportProductToAgency()}
                            >
                                Chuyển đến đại lý
                            </button>}
                        <button type="button" className="btn btn-danger">Xóa sản phẩm</button>
                        <button type="button" className="btn btn-secondary"
                            onClick={() => { this.toggle() }}>
                            Cancel
                        </button>
                    </div>

                    {
                        this.state.isInsertProduct &&
                        <InsertProduct
                            getDataFromParent={this.handleGetData}
                        />
                    }
                    {this.state.isExportProduct &&
                        <ExportProductToAgency
                            getDataFromParent={this.handleGetData}
                        />
                    }
                </ModalFooter>
            </Modal >
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalShowDetailProduct);
