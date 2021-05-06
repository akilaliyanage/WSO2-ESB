import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Layout , Row , Col} from 'antd';
import Header from './Header';
import CardPaymentForm from './CardPaymentForm';

const { Footer } = Layout;

class CardPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div div className = "payment-body" >
                <Header style={{position:"sticky" , top:"0"}}/>
                <Row>
                    <Col span={12}>
                        
                    </Col>
                    <Col span={12}>
                        <CardPaymentForm/>
                    </Col>
                </Row>
                <Footer style={{ textAlign: 'center', position:"sticky" , bottom:"0" }}> Made with ❤️</Footer>
            </div>
        );
    }
}

export default CardPayment;