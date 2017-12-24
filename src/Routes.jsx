import React from 'react';
import { connect, Provider } from 'react-redux';
import { IndexRoute, withRouter, Redirect } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';

import store from './Redux/store';

import { SignUp } from './Components/Auth/LoadableAuth';
import { Login } from './Components/Auth/LoadableAuth';
import { Logout } from './Components/Auth/LoadableAuth';
import { Error403 } from './Components/Auth/LoadableAuth';
import { ForgotPassword } from './Components/Auth/LoadableAuth';

import { Home } from './Components/Home/LoadableHome';
import { Food } from './Components/Food/LoadableFood';
import { Order } from './Components/Order/LoadableOrder';
import { Profile } from './Components/Profile/LoadableProfile';
import { ManageOrders } from './Components/ManageOrders/LoadableManageOrders';

const LoginWithRouter = withRouter(Login);
const LogoutWithRouter = withRouter(Logout);
const Error403WithRouter = withRouter(Error403);

class _Routes extends React.Component {
    constructor(props) {
        super(props);

        this.withLoginRedirect = ::this.withLoginRedirect;
        this.withAdminAccess = ::this.withAdminAccess;
    }

    static defaultProps = {
        user: {} // delete this thing when real auth is implemented
    };

    withLoginRedirect(Component, user) {
        if (user) {
            return <Component />
        } else {
            return <Redirect to='/login' />
        }
    }

    withAdminAccess(Component, user) {
        if (user && user.admin) {
            return <Component />
        } else {
            return <Redirect to='/forbidden' />
        }
    }

    render() {
        return (
            <HashRouter>
                <Switch>

                    {/* Home */}
                    <Route exact path="/" render={() => {
                        return this.withLoginRedirect(Home, this.props.user)
                    }} />

                    {/*User singup */}
                    <Route path="/signup" component={SignUp} />
                    {/*User login */}
                    <Route path="/login/:reset?" component={LoginWithRouter} />
                    {/* User logout */}
                    <Route path="/logout" component={LogoutWithRouter} />
                    {/* User forgot password */}
                    <Route path="/forgotpassword" component={ForgotPassword} />
                    {/* User new password */}


                    {/* Profile */}
                    <Route path="/profile/:user?" render={() => {
                        return this.withLoginRedirect(Profile, this.props.user)
                    }} />
                    {/* Order */}
                    <Route path="/order" render={() => {
                        return this.withLoginRedirect(Order, this.props.user)
                    }} />
                    {/* Foods */}
                    <Route path="/food" render={() => {
                        return this.withLoginRedirect(Food, this.props.user)
                    }} />
                    {/* Manage orders */}
                    <Route path="/manageorders" render={() => {
                        return this.withAdminAccess(ManageOrders, this.props.user)
                    }} />

                    {/* Global forbidden redirect */}
                    <Route path="/forbidden" component={Error403WithRouter} />
                    {/*/!*Find solution for this*!/*/}
                    {/*<Route component={Error404WithRouter} />*/}

                </Switch>
            </HashRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.loginStatus,
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserPrefs: () => {
            return dispatch(getUserPrefs());
        },
    };
};

const Routes =  connect(mapStateToProps, mapDispatchToProps)(_Routes);

export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routes {...this.props} />
            </Provider>
        );
    }
}

