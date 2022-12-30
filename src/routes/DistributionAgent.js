import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header/Header';
import Dashboard from '../containers/System/DistributionAgent/Dashboard';
import StockList from '../containers/System/DistributionAgent/StockList';

class DistributionAgent extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="content">
                        <Switch>
                            <Route path="/distribution-agent/dashboard" component={Dashboard} />
                            <Route path="/distribution-agent/list-stock" component={StockList} />
                            {/* <Route path="/distribution-agent/list-stock" component={StockList} />
                            <Route path="/distribution-agent/list-stock" component={StockList} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(DistributionAgent);
