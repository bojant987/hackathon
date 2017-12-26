import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { switchDay, fetchMenu, saveOrder, addItem, removeItem } from '../../Redux/actionCreators';

import DayTabs from './DayTabs';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '0',
            name: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchMenu();
    }

    onTabChange = (activeKey) => {
        this.setState({activeKey});
    };


    handleInputChange = event => {
        this.setState({ name: event.target.value });
    };

    handleSubmit() {
    	if (this.state.activeKey && this.state.name) {
    		this.props.saveOrder(this.state.activeKey, this.state.name);
    	}
    }

    render() {
        return(
            <Layout>
                <Content>
                    <div className="NameFieldWrapper">
                        <Input
                            placeholder="Your name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            className="NameField"
                        />
                        <Button onClick={this.handleSubmit} className="submitOrderButton">
                            Submit
                        </Button>
                    </div>
                    <DayTabs
                        onTabChange={this.onTabChange}
                        activeKey={this.state.activeKey}
                        menu={this.props.menuByDay}
                        menuAll={this.props.menuAll}
                        addFood={this.props.addItem}
                        removeFood={this.props.removeItem}
                        selectedItems={this.props.order}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);