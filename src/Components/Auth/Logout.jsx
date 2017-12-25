import React from 'react';
import { withRouter } from 'react-router-dom';

const Logout = (props) => {
    // clear user here...or don't
    console.log(props.history);
    props.history.replace('/login');

    return null;
};

export default withRouter(Logout);