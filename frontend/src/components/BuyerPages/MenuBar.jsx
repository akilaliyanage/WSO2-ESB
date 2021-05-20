import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import { Card} from 'react-bootstrap';

import { Modal, Button } from 'antd';
import CardImg from '../../assets/nethsara/images/Mens.jpg'

export default class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart:[],
            visible:false

        }
    }

    componentDidMount(){
        this.setState({
            cart:JSON.parse(window.localStorage.getItem("cartitems"))
        })
    }

    visible = () => {
        this.setState({visible:true})
    }

    onOk = () => {
        this.setState({visible:false})
    }

    onCancel = () => {
        this.setState({visible:false})
    }

    render() {
        return (
            <div>
                <section class="header-top-section">
                    <div class="container">
                        <div class="row">
                            <div  class="col-md-6">
                                <div class="header-top-content">
                                    <ul class="nav nav-pills navbar-left">
                                        <li><a ><i class="pe-7s-call"></i><span>123-123456789</span></a></li>
                                        <li><a ><i class="pe-7s-mail"></i><span> info@mart.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div  class="col-md-6">
                                <div class="header-top-menu">
                                    <ul class="nav nav-pills navbar-right">
                                        
                                        <li><a>My Account</a></li>
                                        <li><a ><Link to="/cart">Cart</Link></a></li>
                                        <li><a>Checkout</a></li>
                                        <li><a><i class="pe-7s-lock"></i>Login/Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <header class="header-section">
                    <nav class="navbar navbar-default">
                        <div class="nethsara-container">
                            
                            <div class="navbar-header mr-5">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="#"><b>M</b>art</a>
                            </div>

                            
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav ml-5">
                                    <li class="active"><a href="/"><Link to="/">HOME</Link></a></li>
                                    <li><a ><Link to="">About Us</Link></a></li>
                                    <li><a ><Link to="/products">Shop US</Link></a></li>
                                    <li><a ><Link to="/contact">Contact Us</Link></a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right cart-menu">
                                <li><a onClick={this.visible} class="search-btn"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                <li><a ><span><Link to="/cart">Cart</Link></span> <span class="shoping-cart">{(this.state.cart.length)}</span></a></li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                

                <Modal
                    title="Search Items"
                    centered
                    visible={this.state.visible}
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                    width={1000}
                >
                    <section class="">
                        <div class="container">
                            <div class="row subscribe-from">
                                <div class="col-md-12 mb-5">
                                    <form class="form-inline col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control subscribe" id="search" placeholder="Search here..."/>
                                            <button class="suscribe-btn" ><i class="pe-7s-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="row p-5">
                        <div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
                            <Card className="shadow p-3 mb-5 bg-white rounded">
                                <Card.Img variant="top" src={CardImg} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button type="primary" >Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
                            <Card className="shadow p-3 mb-5 bg-white rounded">
                                <Card.Img variant="top" src={CardImg} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button type="primary" >Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
