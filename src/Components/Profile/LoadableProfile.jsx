import React from 'react';
import Loadable from 'react-loadable';

import PageLoading from '../PageLoading';

const LoadableProfile = Loadable({
    loader: () => import('./Profile'),
    loading: PageLoading,
});

export class Profile extends React.Component {
    render() {
        return <LoadableProfile/>;
    }
}