import React from 'react';
import {Tabs, Button, Row, Col} from 'antd';
import { connect } from 'react-redux';
import Card from './Card';

const TabPane = Tabs.TabPane;

import { switchDay } from '../../Redux/actionCreators';

class DayTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '0',
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

    onChange = (activeKey) => {
        this.setState({activeKey});
        // this.props.switchDay(activeKey);
    };

    render() {
        return (
            <Tabs className="DayTabs" onChange={this.onChange} activeKey={this.state.activeKey}>
                <TabPane tab="Mon" key="0" className="DayTabsPane">
                    <Row>
                        {this.props.menu['0'].map((item) => {
                            return (
                                <Col span={8}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Tue" key="1">
                    <Row>
                        {this.props.menu['1'].map((item) => {
                            return (
                                <Col span={8}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Wed" key="2">
                    <Row>
                        {this.props.menu['2'].map((item) => {
                            return (
                                <Col span={8}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Thu" key="3">
                    <Row>
                        {this.props.menu['3'].map((item) => {
                            return (
                                <Col span={8}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Fri" key="4">
                    <Row>
                        {this.props.menu['4'].map((item) => {
                            return (
                                <Col span={6}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
            </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(DayTabs);



