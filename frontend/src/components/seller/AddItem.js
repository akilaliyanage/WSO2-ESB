import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import SellerNavBar from "./SellerNavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import '../../assets/uditha.css'

const useStyles = makeStyles({
    root: {
        width: 500,
    },
    input: {
        width: 52,
    },
});

function AddItem(){

    let username = (localStorage.getItem('seller-name'));
    let userid = (localStorage.getItem('seller-id'));
    const  history = useHistory();


    const [item_name, setName] = useState("");
    const [item_description, setDescription] = useState("");
    const [count, setCount] = useState("");
    const [price, setPrice] = useState("");
    const [item_image, setImage] = useState("");

    const classes = useStyles();
    const [value, setValue] = useState(count);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(1);
        } else if (value > 1000) {
            setValue(1000);
        }
    };

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
        if(username === null){
            history.push("/login")
        }
    })


    function sendItem(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title",item_name);
        formData.append("description",item_description);
        formData.append("count",value);
        formData.append("price",price);
        formData.append("image",item_image);
        formData.append("sellerID",userid);

        const url = "http://192.168.8.166:8280/item/add/";
        axios.post(url,formData).then((res) => {
            if(res.data.status === 200) {
                history.push("/seller");
            }
            else {
                alert("oops! something went wrong");
            }
        }).catch((err) => {
            alert(err);
        })


    }



    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
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
        setImage(e.target.files[0])
    }


    return(

        <div>

            <SellerNavBar/>

            <div className="col-sm-6 offset-sm-5">
                <div className="bookForm">
                    <form onSubmit={sendItem}>
                        <div className="form-group">
                            <label className="float-left">Title</label>
                            <input type="text" required="true" className="form-control form-control-lg mb-2" name="title" placeholder="Title" onChange={(e) => {setName(e.target.value)}}/>
                        </div>

                        <div className="form-group">
                            <label className="float-left">Description</label>
                            <textarea style={{height:'140px'}} required={true} maxLength="300" className="form-control" onChange={(e) =>{setDescription(e.target.value)}} />
                        </div>

                        <div className="fileInput">
                            <input type="file" className="form-control form-control-lg mb-2" name="cover" placeholder="Cover Image"  onChange={onSelectFile}/>
                        </div>

                        <div className="form-group">
                            <label className="float-left">Price</label>
                            <input type="text" required="true" className="form-control form-control-lg mb-2" name="price" placeholder="Price" onChange={(e) => {setPrice(e.target.value)}}/>
                        </div>

                        <div className={classes.root}>
                            <Typography id="input-slider" gutterBottom>
                                Item Count
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <HorizontalSplitIcon />
                                </Grid>
                                <Grid item xs>
                                    <Slider
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        aria-labelledby="input-slider"
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        className={classes.input}
                                        value={value}
                                        margin="dense"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        inputProps={{
                                            step: 1,
                                            min: 1,
                                            max: 1000,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </div>

                        <div> <br/></div>

                        <button type="submit" className="btn btn-primary" style={{width:"200px",height:"40px","font-size":"15px"}}>Add to Store</button>
                    </form>
                </div>

                <div className="preview">
                    {selectedFile &&  <img src={preview} width="250" height="250"/> }
                </div>
            </div>
        </div>
    )
}

export default AddItem;