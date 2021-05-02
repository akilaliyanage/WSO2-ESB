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
    Space 
  } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

class ShippingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

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

      onChange = (date, dateString) => {
        console.log(date, dateString);
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
          <Input />
        </Form.Item>
        <Form.Item label="Recipient's Phone">
        <Input.Group compact>
      <Input style={{ width: '20%' }} defaultValue="+94" />
      <Input style={{ width: '80%' }} defaultValue="" />
    </Input.Group>
        </Form.Item>
        <Form.Item label="Delivery Address">
        <TextArea rows={4} />
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
        <Select defaultValue="lucy" style={{ width: "100%" }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
        </Form.Item>
        <Form.Item label="Date to be Shipped">
        <DatePicker onChange={this.onChange} style={{width:"100%"}}/>
        </Form.Item>
        <Form.Item label="Special Delivery Comments (If any)">
        <TextArea rows={4} />
        </Form.Item>
      </Form>
      </Descriptions>
         );
    }
}
 
export default ShippingDetails;