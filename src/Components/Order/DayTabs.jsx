import React from 'react';
import {Tabs} from 'antd';

import DayTab from './DayTab';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const TabPane = Tabs.TabPane;

export default props => (
    <Tabs className="DayTabs h-layoutWidth90" onChange={props.onTabChange} activeKey={props.activeKey}>
        {days.map((day, index) => <TabPane tab={day} key={index} className="DayTabsPane">
            <DayTab day={index} menu={props.menu} menuAll={props.menuAll} addFood={props.addFood} removeFood={props.removeFood} selectedItems={props.selectedItems} />
        </TabPane>)}
    </Tabs>
);

/*export default class DayTabs extends React.Component {
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
                                        onSelect={this.props.addFood}
                                        onRemove={this.props.removeFood}
                                        selected={this.props.selectedItems[0].includes(foodItem.id)}
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
                                        onSelect={this.props.addFood}
                                        onRemove={this.props.removeFood}
                                        selected={this.props.selectedItems[1].includes(foodItem.id)}
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
                                        onSelect={this.props.addFood}
                                        onRemove={this.props.removeFood}
                                        selected={this.props.selectedItems[2].includes(foodItem.id)}
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
                                        onSelect={this.props.addFood}
                                        onRemove={this.props.removeFood}
                                        selected={this.props.selectedItems[3].includes(foodItem.id)}
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
                                        onSelect={this.props.addFood}
                                        onRemove={this.props.removeFood}
                                        selected={this.props.selectedItems[4].includes(foodItem.id)}
                                    />
                                </Col>
                            ) : null;
                        })}
                    </Row>
                </TabPane>
            </Tabs>
        );
    }
}*/