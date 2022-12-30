import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import factoryService from '../../services/factoryService';
import './FormCustomerInfo.scss'
import Select from 'react-select';

class FormCustomerInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            selectedCustomer: '',
            address: '',
            customerList: [],
            hasCustomer: 'true'
        }
    }

    async componentDidMount() {
        let customerList = await factoryService.getCustomerList()
        this.setState({
            customerList: this.handleBuildDataSelect(customerList)
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.getDataFromParent(this.state)
        }
        if (prevState.hasCustomer !== this.state.hasCustomer) {
            if (!this.state.hasCustomer) {
                this.setState({ selectedCustomer: '' })
            } else {
                this.setState({
                    name: '',
                    phoneNumber: '',
                    address: '',
                })
            }
        }
    }

    handleBuildDataSelect = (data) => {
        let result = []
        if (data && data.length > 0) {
            data.map((item, index) => {
                let object = {}
                object.label = item.phone_number + ' - ' + item.name + ' - ' + item.address;
                object.value = item.id;
                result.push(object)
            })
        }
        return result;
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }
    handleOnchangeCustomer = (selectedCustomer) => {
        this.setState({ selectedCustomer })
    }

    handleOpenFormCustomer = () => {
        this.setState({ hasCustomer: !this.state.hasCustomer })
    }

    render() {
        let { customerList, quantity, selectedCustomer } = this.state
        return (
            <div className='form-customer-container'>
                {this.state.hasCustomer &&
                    <div className='col-md-12'>
                        <label class="form-label">Chọn khách hàng</label>
                        <Select
                            value={selectedCustomer}
                            onChange={this.handleOnchangeCustomer}
                            options={customerList}
                            placeholder={"Chọn khách hàng"}
                        />
                    </div>
                }

                <span
                    className='has-customer-text'
                    onClick={() => this.handleOpenFormCustomer()}
                >{
                        this.state.hasCustomer ?
                            "Khách hàng mới? Nhập thông tin" :
                            "Đã có thông tin khách hàng? Chọn khách hàng"}
                </span>
                {!this.state.hasCustomer &&
                    <form class="row g-3">
                        <div className='col-md-8'>
                            <label class="form-label">Họ tên khách hàng</label>
                            <input type="text" class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, 'name')}
                                required />
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, 'phoneNumber')}
                                required />
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Địa chỉ</label>
                            <input type="text" class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                required />
                        </div>
                    </form>}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCustomerInfo);
