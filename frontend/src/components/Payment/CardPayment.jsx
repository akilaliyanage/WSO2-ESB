import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Layout , Row , Col} from 'antd';
import CustomHeader from './Header';
import CardPaymentForm from './CardPaymentForm';
import CardPaymentLeft from "./CardPaymentLeft";

const { Header, Content, Footer } = Layout;

class CardPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <Header Header Header style = {{background: "#1abc9c"}} >
                    <CustomHeader style={{position:"sticky" , top:"0"}}/>
                </Header>
                <Content style={{backgroundColor:"#282c34"}}>
                    <Row>
                        <Col span={11}>
                            <CardPaymentLeft isMobile='false'/>
                        </Col>
                        <Col span={12}>
                            <CardPaymentForm/>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center'}}> Made with ❤️</Footer>
            </Layout>
        );
    }
}

export default CardPayment;