import React, { Component } from 'react';
import "antd/dist/antd.css";
import "../../assets/mahen.css";
import { Row , Col , Button , Divider , Form, Input, Radio , notification} from 'antd';
import { MobileOutlined , CreditCardOutlined } from '@ant-design/icons';

class CardPaymentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName : '',
            cardNo : '',
            CVC : '',
            type : '',
            expDate : '',
            email : '',
            phone : '',
            OTP : ''
        }
    }

      setValueOnChange = (val) =>{
          console.log('radio checked', val.target.value);
          this.setState({[val.target.name] :val.target.value});
      }
      setValueOnChangeRadio = (val) =>{
          console.log('radio checked', val.target.value);
          this.setState({type:val.target.value});
      }

      checkValidity = (e) => {
          e.preventDefault();
        if(this.state.agree){

          const CardDetails = {
            cardHolderName : this.state.cardHolderName,
            cardNo : this.state.cardNo,
            CVC : this.state.CVC,
            type : this.state.type,
            expDate : this.state.expDate,
            email : this.state.email,
            phone : this.state.phone,
          }

          fetch('http://localhost:9000/cardPayment/'+ this.state.cardNo, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(CardDetails),
          })
          .then(response => response.json())
          .then(Resdata => {
            console.log('Success:', Resdata);
            notification['success']({
              message: 'Card Details Found.'
            });
          })
          .catch((error) => {
            console.error('Error:', error);
            notification['error']({
              message: 'Something Went Wrong , Please Try Again!!',
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

    render(){

        return(
            <section align="vertical"  style={{ paddingTop: '30px' }} bordered>
               
               <h1 className="lightText" style={{fontSize:35 , fontWeight:'bold'}}>PAY BY CARD</h1>
                < Row justify="space-around" align="middle">
                        <Col className="gutter-row" span={20}  offset={2}>
                            <Button type="primary" size={'large'} icon={<MobileOutlined style={{ fontSize: '150%'}} />} style={{height:60 , fontSize: '160%' , fontWeight:'bold'}} block>Switch To Mobile Payment</Button>
                        </Col>
                </Row>
                <Row justify="space-around" align="middle">
                    <Col span={21}  offset={0} >
                        <Divider style={{fontSize:25 , color:"#FFFFFF"}} orientation="left" >Payment Information</Divider>
                    </Col>
                </Row>
                <Form layout="vertical" onSubmit={this.checkValidity} >

                    <Row>
                       <Col className="gutter-row" span={20} offset={3}>
                           <Form.Item label="Select Your Card Type" style={{color:"#FFFFFF"}} name="type" onChange={this.setValueOnChangeRadio}>
                                <Radio.Group defaultValue="VISA" size="large" buttonStyle="solid">
                                    <Radio.Button span={6} value="VISA"><i className="fab fa-cc-amex"></i> Visa</Radio.Button>
                                    <Radio.Button span={6} value="MASTER"><i className="fab fa-cc-mastercard"></i> Master Card</Radio.Button>
                                    <Radio.Button span={6} value="AMEX"><i className="fab fa-cc-amex"></i> American Express</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </Col> 
                    </Row>
                    

                    <Row>
                        <Col className="gutter-row" span={20} offset={3}>
                            <Form.Item required >
                                <Input className="PaymentInputs" placeholder="Name On Card" name="cardHolderName" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={20} offset={3}>
                            <Form.Item required>
                                <Input className="PaymentInputs" placeholder="Credit Card Number" name="cardNo" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col className="gutter-row" span={9} offset={3}>
                            <Form.Item required>
                                <Input className="PaymentInputs" placeholder="MM/YY" name="expDate" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={10} offset={1}>
                            <Form.Item required>
                                <Input className="PaymentInputs" placeholder="CVC" name="CVC"  onChange={this.setValueOnChange}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row className="commonSeperator">
                        <Col className="gutter-row" span={8} offset={2}>
                            <h2 className="lightText">Total Payment</h2>
                        </Col>
                        <Col className="gutter-row" span={5} offset={2}>
                            <hr className="lightText" style={{marginTop:20 , background:"#FFFFFF"}}></hr>
                        </Col>
                        <Col className="gutter-row" span={4} >
                            <h2 className="lightText">$26.25</h2>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:40}}>
                        <Col className="gutter-row" span={14} offset={6}>
                            <Form.Item>
                                <Button className="mySuccessBtn" type="primary" block>Request OTP</Button>
                            </Form.Item>
                        </Col>
                        
                    </Row>

                    
                </Form>
                    <Row>
                        <Col className="gutter-row" span={10} offset={8}>
                            <Form.Item required>
                                <Input className="PaymentInputs" placeholder="OTP" name="OTP" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:40}}>
                        <Col className="gutter-row" span={14} offset={6}>
                            <Form.Item>
                                <Button className="mySuccessBtn" type="primary" block>Confirm Payment</Button>
                            </Form.Item>
                        </Col>
                        
                    </Row>
                
            </section>

            


        );
    }
}

export default CardPaymentForm;