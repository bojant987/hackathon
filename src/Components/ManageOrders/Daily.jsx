import React from 'react';
import { Table, Button } from 'antd';

export default class Daily extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const data = this.props.data.length > 0 ? this.props.data.map((item) => {
            item.names = item.names.join(', ');
            item.key = item.food_name;
            return item;
        }) : [];
        const columns = [{
            title: 'Food',
            dataIndex: 'food_name',
            key: 'food_name',
        }, {
            title: 'Names',
            dataIndex: 'names',
            key: 'names',
        }, {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        }];

        return(
            <div>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        );
    }
}