import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

import DayTabs from './DayTabs';

export default class Order extends React.Component {


    render() {
        return(
            <Layout>
                <Content>
                    <DayTabs />
                </Content>
            </Layout>
        );
    }
}