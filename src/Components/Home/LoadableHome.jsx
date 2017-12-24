import React from 'react';
import Loadable from 'react-loadable';

import PageLoading from '../PageLoading';

const LoadableHome = Loadable({
    loader: () => import('./Home'),
    loading: PageLoading,
});

export class Home extends React.Component {
    render() {
        return <LoadableHome/>;
    }
}