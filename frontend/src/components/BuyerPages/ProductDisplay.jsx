import React, { Component } from 'react'
import ProductCaregory from './ProductCategory'

export default class ProductDisplay extends Component {
    render() {
        return (
            <div>

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
                                                <a href=""><li class="button active" data-category="all">KIDS WEAR<span>8</span></li></a>
                                                <a href=""><li class="button" data-category="cat-1">WOMANS WEAR<span>2</span></li></a>
                                                <a href=""><li class="button" data-category="cat-2">MENS WEAR<span>2</span></li></a>
                                                <a href=""><li class="button" data-category="cat-3">SPORTS WEAR<span>4</span></li></a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <ProductCaregory/>

                            </div>
                        </section>
                
            </div>
        )
    }
}


