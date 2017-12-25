import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import onClickOutside from "react-onclickoutside";

class OptionsDropdown extends React.Component {
    redirectToLogout = () => {
        this.props.history.push('/logout');
    };

    handleClickOutside = () => {
        this.props.openOptionsDropdown();
    };

    render() {
        return(
            <div className="OptionsDropdown h-paddingALL--sm">
                <Button onClick={this.redirectToLogout}>
                    Logout
                </Button>
            </div>
        );
    }
}

const OptionsDropdownWithOCO = onClickOutside(OptionsDropdown);

export default withRouter(OptionsDropdownWithOCO);