import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import SellerNavBar from "./SellerNavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import HeightIcon from '@material-ui/icons/Height';
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

    const  history = useHistory();
    const [item_name, setName] = useState("");
    const [item_description, setDescription] = useState("");
    const [count, setCount] = useState("");
    const [price, setPrice] = useState("");
    const [item_image, setImage] = useState("");

    const classes = useStyles();
    const [value, setValue] = React.useState(10);

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
    })


    function sendItem(e) {
        e.preventDefault();

        const item = {

            item_name,
            item_description,
            value,
            price,
            item_image

        }

        console.log(item);

        const url = "";
        axios.post(url,item).then((res) => {
            if(res.data.status === "success") {
                history.push("/");
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
                            <input type="text" required="true" className="form-control" name="title" placeholder="Title" onChange={(e) => {setName(e.target.value)}}/>
                        </div>

                        <div className="form-group">
                            <label className="float-left">Description</label>
                            <textarea maxLength="300" className="form-control" onChange={(e) =>{setDescription(e.target.value)}} />


                        </div>



                        <div className="fileInput">
                            <input type="file" className="form-control" name="cover" placeholder="Cover Image"  onChange={onSelectFile}/>
                        </div>

                        <div className="form-group">
                            <label className="float-left">Price</label>
                            <input type="text" required="true" className="form-control" name="price" placeholder="Price" onChange={(e) => {setPrice(e.target.value)}}/>
                        </div>

                        <div className={classes.root}>
                            <Typography id="input-slider" gutterBottom>
                                Item Count
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <HeightIcon />
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
                                            step: 10,
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

                        <button type="submit" className="btn btn-primary">Add to Store</button>
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