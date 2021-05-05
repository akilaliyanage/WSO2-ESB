import React,{useState,useEffect} from "react";
//import axios from "axios";
import {useHistory} from "react-router-dom";

function SellerNavBar(){

    let username = (localStorage.getItem('seller-name'));
    let userid = (localStorage.getItem('seller-id'));
    const  history = useHistory();

    function logout(){
        localStorage.clear();
        history.push("/login")

    }


    return(
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/seller">Dashboard </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/seller">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" onClick={logout}>Logout</a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" >Welcome {username}</a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default SellerNavBar;