import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

import Menu from './MenuBar'
import Footer from './Footer'

class ShoppingCart extends Component {
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
                                        <th className="t-data">Quantity</th>
                                        <th className="t-data"></th>
                                    </tr>
                                    <tr className="t-row">
                                        <td className="t-data">Product 01</td>
                                        <td className="t-data">$1.55</td>
                                        <td className="t-data">02</td>
                                        <td className="t-data"><a href="">Remove</a></td>
                                    </tr>
                                    <tr className="t-row">
                                        <td className="t-data">Alfreds Futterkiste</td>
                                        <td className="t-data">Maria Anders</td>
                                        <td className="t-data">Germany</td>
                                        <td className="t-data"><a href="">Remove</a></td>
                                    </tr>
                                </table>

                            </div>

                            <div className="col-md-3 wow fadeInLeft animated mt-5">
                                <h1>Cart Total</h1>

                                <table id="customers">
                                    <tr>
                                        <td className="t-data">Quantity</td>
                                        <td className="t-data"> 10</td>
                                    </tr>
                                    <tr>
                                        <td className="t-data">Cart Total</td>
                                        <td className="t-data"> $45</td>
                                    </tr>
                                </table>

                                <Button className="mt-2 text-center" variant="warning">Arrange the Delivery</Button>

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
