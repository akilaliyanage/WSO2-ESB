import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SlideImg from '../../assets/nethsara/images/slider.jpg'

export default class Slider extends Component {
    render() {
        return (
            <div>
                <section class="slider-section">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators slider-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <img src={SlideImg} width="1648" height="600" alt=""/>
                                <div class="carousel-caption">
                                    <h2>DRESSES <b>&</b> JEANS</h2>
                                    <h3>FROM OUR FAMOUS BRANDS SALE</h3>
                                    <br/>
                                    <Link to="/products" className="mt-5">Shop US</Link>
                                </div>
                            </div>
                            <div class="item">
                                <img src={SlideImg} width="1648" height="600" alt=""/>
                                <div class="carousel-caption">
                                    <h2>DRESSES <b>&</b> JEANS</h2>
                                    <h3>FROM OUR FAMOUS BRANDS SALE</h3>
                                    <a href="#">Buy Now</a>
                                </div>
                            </div>
                            <div class="item ">
                                <img src={SlideImg} width="1648" height="600" alt=""/>
                                <div class="carousel-caption">
                                    <h2>DRESSES <b>&</b> JEANS</h2>
                                    <h3>FROM OUR FAMOUS BRANDS SALE</h3>
                                    <br/>
                                    <a href="#">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span class="pe-7s-angle-left glyphicon-chevron-left" aria-hidden="true"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span class="pe-7s-angle-right glyphicon-chevron-right" aria-hidden="true"></span>
                        </a>
                    </div>
                </section>

                <section class="service-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 wow fadeInRight animated" data-wow-delay="0.1s">
                                <div class="service-item">
                                    <i class="pe-7s-settings"></i>
                                    <h3>SETTING</h3>
                                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 wow fadeInRight animated" data-wow-delay="0.2s">
                                <div class="service-item">
                                    <i class="pe-7s-safe"></i>
                                    <h3>MONEY BACK</h3>
                                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 wow fadeInRight animated" data-wow-delay="0.3s">
                                <div class="service-item">
                                    <i class="pe-7s-global"></i>
                                    <h3>WORLDWIDE SHIPPING</h3>
                                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 wow fadeInRight animated" data-wow-delay="0.4s">
                                <div class="service-item">
                                    <i class="pe-7s-headphones"></i>
                                    <h3>Online support</h3>
                                    <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
