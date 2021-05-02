import React, { Component } from 'react';
import '../../../assets/akila.css'
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, CheckCircleTwoTone, HistoryOutlined, FilePptTwoTone, PushpinTwoTone } from '@ant-design/icons';
import OrderTable from './OrderTable';



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class AdminTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1" isSelected="true">Home</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                     <Menu.Item key="1" icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}>Current Deliveries</Menu.Item>
                     <Menu.Item key="2" icon={<FilePptTwoTone />}>Past Deliveries</Menu.Item>
                     <Menu.Item key="3" icon={<PushpinTwoTone twoToneColor="#ff5200" />}>Delivery Locations</Menu.Item>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                  <Row>
                    <Col span={24}>
                      <OrderTable/>
                    </Col>
                  </Row>
                </Content>
              </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Made with ❤️</Footer>
          </Layout>
         );
    }
}
 
export default AdminTemplate;