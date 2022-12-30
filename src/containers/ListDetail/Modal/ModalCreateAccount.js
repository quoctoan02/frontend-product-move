import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ModalCreate.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import adminService from '../../../services/adminService';
import * as actions from "../../../store/actions";

class ModalCreateAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            role: ''
        }
    }

    componentDidMount() {
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['username', 'password']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter ' + arrInput[i] + ' in input');
                break;
            }
        }
        return isValid;
    }

    handleAddNewAccount = async () => {
        let isValid = this.checkValidInput();
        if (isValid === true && this.state.role) {
            this.props.addNewAccount(this.state.username, this.state.password, this.state.role)
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

    handleChooseRole = (event) => {
        this.setState({
            role: event.target.value
        })
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
                >Create new account</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Username</label>
                            <input
                                type="username"
                                className="form-control"
                                placeholder="Username"
                                onChange={(event) => { this.handleOnChangeInput(event, "username") }}
                                value={this.state.username}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                onChange={(event) => { this.handleOnChangeInput(event, 'password') }}
                                value={this.state.password} />
                        </div>
                    </div>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={this.handleChooseRole}
                    >
                        <FormControlLabel className='choose-role' value="factory" control={<Radio />} label="Cơ sở sản xuất" />
                        <FormControlLabel className='choose-role' value="agency" control={<Radio />} label="Trung tâm bảo hành" />
                        <FormControlLabel className='choose-role' value="insurance" control={<Radio />} label="Đại lý phân phối" />

                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => this.handleAddNewAccount()}
                    >
                        Add new account
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
        addNewAccount: (username, password, role) => dispatch(actions.addNewAccount(username, password, role))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateAccount);
