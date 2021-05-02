import React, {useEffect, useState} from 'react';
import '../assets/uditha.css'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios";
import {useHistory} from 'react-router-dom';



function UserSignUp(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const  history = useHistory();


    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            username,
            password,
            role
        }

        console.log(user);
        const url ="";
        axios.post(url,user).then((res) =>{
            if(res.data.status === "success") {
                history.push("login/");
            }
            else {
                alert("oops! something went wrong");
            }
        }).catch((err) => {
            alert(err);
        })


    }

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
    })



    return(

        <div>

            <h2 style={{color:'#61dafb'}}>Sign Up</h2>

            <div className="signupForm">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                               placeholder="Username"  onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <div>
                        <FormControlLabel  control={
                            <Radio
                                checked={role === 'Seller'}
                                onChange={handleChange}
                                value="Seller"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        } label="Seller" />

                        <FormControlLabel  control={
                            <Radio

                                checked={role === 'Buyer'}
                                onChange={handleChange}
                                value="Buyer"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        } label="Buyer" />
                    </div>


                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>

            </div>
        </div>


    )

}

export default UserSignUp;