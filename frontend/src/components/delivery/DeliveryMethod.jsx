import React, { Component } from 'react';
import '../../assets/akila.css'
import "antd/dist/antd.css";
import MainHeader from './MainHeader'
import { Layout, Menu, Breadcrumb, Row, Col,PageHeader, Alert, Checkbox,Popconfirm, message, Button ,notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import ItemCard from './ItemCard';
import ShippingDetails from './ShippingDetails';
import TimeLine from './TimeLine';
import CustomHeader from '../Payment/Header';
import { Card } from 'antd';
import img1 from '../../assets/imgs/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg'
import img2 from '../../assets/imgs/courier-delivering-order-customer-door-man-getting-parcel-box-package-flat-vector-illustration-postman-shipping-service_74855-8309.jpg'
import {Link} from 'react-router-dom'
import { Modal ,Descriptions, Form, Input,Select,DatePicker } from 'antd';
import config from '../../congig.json'

const { TextArea } = Input;
const { Option } = Select;

const { Meta } = Card;

const { Header, Content, Footer } = Layout;

class DeliveryMethod extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isModalVisible : false,
          setIsModalVisible : false,
          states : [],
          cities : [],
          name : '',
          phone : '',
          add : '',
          city : '',
          state : '',
          p_code : '',
          c_code : 'US',
          res_in : 'yes',
          p_weight: '',
          agree : false

         }
    }

    componentDidMount(){
      //get states
      console.log('calling states')
      fetch(config.host + "/delivery/states",{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          type : 'states'
        })
      }).then(res => res.json()).then(data =>{
        this.setState({states : data})
       // console.log(data)
      }).catch(err =>{
        alert(err)
      })

      //cities

      fetch(config.host + "/delivery/states",{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          type : 'cities'
        })
      }).then(res => res.json()).then(data => {
        //console.log("akilat ",this.state.states)
        this.setState({cities : data})
        console.log(data)
      }).catch(err =>{
        alert(err)
      })
    }

    saveCity = (value) => {
      //alert(value.location)
        this.setState({city:value})
        
      }

      stateSave = (value) => {
        //alert(value.location)
          this.setState({state:value})
          
        }

        agree = (value) =>{
          this.setState({agree : value})
        }

    showModal = () => {
     // setIsModalVisible(true);
      this.setState({setIsModalVisible : true})
    };

    handleOk = () => {
      //setIsModalVisible(false);
      this.setState({setIsModalVisible : false})
    };

    handleCancel = () => {
      //setIsModalVisible(false);

      this.setState({setIsModalVisible : false})
    };

    handleChange = (e) =>{
      this.setState({[e.target.name] : e.target.value})
    }

    openNotification = () =>{
      const data = {
        shipment : {
          service_code : 'usps_priority_mail',
          ship_to : {
            name : this.state.name,
            phone : this.state.phone,
            address_line1 : this.state.add,
            city_locality : this.state.city,
            state_province : this.state.state,
            postal_code : this.state.p_code,
            country_code : this.state.c_code,
            address_residential_indicator : this.state.res_in,
          },
          ship_from : {
            name : 'shipengine pvt ltd',
            phone : '0773300941',
            address_line1 : 'shipengine pvt ltd',
            address_line2 : 'no3, church side',
            company_name : 'shipengine pvt ltd',
            city_locality : 'Austin',
            state_province : 'TX',
            postal_code : '78756',
            country_code : 'US',
            address_residential_indicator : 'no',
          },
          packages : [
            {
              weight: {
                value: this.state.p_weight,
                unit: "ounce"
              }
            }
          ]
      }
    }

    fetch(config.shipengine,{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY' : config['api-key'],
      },
      body: JSON.stringify(data),
    }).then(res => res.json()).then(data =>{
      alert(data)
    }).catch(err =>{
      alert(err)
    })

    console.log(data)
  }

    onBlur = (value) => {
      // alert(value.target.value)
     }
     
     onFocus = () => {
       console.log('focus');
     }
     
     onSearch = (val) => {
       console.log('search:', val);
     }

    render() { 
        return ( 
                <Layout className="layout">
    <Header style = {{background: "#1abc9c"}}>
      <CustomHeader style={{position:"sticky" , top:"0"}}/>
    </Header>

    <Content style={{ padding: '0 50px' }}>

    <MainHeader itemName="Test Item"/>

      <div className="site-layout-content">
      <Alert message="Welcome to the Delivery options selection menu, We have partnerd the most trusted yet efficient delivery services in the world. Please select ypur desired delivery service suites to your requirments. THANK YOU" type="success" showIcon style={{marginBottom : '20px'}}/>
      <Row>
      <Col span={8}>
      <Link to="/delivery">
              <Card
            hoverable
            style={{ width: "90%" }}
            cover={<img alt="example" src={img1} />}
          >
            <Meta title="Use our in-bult delivery service" description="" />
            <br/>
                    <Alert
              message="NOTE :-"
              description="World-wide delivery"
              type="success"
              showIcon
            />
          </Card>
          </Link>
      </Col>
      <Col span={8}>
      <Card
            hoverable
            onClick={this.showModal}
            style={{ width: "90%" }}
            cover={<img alt="example" src={img2} />}
          >
            <Meta title="Use ShipEngine delivery service" description="" />
            <br/>
                  <Alert
            message="Note :-"
            description="Only for US residetns"
            type="error"
            showIcon
          />
          </Card>

          <Modal title="Welcome to ShipEngine delivery service" visible={this.state.setIsModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} width={1000}>
          <Descriptions title="Basic Shipping Details" bordered>
            <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        
        
      >
        <Form.Item label="Recipient's Name">
          <Input name="name" onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item label="Recipient's Phone">
        <Input.Group compact>
      <Input style={{ width: '20%' }} defaultValue="+94" />
      <Input style={{ width: '80%' }} defaultValue="" name="phone" onChange={this.handleChange}/>
    </Input.Group>
        </Form.Item>

        <Form.Item label="Delivery Address">
        <TextArea rows={4} name="add" onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item label="Delivery City">
        <Select placeholder="Select your city" style={{ width: "100%" }} onChange={this.saveCity}>
          {this.state.cities.map(item =>{
           return( <Option value={item.city}>{item.city}</Option>)
          })}
    </Select>
        </Form.Item>

        <Form.Item label="State">
        <Select style={{ width: "100%" }} onChange={this.stateSave} placeholder="Select Your Location Type">
          {this.state.states.map(item =>{
            return(
              <Option value={item.abbreviation}>{item.name}</Option>
            )
          })}
    </Select>
        </Form.Item>

        <Form.Item label="Postal Code">
          <Input name="p_code" defaultValue="" onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item label="Country Code">
          <Input name="c_code" defaultValue="US" onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item label="Address residential indicator">
          <Input name="res_in" defaultValue="Yes" onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item label="Package Weight">
          <Input name="p_weight" onChange={this.handleChange}/>
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
      </Modal> 

      </Col>

      <Col span={8}>
      
      </Col>
    </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Made with ❤️</Footer>
  </Layout>
         );
    }
}
 
export default DeliveryMethod;