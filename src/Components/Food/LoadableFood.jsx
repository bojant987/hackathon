import React from 'react';
import Loadable from 'react-loadable';

import PageLoading from '../PageLoading';

const LoadableFood = Loadable({
    loader: () => import('./Food'),
    loading: PageLoading,
});

export class Food extends React.Component {
    render() {
        return <LoadableFood/>;
    }
}