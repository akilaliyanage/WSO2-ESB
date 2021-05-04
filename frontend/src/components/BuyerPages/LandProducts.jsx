import React, { Component } from 'react'
import Kid from '../../assets/nethsara/images/kid.jpg'
import Women from '../../assets/nethsara/images/2.png'
import Men from '../../assets/nethsara/images/1.png'
import Sports from '../../assets/nethsara/images/sports.jpg'

export default class LandProducts extends Component {
    render() {
        return (
            <div>
                <section class="new-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titie-section wow fadeInDown animated ">
                                    <h1>Our Products</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.2s">
                                <div class="product-item">
                                    <img src={Kid} class="img-responsive" width="255" height="322" alt=""/>
                                    <div class="">
                                        <div class="product-meta">
                                            <a href="#"><i class="pe-7s-like"></i></a>
                                            <a href="#"><i class="pe-7s-shuffle"></i></a>
                                            <a href="#"><i class="pe-7s-clock"></i></a>
                                            <a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-title">
                                        <a href="">
                                            <h3>KIDS WEAR</h3>
                                            <span>MORE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.4s">
                                <div class="product-item">
                                    <img src={Women} class="img-responsive" width="255" height="322" alt=""/>
                                    <div class="">
                                        <div class="product-meta">
                                            <a href="#"><i class="pe-7s-like"></i></a>
                                            <a href="#"><i class="pe-7s-shuffle"></i></a>
                                            <a href="#"><i class="pe-7s-clock"></i></a>
                                            <a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-title">
                                        <a href="#">
                                            <h3>WOMANS WEAR</h3>
                                            <span>MORE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.6s">
                                <div class="product-item">
                                    <img src={Men} class="img-responsive" width="255" height="322" alt=""/>
                                    <div class="">
                                        <div class="product-meta">
                                            <a href="#"><i class="pe-7s-like"></i></a>
                                            <a href="#"><i class="pe-7s-shuffle"></i></a>
                                            <a href="#"><i class="pe-7s-clock"></i></a>
                                            <a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-title">
                                        <a href="#">
                                            <h3>MENS WEAR</h3>
                                            <span>MORE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.8s">
                                <div class="product-item">
                                    <img src={Sports} class="img-responsive" width="255" height="322" alt=""/>
                                    <div class="">
                                        <div class="product-meta">
                                            <a href="#"><i class="pe-7s-like"></i></a>
                                            <a href="#"><i class="pe-7s-shuffle"></i></a>
                                            <a href="#"><i class="pe-7s-clock"></i></a>
                                            <a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-title">
                                        <a href="#">
                                            <h3>SPORTS WEAR</h3>
                                            <span>MORE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="offer-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 wow fadeInDown animated ">
                                <h1 class="mt-5">END OF SEASON SALES</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
