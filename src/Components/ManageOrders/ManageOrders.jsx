import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDailySummary, fetchWeeklySummary } from '../../Redux/actionCreators';

import Daily from './Daily';
import Weekly from './Weekly';

class ManageOrders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: 'daily',
            selectedDay: '0',
        };
    }

    componentDidMount() {
        this.props.fetchDailySummary(this.state.selectedDay);
        this.props.fetchWeeklySummary();
    }

    componentDidUpdate(nextProps, nextState) {
        if (this.state.selectedDay !== nextState.selectedDay) {
            this.props.fetchDailySummary(this.state.selectedDay);
        }
    }

    onTabChange = (activeKey) => {
        this.setState({activeKey});
    };

    handleSelectDay = value => {
        this.setState({ selectedDay: value });
    };

    render() {
        return(
            <Layout>
                <Content>
                    <h1 className="h-marginB--lg h-marginT--lg h-textCenter">Manage orders</h1>
                    <Tabs className="ManageTabs" onChange={this.onTabChange} activeKey={this.state.activeKey}>
                        <TabPane tab="Daily" key="daily" className="DailyTabsPane">
                            <Daily data={this.props.daily} loading={this.props.loading} handleSelectDay={this.handleSelectDay} selectedDay={this.state.selectedDay} />
                        </TabPane>
                        <TabPane tab="Weekly" key="weekly" className="WeeklyTabsPane">
                            <Weekly data={this.props.weekly} loading={this.props.loading} />
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        daily: state.daily.data,
        weekly: state.weekly.data,
        loading: state.daily.loading || state.weekly.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchDailySummary,
            fetchWeeklySummary
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrders);