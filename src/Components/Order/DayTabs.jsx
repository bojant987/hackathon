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
            <Tabs className="DayTabs h-layoutWidth90" onChange={this.props.onTabChange} activeKey={this.props.activeKey}>
                <TabPane tab="Mon" key="0" className="DayTabsPane">
                    <Row type="flex" justify="space-around" align="middle">
                        {this.props.menu['0'].map((id) => {
                            const foodItem = this.props.menuAll[id];
                            return foodItem ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={foodItem.id}>
                                    <Card
                                        item={foodItem}
                                        day={0}
                                        addFood={this.props.addFood}
                                        removeFood={this.props.removeFood}
                                    />
                                </Col>
                            ) : null;
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Tue" key="1">
                    <Row type="flex" justify="space-around" align="middle">
                        {this.props.menu['1'].map((id) => {
                            const foodItem = this.props.menuAll[id];
                            return foodItem ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={foodItem.id}>
                                    <Card
                                        item={foodItem}
                                        day={1}
                                        addFood={this.props.addFood}
                                        removeFood={this.props.removeFood}
                                    />
                                </Col>
                            ) : null;
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Wed" key="2">
                    <Row type="flex" justify="space-around" align="middle">
                        {this.props.menu['2'].map((id) => {
                            const foodItem = this.props.menuAll[id];
                            return foodItem ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={foodItem.id}>
                                    <Card
                                        item={foodItem}
                                        day={2}
                                        addFood={this.props.addFood}
                                        removeFood={this.props.removeFood}
                                    />
                                </Col>
                            ) : null;
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Thu" key="3">
                    <Row type="flex" justify="space-around" align="middle">
                        {this.props.menu['3'].map((id) => {
                            const foodItem = this.props.menuAll[id];
                            return foodItem ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={foodItem.id}>
                                    <Card
                                        item={foodItem}
                                        day={3}
                                        addFood={this.props.addFood}
                                        removeFood={this.props.removeFood}
                                    />
                                </Col>
                            ) : null;
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Fri" key="4">
                    <Row type="flex" justify="space-around" align="middle">
                        {this.props.menu['4'].map((id) => {
                            const foodItem = this.props.menuAll[id];
                            return foodItem ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={foodItem.id}>
                                    <Card
                                        item={foodItem}
                                        day={4}
                                        addFood={this.props.addFood}
                                        removeFood={this.props.removeFood}
                                    />
                                </Col>
                            ) : null;
                        })}
                    </Row>
                </TabPane>
            </Tabs>
        );
    }
}