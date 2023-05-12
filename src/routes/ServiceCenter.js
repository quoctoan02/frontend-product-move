import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header/Header';
import Dashboard from '../containers/System/Admin/Dashboard';
import ProductList from '../containers/System/ServiceCenter/ProductList';

class ServiceCenter extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="content">
                        <Switch>
                            <Route path="/service-center/dashboard" component={Dashboard} />
                            <Route path="/service-center/list-product" component={ProductList} />

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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCenter);
