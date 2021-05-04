import React, { Component } from 'react'
import { Table, Tag, Space, Descriptions, Card,Select, PageHeader } from 'antd';
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


class PastOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                 <Button type="primary">
                        Show Recipt
                </Button>
                <Button type="danger">
                        Delete
                </Button>
                </Space>
              ),
            },
          ]

        return ( 
            <Card>
           <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Past Deliveries"
    ></PageHeader>
            <Table columns={columns} dataSource={data} />
            </Card>
         );
    }
}
 
export default PastOrders;