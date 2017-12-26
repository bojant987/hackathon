import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { switchDay, sendOrder } from '../../Redux/actionCreators';
import { bindActionCreators } from 'redux';

import { switchDay, fetchMenu } from '../../Redux/actionCreators';

import DayTabs from './DayTabs';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '0',
            name: '',
            selectedFood: {},
        };
    }

    static defaultProps = {
        menu: {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
        }
    };

    componentDidMount() {
    	if (!this.props.menuAll && !this.props.menuLoading) {
    		this.props.fetchMenu();
    	}
    }

    onTabChange = (activeKey) => {
        this.setState({activeKey});
        // this.props.switchDay(activeKey);
    };


    handleInputChange = event => {
        this.setState({ name: event.target.value });
    };

    handleFoodSelection = (day, foodId) => {
        this.setState({
            selectedFood: {
                ...this.state.selectedFood,
                [day]: [ ...this.state.selectedFood[day], foodId ]
            }
        });
    };

    render() {
        return(
            <Layout>
                <Content>
                    <DayTabs
                        onTabChange={this.onTabChange}
                        activeKey={this.state.activeKey}
                        menu={this.props.menu}
                        handleFoodSelection={this.handleFoodSelection}
                    />
                    <Input
                        placeholder="Your name"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                    />
                    <Button>
                        Submit
                    </Button>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        day: state.day,
        menuByDay: state.menu.byDay,
        menuAll: state.menu.all,
        menuLoading: state.menu.loading,
    };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			switchDay,
			fetchMenu,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);