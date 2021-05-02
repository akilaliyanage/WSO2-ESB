import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import '../../assets/uditha.css'




function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const  history = useHistory();


    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
    })

    function buyerLogin(e) {
        e.preventDefault();
        const auth = {
            username,
            password
        }

        const  url = "";
        axios.post(url,auth).then((response) =>{

            if(response.data.status === "valid"){
                let username = response.data.user.username;
                let buyerID = JSON.stringify(response.data.user.id);
                localStorage.setItem("seller-id",buyerID);
                localStorage.setItem("seller-name",username);
                alert("logged in");
                history.push("/")

            }
            else {

                alert("Login failed!")
            }

        })
    }



    function sellerLogin(e) {
        e.preventDefault();
        const auth = {
            username,
            password
        }
        const  url = "";
        axios.post(url,auth).then((res) =>{

            if(res.data.status === "valid"){
                let username = res.data.user.username;
                let sellerID = JSON.stringify(res.data.user.id);
                localStorage.setItem("buyer-id",sellerID);
                localStorage.setItem("buyer-name",username);
                alert("logged in");
                history.push("/borrowedbooks")

            }
            else {

                alert("Login failed!")
            }

        })
    }

    return(
        <div>


            <div className="buyerLogin" style={{marginTop:"100px"}}>
                <h3 style={{color:'#61dafb'}}>Buyer Login</h3>
                <form onSubmit={buyerLogin}>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control" name="email" placeholder="Username" onChange={(e) =>{setUsername(e.target.value)}}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>



            <div className="sellerLogin" style={{marginTop:"100px"}}>
                <h3 style={{color:'#61dafb'}}>Seller Login</h3>
                <form onSubmit={sellerLogin}>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control" name="name" placeholder="Username" onChange={(e) =>{setUsername(e.target.value)}}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        </div>
    )

}

export  default  Login;