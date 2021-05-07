import React, { Component } from 'react';
import "antd/dist/antd.css";
import "../../assets/mahen.css";
import { Row , Col , Space , Divider , List, Radio} from 'antd';
import { UserOutlined , DollarTwoTone , ShoppingCartOutlined , MailOutlined, DollarOutlined , PercentageOutlined} from '@ant-design/icons';

class CardPaymentLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){

        const renderTitle = () =>{
            if(this.props.isMobile){
                return <h1 className="lightText" style={{fontSize:35 , fontWeight:'bold'}}>Mobile Payment</h1>
            }
            else {
                return <h1 className="lightText" style={{fontSize:35 , fontWeight:'bold'}}>PAY BY CARD</h1>
            }
        }

        return(
            <section gutter={[16, 24]} align="middle"  style={{ paddingTop: '100px' , verticalAlign:'middle' }} bordered>
                <DollarTwoTone style={{ fontSize: '600%' , paddingBottom:20}} twoToneColor="#39C0ED" />
                <Row gutter={[16, 24]} className="centerChild" type="flex" align="middle">
                    <Col span={16} offset={4}>
                        {renderTitle() /* <h1 className="lightText" style={{fontSize:35 , fontWeight:'bold'}}>PAY BY CARD</h1> */}
                    </Col>
                </Row>
                    
                <Row>
                    <Col span={16} offset={4}>
                        <h3 className="lightText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti illo omnis quas cupiditate, sint tempora voluptas commodi nostrum pariatur corporis mollitia, recusandae asperiores eius.
                        </h3>
                    </Col>
                    
                </Row>
                <Row justify="center" align='bottom'>
                    <Space size='large'>
                        <h4 className="lightText"><UserOutlined style={{fontSize:'180%'}}/> Customer Name : </h4>
                        <h4 className="grayText">Lorem, ipsum.</h4>
                    </Space>
                </Row>
                <Row justify="center" align='bottom'>
                    <Space size='large'>
                        <h4 className="lightText"><MailOutlined style={{fontSize:'180%'}}/> Delivery Address : </h4>
                        <h4 className="grayText">Lorem ipsum dolor sit amet.</h4>
                    </Space>
                </Row>
                <Row justify="center" align='bottom'>
                    <Space size='large'>
                        <h4 className="lightText"><PercentageOutlined style={{fontSize:'180%'}}/> Discounts : </h4>
                        <h4 className="grayText">$ 0.00</h4>
                    </Space>
                </Row> 
                <Row justify="center" align='bottom'>
                    <Space size='large'>
                        <h4 className="lightText"><DollarOutlined style={{fontSize:'180%'}}/> Total Payment : </h4>
                        <h4 className="grayText">$ 26.99</h4>
                    </Space>
                </Row>           
                
            </section>
        );
    }
}

export default CardPaymentLeft;