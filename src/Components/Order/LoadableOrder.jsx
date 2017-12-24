import React from 'react';
import Loadable from 'react-loadable';

import PageLoading from '../PageLoading';

const LoadableOrder = Loadable({
    loader: () => import('./Order'),
    loading: PageLoading,
});

export class Order extends React.Component {
    render() {
        return <LoadableOrder/>;
    }
}