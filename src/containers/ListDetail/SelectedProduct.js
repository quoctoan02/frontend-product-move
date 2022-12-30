import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import factoryService from '../../services/factoryService';
import './SelectedProduct.scss'
import Select from 'react-select';
import _ from 'lodash';

class SelectedProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
        }
    }

    componentDidMount() {
        if (this.props.selectedId) {
            this.setState({ productList: [] })
            this.props.selectedId.map(async (item, index) => {
                let productData = await factoryService.getProductInfo(item)
                if (productData && !_.isEmpty(productData)) {
                    productData.quantity = 1
                    this.setState(prevState => ({
                        productList: [...prevState.productList, productData]
                    }))
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.getDataFromParent(this.state.productList)
        }
    }

    handleOnChangeInput = (event, productId) => {
        let copyState = { ...this.state }
        copyState.productList.find(item => item.id === productId).quantity = event.target.value
        this.setState({
            ...copyState
        })
    }

    render() {
        let { productList } = this.state


        return (
            <div>
                {
                    productList && productList.map((item, index) =>
                        <div className='selected-product-container'>
                            <div className='content-left'>
                                <div className='product-img-left'
                                    style={{ backgroundImage: `url('${item.image_url}')` }}
                                >
                                </div>
                                <div className='product-detail'>
                                    <span className='product-name'>{item.name}</span>
                                    <span className='product-id'>{"Mã sản phẩm: " + item.id}</span>
                                </div>
                            </div>
                            <div className='content-right'>
                                <div className='product-quantity'>
                                    <span>Số lượng</span>
                                    <input type="number"
                                        className='form-control'
                                        defaultValue={1}
                                        min={1}
                                        onChange={(event) => this.handleOnChangeInput(event, item.id)}
                                    />
                                </div>
                                <div className='product-price'>
                                    <span className='product-price-text'>Giá niêm yết:</span>
                                    <span className='product-price-text'>{item.price}</span>
                                </div>

                            </div>

                        </div >
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
