import React, { Component } from 'react';
import { Table, Tag, Space, Descriptions, Card,Select } from 'antd';
import { Drawer, Button,  } from 'antd';
const { Option } = Select;


  const data = [
    {
      key: '1',
      id: 'dcdcscs342d',
      loc: "Balangoda",
      date: '2021-05-02',
      user: 'Akila Liyanage',
      status: ['Processing'],
    }
  ];


class OrderTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible : false, 
            setVisible : false,
         }
    }


    showDrawer = (record) => {
        console.log(record)
        this.setState({visible:true})
      };

      onClose = () => {
        this.setState({visible:false})
      };

       onChange = (value) => {
        console.log(`selected ${value}`);
      }
      
     onBlur = () => {
        console.log('blur');
      }
      
      onFocus = () => {
        console.log('focus');
      }
      
      onSearch = (val) => {
        console.log('search:', val);
      }
    render() { 
        const columns = [
            {
              title: 'Delivery ID',
              dataIndex: 'id',
              key: 'id',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Location',
              dataIndex: 'loc',
              key: 'loc',
            },
            {
              title: 'Shipped Date',
              dataIndex: 'date',
              key: 'date',
            },
            {
                title: 'User',
                dataIndex: 'user',
                key: 'user',
            },
            {
              title: 'Current Status',
              key: 'status',
              dataIndex: 'status',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                 <Button type="primary" onClick={() => this.showDrawer(record)}>
                        Change Status
                </Button>
                  <a>Delete</a>
                </Space>
              ),
            },
          ]
        return ( 
            <Card>
                <Descriptions title="Current Deliveries"/>
                <Table columns={columns} dataSource={data} />

                <Drawer
        title="Change Status"
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
          <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select the current status"
    optionFilterProp="children"
    onChange={this.onChange}
    onFocus={this.onFocus}
    onBlur={this.onBlur}
    onSearch={this.onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Processing">Processing</Option>
    <Option value="Handed over to the Courier service">Handed over to the Courier service</Option>
    <Option value="Ready to load">Ready to load</Option>
    <Option value="Ready to dispatch">Ready to dispatch</Option>
    <Option value="On the way">On the way</Option>
    <Option value="Deliverd">Deliverd</Option>
  </Select>
      </Drawer>
            </Card>
         );
    }
}
 
export default OrderTable;