import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Layout , Row , Col , Button , Space} from 'antd';

class CardPaymentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

   

    render(){
        return(
            <section>
                < h2 > Choose Payment Method </h2>
                <Row>
                        <Col span={12}>
                            <Space size="small">
                                <Button type="primary" block>Pay By Card</Button>
                            </Space>
                            
                        </Col>
                        <Col span={12}>
                            < Space size = "small" >
                                < Button danger block > Mobile Payment </Button>
                            </Space>
                            
                        </Col>
                </Row>
            </section>
        );
    }
}

export default CardPaymentForm;