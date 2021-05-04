import React, { Component } from 'react'
import Menu from './MenuBar'
import Slider from './Slider'
import Procucts from './LandProducts'
import Partners from './CPGreating'
import Footer from './Footer'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Slider/>
                <Procucts/>
                <Partners/>
                <Footer/>
            </div>
        )
    }
}
