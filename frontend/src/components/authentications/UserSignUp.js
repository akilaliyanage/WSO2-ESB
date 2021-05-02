import React, {useEffect, useState} from 'react';
import '../../assets/uditha.css'
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

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [avatar, setAvatar] = useState()

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            username,
            password,
            role,
            avatar
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
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
        setAvatar(e.target.files[0])
    }



    return(

        <div>

            <h2 style={{color:'#61dafb'}}>Sign Up</h2>

            <div className="signupForm">


                <form onSubmit={onSubmit}>

                    <div className="avatarPreview">
                        {selectedFile &&  <img style={{borderRadius:'50%'}} src={preview} width="200" height="200"/> }
                    </div>
                    <div className="avatarInput">
                        <div className="form-group">
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"
                                   onChange={onSelectFile}/>
                        </div>
                    </div>

                    <div className="formSection">
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
                    </div>
                </form>


            </div>
        </div>


    )

}

export default UserSignUp;