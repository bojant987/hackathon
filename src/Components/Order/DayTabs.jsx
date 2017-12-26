import React from 'react';
import {Tabs, Button, Row, Col} from 'antd';
import Card from './Card';

const TabPane = Tabs.TabPane;

export default class DayTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabs className="DayTabs" onChange={this.props.onTabChange} activeKey={this.props.activeKey}>
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



