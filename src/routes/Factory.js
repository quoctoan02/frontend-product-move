import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header/Header';
import Dashboard from '../containers/System/Factory/Dashboard';
import ProductList from '../containers/System/Factory/ProductList';
import StockList from '../containers/System/Factory/StockList';

class Factory extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="content">
                        <Switch>
                            <Route path="/factory/dashboard" component={Dashboard} />
                            <Route path="/factory/list-product" component={ProductList} />
                            <Route path="/factory/list-stock" component={StockList} />
                            {/* <Route component={() => { return (<Redirect to={systemMenuPath} />) }} /> */}

                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Factory);
