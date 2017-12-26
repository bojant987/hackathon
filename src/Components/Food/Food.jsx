import React from 'react';
import { Layout, Spin } from 'antd';
const { Content } = Layout;
import { Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { switchDay, fetchMenu, saveOrder, addItem, removeItem } from '../../Redux/actionCreators';

import Card from '../Order/Card';

class Foods extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '0',
            name: localStorage.getItem('name') || '',
            item: {}
        };
    }

    componentDidMount() {
        this.props.fetchMenu();
    }

    componentDidUpdate(nextProps) {
        if (this.props.menuAll !== nextProps.menuAll) {
            this.getItem();
        }
    }

    onTabChange = (activeKey) => {
        this.setState({activeKey});
    };

    getItem = () => {
        let today = new Date().getDay() - 1;
        let itemId = this.getRandomItem(this.props.menuByDay[today]) || {};
        const item = this.props.menuAll[itemId] || {};

        this.setState({ item });
    };

    getRandomItem = (items) => {
        return items[Math.floor(Math.random() * (items.length -1))];
    };

    render() {
        if (this.props.menuLoading || this.props.orderLoading) {
            return <div style={{textAlign: 'center', paddingTop: '100px'}}>
                <Spin size="large" />
            </div>;
        }

        return(

            <Layout>
                <Content>
                    <Row style={{ paddingTop: 40 }}>
                        <Col span={8} offset={8}>
                            <Card
                                menu={this.props.menuByDay}
                                menuAll={this.props.menuAll}
                                item={this.state.item}
                                day={new Date().getDay() + 1}
                            />
                        </Col>
                    </Row>
                    <div className="h-textCenter h-paddingALL--md">
                        <Button onClick={this.getItem} className="submitOrderButton">
                            Next, please
                        </Button>
                    </div>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuByDay: state.menu.byDay,
        menuAll: state.menu.all,
        menuLoading: state.menu.loading,
        order: state.order.items,
        orderLoading: state.order.loading,
        orderSaving: state.order.saving,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            switchDay,
            fetchMenu,
            addItem,
            removeItem,
            saveOrder,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Foods);