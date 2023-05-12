import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../ListDetail/Filter';
import ModalShowDetailProduct from '../../ListDetail/Modal/ModalShowDetailProduct';
import ModalCreateProduct from '../../ListDetail/Modal/ModalCreateProduct';
import TableDataGrid from '../../ListDetail/TableDataGrid'
import factoryService from '../../../services/factoryService';
import * as actions from '../../../store/actions';
import { allProductColumns } from '../../ListDetail/TableData';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listFilter: [
                {
                    type: 'status', label: 'Trạng thái sản phẩm',
                    value: ['Iphone', 'Samsung', 'Realme']
                },
                { type: 'factory', label: 'Cơ sở sản xuất' },
                { type: 'distribution-agent', label: 'Nhà phân phối' },
                { type: 'service-center', label: 'Trung tâm bảo hành' }
            ],
            isOpenModalCreate: false,
            isOpenModalShow: false,
            filterTitle: 'Sản phẩm',
            listProduct: '',
            productDataSelected: ''
        }
    }

    componentDidMount() {
        this.props.fetchProductList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.productList !== this.props.productList) {
            this.setState({ listProduct: this.props.productList });
        }
    }

    toggleOpenModalCreate = () => {
        this.setState({
            isOpenModalCreate: !this.state.isOpenModalCreate,
        })
    }
    toggleOpenModalShow = (productData) => {
        if (!this.state.isOpenModalShow) {
            this.setState({ productDataSelected: productData })
        }
        this.setState({
            isOpenModalShow: !this.state.isOpenModalShow,
        })


    }


    render() {
        return (
            <div className='list-container'>
                <ModalCreateProduct
                    isOpen={this.state.isOpenModalCreate}
                    toggleOpenModal={this.toggleOpenModalCreate}
                    createProduct={this.createProduct}
                />
                <ModalShowDetailProduct
                    productData={this.state.productDataSelected}
                    isOpen={this.state.isOpenModalShow}
                    toggleOpenModal={this.toggleOpenModalShow}
                    createProduct={this.createProduct}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={this.state.listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={this.state.filterTitle}
                    />
                </div>
                <div className='product-table-right'>
                    <TableDataGrid
                        rows={this.state.listProduct}
                        columns={allProductColumns}
                        toggleOpenModalCreate={this.toggleOpenModalCreate}
                        toggleOpenModalShow={this.toggleOpenModalShow}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        productList: state.factory.productList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProductList: () => dispatch(actions.fetchProductList()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
