import React from 'react';
import Loadable from 'react-loadable';

import PageLoading from '../PageLoading';

const LoadableManageOrders = Loadable({
    loader: () => import('./ManageOrders'),
    loading: PageLoading,
});

export class ManageOrders extends React.Component {
    render() {
        return <LoadableManageOrders/>;
    }
}