import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './TopProduct.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },

        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart',
        // },
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false,
                max: 8,
                min: -3
            }
        }]
    }
};



class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: '',
            labels: [],
            label: 'Số lượng',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [],
        }
    }

    async componentDidMount() {
        if (this.props) {
            this.setState({
                chartData: {
                    labels: this.props.labels,
                    datasets: [{
                        label: this.props.label,
                        data: this.props.data,
                        backgroundColor: this.props.backgroundColor
                    }]
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevStates) {
        if (prevProps !== this.props) {
            this.setState({
                chartData: {
                    labels: this.props.labels,
                    datasets: [{
                        label: this.props.label,
                        data: this.props.data,
                        backgroundColor: this.props.backgroundColor
                    }]
                }
            })
        }
    }

    render() {
        return (
            <div className='top-product-box'>
                <div className='top-product-header'>
                    <div className='top-product-title'>
                        <span>Top sản phẩm bán chạy </span>
                    </div>
                </div>
                <div className='top-product-content'>
                    {this.state.chartData &&
                        <Bar options={options} data={this.state.chartData} />
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(TopProduct);
