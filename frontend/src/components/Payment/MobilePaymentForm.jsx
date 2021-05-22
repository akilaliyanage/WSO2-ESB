import React, { Component } from 'react';
import "antd/dist/antd.css";
import "../../assets/mahen.css";
import { Row , Col , Button , Divider , Form, Input, notification} from 'antd';
import { CreditCardOutlined} from '@ant-design/icons';
import {useHistory, Link} from 'react-router-dom';

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
            showOTP_Visibility : true,
            submitOTP_Visibility : false,
            confirmPay_Visibility : false,
            OTPInput_Visibility : false,
            DisabledInputs: false,
            OTP: '',
            OTPToken : '',

            itemCost: '',
            deliveryCost : '',
            buyerName: '',
            buyerID : '' , 
            fullAmmount : '',
            city : '',
            cart_id : ''
        }
    }

      setValueOnChange = (val) =>{
          console.log('radio checked', val.target.value);
          this.setState({[val.target.name] :val.target.value});
      }

      checkValidity = (e) => {
          e.preventDefault();
          const CardDetails = {
            accHolderName : this.state.accHolderName,
            mobileNo : this.state.mobileNo,
            accNo : this.state.accNo,
            NIC : this.state.NIC,
            email : this.state.email
          }

          fetch('http://172.18.0.1:8280/payment/mobilePayment/'+ this.state.mobileNo, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(CardDetails),
          })
          .then(response => {response.json()
            .then(data => {
                  console.log('data inside Div' , data)
                  console.log('Token is: ' , data.Token)
                  let AuthHeader = 'Token ' + data.Token;
                  this.setState({OTPToken:AuthHeader});
              })

              if(response.status == 200){
                notification['success']({
                        message: 'We have Sent The OTP to your Phone As a SMS.',
                        description: 'Check SMS and submit your OTP.'
                });
                this.setState({submitOTP_Visibility : true});
                this.setState({OTPInput_Visibility : true});
                this.setState({showOTP_Visibility : false});
                this.setState({DisabledInputs : true});
              }
              else{
                  console.log(response.status)
                   notification['error']({
                        message: 'Invalid Account Number.',
                        description: 'Please Accont details and try again..'
                });
              }
        
        })
          .catch((error) => {
            console.error('Error:', error);
            notification['error']({
              message: 'Something Went Wrong , Please Try Again!!',
              description:
                error,
            });
          });
       
      };

      checkOTP = () => {
          console.log('OTP method called');
          
          const _InputOTP = {
            OTP : this.state.OTP,
            accHolderName : this.state.accHolderName,
            mobileNo : this.state.mobileNo,
            accNo : this.state.accNo,
            NIC : this.state.NIC,
            email : this.state.email
          }
          fetch('	http://172.18.0.1:8280/payment/mobile/authOtp' , {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.state.OTPToken,
            },
            body: JSON.stringify(_InputOTP),
          })
          .then(response => { 
              console.log('response is : ' + response.json())
              if(response.status == 200){
                notification['success']({
                        message: 'OTP Matched.!!',
                        description: 'Please Confirm Your Payment.'
                });
                this.setState({submitOTP_Visibility : false});
                this.setState({OTPInput_Visibility : false});
                this.setState({confirmPay_Visibility : true});
              }
              else{
                  console.log(response.status)
                   notification['error']({
                        message: 'Invalid Card.',
                        description: 'Please Check the card details and try again..'
                });
              }
            })
          .catch((error) => {
            console.error('Error:', error);
            notification['error']({
              message: 'Something Went Wrong , Please Try Again!!',
              description: error,
            });
          });
       
      };

      makePayment = () => {
          console.log('Payment method called');
          
          const _InputOTP = {
            orderId:window.localStorage.getItem("cart_id"),
            userId : this.state.buyerID,
            Ammount : this.state.fullAmmount,
            cardNo : this.state.cardNo,
            accNo :this.state.accNo,
            type : this.state.type,
            isMobile : this.state.isMobile,
            mobileNo : this.state.mobileNo,
          }
          fetch('http://172.18.0.1:8280/payment' , {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(_InputOTP),
          })
          .then(response => { 
              console.log('response is : ' + response.json())
              if(response.status == 200){
                notification['success']({
                        message: 'Payment Succeeded.!!',
                });
                this.setState({submitOTP_Visibility : false});
                this.setState({OTPInput_Visibility : false});
                this.setState({confirmPay_Visibility : false});
                this.props.history.push('/CardPayment')
              }
              else{
                  console.log(response.status)
                   notification['error']({
                        message: 'Something Went Wrong , Please Try Again!!',
                        description: 'Please Check the card details and try again..'
                });
              }
            })
          .catch((error) => {
            console.error('Error:', error);
            notification['error']({
              message: 'Something Went Wrong , Please Try Again!!',
              description: error,
            });
          });
       
      };

      componentDidMount(){
        console.log('cartitems : ' , window.localStorage.getItem("cartitems"))
        //console.log('Seller Id : ' , window.localStorage.getItem("cartitems")[0]["sellerId"])
        console.log('total item cost: ' , window.localStorage.getItem("total"))
        console.log('delCost : ' , window.localStorage.getItem("delCost"))
        console.log('buyer-name : ' , window.localStorage.getItem("buyer-name"))
        console.log('buyer-id : ' , window.localStorage.getItem("buyer-id"))
        console.log('City : ' , window.localStorage.getItem("city"))
        
        var iCost = JSON.parse(window.localStorage.getItem("total"));
        var dCost = JSON.parse(window.localStorage.getItem("delCost"));
        console.log('dCost : ' , dCost)
        var finalAmmount = parseFloat(iCost) + parseFloat(this.state.deliveryCost)

        this.setState({
            itemCost: JSON.parse(window.localStorage.getItem("total")),
            deliveryCost : JSON.parse(window.localStorage.getItem("delCost")),
            buyerName: window.localStorage.getItem("buyer-name"),
            buyerID : JSON.parse(window.localStorage.getItem("buyer-id")) , 
            city : window.localStorage.getItem("city"), 
            fullAmmount : (parseInt(window.localStorage.getItem("delCost")) + parseInt(window.localStorage.getItem("total"))).toFixed(2)
        })
    }


    render(){

        const {showOTP_Visibility , submitOTP_Visibility , confirmPay_Visibility , OTPInput_Visibility , DisabledInputs} = this.state;

        return(
            <section align="vertical"  style={{ paddingTop: '30px' }} bordered>
               
               <h1 className="lightText" style={{fontSize:35 , fontWeight:'bold'}}>Mobile Payment</h1>
                < Row justify="space-around" align="middle">
                        <Col className="gutter-row" span={20}  offset={2}>
                            <Link to="/CardPayment" type="primary" size={'large'} icon={<CreditCardOutlined style={{ fontSize: '150%'}} />} style={{height:60 , fontSize: '160%' , fontWeight:'bold'}} block>Switch To Card Payment</Link>
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
                                <Input className="PaymentInputs" disabled={this.state.DisabledInputs} placeholder="Mobile Number" name="mobileNo" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={20} offset={3}>
                            <Form.Item required>
                                <Input className="PaymentInputs" disabled={this.state.DisabledInputs} placeholder="Mobile Account Number" name="accNo" onChange={this.setValueOnChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={20} offset={3}>
                            <Form.Item required>
                                <Input className="PaymentInputs" disabled={this.state.DisabledInputs} placeholder="NIC" name="NIC" onChange={this.setValueOnChange} />
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

                    <Row style={{paddingTop:40 , display:(showOTP_Visibility ? 'block' : 'none')}}>
                        <Col className="gutter-row" span={14} offset={6}>
                            <Form.Item>
                                <Button className="mySuccessBtn" type="primary" block>Request OTP</Button>
                            </Form.Item>
                        </Col>
                        
                    </Row>
                </Form>
                
                        <div>
                            <Row style={{paddingTop:40 , display:(OTPInput_Visibility ? 'block' : 'none') }}>
                                <Col className="gutter-row" span={10} offset={8}>
                                    <Form.Item required>
                                        <Input className="PaymentInputs" placeholder="OTP" name="C_No" onChange={this.setValueOnChange} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row style={{paddingTop:10 ,display:(submitOTP_Visibility ? 'block' : 'none') }}>
                                <Col className="gutter-row" span={14} offset={6}>
                                    <Form.Item>
                                        <Button className="mySuccessBtn" type="primary" onClick={this.checkOTP} block>Submit OTP</Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row style={{paddingTop:40 , display:(confirmPay_Visibility ? 'block' : 'none') }}>
                                <Col className="gutter-row" span={14} offset={6}>
                                    <Form.Item>
                                        <Button className="mySuccessBtn" type="primary" block>Confirm Payment</Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
            </section>

            


        );
    }
}

export default MobilePaymentForm;