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