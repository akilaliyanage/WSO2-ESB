import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import '../../assets/uditha.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import Button from "@material-ui/core/Button";
import {Avatar} from "@material-ui/core";
import SellerNavBar from "./SellerNavBar";
import AddItem from "./AddItem";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
//import SellerNavBar from "./SellerNavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    gridList: {
        width: 500,
        height: 400,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Dashboard(props) {

    let username = (localStorage.getItem('seller-name'));
    let userid = (localStorage.getItem('seller-id'));
    let avatar = (localStorage.getItem('avatar'));
    const  history = useHistory();

    const classes = useStyles();
    const [tileData,setTileData] = useState([]);
    const [count,setCount] = useState();
    const [qty,setQty] = useState();

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"

        if(username === null){
            history.push("/login")
        }

        axios.get("http://172.18.0.1:8280/item/"+userid).then((res) => {
            setCount(res.data.c);
            setQty(res.data.qty);
            setTileData(res.data.items);
        }).catch((err) => {
            console.log(err);
        })
    },[]);


    return (
        <div>
            <SellerNavBar/>
            <div className={classes.root}>

                <div className="myItems">
                    <h3 style={{color:'whitesmoke'}}>My Items</h3>
                    <GridList  spacing={10} cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>

                        </GridListTile>

                        {tileData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <Link to ={`update-item/${tile._id}`}>
                                <img src={"http://172.18.0.1:8280/images/"+tile.itemImage} width="240px" height="220px" alt={tile.title}/>
                                </Link>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>price: {tile.price}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>


                <div className="Avatar">
                    <Avatar src={"http://172.18.0.1:8280/images/"+avatar} style={{width:'150px',height:'150px'}} />
                </div>
                <div className="SellerName">
                    <h5 style={{color:"whitesmoke","font-size":"30px"}}>{username} </h5>
                    <h5 style={{color:"aqua","font-size":"10px"}}>Seller ID: {userid} </h5>
                </div>

                <div className="itemCount">
                    <br/>
                    <h5 style={{color:'whitesmoke'}}>Total Items</h5>
                    <h3 style={{color:"yellow", "font-size":"30px"}}>{count}</h3>
                </div>
                <div className="sellCount">
                    <br/>
                    <h5 style={{color:'whitesmoke'}}>Quantity</h5>
                    <h3 style={{color:"limegreen","font-size":"30px"}}>{qty}</h3>
                </div>

                <div className="addItem">
                    <Button variant="contained" color="secondary" type="submit" href="/add-item" endIcon={<StorefrontIcon>StorefrontIcon</StorefrontIcon>}>
                        Add Item
                    </Button>
                </div>

            </div>
        </div>
    );
}


