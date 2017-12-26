import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select } from 'antd';
const Option = Select.Option;

import { fetchDailySummary } from '../../Redux/actionCreators';

import Daily from './Daily';

class ManageOrders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: 'daily',
        };
    }

    componentDidMount() {
        // console.log(new Date().getDay() + 1);
        this.props.fetchDailySummary(new Date().getDay());
    }

    onTabChange = (activeKey) => {
        this.setState({activeKey});
    };

    render() {
        return(
            <Layout>
                <Content>
                    <h1 className="h-marginB--lg h-marginT--lg h-textCenter">Manage orders</h1>
                    <div>
                        <Select defaultValue="0" style={{ width: 300, height: 48, marginLeft: 50 }}>
                            <Option value="0">Monday</Option>
                            <Option value="1">Tuesday</Option>
                            <Option value="2">Wednesday</Option>
                            <Option value="3">Thursday</Option>
                            <Option value="4">Friday</Option>
                        </Select>
                    </div>
                    <Tabs className="ManageTabs" onChange={this.onTabChange} activeKey={this.state.activeKey}>
                        <TabPane tab="Daily" key="daily" className="DailyTabsPane">
                            <Daily data={this.props.daily}/>
                        </TabPane>
                        <TabPane tab="Weekly" key="weekly" className="WeeklyTabsPane">

                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.daily);
    return {
        daily: state.daily.data,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchDailySummary,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrders);