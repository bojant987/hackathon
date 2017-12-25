import React from 'react';
import { connect, Provider } from 'react-redux';
import { IndexRoute, withRouter, Redirect } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './Components/Header';
import AppFooter from './Components/Footer';

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
        user: { admin: true } // delete this thing when real auth is implemented
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
            <div>
                {/*<AppHeader/>*/}
                <HashRouter>
                    <Switch>

                        {/* Home */}
                        <Route exact path="/">
                            <div>
                                <AppHeader/>
                                <main>
                                    {this.withLoginRedirect(Home, this.props.user)}
                                </main>
                                <AppFooter/>
                            </div>
                        </Route>

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
                        <Route path="/profile/:user?">
                            <div>
                                <AppHeader/>
                                <main>
                                    {this.withLoginRedirect(Profile, this.props.user)}
                                </main>
                                <AppFooter/>
                            </div>
                        </Route>
                        {/* Order */}
                        <Route path="/order">
                            <div>
                                <AppHeader/>
                                <main>
                                    {this.withLoginRedirect(Order, this.props.user)}
                                </main>
                                <AppFooter/>
                            </div>
                        </Route>
                        {/* Food */}
                        <Route path="/food">
                            <div>
                                <AppHeader/>
                                <main>
                                    {this.withLoginRedirect(Food, this.props.user)}
                                </main>
                                <AppFooter/>
                            </div>
                        </Route>
                        {/* Manage orders */}
                        <Route path="/manageorders">
                            <div>
                                <AppHeader user={this.props.user}/>
                                <main>
                                    {this.withAdminAccess(ManageOrders, this.props.user)}
                                </main>
                                <AppFooter/>
                            </div>
                        </Route>

                        {/* Global forbidden redirect */}
                        <Route path="/forbidden" component={Error403WithRouter} />
                        {/*/!*Find solution for this*!/*/}
                        {/*<Route component={Error404WithRouter} />*/}

                    </Switch>
                </HashRouter>
                {/*<AppFooter/>*/}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(_Routes);

