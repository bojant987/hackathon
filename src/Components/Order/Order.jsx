import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { switchDay } from '../../Redux/actionCreators';

import DayTabs from './DayTabs';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '0',
            name: '',
        };
    }

    static defaultProps = {
        menu: {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
        }
    };

    onTabChange = (activeKey) => {
        this.setState({activeKey});
        // this.props.switchDay(activeKey);
    };


    handleInputChange = event => {
        this.setState({ name: event.target.value });
    };


    render() {
        return(
            <Layout>
                <Content>
                    <DayTabs
                        onTabChange={this.onTabChange}
                        activeKey={this.state.activeKey}
                        menu={this.props.menu}
                    />
                    <Input
                        placeholder="Your name"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                    />
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        day: state.day,
        menu: state.menu,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        switchDay: day => {
            return dispatch(switchDay(day));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);