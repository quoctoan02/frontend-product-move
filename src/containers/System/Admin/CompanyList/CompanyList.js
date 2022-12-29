import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../../../ListDetail/Filter';
import ModalCreateAccount from '../../../ListDetail/Modal/ModalCreateAccount';
import TableDataGrid from '../../../ListDetail/TableDataGrid'
import * as menuCompany from './menuCompany'

const columns = [
    {
        field: 'id',
        headerName: 'Mã sản phẩm',
        width: 90
    },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 150,
        editable: true,
    },
    {
        field: 'product_line',
        headerName: 'Dòng sản phẩm',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Giá niêm yết',
        width: 150,
        editable: true,
    },
    {
        field: 'image_url',
        headerName: 'Ảnh sản phẩm',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Mô tả chi tiết',
        width: 150,
        editable: true,
    },
]

class CompanyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: '',
            isOpenModalCreate: false,
        }
    }

    componentDidMount() {
        this.handleMenuCompany(this.props.typeCompany);
    }

    toggleOpenModalCreate = () => {
        this.setState({
            isOpenModalCreate: !this.state.isOpenModalCreate,
        })

        // if (this.state.isOpenModal) {
        //     this.setState({
        //         typeModal
        //     })
        // }
    }

    handleMenuCompany = (typeCompany) => {
        if (typeCompany === 'factory') {
            this.setState({
                menuList: menuCompany.factoryProps
            })
        }
        if (typeCompany === 'service-center') {
            this.setState({
                menuList: menuCompany.serviceCenterProps
            })
        }
        if (typeCompany === 'distribution-agent') {
            this.setState({
                menuList: menuCompany.distributionAgentProps
            })
        }
    }

    render() {
        let { menuList } = this.state
        return (
            <div className='list-container'>
                <ModalCreateAccount
                    isOpen={this.state.isOpenModalCreate}
                    toggleOpenModal={this.toggleOpenModalCreate}
                    createAccount={this.createAccount}
                />
                <div className='filter-box-left'>
                    <Filter
                        listFilter={menuList.listFilter}
                        handleGetProductFromParent={this.getProductAfterFiltered}
                        filterTitle={menuList.title}
                    />
                </div>
                <div className='product-table-right'>
                    <TableDataGrid
                        rows={''}
                        columns={columns}
                        toggleOpenModalCreate={this.toggleOpenModalCreate}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
