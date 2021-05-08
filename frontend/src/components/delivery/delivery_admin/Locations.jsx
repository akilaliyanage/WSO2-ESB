import React, { Component } from 'react'
import { Table, Tag, Space, Descriptions, Card,Select, Modal, Input} from 'antd';
import { Drawer, Button, Alert , PageHeader, message } from 'antd';

import config from '../../../congig.json'

const { Option } = Select;



const data = [
    {
      key: '1',
      _id: 'dcdcscs342d',
      province: "Sabaragamuwa",
      location: "Balangoda",
      cost : '1000.00',
      isDeliver: ['Yes'],
    }
  ];

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isModalVisible : false,
          setIsModalVisible : false,
          province : '',
          cost : '',
          location : '',
          yes: 'yes',
          data : []
         }
    }

    componentDidMount(){
      fetch(config.host +  '/locations').
      then(res => res.json()).
      then(data => {
        this.setState({data : data})
      }).catch(err =>{
        alert(err)
      })
    }

    handleChange = (value) => {
      console.log(`selected ${value}`);
      this.setState({province : value})
    }

    handleChangeYes = (value) => {
      console.log(`selected ${value}`);
      this.setState({yes : value})
    }

    showModal = () => {
      this.setState({setIsModalVisible : true})
    };

    handleOk = () => {
      this.setState({setIsModalVisible : false})

      const data = {
        location : this.state.location,
        province : this.state.province,
        cost : this.state.cost,
        isDeliver : this.state.yes
      }

      fetch(config.host +  '/locations', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            message.success('Location saves successfully');
            this.componentDidMount()
          })
          .catch((error) => {
            console.error('Error:', error);
            message.error('This is an error. Location save failed');
          });
    };

    handleCancel = () => {
      this.setState({setIsModalVisible : false})
    };

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }


    render() { 
        const columns = [
            {
              title: 'Location ID',
              dataIndex: '_id',
              key: '_id',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Province',
              dataIndex: 'province',
              key: 'province',
            },
            {
              title: 'Sub Location',
              dataIndex: 'location',
              key: 'location',
            },
            {
              title: 'Cost for delivery',
              dataIndex: 'cost',
              key: 'cost',
            },
            {
              title: 'Is delivering?',
              key: 'isDeliver',
              dataIndex: 'isDeliver',
              render: tags => (
                (tags == 'Yes')?
                <>
                
                    <Tag color={'green'} key={tags}>
                        {tags.toUpperCase()}
                      </Tag>
                </> : 
                <>
                
                <Tag color={'red'} key={tags}>
                    {tags.toUpperCase()}
                  </Tag>
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
        <Button type="primary" onClick={this.showModal}>Add new Location</Button>
      ]}
    >

    </PageHeader>
            <Table columns={columns} dataSource={this.state.data} />

            <Modal title="Basic Modal" visible={this.state.setIsModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} >
            <Input placeholder="Enter location name" name="location" onChange={this.handleInput}  style={{paddingTop: "10px"}}/>
            <Select defaultValue="Select a province" style={{ width: "100%", padding: "10px 0px 10px" }} onChange={this.handleChange} >
                <Option value="Northern Province">Northern Province</Option>
                <Option value="North Central Province">North Central Province</Option>
                <Option value="Eastern Province">Eastern Province</Option>
                <Option value="North Western Province"> North Western Province</Option>
                <Option value="Western Province">Western Province</Option>
                <Option value="Central Province">Central Province</Option>
                <Option value="Sabaragamuwa">Sabaragamuwa</Option>
                <Option value="Uva">Uva</Option>
                <Option value="Southern Province">Southern Province</Option>
              </Select>
              <br/>
            <Input placeholder="Enter Cost for the delivery"  name="cost" onChange={this.handleInput} style={{paddingTop: "10px"}}/>
            <Select defaultValue="Is delivering to this location" style={{ width: "100%", padding: "10px 0px 10px" }} onChange={this.handleChangeYes} >
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              </Select>
      </Modal>
            </Card>
         );
       
    }
}
 
export default Locations;