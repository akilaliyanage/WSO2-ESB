import React, {useEffect, useState} from 'react';
import '../../assets/uditha.css'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import '../../assets/uditha.css'

function UserSignUP(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [picture, setPicture] = useState();
    const  history = useHistory();

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
        setPicture(e.target.files[0])
    }

    function sendData(e){

        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('picture', picture);
        formData.append('role', role);


        const url = "http://localhost:9000/user/signup";
        axios.post(url,formData).then((res) => {
            if(res.data.status === 200) {
                history.push("/login");
            }
            else if(res.data.status === 500){
                alert("User Already exists!")
            }
            else {
                alert("oops! something went wrong");
            }
        }).catch((err) => {
            alert(err);
        })

    }


    return(

        <div>

            <h2  style={{color:"#61dafb", "font-size":"30px"}}>Sign Up</h2>


            <div className="signupForm">


                <form onSubmit={sendData} encType="multipart/form-data">

                    <div className="avatarPreview">
                        {selectedFile &&  <img style={{borderRadius:'50%'}} src={preview} width="200" height="200" alt="avatar"/> }
                    </div>
                    <div className="avatarInput">
                        <div className="form-group">
                            <input type="file" className="form-control-file" name="picture" id="exampleFormControlFile1"
                                   onChange={onSelectFile}/>
                        </div>
                    </div>

                    <div className="formSection" >
                        <div className="form-group"  style={{marginTop:"60px"}}>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" required={true} className="form-control form-control-lg mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>

                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Username</label>
                            <input type="text" required={true} className="form-control form-control-lg mb-2" id="exampleInputPassword1"
                                   placeholder="Username"  onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" required={true} className="form-control form-control-lg mb-2" id="exampleInputPassword1"
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
                                <Radio required={true}

                                    checked={role === 'Buyer'}
                                    onChange={handleChange}
                                    value="Buyer"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                            } label="Buyer" />
                        </div>

                        <button type="submit" style={{width:"200px",height:"40px","font-size":"15px"}} className="btn btn-primary">Sign up</button>
                    </div>
                </form>


            </div>
        </div>


    )


}

export default UserSignUP;