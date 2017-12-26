import React from 'react';
import {Tabs, Row, Col} from 'antd';

import Card from './Card';

export default props => (
	<Row type="flex" justify="space-around" align="middle">
		{props.menu[props.day].map((id) => {
			const foodItem = props.menuAll[id];
			return foodItem ? (
				<Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={foodItem.id}>
					<Card
						item={foodItem}
						day={props.day}
						onSelect={props.addFood}
						onRemove={props.removeFood}
						selected={props.selectedItems[props.day].includes(foodItem.id)}
					/>
				</Col>
			) : null;
		})}
	</Row>
);