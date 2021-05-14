import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MenuBar extends Component {
    render() {
        return (
            <div>
                <section class="header-top-section">
                    <div class="container">
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
                                    <li><a ><Link to="">Contact Us</Link></a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right cart-menu">
                                <li><a href="#" class="search-btn"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                <li><a ><span><Link to="/cart">Cart</Link></span> <span class="shoping-cart">0</span></a></li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <section class="search-section">
                    <div class="container">
                        <div class="row subscribe-from">
                            <div class="col-md-12">
                                <form class="form-inline col-md-12 wow fadeInDown animated">
                                    <div class="form-group">
                                        <input type="email" class="form-control subscribe" id="email" placeholder="Search..."/>
                                        <button class="suscribe-btn" ><i class="pe-7s-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
