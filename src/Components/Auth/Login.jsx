import React from 'react';
import { Button } from 'antd';

export default class Login extends React.Component {
    render() {
        return(
            <div>
                Login
                <Button type="primary" className="h-fullWidth">
                    Login here
                </Button>
            </div>
        );
    }
}