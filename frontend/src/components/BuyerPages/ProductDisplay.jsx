import React, { Component } from 'react'
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { Affix, Button,Badge } from 'antd';

import { ClockCircleOutlined } from '@ant-design/icons';

import CardImg from '../../assets/nethsara/images/map-bg.png'

class ProductDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item:[],
            cart:[],
            total:0

        }
    }

    componentDidMount(){
        this.fetchItems();

        
    }

    fetchItems = () =>{
        fetch("http://localhost:9000/buyer").then(res => res.json()).then(data => this.setState({item:data})).catch(err => console.log(err))
    }

    addToCart = (item) => {

        const obj = {
            id:item._id,
            sellerId: item.sellerID,
            title: item.title,
            price: item.price,
            // quantity: 1
        }

        this.setState(state => ({
            cart:[...state.cart, obj]
        }))
        // console.log("tst001",this.state.cart)
        
        this.state.total = this.state.total + item.price
        console.log(this.state.total)

    }

    alertHere = () => {

        //product save in the local storage 
        window.localStorage.setItem("cartitems",JSON.stringify(this.state.cart))
        console.log("test1"+window.localStorage.getItem("cartitems"))
        // console.log(this.state.cart)

        

        //total price save in the local storage
        window.localStorage.setItem("total",JSON.stringify(this.state.total))
        console.log("test2"+window.localStorage.getItem("total"))
        // const cartItems = this.state.cart

        // window.localStorage.setItem("cartitems",JSON.stringify(this.state.cart))
        // console.log("test1"+window.localStorage.getItem("cartitems"))

        // console.log(this.state.cart)
    }

    saveToCart = () => {
        // console.log(this.state.cart)
        // window.localStorage.setItem("cartitems", this.state.cart)
    }

    render() {
        return (
            <div>

                <Link to="/cart">
                    <Affix offsetTop={400} style={{ float: 'right', marginRight:"40px"}} onChange={(affixed) => console.log(affixed)}>
                        <Button type="primary"><i class="pe-7s-cart"> Cart</i></Button>
                        <Badge count={(this.state.cart.length)}>
                            <a href="#" className="head-example" />
                        </Badge>
                    </Affix>
                </Link>

                <section class="featured-section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="titie-section wow fadeInDown animated ">
                                            <h1>BROWSE OUR PRODUCTS HERE</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="filter-menu">
                                            <ul class="button-group sort-button-group">
                                                <a href=""><li class="button " data-category="all">KIDS WEAR</li></a>
                                                <a href=""><li class="button" data-category="cat-1">WOMANS WEAR</li></a>
                                                <a href="" ><li class="button " data-category="cat-2">MENS WEAR</li></a>
                                                <a href=""><li class="button" data-category="cat-3">SPORTS WEAR</li></a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                

                                <h1 class="mt-5">Category Name Goes Here</h1>

                                <div class="row featured isotope">

                                    {this.state.item.map((item) => {
                                        return(
                                        <div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
                                            {/* <div class="product-item">
                                                <img src="images/product1.png" class="img-responsive" width="255" height="322" alt=""/>
                                                <div class="sell-meta">
                                                    <a href="#" class="new-item">New</a>
                                                    <a href="#" class="sell-item">Sell</a>
                                                </div>
                                                <div class="product-hover">
                                                    <div class="product-meta">
                                                        <a href="#"><i class="pe-7s-like"></i></a>
                                                        <a href="#"><i class="pe-7s-shuffle"></i></a>
                                                        <a href="#"><i class="pe-7s-clock"></i></a>
                                                        <a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-title">
                                                    <a href="#">
                                                        <h3>{item.title}</h3>
                                                        <span>{item.price}</span>
                                                    </a>
                                                </div>
                                            </div> */}

                                        <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '25rem',height: '35rem' }}>
                                            <Card.Img variant="top" src={CardImg} />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h3>{item.title}</h3>
                                                </Card.Title>
                                                <Card.Title>
                                                    <h5 style={{ color:'#FF0000' }}>$ {item.price}</h5>
                                                </Card.Title>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>

                                                <Button type="primary" onClick={() => this.addToCart(item) } onBlur={this.alertHere}><i class="pe-7s-cart"> Add to Cart</i></Button>
                                            </Card.Body>
                                        </Card>

                                        </div>
                                        );
                                    })}

                                    
                                </div>

                                
                            </div>
                        </section>
                
            </div>
        )
    }
}

export default ProductDisplay;

