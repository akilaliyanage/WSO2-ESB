import React, { Component } from 'react';
import '../../assets/akila.css'
import "antd/dist/antd.css";
import MainHeader from './MainHeader'
import { Layout, Menu, Breadcrumb, Row, Col,PageHeader, Alert, Checkbox,Popconfirm, message, Button ,notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import ItemCard from './ItemCard';
import ShippingDetails from './ShippingDetails';
import TimeLine from './TimeLine';

const { Header, Content, Footer } = Layout;

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            setVisible:true,
            setConfirmLoading:true

         }
    }

    confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
      }
      
      cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      }

      showPopconfirm = () => {
        this.setState({setVisible:false})
      };

      handleOk = () => {
        this.setState({setConfirmLoading:true})
        setTimeout(() => {
            this.setState({setVisible:false})
            this.setState({setConfirmLoading:false})
        }, 2000);
      };

      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({setVisible:false})
      };

      openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      };

    render() { 
        return ( 
                <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>

    <MainHeader itemName="Test Item"/>

      <div className="site-layout-content">
      <Row>
      <Col span={8}>
          <ItemCard/>
      </Col>
      <Col span={8}>
          <ShippingDetails/>
      </Col>

      <Col span={8}>
          <TimeLine/>
      </Col>
    </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Made with ❤️</Footer>
  </Layout>
         );
    }
}
 
export default Template;