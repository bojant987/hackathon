import React from 'react';
import Loadable from 'react-loadable';

import PageLoading from '../PageLoading';

const LoadableLogin = Loadable({
    loader: () => import('./Login'),
    loading: PageLoading,
});

export class Login extends React.Component {
    render() {
        return <LoadableLogin/>;
    }
}

const LoadableSignUp = Loadable({
    loader: () => import('./SignUp'),
    loading: PageLoading,
});

export class SignUp extends React.Component {
    render() {
        return <LoadableSignUp/>;
    }
}

const LoadableForgotPassword = Loadable({
    loader: () => import('./ForgotPassword'),
    loading: PageLoading,
});

export class ForgotPassword extends React.Component {
    render() {
        return <LoadableForgotPassword/>;
    }
}

const LoadableLogout = Loadable({
    loader: () => import('./Logout'),
    loading: PageLoading,
});

export class Logout extends React.Component {
    render() {
        return <LoadableLogout/>;
    }
}

const LoadableError403 = Loadable({
    loader: () => import('./ForgotPassword'),
    loading: PageLoading,
});

export class Error403 extends React.Component {
    render() {
        return <LoadableError403/>;
    }
}