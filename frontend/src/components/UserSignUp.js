import React, {useEffect, useState} from 'react';
import '../assets/uditha.css'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';



function UserSignUp(){

    const [username, setUsername] = useState('a');
    const [email, setEmail] = useState('a');
    const [password, setPassword] = useState('a');
    const [selectedValue, setSelectedValue] = useState('a');


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
    })



    return(

        <div>

            <h2>Sign Up</h2>

            <div className="signupForm">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email"/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <div>
                        <FormControlLabel  control={
                            <Radio
                                checked={selectedValue === 'Seller'}
                                onChange={handleChange}
                                value="Seller"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        } label="Buyer" />

                        <FormControlLabel  control={
                            <Radio

                                checked={selectedValue === 'Buyer'}
                                onChange={handleChange}
                                value="Buyer"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        } label="Seller" />
                    </div>


                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>

            </div>
        </div>


    )

}

export default UserSignUp;