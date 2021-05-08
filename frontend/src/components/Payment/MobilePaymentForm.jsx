import React, { Component } from 'react';
import "antd/dist/antd.css";
import "../../assets/mahen.css";
import { Row , Col , Button , Divider , Form, Input, notification} from 'antd';
import { CreditCardOutlined} from '@ant-design/icons';

class MobilePaymentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            CtaccHolderNameype : '',
            mobileNo : '',
            accNo : '',
            Exp : '',
            NIC : '',
            email : '',
            isMobile:true,
            OTPSent: false,
            authenticated:false
        }
    }

      setValueOnChange = (val) =>{
          console.log('radio checked', val.target.value);
          this.setState({[val.target.name] :val.target.value});
      }

      checkValidity = (e) => {
          e.preventDefault();
        if(this.state.agree){

          const CardDetails = {
            accHolderName : this.state.accHolderName,
            mobileNo : this.state.mobileNo,
            accNo : this.state.accNo,
            NIC : this.state.NIC,
            email : this.state.email
          }

          fetch('http://localhost:9000/mobilePayment/'+ this.state.mobileNo, {
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
              message: 'Valid Account Found.'
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
               
               <h1 className="lightText" style={{fontSize:35 , fontWeight:'bold'}}>Mobile Payment</h1>
                < Row justify="space-around" align="middle">
                        <Col className="gutter-row" span={20}  offset={2}>
                            <Button type="primary" size={'large'} icon={<CreditCardOutlined style={{ fontSize: '150%'}} />} style={{height:60 , fontSize: '160%' , fontWeight:'bold'}} block>Switch To Card Payment</Button>
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
                            <Form.Item required >
                                <Input className="PaymentInputs" placeholder="Mobile Number" name="mobileNo" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={20} offset={3}>
                            <Form.Item required>
                                <Input className="PaymentInputs" placeholder="Mobile Account Number" name="accNo" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={20} offset={3}>
                            <Form.Item required>
                                <Input className="PaymentInputs" placeholder="NIC" name="NIC" onChange={this.setValueOnChange} />
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
                
                {this.state.OTPSent && 
                        <div>
                            <Row>
                                <Col className="gutter-row" span={10} offset={8}>
                                    <Form.Item required>
                                        <Input className="PaymentInputs" placeholder="OTP" name="C_No" onChange={this.setValueOnChange} />
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
                        </div>
                    }
            </section>

            


        );
    }
}

export default MobilePaymentForm;