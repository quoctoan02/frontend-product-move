import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import factoryService from '../../services/factoryService';
import './InsertProduct.scss'
import Select from 'react-select';

class InsertProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            stockList: [],
            selectedStock: ''
        }
    }

    async componentDidMount() {
        let stockList = await factoryService.getStockList("factory")
        this.setState({
            stockList: this.handleBuildDataSelect(stockList)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.getDataFromParent(this.state)
        }
    }

    handleBuildDataSelect = (data) => {
        let result = []
        if (data && data.length > 0) {
            data.map((item, index) => {
                let object = {}
                object.label = item.name;
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

    handleOnchangeStock = (selectedStock) => {
        this.setState({ selectedStock })
    }

    render() {
        let { stockList, quantity, selectedStock } = this.state
        return (
            <div className='insert-product-container'>
                <div className='col-md-4'>
                    <label class="form-label">Chọn kho sản xuất</label>
                    <Select
                        value={selectedStock}
                        onChange={this.handleOnchangeStock}
                        options={stockList}
                        placeholder={"Chọn kho"}
                    />
                </div>
                <div className='col-md-2'>
                    <label class="form-label">Số lượng</label>
                    <input type="number"
                        className='form-control'
                        value={quantity}
                        min={1}
                        onChange={(event) => this.handleOnChangeInput(event, 'quantity')}
                    />
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(InsertProduct);
