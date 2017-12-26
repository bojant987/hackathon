import React from 'react';
import { Table } from 'antd';
import { Select } from 'antd';
const Option = Select.Option;
import uniq from 'lodash.uniq';

export default class Daily extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        // console.log(this.props.data);
        const data = this.props.data && this.props.data.length > 0 ? this.props.data.map((item) => {
           if (typeof item.names !== 'string') {
               item.names = uniq(item.names);
           }
            if (item.names && item.names.length > 0 && typeof item.names !== 'string') {
                item.names = item.names.join(', ');
            }
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
                <div>
                    <Select
                        defaultValue="0"
                        style={{ width: 300, height: 48, }}
                        onChange={this.props.handleSelectDay}
                        value={this.props.selectedDay}
                    >
                        <Option value="0">Monday</Option>
                        <Option value="1">Tuesday</Option>
                        <Option value="2">Wednesday</Option>
                        <Option value="3">Thursday</Option>
                        <Option value="4">Friday</Option>
                    </Select>
                </div>
                <Table columns={columns} dataSource={data} pagination={false} loading={this.props.loading} />
            </div>
        );
    }
}