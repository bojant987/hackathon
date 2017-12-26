import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class CardComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	    console.log(this.props.item);
		return (
			<Card
				className="ant-card-overwrite"
				cover={<img alt={this.props.item.title} src={this.props.item.photo_uri} />}
				actions={[
					<span className="h-fullWide" onClick={this.props.handleFoodSelection.bind(null, this.props.day, this.props.item.id)}>
						<Icon type="check" /> Add to order
					</span>,
				]}
				title={this.props.item.title}
				hoverable
			>
				<p>
					<span className="h-boldTxt">Description :</span> {this.props.item.description}
				</p>
				<p>
					<span className="h-boldTxt">Price :</span> {this.props.item.price}
				</p>
			</Card>
		);
	}
}
