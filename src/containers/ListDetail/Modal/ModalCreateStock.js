import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreateAccount.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import adminService from '../../../services/adminService';
import * as actions from "../../../store/actions";

class ModalCreateStock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
        }
    }

    componentDidMount() {
    }

    checkValidInput = () => {
        let isValid = true;
        // let arrInput = ['username', 'password']
        // for (let i = 0; i < arrInput.length; i++) {
        //     if (!this.state[arrInput[i]]) {
        //         isValid = false;
        //         alert('Missing parameter ' + arrInput[i] + ' in input');
        //         break;
        //     }
        // }
        return isValid;
    }

    handleAddNewStock = async () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            this.props.addNewStock(this.state.category)
            this.toggle()
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
                >Create new stock</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Category</label>
                            <input
                                type="username"
                                className="form-control"
                                placeholder="Username"
                                onChange={(event) => { this.handleOnChangeInput(event, "category") }}
                                value={this.state.category}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => this.handleAddNewStock()}
                    >
                        Add new
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
        addNewStock: (category) => dispatch(actions.addNewStock(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateStock);
