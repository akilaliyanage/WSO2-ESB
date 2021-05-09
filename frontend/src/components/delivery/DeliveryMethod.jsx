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

const { Meta } = Card;

const { Header, Content, Footer } = Layout;

class DeliveryMethod extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            

         }
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