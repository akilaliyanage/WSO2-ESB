import React, { Component } from 'react';

class CustomHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
                    <div div class = "container" >
                        <div class="row">
                            <div  class="col-md-6">
                                <div class="header-top-content">
                                    <ul class="nav nav-pills navbar-left">
                                        <li><a href="#"><i class="pe-7s-call"></i><span>123-123456789</span></a></li>
                                        <li><a href="#"><i class="pe-7s-mail"></i><span> info@mart.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div  class="col-md-6">
                                <div class="header-top-menu">
                                    <ul class="nav nav-pills navbar-right">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        <li><a href="#">Cart</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#"><i class="pe-7s-lock"></i>Login/Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

        );}
}

export default CustomHeader;