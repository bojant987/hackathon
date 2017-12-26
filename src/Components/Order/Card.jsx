import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class CardComponent extends React.Component {
	render() {
		return (
			<Card
				style={{ width: 300 }}
				cover={<img alt={this.props.item.title} src={this.props.item.img} />}
				actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
			>
				<Meta
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					title={this.props.item.title}
					description={this.props.item.description}
                    price={this.props.item.price}
				/>
			</Card>
		);
	}
}
