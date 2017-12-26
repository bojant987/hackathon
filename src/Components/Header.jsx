import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
const { Header } = Layout;
import { Link, withRouter } from 'react-router-dom';

import OptionsDropdown from './OptionsDropdown';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: this.props.location.pathname,
            isMenuCollapsed: window.innerWidth <= 1024,
            isDropdownOpen: false,
        };
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };

    toggleCollapsed = () => {
        this.setState({
            isMenuCollapsed: !this.state.isMenuCollapsed,
        });
    };
    
    openOptionsDropdown = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen,
        });
    };

    render() {
        return(
            <Layout className="HeaderLayout">
                <Header className="Header">
                    <Button type="primary" onClick={this.toggleCollapsed} className="MenuCollapse">
                        <Icon type={this.state.isMenuCollapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <Menu
                        mode={"horizontal"}
                        theme="dark"
                        className="NavigationFake"
                    >
                        <Menu.Item key="/" className="Navigation__brand">
                            {/*<Link to="/">*/}
                                {/**/}
                            {/*</Link>*/}
                            <span className="Navigation__brandText">Order it!</span>
                        </Menu.Item>
                    </Menu>
                    {!this.state.isMenuCollapsed
                        ? <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode={window.innerWidth > 1024 ? "horizontal" : "vertical"}
                            theme="dark"
                            className="Navigation"
                        >
                            <Menu.Item key="/" className="Navigation__item">
                                <Link to="/">
                                    <Icon type="smile-o" />Order
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/food" className="Navigation__item">
                                <Link to="/food">
                                    <Icon type="smile-o" />Hall Of Fame
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/profile" className="Navigation__item">
                                <Link to="/profile">
                                    <Icon type="user" />Profile
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/manageorders" className="Navigation__item">
                                <Link to="/manageorders">
                                    <Icon type="setting" />Manage Orders
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                disabled
                                key="/options"
                                className="Navigation__options"
                                style={this.state.isDropdownOpen
                                    ? { "backgroundColor": "#1890ff" }
                                    : { "backgroundColor": "transparent" }}
                            >
                                <Icon type="caret-down" className="Navigation__optionsButtonIcon" />
                                <Button onClick={this.openOptionsDropdown} className="Navigation__optionsButton"/>
                            </Menu.Item>
                        </Menu> : null}
                </Header>
                {this.state.isDropdownOpen
                    ? <OptionsDropdown
                        openOptionsDropdown={this.openOptionsDropdown}
                        outsideClickIgnoreClass="Navigation__optionsButton" /> : null}
            </Layout>
        );
    }
}

export default withRouter(AppHeader);