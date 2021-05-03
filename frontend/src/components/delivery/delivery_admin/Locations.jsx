import React, { Component } from 'react'
import { Table, Tag, Space, Descriptions, Card,Select } from 'antd';
import { Drawer, Button, Alert , PageHeader } from 'antd';
const { Option } = Select;


const data = [
    {
      key: '1',
      id: 'dcdcscs342d',
      prov: "Sabaragamuwa",
      location: "Balangoda",
      status: ['Yes'],
    }
  ];

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const columns = [
            {
              title: 'Location ID',
              dataIndex: 'id',
              key: 'id',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Province',
              dataIndex: 'prov',
              key: 'prov',
            },
            {
              title: 'Sub Location',
              dataIndex: 'location',
              key: 'location',
            },
            {
              title: 'Is delivering?',
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
      title="Delivery Locations"
      extra={[
        <Button type="primary">Add new Location</Button>
      ]}
    >

    </PageHeader>
            <Table columns={columns} dataSource={data} />
            </Card>
         );
       
    }
}
 
export default Locations;