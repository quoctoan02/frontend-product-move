import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header/Header';
import Dashboard from '../containers/System/Admin/Dashboard';
import ProductList from '../containers/System/Admin/ProductList';
import CompanyList from '../containers/System/Admin/CompanyList/CompanyList';
import DistributionAgentList from '../containers/System/Admin/DistributionAgentList';

class Admin extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className='content'>
                        <Switch>
                            <Route path="/admin/dashboard" component={Dashboard} />
                            <Route path="/admin/list-product" component={() => (<ProductList />)} />
                            <Route path="/admin/subsidiary/factory" component={() => (<CompanyList typeCompany={"factory"} />)} />
                            <Route path="/admin/subsidiary/service-center" component={() => (<CompanyList typeCompany={"service-center"} />)} />
                            <Route path="/admin/partner/distribution-agent" component={DistributionAgentList} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
