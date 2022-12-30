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
            let res = await factoryService.createBill()
        } else {
            await factoryService.createNewCustomer(this.state.customerInfo)
        }
    }

    getCustomerInfo = async (data) => {
        console.log(data);
        if (data.hasCustomer) {
            this.setState({
                customerInfo: data.selectedCustomer,
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
        console.log(data)
        this.setState({
            listProduct: data
        })
    }

    render() {
        let { imageUrl, name, line, description, price } = this.state
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
                        selectedId={this.state.selectedId}
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
