import React from 'react';
import { Table, Button } from 'antd';

export default class Daily extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        // console.log(this.props.data);
        const data = this.props.data.orders && this.props.data.orders.length > 0 ? this.props.data.orders.map((item) => {
            item.sum = item.sum + ' rsd';
            item.key = item.name;
            return item;
        }) : [];

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Sum',
            dataIndex: 'sum',
            key: 'sum',
        }
        ];

        return(
            <div>
                <h2>{this.props.data && this.props.data.total_sum ? 'Grand total: ' + this.props.data.total_sum + ' rsd' : undefined}</h2>
                <Table columns={columns} dataSource={data} pagination={false} loading={this.props.loading} />
            </div>
        );
    }
}