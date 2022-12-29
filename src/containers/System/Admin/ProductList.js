import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductList.scss'
import Filter from '../../ListDetail/Filter';
import ModalCreateProduct from '../../ListDetail/Modal/ModalCreateProduct';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            listFilter: [
                { typeFilter: 'status', label: 'Trạng thái sản phẩm' },
                { typeFilter: 'factory', label: 'Cơ sở sản xuất' },
                { typeFilter: 'distribution-agent', label: 'Nhà phân phối' },
                { typeFilter: 'service-center', label: 'Trung tâm bảo hành' }
            ],
            typeModal: '',
            filterTitle: 'Sản phẩm',
            isOpenModal: false,
        }
    }

    getProductAfterFiltered = (data) => {
        this.setState({ data })
    }

    toggleOpenModal = (typeModal) => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })

        if (this.state.isOpenModal) {
            this.setState({
                typeModal
            })
        }
    }

    render() {
        let { listFilter, filterTitle, isOpenModal } = this.state

        return (
            <div className='list-container'>
                <ModalCreateProduct
                    isOpen={isOpenModal}
                    toggleOpenModal={this.toggleOpenModal}
                    createProduct={this.createProduct}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={filterTitle}
                    />
                </div>
                <div className='product-table-right'>
                    {/* <Table
                        toggleOpenModal={this.toggleOpenModal}
                    /> */}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
