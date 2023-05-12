import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Dashboard/Dashboard.scss'
import BusinessMetrics from '../Dashboard/BusinessMetrics';
import RecentActivity from '../Dashboard/RecentActivity';
import TopProduct from '../Dashboard/TopProduct';
import ProductSales from '../Dashboard/ProductSales';
import adminService from '../../../services/adminService';
import factoryService from '../../../services/factoryService';
import _ from 'lodash';
class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSell: [],
            labels: [],
            label: 'Số lượng',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [],
            productSellMonth: [],
            labelsMonth: [],
            labelMonth: 'Số lượng',
            backgroundColorMonth: 'rgba(255, 99, 132, 0.5)',
            dataMonth: [],
        }
    }

    async componentDidMount() {
        let res = await adminService.getProductSell()
        // let resMonth = await adminService.getProductSellMonth(1)
        // console.log(resMonth)
        if (res) {
            this.handleBuildChartData(res)
        }
    }

    handleBuildChartData = (data) => {
        data.map(async (item, index) => {
            let productData = await factoryService.getProductInfo(item.product_id)
            if (productData && !_.isEmpty(productData)) {
                //     chartLabels.push(productData.name)
                //     chartData.push(item.total_quantity)
                this.setState(prevState => ({
                    labels: [...prevState.labels, productData.name],
                    data: [...prevState.data, item.total_quantity]
                }))
            }
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className='dashboard-content'>
                <div className='dashboard-left'>
                    <BusinessMetrics />
                    {/* <ProductSales

                    /> */}
                    <TopProduct
                        labels={this.state.labels}
                        label={this.state.label}
                        backgroundColor={this.state.backgroundColor}
                        data={this.state.data}
                    />

                </div>
                <div className='dashboard-right'>
                    <RecentActivity />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
