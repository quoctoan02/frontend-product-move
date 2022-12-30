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

class ModalCreateBill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasCustomer: true,
            customerInfo: '',
            customerId: '',
            stockId: '',
            selectedId: '',
            listProduct: '',
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedId !== this.props.selectedId) {
            this.setState({ selectedId: this.props.selectedId })
        }
    }

    toggle = () => {
        this.props.toggleOpenModal();
    }

    handleCreateBill = async () => {
        if (this.state.hasCustomer) {
            await factoryService.createBill({
                customerId: this.state.customerId,
                stockId: this.props.stockId,
                bill: this.state.listProduct,
            })
        } else {
            let res = await factoryService.createNewCustomer(this.state.customerInfo)
            if (res.customer) {
                let message = await factoryService.createBill({
                    customerId: res.customer.id,
                    stockId: this.props.stockId,
                    bill: this.state.listProduct,
                })
                console.log(message)
            }
        }
        this.toggle()
    }

    getCustomerInfo = async (data) => {
        if (data.hasCustomer) {
            this.setState({
                customerId: data.selectedCustomer.value,
                hasCustomer: data.hasCustomer
            })
        } else {
            this.setState({
                customerInfo: {
                    name: data.name,
                    address: data.address,
                    phoneNumber: data.phoneNumber
                },
                hasCustomer: data.hasCustomer
            })
        }

    }

    getSelectedProduct = (data) => {
        this.setState({
            listProduct: data
        })
    }

    render() {
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
                    Tạo hóa đơn
                </ModalHeader>
                <ModalBody>
                    <SelectedProduct
                        selectedId={this.props.selectedId}
                        getDataFromParent={this.getSelectedProduct}
                    />
                    <FormCustomerInfo
                        getDataFromParent={this.getCustomerInfo}
                    />
                </ModalBody >
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => this.handleCreateBill()}
                    >
                        Tạo hóa đơn
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
        fetchProductList: () => dispatch(actions.fetchProductList()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateBill);
