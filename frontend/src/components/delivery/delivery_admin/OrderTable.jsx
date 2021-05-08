import React, { Component } from 'react';
import { Table, Tag, Space, Descriptions, Card,Select, PageHeader } from 'antd';
import { Drawer, Button,  } from 'antd';
import config from '../../../congig.json'
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
            data : [],
            selItem : {},
            chStat : ''
         }
    }


    showDrawer = (record) => {
        console.log(record)
        this.setState({stat :record.status[record.status.length - 1]})
        this.setState({selItem : record})
        this.setState({visible:true})
      };

      onClose = () => {
        this.setState({visible:false})
      };

       onChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({chStat : value})
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

      componentDidMount(){
        fetch(config.host + '/delivery/pending').then(res => res.json()).then(data => {
          this.setState({data : data})
        }).catch(err =>{
          alert(err)
        })
      }

      updateStat = () =>{
        var newStat = this.state.selItem.status;

        newStat.push(this.state.chStat)
        

        const data = {
          status : newStat
        }

        console.log("akila", data)
        const url = config.host + "/delivery/" + this.state.selItem._id;
        console.log(url)
        fetch(url,{
          method : 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
          console.log(data)
        }).catch(err =>{
          alert(err)
        })
      }


    render() { 
        const columns = [
            {
              title: 'Delivery ID',
              dataIndex: '_id',
              key: '_id',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Location',
              dataIndex: 'city',
              key: 'city',
            },
            {
              title: 'Shipped Date',
              dataIndex: 'date',
              key: 'date',
            },
            {
                title: 'User',
                dataIndex: 'username',
                key: 'username',
            },
            {
              title: 'Current Status',
              key: 'status',
              dataIndex: 'status',
              render: tags => (
                <Tag color={"green"} key={tags[tags.length - 1]._id}>
                {tags[tags.length - 1].toUpperCase()}
              </Tag>
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
                         <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Past Deliveries"
    ></PageHeader>
                <Table columns={columns} dataSource={this.state.data} />

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
    placeholder={this.state.stat}
    optionFilterProp="children"
    onChange={this.onChange}
    onFocus={this.onFocus}
    onBlur={this.onBlur}
    onSearch={this.onSearch}
    defaultValue={this.state.stat}
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

  <Button type="primary" block style={{marginTop:"20px"}} onClick={this.updateStat}>UPDATE</Button>
      </Drawer>
            </Card>
         );
    }
}
 
export default OrderTable;