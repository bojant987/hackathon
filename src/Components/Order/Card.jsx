import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class CardComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSelection = () => {
		if (this.props.selected) {
			if (this.props.onRemove) {
				this.props.onRemove(this.props.day, this.props.item.id);
			}
		} else {
			if (this.props.onSelect) {
				this.props.onSelect(this.props.day, this.props.item.id);
			}
		}
    };

	render() {
		return (
			<Card
				className="ant-card-overwrite"
				cover={<img alt={this.props.item.title} src={this.props.item.photo_uri} />}
				actions={[
					<span
                        onClick={this.handleSelection}
                        style={ this.props.selected ? { "color": "#1890ff" } : { "color": "rgba(0, 0, 0, 0.65)" } }
                    >
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
