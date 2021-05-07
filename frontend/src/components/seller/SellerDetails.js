import React, {Component} from "react";
import axios from "axios";
import Dashboard from "./DashBoard";


class SellerDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            seller:""
        }
    }


    render() {

        return(
            <div>

               <Dashboard seller = {"seller"}/>

            </div>
        )
    }


}