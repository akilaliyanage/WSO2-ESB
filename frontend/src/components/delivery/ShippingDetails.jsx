import React, { Component } from 'react';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Descriptions,
    Space ,
    Row,
    Col,
    Checkbox,
    notification
  } from 'antd';

import { SmileOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

class ShippingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          name:'',
          phone:'',
          add:'',
          city:'',
          locType:'',
          date:'',
          comments:'',
          agree:false,
          username:'Akila Liyanage',
          userId:'12345',
          itemCode:'123abc',
          email:'mlakilaliyanage@gmail.com',
          status:'processing'
         }
    }

    onChange = (value) => {
        this.setState({city:value})
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

      date = (date, dateString) => {
        this.setState({date:dateString})
      }


      locType = (value) => {
        this.setState({locType:value})
      }

      openNotification = () => {
        if(this.state.agree){

          const data = {
            username : this.state.username,
            userId : this.state.userId,
            resName : this.state.name,
            phone : this.state.phone,
            delAdd : this.state.add,
            city : this.state.city,
            locType : this.state.locType,
            date : this.state.date,
            comments : this.state.comments,
            itemCode : this.state.itemCode,
            email : this.state.email,
            status : this.state.status
          }

          fetch('http://localhost:9000/delivery', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            notification['success']({
              message: 'Delivery Info saved successfully. You will get an email of confirmation.'
            });
          })
          .catch((error) => {
            console.error('Error:', error);
            notification['error']({
              message: 'Ooopz and error ocured!',
              description:
                error,
            });
          });


         
        }else{
          notification['error']({
            message: 'Ooopz and error ocured!',
            description:
              'Seems like you have not agreed to out terms and condisions.',
          });
        }
       
      };

      handleChnage = (e) =>{
          this.setState({[e.target.name] :e.target.value})
      }

      agree = (e) =>{
        this.setState({agree : e.target.checked})
      }


    render() { 
        return ( 
            <Descriptions title="Basic Shipping Details" bordered>
            <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        
        
      >
        <Form.Item label="Order Type"> 
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">It's For me</Radio.Button>
        <Radio.Button value="b">It's a Present</Radio.Button>
        </Radio.Group>
    </Form.Item>
        <Form.Item label="Recipient's Name">
          <Input name="name" onChange={this.handleChnage}/>
        </Form.Item>
        <Form.Item label="Recipient's Phone">
        <Input.Group compact>
      <Input style={{ width: '20%' }} defaultValue="+94" />
      <Input style={{ width: '80%' }} defaultValue="" name="phone" onChange={this.handleChnage}/>
    </Input.Group>
        </Form.Item>
        <Form.Item label="Delivery Address">
        <TextArea rows={4} name="add" onChange={this.handleChnage}/>
        </Form.Item>
        <Form.Item label="Delivery City">
        <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Select Your City"
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
                </Select>
        </Form.Item>
        <Form.Item label="Location Type">
        <Select style={{ width: "100%" }} onChange={this.locType} placeholder="Select Your Location Type">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
        </Form.Item>
        <Form.Item label="Date to be Shipped">
        <DatePicker onChange={this.date} style={{width:"100%"}}/>
        </Form.Item>
        <Form.Item label="Special Delivery Comments (If any)">
        <TextArea rows={4} name="comments" onChange={this.handleChnage}/>
        </Form.Item>
        <Form.Item >
        <Checkbox onChange={this.agree}>
          I have read the <a href="">agreement</a>
        </Checkbox>
        </Form.Item>
        <Form.Item>
        <Button type="primary" block size="large" onClick={this.openNotification}>
                    Confirm and Save Shipping details
            </Button>
        </Form.Item>
      </Form>
      </Descriptions>
         );
    }
}
 
export default ShippingDetails;