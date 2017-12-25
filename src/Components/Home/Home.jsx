import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

export default class Home extends React.Component {


    render() {
        return(
            <Layout>
                <Content>
                    Home
                </Content>
            </Layout>
        );
    }
}