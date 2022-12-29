import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import factoryService from '../../services/factoryService';
import './InsertProduct.scss'

class InsertProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            stockId: '',
            productId: '',
            stockList: [],
        }
    }

    async componentDidMount() {
        let stockList = await factoryService.getStockList("agency")
        this.setState({
            stockList: stockList,
            stockId: stockList[0].id
        })
        this.props.getDataFromParent(this.state)

    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
        this.props.getDataFromParent(copyState)
    }

    render() {
        let { stockList, quantity } = this.state
        console.log(this.state.stockId, stockList)
        return (
            <div className='insert-product-container'>
                <div className='col-md-4'>
                    <label class="form-label">Chọn đại lý</label>
                    <select className="form-select choose-stock"
                        value={this.state.stockId}
                        onChange={(event) => this.handleOnChangeInput(event, 'stockId')}
                    >
                        {stockList && stockList.map((item, index) =>
                            <option key={index} value={item.id}>{item.name}</option>
                        )}
                    </select>
                </div>
                <div className='col-md-2'>
                    <label class="form-label">Số lượng</label>
                    <input type="number"
                        className='form-control'
                        value={quantity}
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
