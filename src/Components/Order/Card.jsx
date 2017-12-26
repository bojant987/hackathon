import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class CardComponent extends React.Component {
	constructor(props) {
		super(props);

		this.addToOrder = ::this.addToOrder;

		this.state = {
			item: {
				title: 'Card Title',
				img: 'https://www.donesi.com/images/product/48/13248.jpg',
				description: 'Some text to be here so we can see if everything is fine with text and other stuff',
				price: '240 rsd',
			},
		};
	}

	addToOrder() {
		console.log('___ > > > CLICK ON CARD !!!');
	}

	render() {
		return (
			<Card
				className="ant-card-overwrite"
				cover={<img alt={this.state.item.title} src={this.state.item.img} />}
				actions={[
					<span className="h-fullWide" onClick={this.props.handleFoodSelection.bind(null, this.props.day, this.props.item.id)}>
						<Icon type="check" /> Add to order
					</span>,
				]}
				title={this.state.item.title}
				hoverable
			>
				<p>
					<span className="h-boldTxt">Description :</span> {this.state.item.description}
				</p>
				<p>
					<span className="h-boldTxt">Price :</span> {this.state.item.price}
				</p>
			</Card>
		);
	}
}
