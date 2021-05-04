import React, { Component } from 'react'
import Menu from './MenuBar'
import ProductDisplay from './ProductDisplay'

export default class ProductsPage extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <ProductDisplay/>
            </div>
        )
    }
}
