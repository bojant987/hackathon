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
            activeKey: 'mon',
        };
    }

    onChange = (activeKey) => {
        this.setState({activeKey});
        this.props.switchDay(activeKey);
    };

    render() {
        return (
            <Tabs className="DayTabs" onChange={this.onChange} activeKey={this.state.activeKey}>
                <TabPane tab="Mon" key="mon" className="DayTabsPane">
                    <Row>
                        {this.props.menu['mon'].map((item) => {
                            return (
                                <Col span={6}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Tue" key="tue">
                    <Row>
                        {this.props.menu['tue'].map((item) => {
                            return (
                                <Col span={6}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Wed" key="wed">
                    <Row>
                        {this.props.menu['wed'].map((item) => {
                            return (
                                <Col span={6}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Thu" key="thu">
                    <Row>
                        {this.props.menu['thu'].map((item) => {
                            return (
                                <Col span={6}>
                                    <Card item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Fri" key="fri">
                    <Row>
                        {this.props.menu['fri'].map((item) => {
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



