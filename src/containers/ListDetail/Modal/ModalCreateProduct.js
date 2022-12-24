import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreateProduct.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MuiDatePicker from '../../../components/Input/MuiDatePicker';
import { TextField, Box } from '@mui/material';
class ModalCreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
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

    handleAddNewProduct = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            this.props.createNewProduct()
        }
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

                        {/* <div className='input-container'>
                            <label>Tên sản phẩm</label>
                            <input
                                type="text"
                                placeholder='Tên'
                                className="form-control"
                                onChange={(event) => { this.handleOnChangeInput(event, "name") }}
                                value={this.state.email}
                            />
                        </div>

                        <div className='input-container'>
                            <label>Dòng sản phẩm</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Dòng"
                                onChange={(event) => { this.handleOnChangeInput(event, 'firstName') }}
                                value={this.state.firstName} />
                        </div>
                        <div className='input-container  max-width-input'>
                            <label>Mô tả sản phẩm</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mô tả"
                                onChange={(event) => { this.handleOnChangeInput(event, "name") }}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Trạng thái sản phẩm</label>
                            <input type="text" className="form-control"
                                placeholder="Trạng thái"
                                onChange={(event) => { this.handleOnChangeInput(event, 'state') }}
                                value={this.state.password} />
                        </div>
                        <div className='input-container'>
                            <label>Ngày sản xuất</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ngày"
                                onChange={(event) => { this.handleOnChangeInput(event, 'lastName') }}
                                value={this.state.lastName}
                            />
                        </div> */}
                        <form class="row g-3">
                            <div class="col-md-4">
                                <label for="validationDefault01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                            </div>
                            <div class="col-md-4">
                                <label for="validationDefault02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                            </div>
                            <div class="col-md-4">
                                <label for="validationDefaultUsername" class="form-label">Username</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationDefault03" required />
                            </div>
                            <div class="col-md-3">
                                <label for="validationDefault04" class="form-label">State</label>
                                <select class="form-select" id="validationDefault04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="validationDefault05" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="validationDefault05" required />
                            </div>
                        </form>
                    </div>



                </ModalBody >
                <ModalFooter>
                    <Button color="primary"
                    // onClick={() => { this.handleAddNewProduct() }}

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateProduct);
