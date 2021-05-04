import React, { Component } from 'react'

export default class ProductCategory extends Component {
    render() {
        return (
            <div>
                <h1>Category Name Goes Here</h1>

                <div class="row featured isotope">
                    <div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
                        <div class="product-item">
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
                                    <h3>Cool lingerie</h3>
                                    <span>$26</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
