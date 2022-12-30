import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreate.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MuiDatePicker from '../../../components/Input/MuiDatePicker';
import { TextField, Box } from '@mui/material';
import * as actions from "../../../store/actions";
class ModalCreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            name: '',
            line: '',
            state: '',
            description: '',
            price: '',
        }
    }

    componentDidMount() {
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter ' + arrInput[i] + ' in input');
                break;
            }
        }
        return isValid;
    }

    handleAddNewProduct = async () => {
        let data = {
            code: 'string',
            name: this.state.name,
            price: this.state.price,
            imageUrl: this.state.imageUrl,
            productLine: 'string',
            description: this.state.description
        }
        this.props.addNewProduct(data)
        await this.props.fetchProductList()
        this.toggle()
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({ ...copyState });
    }

    toggle = () => {
        this.props.toggleOpenModal();
    }

    render() {
        let { imageUrl, name, line, description, price } = this.state

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
                >Create new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <form class="row g-3">
                            <div class="col-md-4">
                                <label class="form-label">Ảnh sản phẩm</label>
                                <input type="text" class="form-control" value={imageUrl}
                                    onChange={(event) => this.handleOnChangeInput(event, 'imageUrl')}
                                    required />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Tên sản phẩm</label>
                                <input type="text" class="form-control" value={name}
                                    onChange={(event) => this.handleOnChangeInput(event, 'name')}
                                    required />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Dòng sản phẩm</label>
                                <select class="form-select" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Giá niêm yết</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" value={price}
                                        onChange={(event) => this.handleOnChangeInput(event, 'price')}
                                        required />
                                    <span class="input-group-text">vnđ</span>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Trạng thái</label>
                                <select class="form-select" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Mô tả</label>
                                <input type="text" class="form-control" value={description}
                                    onChange={(event) => this.handleOnChangeInput(event, 'description')}
                                    required />
                            </div>
                        </form>
                    </div>
                </ModalBody >
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => { this.handleAddNewProduct() }}

                    >Add new</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateProduct);
