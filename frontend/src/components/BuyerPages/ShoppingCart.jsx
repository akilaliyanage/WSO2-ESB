import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import Menu from './MenuBar'
import Footer from './Footer'


class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
                cart:[],
                total:0,
                buyer:localStorage.getItem('buyer-id')
        }
    }



    componentDidMount(){
        // console.log(window.localStorage.getItem("cartitems"))
        // console.log(window.localStorage.getItem("total"))

        this.setState({

            cart:JSON.parse(window.localStorage.getItem("cartitems")),
            total:JSON.parse(window.localStorage.getItem("total"))
        })
    }

    saveToDatabase = () =>{

        // console.log(this.state.cart)
        // console.log(this.state.total)
        
        let ids=[]
        this.state.cart.map((cart) => {
            // console.log("cartis",cart.id)
            ids.push(cart.id)
        })

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: ids , total:this.state.total, buyerId:this.state.buyer})
        };
        fetch('http://localhost:9000/cart/save', requestOptions)
            .then((response) => {
                console.log(response.json());
            })
  
    }

    render() {
        return (
            <div>

                <Menu/>
                
                <div className="new-section">

                    
                    <div class="col-md-11 mb-5">
                        <div class="titie-section wow fadeInDown animated ">
                            <h1>Shopping Cart</h1>
                        </div>
                    </div>

                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col-md-9 wow fadeInLeft animated">
                                

                                <table id="customers">
                                    <tr className="t-row">
                                        <th className="t-data">Product</th>
                                        <th className="t-data">Price</th>
                                        {/* <th className="t-data">Quantity</th> */}
                                        {/* <th className="t-data"></th> */}
                                    </tr>


                                    {this.state.cart.map((cart) => {
                                        return(
                                            <tr className="t-row">
                                                <td className="t-data"><b>{cart.title}</b></td>
                                                <td className="t-data">$ {cart.price}</td>
                                                {/* {(this.state.total = this.state.total + cart.price)} */}
                                                {/* <td className="t-data">{cart.quantity}</td> */}
                                                {/* <td className="t-data"><a>Remove</a></td> */}
                                            </tr>
                                            
                                         );
                                    })}


                                </table>

                            </div>

                            <div className="col-md-3 wow fadeInLeft animated mt-5">
                                <h1>Cart Total</h1>

                                <table id="customers">
                                    <tr>
                                        <td className="t-data">Quantity</td>
                                        <td className="t-data">{(this.state.cart.length)}</td>
                                    </tr>
                                    <tr>
                                        <td className="t-data">Cart Total</td>
                                        <td className="t-data">$ {(this.state.total)}</td>
                                    </tr>
                                </table>

                                <Link to="/delivery"><Button onClick={this.saveToDatabase} className="mt-2 text-center" variant="warning">Arrange the Delivery</Button></Link>

                            </div>
                        </div>
                    </div>
                </div>


                <Footer/>
                
            </div>
        )
    }
}

export default ShoppingCart;
