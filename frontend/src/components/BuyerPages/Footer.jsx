import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section class="contact-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="titie-section wow fadeInDown animated ">
                                    <h1>GET IN TOUCH</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 wow fadeInLeft animated">
                                <div class="left-content">
                                    <h1><span>M</span>art</h1>
                                    <h3>We'd love To Meet You In Person Or Via The Web!</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel nulla sapien. Class aptent tacitiaptent taciti sociosqu ad lit himenaeos. Suspendisse massa urna, luctus ut vestibulum necs et, vulputate quis urna. Donec at commodo erat.</p>
                                    <div class="contact-info">
                                        <p><b>Main Office:</b> 123 Elm St. New York City, NY</p>
                                        <p><b>Phone:</b> 1.555.555.5555</p>
                                        <p><b>Email:</b> info@yourdomain.com</p>
                                    </div>
                                    <div class="social-media">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 wow fadeInRight animated">
                                <form action="" method="" class="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="name" placeholder="Your Email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="name" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="name" placeholder="Website URL"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <textarea name="" id="" class="form-control" cols="30" rows="5" placeholder="Your Message..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <input type="submit" class="contact-submit" value="Send" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="center">Made with <i class="fa fa-heart"></i>   | All Rights Reserved!</p>
                                
                            </div>
                        </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}
