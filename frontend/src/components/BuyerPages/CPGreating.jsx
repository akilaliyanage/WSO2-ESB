import React, { Component } from 'react'
import C1 from '../../assets/nethsara/images/member1.png'

export default class Partners extends Component {
    render() {
        return (
            <div>
                <section class="review-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titie-section wow fadeInDown animated ">
                                    <h1>Chairperson's greetings</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div id="feedback" class="carousel slide feedback" data-ride="feedback">
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src={C1} width="320" height="439" alt=""/>
                                        <div class="carousel-caption">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>
                                            <h3>- Olivia -</h3>
                                            <span>Melbour, Aus</span>
                                        </div>
                                    </div>
                                    
                                </div>

                                {/* <ol class="carousel-indicators review-controlar">
                                    <li data-target="#feedback" data-slide-to="0" class="active">
                                        <img src="images/member1.png" width="320" height="439" alt=""/>
                                    </li>
                                    <li data-target="#feedback" data-slide-to="1">
                                        <img src="images/member2.png" width="320" height="439" alt=""/>
                                    </li>
                                    <li data-target="#feedback" data-slide-to="2">
                                        <img src="images/member3.png" width="320" height="439" alt=""/>
                                    </li>
                                </ol> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
