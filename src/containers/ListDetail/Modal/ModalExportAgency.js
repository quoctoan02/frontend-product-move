import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreate.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MuiDatePicker from '../../../components/Input/MuiDatePicker';
import { TextField, Box } from '@mui/material';
import * as actions from "../../../store/actions";
import SelectedProduct from '../SelectedProduct';
import FormCustomerInfo from '../FormCustomerInfo';
import factoryService from '../../../services/factoryService';
import Select from 'react-select'
import { toast } from 'react-toastify';
class ModalCreateInsuranceBill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: '',
            listProduct: '',
            selectedStock: '',
            stockList: [],
            customerId: ''
        }
    }

    async componentDidMount() {
        let stockList = await factoryService.getStockList("insurance")
        this.setState({
            stockList: this.handleBuildDataSelect(stockList)
        })
        if (this.props.billId) {
            let billData = await factoryService.getBillInfo(this.props.billId)
            this.setState({
                customerId: billData.customer_id
            })
        }
    }


    async componentDidUpdate(prevProps) {
        if (prevProps.billId !== this.props.billId) {
            let billData = await factoryService.getBillInfo(this.props.billId)
            this.setState({
                customerId: billData.customer_id
            })
        }
    }

    toggle = () => {
        this.props.toggleOpenModal();
    }

    handleCreateInsuranceBill = async () => {
        if (this.state.listProduct) {
            this.state.listProduct.map(async (item, index) => {
                let message = await factoryService.createInsuranceBill({
                    customerId: this.state.customerId,
                    stockId: this.state.selectedStock.value,
                    "productId": item.productId,
                    "status": "string",
                    "quantity": item.quantity,
                })
            })
            toast.success("Create insurance Bill success")
            this.toggle();
            this.setState({ selectedStock: '' })
        }

    }

    handleBuildDataSelect = (data) => {
        let result = []
        if (data && data.length > 0) {
            data.map((item, index) => {
                let object = {}
                object.label = item.id + ' - ' + item.name + ' - ' + item.address;
                object.value = item.id;
                result.push(object)
            })
        }
        return result;
    }

    getSelectedProduct = (data) => {
        this.setState({
            listProduct: data
        })
    }

    handleOnchangeStock = (selectedStock) => {
        this.setState({ selectedStock })
    }

    render() {
        // console.log(this.state.listProduct)
        return (
            <Modal
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
                    Yêu cầu bảo hành
                </ModalHeader>
                <ModalBody>
                    <SelectedProduct
                        selectedId={this.props.selectedId}
                        getDataFromParent={this.getSelectedProduct}
                    />
                    <div className='col-md-12'>
                        <label class="form-label">Chọn trung tâm bảo hành</label>
                        <Select
                            value={this.state.selectedStock}
                            onChange={this.handleOnchangeStock}
                            options={this.state.stockList}
                            placeholder={"Chọn trung tâm bảo hành"}
                        />
                    </div>
                </ModalBody >
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => this.handleCreateInsuranceBill()}
                    >
                        Tạo yêu cầu
                    </Button>
                    <Button color="secondary" onClick={() => { this.toggle() }}>Cancel</Button>
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
        addNewProduct: (data) => dispatch(actions.addNewProduct(data)),
        fetchStockList: (category) => dispatch(actions.fetchStockList(category)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateInsuranceBill);
