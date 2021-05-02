import React, { Component } from 'react';
import { Table, Tag, Space, Descriptions, Card } from 'antd';
import { Drawer, Button } from 'antd';


  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
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
    render() { 
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
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
                        Edit Delivery
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
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
            </Card>
         );
    }
}
 
export default OrderTable;